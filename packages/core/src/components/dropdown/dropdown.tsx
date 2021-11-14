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
import { findAndReplaceInnerHtml, getNodeIndex, get } from "../../utils/utils";
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

@Component({
  tag: "any-dropdown",
  styleUrl: "dropdown.scss",
  shadow: true,
})
export class AnyDropdown {
  private dropdownWrapper: HTMLElement;
  private open: boolean = false;
  private openDown: boolean = true;
  private selectedOptionLabel: string = null;
  private hasItemSlot: boolean;
  private hasSelectedItemSlot: boolean;
  private selectedItem: any = null;

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
   * Name of the value field of an option
   */
  @Prop() optionValue: string = "value";

  /**
   * Default text to display when no option is selected
   */
  @Prop() placeholder?: string = null;

  /**
   * Icon class of the dropdown icon
   */
  @Prop() dropdownIcon?: string = "fa-solid:chevron-down";

  /**
   * Icon class of the dropdown clear icon
   */
  @Prop() clearIcon?: string = "fa-solid:times";

  /**
   * Base zIndex value to use in layering
   */
  @Prop() baseZIndex?: string = "0";

  /**
   * Keyframe name the show animation
   */
  @Prop() showAnimation?: string = "growDown";

  /**
   * Transition options of the hide animation
   */
  @Prop() hideAnimation?: string = "growUp";

  /**
   * Index of the element in tabbing order
   */
  @Prop() anyTabIndex?: number = 0;

  /**
   * Inline style of the element
   */
  @Prop() anyStyle?: any = null;

  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value
   */
  @Prop() panelScrollHeight?: string = "200px";

  /**
   * When enabled, a clear icon is displayed to clear the value
   */
  @Prop() showClear?: boolean = false;

  /**
   * Whether to automatically manage layering
   */
  @Prop() autoZIndex?: boolean = true;

  /**
   * Value of the dropdown list
   */
  @Prop({ mutable: true }) value?: any = null;

  /**
   * When present, it specifies that the element should be disabled
   */
  @Prop() disabled: boolean = false;

  /**
   * When present, it specifies that the element value cannot be changed
   */
  @Prop() readonly: boolean = false;

  /**
   * When present, list virtual scroller is enabled
   */
  @Prop() virtualScroll: boolean = false;

  /**
   * Callback to invoke when value of dropdown changes
   */
  @Event() valueChange?: EventEmitter;

  /**
   * Callback to invoke when dropdown overlay gets visible
   */
  @Event() aOnShow?: EventEmitter;

  /**
   * Callback to invoke when dropdown overlay before gets visible
   */
  @Event() aOnShowStart?: EventEmitter;

  /**
   * Callback to invoke when dropdown overlay gets hidden
   */
  @Event() aOnHide?: EventEmitter;

  /**
   * Callback to invoke when dropdown overlay before gets hidden
   */
  @Event() aOnHideStart?: EventEmitter;

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
  valueChanged(newValue: any, oldValue: any) {
    console.debug("The new value of DropDown is: ", newValue, oldValue);
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
    const dropdownClearElement = this.element.shadowRoot.querySelector(
      ".any-dropdown-clear-icon"
    ) as HTMLElement;

    this.open = !this.open;
    if (e.composedPath().includes(dropdownClearElement)) {
      this.value = null;
      this.selectedOptionLabel = null;
      if (this.isOpened) {
        this.animatePanelAppearance("close");
      }
      this.dropdownWrapper.blur();
      dropdownClearElement.style.display = "none";
      this.aOnBlur.emit(e);
      this.valueChange.emit({
        originalEvent: e,
        value: this.value,
      });
      return;
    } else {
      if (this.readonly) return;

      this.dropdownWrapper.classList.add("any-state-focus");
      this.aOnFocus.emit(e);
    }

    if (this.open) {
      this.animatePanelAppearance("open");
    } else {
      this.animatePanelAppearance("close");
    }
  }

  private handleClickOutside(e) {
    if (e.srcElement !== this.element && this.dropdownWrapper)
      this.dropdownWrapper.classList.remove("any-state-focus");
    this.open = false;
    this.animatePanelAppearance("close");
  }

  /**
   * Panel appearance animation definition
   *
   * @private
   * @param {string} action
   * @memberof AnyDropdown
   */
  private animatePanelAppearance(action: string) {
    const dropdownPanel = this.element.shadowRoot.querySelector(
      ".any-dropdown-panel"
    ) as HTMLElement;
    if (action === "open") {
      this.isOpened = true;
      if (!dropdownPanel) {
        window.requestAnimationFrame(() => this.animatePanelAppearance("open"));
      } else {
        document.removeEventListener("animationend", () => {});
        dropdownPanel.classList.remove(this.hideAnimation + "-animation");
        dropdownPanel.classList.add(this.showAnimation + "-animation");
        // dropdownPanel.style.zIndex = this.baseZIndex ;
        if (this.openDown) {
          dropdownPanel.classList.add("direction-down");
          dropdownPanel.style.top = this.dropdownWrapper.offsetHeight + "px";
        } else {
          dropdownPanel.classList.add("direction-up");
          dropdownPanel.style.top = "-" + this.panelScrollHeight;
        }
        dropdownPanel.style.left = "0px";
        dropdownPanel.style.zIndex = this.autoZIndex
          ? (1090 + getNodeIndex(this.element)).toString()
          : this.baseZIndex;
      }
    } else {
      if (dropdownPanel) {
        dropdownPanel.classList.remove(this.showAnimation + "-animation");
        dropdownPanel.classList.add(this.hideAnimation + "-animation");
        dropdownPanel.addEventListener(
          "animationend",
          () => {
            this.isOpened = false;
          },
          false
        );
      }
    }
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

  onAnimationEndCallback(e: AnimationEvent) {
    // console.log('event anim', e);
    if (e.animationName === this.showAnimation) {
      this.aOnShow.emit(e);
    }
    if (e.animationName === this.hideAnimation) {
      this.aOnHide.emit(e);
    }
  }

  onAnimationStartCallback(e: AnimationEvent) {
    if (e.animationName === this.showAnimation) {
      this.aOnShowStart.emit(e);
    }
    if (e.animationName === this.hideAnimation) {
      this.aOnHideStart.emit(e);
    }
  }

  onFocusCallback(e: FocusEvent) {
    if (this.readonly) return;
    // console.log("event focus", e.composedPath());
    this.dropdownWrapper.classList.add("any-state-focus");
    this.aOnFocus.emit(e);
  }

  onFocusOutCallback(e: FocusEvent) {
    if (this.readonly) return;
    // console.log("event focus out", e);
    this.dropdownWrapper.classList.remove("any-state-focus");
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
        <div>
          <div
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
            {this.showClear && (
              <i
                class="any-dropdown-clear-icon iconify"
                style={{ display: this.selectedItem ? "block" : "none" }}
              ></i>
            )}
            <div
              class="any-dropdown-trigger any-state-default any-corner-right"
              aria-expanded={this.isOpened}
            >
              <span class="any-dropdown-trigger-icon iconify"></span>
            </div>
            {this.isOpened && (
              <div
                class="any-widget-content any-widget any-corner-all any-dropdown-panel any-shadow"
                onAnimationEnd={(e) => this.onAnimationEndCallback(e)}
                onAnimationStart={(e) => this.onAnimationStartCallback(e)}
              >
                <div
                  class="any-dropdown-items-wrapper"
                  style={
                    !this.virtualScroll && {
                      "max-height": this.panelScrollHeight,
                    }
                  }
                >
                  <any-listbox
                    options={this.options}
                    value={this.value}
                    optionLabel={this.optionLabel}
                    optionValue={this.optionValue}
                    scrollerHeight={
                      this.virtualScroll ? this.panelScrollHeight : null
                    }
                    virtualScroll={this.virtualScroll}
                    onValueChange={(ev: any) => this.onValueChangeCallback(ev)}
                  >
                    {this.hasItemSlot && (
                      <div
                        slot="item"
                        innerHTML={this.getContent("item")}
                      ></div>
                    )}
                  </any-listbox>
                </div>
              </div>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
let dropdownIds = 0;
