// import Iconify from '@iconify/iconify';
import {
  Component,
  Prop,
  State,
  Element,
  h,
  Event,
  EventEmitter,
  Watch,
  Listen,
  Host,
} from "@stencil/core";
import _ from "lodash";
import Iconify from "@iconify/iconify";
import { loadIcons } from "../../utils/load-icons";
import { findAndReplaceInnerHtml, get } from "../../utils/utils";
import { renderHiddenInput } from "../../utils/helpers";

const parseValue = (value: any) => {
  if (value == null) {
    return undefined;
  }
  if (Array.isArray(value)) {
    return value.join(",");
  }
  return value.toString();
};

/**
 * Dropdown, also known as Select, is used to choose an item from a collection of options.
 *
 * @part any-dropdown - This refers to the actual component.
 * @slot item - Represents individual items in the dropdown list.
 *   Use this slot to customize the appearance of each item in the list.
 * @slot selectedItem - Represents the currently selected item in the dropdown.
 *   Use this slot to customize the appearance of the selected item in the dropdown.
 */
@Component({
  tag: "any-dropdown",
  styleUrl: "dropdown.scss",
  shadow: true,
})
export class AnyDropdown {
  private dropdownWrapper: HTMLElement;
  private selectedOptionLabel: string = null;
  private hasItemSlot: boolean;
  private hasSelectedItemSlot: boolean;
  private selectedItem: any = null;
  private textInput?: HTMLInputElement;

  @Element() private element: HTMLElement;

  @State() isOpened: boolean = false;

  /**
   * An array of objects to display as the available options.
   */
  @Prop() options: any[] = null;

  /**
   * Name of the label field of an option
   */
  @Prop() optionLabel: string = "label";

  /**
   * Identifier of the focus input to match a label defined for the component.
   */
  @Prop() inputId: string = `any-dd-${dropdownIds++}`;

  /**
   * Name of the dropdown input.
   */
  @Prop() name: string = this.inputId;

  /**
   * When specified, displays a filter input at header.
   */
  @Prop() filter: boolean = false;

  /**
   * Name of the value field of an option.
   */
  @Prop() optionValue: string = "value";

  /**
   * Default text to display when no option is selected.
   */
  @Prop() placeholder?: string = null;

  /**
   * Icon class of the dropdown icon.
   */
  @Prop() dropdownIcon?: string = "fa-solid:chevron-down";

  /**
   * Icon class of the dropdown clear icon.
   */
  @Prop() clearIcon?: string = "fa-solid:times";

  /**
   * Base zIndex value to use in layering.
   */
  @Prop() baseZIndex?: string = "0";

  /**
   * Keyframe name the show animation.
   */
  @Prop() showAnimation?: string = "growDown";

  /**
   * Transition options of the hide animation.
   */
  @Prop() hideAnimation?: string = "growUp";

  /**
   * Index of the element in tabbing order.
   */
  @Prop() anyTabIndex?: number = 0;

  /**
   * Inline style of the element.
   */
  @Prop() anyStyle?: any = null;

  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   */
  @Prop() panelScrollHeight?: string = "200px";

  /**
   * When enabled, a clear icon is displayed to clear the value.
   */
  @Prop() showClear?: boolean = false;

  /**
   * Whether to automatically manage layering.
   */
  @Prop() autoZIndex?: boolean = true;

  /**
   * Value of the dropdown list.
   */
  @Prop({ mutable: true }) value?: any = null;

  /**
   * When present, it specifies that the element should be disabled.
   */
  @Prop() disabled: boolean = false;

  /**
   * When present, it specifies that the element value cannot be changed.
   */
  @Prop() readonly: boolean = false;

  /**
   * When present, list virtual scroller is enabled.
   */
  @Prop() virtualScroll: boolean = false;

  /**
   * Callback to invoke when value of dropdown changes.
   */
  @Event() valueChange?: EventEmitter;

  /**
   * Callback to invoke when dropdown overlay gets visible.
   */
  @Event() aOnPanelShow?: EventEmitter;

  /**
   * Callback to invoke when dropdown overlay before gets visible.
   */
  @Event() aOnPanelShowStart?: EventEmitter;

  /**
   * Callback to invoke when dropdown overlay gets hidden.
   */
  @Event() aOnPanelHide?: EventEmitter;

  /**
   * Callback to invoke when dropdown overlay before gets hidden.
   */
  @Event() aOnPanelHideStart?: EventEmitter;

  /**
   * Callback to invoke when dropdown gets focus.
   */
  @Event() aOnFocus?: EventEmitter;

  /**
   * Callback to invoke when dropdown loses focus.
   */
  @Event() aOnBlur?: EventEmitter;

  /**
   * Callback to invoke when component is clicked.
   */
  @Event() aOnClick?: EventEmitter;

  @Watch("value")
  valueChanged() {
    // console.debug("The new value of DropDown is: ", newValue, oldValue);
    if (this.options) {
      this.selectedItem = this.options.find((x) =>
        _.isEqual(x.value, this.value)
      );
      if (this.selectedItem && this.showClear) {
        const dropdownClearElement = this.element.shadowRoot.querySelector(
          ".any-dropdown-clear-icon"
        );
        if (dropdownClearElement)
          dropdownClearElement.innerHTML = Iconify.renderHTML(
            this.clearIcon,
            {}
          );
      }
      const labelEl = this.element.shadowRoot.querySelector(
        ".any-dropdown-label"
      ) as HTMLElement;
      if (
        this.selectedItem &&
        get(this.optionLabel.split("."), this.selectedItem) &&
        !this.hasSelectedItemSlot
      ) {
        labelEl.innerHTML = get(this.optionLabel.split("."), this.selectedItem);
        labelEl.classList.remove("any-placeholder");
      }

      if (!this.value && !this.selectedItem) {
        labelEl.classList.add("any-placeholder");
        this.selectedOptionLabel = null;
        if (!this.hasSelectedItemSlot && this.placeholder) {
          labelEl.innerHTML = this.placeholder;
        }
      }
    }
  }

  @Listen("click", { target: "document" })
  handleClick(e) {
    // if (this.readonly) return;
    if (e.srcElement === this.element) {
      this.aOnClick.emit(e);
    }
    this.handleClickOutside(e);
  }

  componentDidLoad() {
    this.dropdownWrapper = this.element.shadowRoot.querySelector(
      ".any-dropdown"
    ) as HTMLElement;
    // const dropdownPanelClone = this.element.shadowRoot.querySelector(
    //   ".any-dropdown-panel-clone"
    // ) as HTMLElement;
    if (this.value) {
      const labelEl = this.element.shadowRoot.querySelector(
        ".any-dropdown-label"
      ) as HTMLElement;
      if (this.selectedItem)
        if (this.showClear) {
          const dropdownClearElement = this.element.shadowRoot.querySelector(
            ".any-dropdown-clear-icon"
          );
          dropdownClearElement.innerHTML = Iconify.renderHTML(
            this.clearIcon,
            {}
          );
        }
      labelEl.classList.remove("any-placeholder");
      if (
        this.selectedItem &&
        get(this.optionLabel.split("."), this.selectedItem) &&
        !this.hasSelectedItemSlot
      ) {
        labelEl.innerHTML = get(this.optionLabel.split("."), this.selectedItem);
        labelEl.classList.remove("any-placeholder");
        //  this.selectedOptionLabel = label;
      }
    }
    // this.panelHeight = dropdownPanelClone.offsetHeight;
    // dropdownPanelClone.remove();
  }

  componentWillLoad() {
    this.hasItemSlot = !!this.element.querySelector('[slot="item"]');
    this.hasSelectedItemSlot = !!this.element.querySelector(
      '[slot="selectedItem"]'
    );

    this.loadIcons();
    if (this.value) {
      this.selectedItem = this.options.find((x) =>
        _.isEqual(x.value, this.value)
      );
    }
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
      ".any-dropdown-clear-icon"
    );

    if (!e.composedPath().includes(multiselectClearElement)) {
      const overlayElement = this.element.shadowRoot
        .querySelector("any-listbox")
        .shadowRoot.querySelector(".any-listbox-header") as HTMLElement;
      if (!e.composedPath().includes(overlayElement)) {
        this.isOpened = !this.isOpened;
      }
      if (!this.isOpened) this.textInput.focus();
    } else {
      this.isOpened = false;
    }

    if (!this.isOpened) {
      const rippleElements = this.element.shadowRoot
        .querySelector("any-listbox")
        ?.shadowRoot.querySelectorAll("any-ripple-effect");

      rippleElements?.forEach((rippleElement) => {
        rippleElement.shadowRoot
          ?.querySelector(".any-ink")
          ?.classList.remove("any-ink-active");
      });
    }
  }

  handleClickOutside = (event: MouseEvent) => {
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

  onClearClick(_e: MouseEvent) {
    this.value = null;
    // this.focus = false;
  }

  private onValueChangeCallback(event) {
    if (!event.detail.value || _.isEmpty(event.detail.originalEvent)) return;
    const label = event.detail.originalEvent.currentTarget.ariaLabel;
    const labelEl = this.element.shadowRoot.querySelector(
      ".any-dropdown-label"
    ) as HTMLElement;
    this.selectedOptionLabel = label;
    this.value = event.detail.value;
    if (this.selectedOptionLabel) {
      labelEl.classList.remove("any-placeholder");
    } else {
      labelEl.classList.add("any-placeholder");
    }
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
    // console.log("event focus", e.composedPath());
    this.dropdownWrapper.classList.add("any-state-focus");
    this.dropdownWrapper.setAttribute("part", "any-dropdown-focused");

    this.aOnFocus.emit(e);
  }

  onFocusOutCallback(e: FocusEvent) {
    if (this.readonly) return;
    // console.log("event focus out", e);
    this.dropdownWrapper.classList.remove("any-state-focus");
    this.dropdownWrapper.setAttribute("part", "any-dropdown");

    this.aOnBlur.emit(e);
  }

  render() {
    const { disabled, element, name, value } = this;

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
          part="any-dropdown"
          style={this.anyStyle}
          class={
            "any-component any-dropdown any-corner-all" +
            (this.disabled ? " any-disabled" : "")
          }
          tabindex={this.anyTabIndex}
          onFocus={(e) => {
            this.onFocusCallback(e);
          }}
          onBlur={(e) => {
            this.onFocusOutCallback(e);
          }}
          onClick={(e) => this.handleElementClick(e)}
        >
          {this.hasSelectedItemSlot && this.selectedItem ? (
            <span class="any-dropdown-label any-inputtext any-corner-all any-placeholder">
              <div
                slot="selectedItem"
                innerHTML={this.getContent("selectedItem", this.selectedItem)}
              ></div>
            </span>
          ) : (
            <span
              innerHTML={
                this.selectedOptionLabel
                  ? this.selectedOptionLabel
                  : this.placeholder
              }
              class="any-dropdown-label any-inputtext any-corner-all any-placeholder"
            ></span>
          )}
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
          {this.showClear && (
            <i
              class="any-dropdown-clear-icon iconify"
              style={{ display: this.selectedItem ? "block" : "none" }}
              onClick={(e) => this.onClearClick(e)}
            ></i>
          )}
          <div
            class="any-dropdown-trigger any-state-default any-corner-right"
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
              disabled={this.disabled}
              readonly={this.readonly}
              options={this.options}
              optionLabel={this.optionLabel}
              optionValue={this.optionValue}
              value={value}
              filter={this.filter}
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
let dropdownIds = 0;
