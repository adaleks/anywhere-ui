import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
  State,
  Watch,
  h,
} from "@stencil/core";
import { loadIcons } from "../../utils/load-icons";
import Iconify from "@iconify/iconify";
import { renderHiddenInput } from "../../utils/helpers";
import _ from "lodash";
import { ObjectUtils } from "../../utils/objectutils";
import { config } from "../../global/config";
import { TranslationKeys } from "../../utils/translation-keys";
import { findAndReplaceInnerHtml } from "../../utils/utils";

const parseValue = (value: any) => {
  if (value == null) {
    return undefined;
  }
  if (Array.isArray(value)) {
    return value.join(",");
  }
  return value.toString();
};

@Component({
  tag: "any-multiselect",
  styleUrl: "multiselect.scss",
  shadow: true,
})
export class AnyMultiselect {
  // private multiselectWrapper: HTMLElement;
  public lbValue: any = [];
  public valuesAsString: string;
  public _translations = config.get("translations");
  private textInput?: HTMLInputElement;
  private selectedItem: any = null;
  private hasItemSlot: boolean;
  // private hasSelectedItemSlot: boolean;

  @Element() private element: HTMLElement;

  @State() isOpened: boolean = false;
  @State() focus: boolean;

  /**
   * Inline style of the element
   */
  @Prop() anyStyle?: any = null;

  /**
   * Index of the element in tabbing order
   */
  @Prop() anyTabIndex?: number = 0;

  /**
   * Icon class of the dropdown clear icon
   */
  @Prop() clearIcon?: string = "fa-solid:times";

  /**
   * When specified, allows selecting items with checkboxes
   */
  @Prop() checkbox: boolean = true;

  /**
   * When present, it specifies that the element should be disabled
   */
  @Prop() disabled: boolean = false;

  /**
   * Icon class of the dropdown icon
   */
  @Prop() dropdownIcon?: string = "fa-solid:chevron-down";

  /**
   * When specified, displays a filter input at header
   */
  @Prop() filter: boolean = true;

  /**
   * Whether to display options as grouped when nested options are provided
   */
  @Prop() group: boolean = false;

  /**
   * Identifier of the focus input to match a label defined for the component.
   */
  @Prop() inputId: string = `any-ms-${multiselectIds++}`;

  /**
   * Name of the dropdown input.
   */
  @Prop() name: string = this.inputId;

  /**
   * A property to uniquely identify a value in options
   */
  @Prop() dataKey: string = null;

  /**
   * Default text to display when no option is selected
   */
  @Prop() placeholder?: string = null;

  /**
   * When specified, allows selecting items with checkboxes
   */
  @Prop() defaultLabel: string = this._translations[TranslationKeys.CHOOSE];

  /**
   * Name of the options field of an option group.
   */
  @Prop() optionGroupChildren: string = "items";

  /**
   * Name of the label field of an option
   */
  @Prop() optionLabel: string = "label";

  /**
   * An array of objects to display as the available options.
   */
  @Prop() options: any[] = null;

  /**
   * Name of the value field of an option
   */
  @Prop() optionValue: string = "value";

  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value
   */
  @Prop() panelScrollHeight?: string = "200px";

  /**
   * When present, it specifies that the element value cannot be changed
   */
  @Prop() readonly: boolean = false;

  /**
   * When present, list virtual scroller is enabled
   */
  @Prop() virtualScroll: boolean = false;

  /**
   * Keyframe name for the show animation.
   */
  @Prop() showAnimation?: string = "growDown";

  /**
   * Transition options for the hide animation.
   */
  @Prop() hideAnimation?: string = "growUp";

  /**
   * Value of the dropdown list
   */
  @Prop({ mutable: true }) value?: any = null;

  /**
   * Whether header checkbox is shown in multiple mode
   */
  @Prop() showToggleAll: boolean = true;

  /**
   * Callback to invoke when value of dropdown changes
   */
  @Event() valueChange?: EventEmitter;

  /**
   * When enabled, a clear icon is displayed to clear the value
   */
  @Prop() showClear?: boolean = false;

  /**
   * Callback to invoke when dropdown overlay gets visible
   */
  @Event() aOnPanelShow?: EventEmitter;

  /**
   * Callback to invoke when dropdown overlay before gets visible
   */
  @Event() aOnPanelShowStart?: EventEmitter;

  /**
   * Callback to invoke when dropdown overlay gets hidden
   */
  @Event() aOnPanelHide?: EventEmitter;

  /**
   * Callback to invoke when dropdown overlay before gets hidden
   */
  @Event() aOnPanelHideStart?: EventEmitter;

  /**
   * Callback to invoke when dropdown gets focus
   */
  @Event() aOnFocus?: EventEmitter;

  /**
   * Callback to invoke when dropdown loses focus
   */
  @Event() aOnBlur?: EventEmitter;

  /**
   * Callback to invoke when component is clicked
   */
  @Event() aOnClick?: EventEmitter;

  @Watch("value")
  valueChanged() {
    this.updateLabel();
    this.selectedItem = this.value?.length;
    if (this.selectedItem && this.showClear) {
      const clearElement = this.element.shadowRoot.querySelector(
        ".any-multiselect-clear-icon"
      );
      if (clearElement)
        clearElement.innerHTML = Iconify.renderHTML(this.clearIcon, {});
    }
  }

  componentDidLoad() {
    if (this.selectedItem)
      if (this.showClear) {
        const multiselectClearElement = this.element.shadowRoot.querySelector(
          ".any-multiselect-clear-icon"
        );
        multiselectClearElement.innerHTML = Iconify.renderHTML(
          this.clearIcon,
          {}
        );
      }
    // this.multiselectWrapper = this.element.shadowRoot.querySelector(
    //   ".any-multiselect"
    // ) as HTMLElement;
  }

  componentWillLoad() {
    this.hasItemSlot = !!this.element.querySelector('[slot="item"]');
    // this.hasSelectedItemSlot = !!this.element.querySelector(
    //   '[slot="selectedItem"]'
    // );
    this.loadIcons();
    this.updateLabel();
  }

  async loadIcons() {
    await loadIcons([this.dropdownIcon, this.clearIcon]).catch((err) => {
      console.error("Failed to load icons:", err.missing);
    });
    const dropdownTriggerElement = this.element.shadowRoot.querySelector(
      ".any-dropdown-trigger-icon"
    );

    dropdownTriggerElement.innerHTML = Iconify.renderHTML(
      this.dropdownIcon,
      {}
    );
  }

  private handleElementClick(e) {
    if (this.disabled || this.readonly) return;
    const multiselectClearElement = this.element.shadowRoot.querySelector(
      ".any-multiselect-clear-icon"
    );

    if (!e.composedPath().includes(multiselectClearElement)) {
      const overlayElement = this.element.shadowRoot.querySelector(
        "any-overlay"
      ) as HTMLElement;
      if (!e.composedPath().includes(overlayElement)) {
        this.isOpened = !this.isOpened;
      }
      if (!this.isOpened) this.textInput.focus();
    } else {
      this.isOpened = false;
    }
  }

  @Listen("click", { target: "document" })
  handleClick(e: MouseEvent) {
    if (this.readonly) return;
    if (e.target === this.element) {
      this.aOnClick.emit(e);
    }
    this.handleOutsideClick(e);
  }

  handleOutsideClick = (event: MouseEvent) => {
    const overlayElement = this.element.shadowRoot
      .querySelector("any-overlay")
      ?.shadowRoot.querySelector(".any-overlay");
    const clickedElement = event.target as HTMLElement;
    if (
      overlayElement &&
      !overlayElement.contains(clickedElement) &&
      !this.element.contains(clickedElement) &&
      !clickedElement.classList.contains(".any-element")
    ) {
      this.isOpened = false;
    }
    if (!this.element.contains(clickedElement) && this.textInput) {
      this.textInput.blur();
    }
  };

  private onValueChangeCallback(event: CustomEvent) {
    if (!event.detail.value || _.isEmpty(event.detail.originalEvent)) return;
    this.value = event.detail.value;
    this.updateLabel();
  }

  updateLabel() {
    if (
      this.value &&
      this.options &&
      this.value.length
      // && this.displaySelectedLabel
    ) {
      let label = "";
      for (let i = 0; i < this.value.length; i++) {
        let itemLabel = this.findLabelByValue(this.value[i]);
        if (itemLabel) {
          if (label.length > 0) {
            label = label + ", ";
          }
          label = label + itemLabel;
        }
      }

      // if (
      //   this.value.length <= this.maxSelectedLabels ||
      //   this.selectedItemsLabel === "ellipsis"
      // ) {
      this.valuesAsString = label;
      // } else {
      //   let pattern = /{(.*?)}/;
      //   if (pattern.test(this.selectedItemsLabel)) {
      //     this.valuesAsString = this.selectedItemsLabel.replace(
      //       this.selectedItemsLabel.match(pattern)[0],
      //       this.value.length + ""
      //     );
      //   } else {
      //     this.valuesAsString = this.selectedItemsLabel;
      //   }
      // }
    } else {
      this.valuesAsString = this.placeholder || this.defaultLabel;
      // this.valuesAsString = this.defaultLabel;
    }
  }

  findLabelByValue(val: any): string {
    if (this.group) {
      let label = null;

      for (let i = 0; i < this.options.length; i++) {
        let subOptions = this.getOptionGroupChildren(this.options[i]);
        if (subOptions) {
          label = this.searchLabelByValue(val, subOptions);

          if (label) {
            break;
          }
        }
      }

      return label;
    } else {
      return this.searchLabelByValue(val, this.options);
    }
  }

  getOptionGroupChildren(optionGroup: any) {
    return this.optionGroupChildren
      ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren)
      : optionGroup.items;
  }

  searchLabelByValue(val: any, options: any[]): string {
    let label = null;

    for (let i = 0; i < options.length; i++) {
      let option = options[i];
      let optionValue = this.getOptionValue(option);

      if (
        (val == null && optionValue == null) ||
        ObjectUtils.equals(val, optionValue, this.dataKey)
      ) {
        label = this.getOptionLabel(option);
        break;
      }
    }

    return label;
  }

  getOptionValue(option: any) {
    return this.optionValue
      ? ObjectUtils.resolveFieldData(option, this.optionValue)
      : !this.optionLabel && option && option.value !== undefined
      ? option.value
      : option;
  }

  getOptionLabel(option: any) {
    return this.optionLabel
      ? ObjectUtils.resolveFieldData(option, this.optionLabel)
      : option && option.label != undefined
      ? option.label
      : option;
  }

  onOverlayShowStart(e: CustomEvent) {
    if (this.filter) {
      const listbox = this.element.shadowRoot.querySelector(
        "any-listbox"
      ) as HTMLAnyListboxElement;
      listbox.setFilterInputFocus();
    }

    this.aOnPanelShowStart.emit(e);
  }

  onOverlayHideStart(e: CustomEvent) {
    this.aOnPanelHideStart.emit(e);
  }

  onOverlayHide(e: CustomEvent) {
    this.aOnPanelHide.emit(e);
  }

  onOverlayShow(e: CustomEvent) {
    this.aOnPanelShow.emit(e);
  }

  onFocusCallback(e: FocusEvent) {
    if (this.readonly) return;
    this.focus = true;

    this.aOnFocus.emit(e);
  }

  onFocusOutCallback(e: FocusEvent) {
    if (this.readonly) return;
    this.focus = false;

    this.aOnBlur.emit(e);
  }

  onClearClick(_e: MouseEvent) {
    this.value = [];
    this.focus = false;
  }

  private getContent(slot: string, itemData?: any) {
    const node = this.element
      .querySelector('[slot="' + slot + '"]')
      .cloneNode(true) as HTMLElement;

    if (!itemData) {
      return node.innerHTML;
    }
    const newNode = findAndReplaceInnerHtml(node, itemData);

    return newNode.innerHTML;
  }

  render() {
    const {
      disabled,
      anyStyle,
      focus,
      readonly,
      element,
      name,
      value,
      filter,
      checkbox,
      valuesAsString,
      defaultLabel,
      placeholder,
      dataKey,
      options,
    } = this;

    renderHiddenInput(
      true,
      element,
      name,
      value ? parseValue(value) : "",
      disabled
    );

    return (
      <Host>
        <div
          class={
            "any-component any-multiselect any-corner-all" +
            (disabled ? " any-disabled" : "") +
            (focus ? " any-focus" : "")
          }
          style={anyStyle}
          onClick={(e) => this.handleElementClick(e)}
        >
          <div class="any-hidden-accessible">
            <input
              type="text"
              ref={(el) => (this.textInput = el as HTMLInputElement)}
              tabindex={this.anyTabIndex}
              id={this.inputId}
              name={name}
              onFocus={(e) => {
                this.onFocusCallback(e);
              }}
              onBlur={(e) => {
                this.onFocusOutCallback(e);
              }}
            />
          </div>
          <div class={"any-multiselect-label-container"}>
            <div
              class={
                "any-multiselect-label" +
                (valuesAsString === defaultLabel ||
                valuesAsString === placeholder
                  ? " any-placeholder"
                  : "")
              }
            >
              {this.valuesAsString}
            </div>
          </div>
          {this.showClear && (
            <i
              class="any-multiselect-clear-icon iconify"
              style={{ display: this.selectedItem ? "block" : "none" }}
              onClick={(e) => this.onClearClick(e)}
            ></i>
          )}
          <div
            class="any-multiselect-trigger any-state-default any-corner-right"
            aria-expanded={this.isOpened}
          >
            <span class="any-dropdown-trigger-icon iconify"></span>
          </div>
          <any-overlay
            style={
              !this.virtualScroll && {
                "max-height": this.panelScrollHeight,
              }
            }
            target={this.element}
            visible={this.isOpened}
            hideAnimation={this.hideAnimation}
            showAnimation={this.showAnimation}
            onAOnShowStart={(e) => this.onOverlayShowStart(e)}
            onAOnHideStart={(e) => this.onOverlayHideStart(e)}
            onAOnHide={(e) => this.onOverlayHide(e)}
            onAOnShow={(e) => this.onOverlayShow(e)}
          >
            <any-listbox
              exportparts="any-ink: any-ink"
              name={name}
              disabled={disabled}
              readonly={readonly}
              options={options}
              optionLabel={this.optionLabel}
              optionValue={this.optionValue}
              value={value}
              multiple={true}
              checkbox={checkbox}
              filter={filter}
              dataKey={dataKey}
              showToggleAll={this.showToggleAll}
              scrollerHeight={
                this.virtualScroll ? this.panelScrollHeight : undefined
              }
              virtualScroll={this.virtualScroll}
              onValueChange={(ev: any) => this.onValueChangeCallback(ev)}
            >
              {this.hasItemSlot && (
                <div slot="item" innerHTML={this.getContent("item")}></div>
              )}
            </any-listbox>
          </any-overlay>
        </div>
      </Host>
    );
  }
}

let multiselectIds = 0;
