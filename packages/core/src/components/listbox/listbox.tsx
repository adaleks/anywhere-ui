import {
  Component,
  Prop,
  h,
  Element,
  Event,
  EventEmitter,
  Watch,
  Host,
} from "@stencil/core";
import _ from "lodash";
import { SelectChangeEventDetail } from "./listbox-interface";
import { watchForOptions } from "../../utils/watch-options";
import { findAndReplaceInnerHtml, get } from "../../utils/utils";
// import Clusterize from "clusterize.js";
import { renderHiddenInput } from "../../utils/helpers";
import { ObjectUtils } from "../../utils/objectutils";
import Iconify from "@iconify/iconify";
import { loadIcons } from "../../utils/load-icons";

const parseValue = (value: any) => {
  if (value == null) {
    return undefined;
  }
  if (Array.isArray(value)) {
    return value.join(",");
  }
  return value.toString();
};

const hasSomeParentTheClass = (element, classname) => {
  if (element.className && element.className.split(" ").indexOf(classname) >= 0)
    return true;
  return (
    element.parentNode && hasSomeParentTheClass(element.parentNode, classname)
  );
};

@Component({
  tag: "any-listbox",
  styleUrl: "listbox.scss",
  shadow: true,
})
export class AnyListbox {
  private didInit: boolean = false;
  private itemPointerEvent: any = {};
  private mutationO?: MutationObserver;
  private hasItemSlot: boolean = false;
  private hasTabIndex: boolean = true;
  public optionTouched: boolean = false;
  public _filteredOptions: any[];
  // private clusterize: any = null;

  @Element() private element: HTMLElement;

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
  @Prop() inputId: string = `any-lb-${listboxIds++}`;

  /**
   * Name of the dropdown input.
   */
  @Prop() name: string = this.inputId;

  /**
   * Name of the value field of an option
   */
  @Prop() optionValue: string = "value";

  /**
   * Value of the listbox
   */
  @Prop({ mutable: true }) value?: any = null;

  /**
   * Inline style of the element
   */
  @Prop() anyStyle: any = null;

  /**
   * Inline style of the list element
   */
  @Prop() listStyle: any = null;

  /**
   * When present, it specifies that the element should be disabled
   */
  @Prop() disabled: boolean = false;

  /**
   * When present, it specifies that the element value cannot be changed
   */
  @Prop() readonly: boolean = false;

  /**
   * Max height of the content area in inline mode
   */
  @Prop() scrollerHeight: string = "200px";

  /**
   * When present, list virtual scroller is enabled
   */
  @Prop() virtualScroll: boolean = false;

  /**
   * When specified, allows selecting multiple values.
   */
  @Prop() multiple: boolean = false;

  /**
   * When specified, allows selecting items with checkboxes
   */
  @Prop() checkbox: boolean = false;

  /**
   * A property to uniquely identify a value in options
   */
  @Prop() dataKey: string = null;

  /**
   * Defines how multiple items can be selected, when true metaKey
   * needs to be pressed to select or unselect an item and when set to false selection
   * of each item can be toggled individually. On touch enabled devices,
   * metaKeySelection is turned off automatically.
   */
  @Prop() metaKeySelection: boolean = true;

  /**
   * Whether header checkbox is shown in multiple mode
   */
  @Prop() showToggleAll: boolean = true;

  /**
   * When specified, displays a filter input at header
   */
  @Prop() filter: boolean = false;

  /**
   * Whether to display options as grouped when nested options are provided
   */
  @Prop() group: boolean = false;

  /**
   * Name of the disabled field of an option
   */
  @Prop() optionDisabled: string;

  /**
   * Name of the options field of an option group
   */
  @Prop() optionGroupChildren: string = "items";

  /**
   * Icon class of the filter search input icon
   */
  @Prop() searchIcon?: string = "fa-solid:search";

  /**
   * Callback to invoke when value of listbox changes
   */
  @Event() valueChange: EventEmitter<SelectChangeEventDetail>;

  @Watch("value")
  valueChanged(newValue: any) {
    if (this.didInit && this.mutationO) {
      this.valueChange.emit({
        originalEvent: this.itemPointerEvent,
        value: newValue,
      });
    }
  }

  async connectedCallback() {
    this.mutationO = watchForOptions(this.element, "li", async () => {});
  }

  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = undefined;
    }
  }

  componentWillLoad() {
    this.hasItemSlot = !!this.element.querySelector('[slot="item"]');
    const parent = this.element.parentNode as HTMLElement;
    if (parent.classList.contains("any-dropdown-items-wrapper")) {
      this.hasTabIndex = false;
    }

    this.loadIcons();
  }

  async loadIcons() {
    await loadIcons([this.searchIcon]).catch((err) => {
      console.error("Failed to load icons:", err.missing);
    });
    const listboxSearchInputIcon = this.element.shadowRoot.querySelector(
      ".any-listbox-search-icon"
    );
    if (listboxSearchInputIcon)
      listboxSearchInputIcon.innerHTML = Iconify.renderHTML(
        this.searchIcon,
        {}
      );
  }

  componentDidLoad() {
    this.didInit = true;
  }

  componentWillRender() {}

  onClusterChanged() {
    let items = this.element.shadowRoot.querySelectorAll(".any-listbox-item");
    for (let i = 0; i < items.length; i++) {
      let item = items[i] as HTMLElement;
      let index = parseInt(item.getAttribute("data-index"));
      item.setAttribute(
        "aria-label",
        get(this.optionLabel.split("."), this.options[index])
      );
    }
    if (this.value) {
      if (this.multiple) this.setSelectedVirtualOptionMultiple(this.value);
      else this.setSelectedVirtualOptionSingle(this.value);
    }
  }

  private itemClick(event: Event, selected: any) {
    if (this.readonly) return;

    if (this.multiple) {
      if (this.checkbox) this.onOptionClickCheckbox(selected);
      else this.onOptionClickMultiple(event, selected);
    } else {
      this.onOptionClickSingle(event, selected);
    }
  }

  private onOptionClickSingle(event: Event, selected: any) {
    let value = null;

    if (selected[this.optionValue]) {
      value = selected[this.optionValue];
    } else {
      value = selected;
    }

    if (this.virtualScroll) {
      this.setSelectedVirtualOptionSingle(value);
    }

    if (!_.isEqual(value, this.value)) {
      this.itemPointerEvent = event;
      this.value = value;
    }
  }

  private onOptionClickCheckbox(option: any) {
    if (this.disabled || this.readonly) {
      return;
    }

    let selected = this.isSelected(option);

    if (selected) {
      this.removeOption(option);
    } else {
      this.value = this.value ? this.value : [];
      this.value = [...this.value, this.getOptionValue(option)];
    }

    if (this.virtualScroll) {
      // Call setSelectedVirtualOption with the new value array
      this.setSelectedVirtualOptionMultiple(this.value);
    }
  }

  private onOptionClickMultiple(event: any, option: any) {
    let selected = this.isSelected(option);
    // let valueChanged = false;
    let metaSelection = this.optionTouched ? false : this.metaKeySelection;
    if (metaSelection) {
      let metaKey = event.metaKey || event.ctrlKey;

      if (selected) {
        if (metaKey) {
          this.removeOption(option);
        } else {
          this.value = [this.getOptionValue(option)];
        }
      } else {
        this.value = metaKey ? this.value || [] : [];
        this.value = [...this.value, this.getOptionValue(option)];
        // valueChanged = true;
      }
    } else {
      if (selected) {
        this.removeOption(option);
      } else {
        this.value = [...(this.value || []), this.getOptionValue(option)];
      }
    }

    if (this.virtualScroll)
      // Call setSelectedVirtualOption with the new value array
      this.setSelectedVirtualOptionMultiple(this.value);
  }

  private getContent(slot: string, itemData?: any) {
    const node = this.element
      .querySelector('[slot="' + slot + '"]')
      .cloneNode(true) as HTMLElement;

    if (this.checkbox && this.virtualScroll) {
      const checkbox = document.createElement("any-checkbox");
      checkbox.setAttribute("binnary", "true");
      checkbox.style.position = "relative";
      checkbox.style.zIndex = "101";
      node.prepend(checkbox);
    }

    if (!itemData) {
      return node.innerHTML;
    }

    const newNode = findAndReplaceInnerHtml(node, itemData);

    return newNode.innerHTML;
  }

  private setSelectedVirtualOptionSingle(value: any) {
    const selected = this.options.find((x: any) => _.isEqual(x.value, value));
    let selectedElement = this.element.shadowRoot.querySelector(
      ".any-listbox-item.any-highlight"
    ) as HTMLElement;
    if (selectedElement) {
      selectedElement.classList.remove("any-highlight");
      selectedElement.setAttribute("aria-selected", "false");
    }

    if (selected && get(this.optionLabel.split("."), selected)) {
      const selectedItem = this.element.shadowRoot.querySelector(
        "[aria-label='" + get(this.optionLabel.split("."), selected) + "']"
      ) as HTMLElement;
      if (selectedItem) {
        selectedItem.classList.add("any-highlight");
        selectedItem.setAttribute("aria-selected", "true");
      }
    }
  }

  private setSelectedVirtualOptionMultiple(values: any[]) {
    const optionElementsMap = {};
    const optionLabels = this.options.map((option) =>
      get(this.optionLabel.split("."), option)
    );

    // create a map of option elements based on their aria-label
    const optionElements =
      this.element.shadowRoot.querySelectorAll(".any-listbox-item");
    for (let i = 0; i < optionElements.length; i++) {
      const optionLabel = optionElements[i].getAttribute("aria-label");
      if (optionLabels.includes(optionLabel)) {
        optionElementsMap[optionLabel] = optionElements[i];
      }
    }

    // update selected options based on the map
    for (let i = 0; i < this.options.length; i++) {
      const option = this.options[i];
      const optionLabel = get(this.optionLabel.split("."), option);
      const selectedElement = optionElementsMap[optionLabel];
      if (selectedElement) {
        if (values.includes(option.value)) {
          selectedElement.classList.add("any-highlight");
          selectedElement.setAttribute("aria-selected", "true");
          if (this.checkbox && this.hasItemSlot) {
            selectedElement
              .querySelector("any-checkbox")
              .setAttribute("checked", "true");
          }
        } else {
          selectedElement.classList.remove("any-highlight");
          selectedElement.setAttribute("aria-selected", "false");
          if (this.checkbox && this.hasItemSlot) {
            selectedElement
              .querySelector("any-checkbox")
              .setAttribute("checked", "false");
          }
        }
      }
    }
  }

  removeOption(option: any): void {
    this.value = this.value.filter(
      (val) =>
        !ObjectUtils.equals(val, this.getOptionValue(option), this.dataKey)
    );
  }

  isSelected(option: any) {
    let selected = false;
    let optionValue = this.getOptionValue(option);

    if (this.multiple) {
      if (this.value) {
        for (let val of this.value) {
          if (ObjectUtils.equals(val, optionValue, this.dataKey)) {
            selected = true;
            break;
          }
        }
      }
    } else {
      selected = ObjectUtils.equals(this.value, optionValue, this.dataKey);
    }

    return selected;
  }

  getOptionValue(option: any) {
    return this.optionValue
      ? ObjectUtils.resolveFieldData(option, this.optionValue)
      : this.optionLabel || option.value === undefined
      ? option
      : option.value;
  }

  get allChecked(): boolean {
    let optionsToRender = this.optionsToRender;
    if (!optionsToRender || optionsToRender.length === 0) {
      return false;
    } else {
      let selectedDisabledItemsLength = 0;
      let unselectedDisabledItemsLength = 0;
      let selectedEnabledItemsLength = 0;
      let visibleOptionsLength = this.group ? 0 : this.optionsToRender.length;

      for (let option of optionsToRender) {
        if (!this.group) {
          let disabled = this.isOptionDisabled(option);
          let selected = this.isSelected(option);

          if (disabled) {
            if (selected) selectedDisabledItemsLength++;
            else unselectedDisabledItemsLength++;
          } else {
            if (selected) selectedEnabledItemsLength++;
            else return false;
          }
        } else {
          for (let opt of this.getOptionGroupChildren(option)) {
            let disabled = this.isOptionDisabled(opt);
            let selected = this.isSelected(opt);
            if (disabled) {
              if (selected) selectedDisabledItemsLength++;
              else unselectedDisabledItemsLength++;
            } else {
              if (selected) selectedEnabledItemsLength++;
              else {
                return false;
              }
            }
            visibleOptionsLength++;
          }
        }
      }

      return (
        visibleOptionsLength === selectedDisabledItemsLength ||
        visibleOptionsLength === selectedEnabledItemsLength ||
        (selectedEnabledItemsLength &&
          visibleOptionsLength ===
            selectedEnabledItemsLength +
              unselectedDisabledItemsLength +
              selectedDisabledItemsLength)
      );
    }
  }

  get optionsToRender(): any[] {
    return this._filteredOptions || this.options;
  }

  isOptionDisabled(option: any) {
    return this.optionDisabled
      ? ObjectUtils.resolveFieldData(option, this.optionDisabled)
      : option.disabled !== undefined
      ? option.disabled
      : false;
  }

  get toggleAllDisabled(): boolean {
    let optionsToRender = this.optionsToRender;
    if (!optionsToRender || optionsToRender.length === 0) {
      return true;
    } else {
      for (let option of optionsToRender) {
        if (!this.isOptionDisabled(option)) return false;
      }

      return true;
    }
  }

  toggleAll(event: Event) {
    if (this.disabled || this.toggleAllDisabled || this.readonly) {
      return;
    }

    let allChecked = this.allChecked;

    if (allChecked) this.uncheckAll();
    else this.checkAll();

    // this.onModelChange(this.value);
    // this.onChange.emit({ originalEvent: event, value: this.value });
    event.preventDefault();
  }

  checkAll() {
    let optionsToRender = this.optionsToRender;
    let val: any[] = [];

    optionsToRender.forEach((opt) => {
      if (!this.group) {
        let optionDisabled = this.isOptionDisabled(opt);
        if (!optionDisabled || (optionDisabled && this.isSelected(opt))) {
          val.push(this.getOptionValue(opt));
        }
      } else {
        let subOptions = this.getOptionGroupChildren(opt);
        if (subOptions) {
          subOptions.forEach((option) => {
            let optionDisabled = this.isOptionDisabled(option);
            if (
              !optionDisabled ||
              (optionDisabled && this.isSelected(option))
            ) {
              val.push(this.getOptionValue(option));
            }
          });
        }
      }
    });

    this.value = val;
  }

  uncheckAll() {
    let optionsToRender = this.optionsToRender;
    let val: any[] = [];

    optionsToRender.forEach((opt) => {
      if (!this.group) {
        let optionDisabled = this.isOptionDisabled(opt);
        if (optionDisabled && this.isSelected(opt)) {
          val.push(this.getOptionValue(opt));
        }
      } else {
        if (opt.items) {
          opt.items.forEach((option) => {
            let optionDisabled = this.isOptionDisabled(option);
            if (optionDisabled && this.isSelected(option)) {
              val.push(this.getOptionValue(option));
            }
          });
        }
      }
    });

    this.value = val;
  }

  getOptionGroupChildren(optionGroup: any) {
    return this.optionGroupChildren
      ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren)
      : optionGroup.items;
  }

  render() {
    const {
      disabled,
      element,
      name,
      value,
      checkbox,
      multiple,
      virtualScroll,
      showToggleAll,
      filter,
      allChecked,
    } = this;

    if (!hasSomeParentTheClass(this.element, "any-dropdown-items-wrapper")) {
      renderHiddenInput(
        true,
        element,
        name,
        value ? parseValue(value) : "",
        disabled
      );
    }

    return (
      <Host>
        <div class="any-element">
          <div style={{ display: "none" }}>
            <slot name="item" />
          </div>
          <div
            class={
              "any-component any-listbox any-corner-all" +
              (disabled ? " any-disabled" : "")
            }
            style={this.anyStyle}
          >
            {checkbox && multiple && (showToggleAll || filter) && (
              <div class="any-listbox-header">
                {checkbox && multiple && showToggleAll && (
                  <any-checkbox
                    binary={true}
                    checked={allChecked}
                    onClick={(e) => this.toggleAll(e)}
                  ></any-checkbox>
                )}
                {filter && (
                  <div class="any-listbox-filter-container">
                    <any-input-text
                      inputWrapperClass="any-input-icon-right"
                      inputClass="any-listbox-filter"
                    >
                      <i slot="iconRight" class="any-listbox-search-icon"></i>
                    </any-input-text>
                  </div>
                )}
              </div>
            )}
            <div
              id="scrollArea"
              class="any-listbox-list-wrapper"
              style={{
                ...{
                  "max-height": this.scrollerHeight
                    ? this.scrollerHeight
                    : "auto",
                },
                ...this.listStyle,
              }}
            >
              {!virtualScroll ? (
                <ul class="any-listbox-list" part="items">
                  {this.options.map((option, i) => (
                    <li
                      class={
                        "any-listbox-item" +
                        (this.isSelected(option) ? " any-highlight" : "")
                      }
                      tabindex={this.hasTabIndex ? "0" : null}
                      aria-selected={this.isSelected(option)}
                      aria-label={
                        get(this.optionLabel.split("."), option)
                          ? get(this.optionLabel.split("."), option)
                          : option.label
                      }
                      onClick={(e) => this.itemClick(e, option)}
                    >
                      {multiple && checkbox && (
                        <any-checkbox
                          inputId={"cb" + i}
                          id={"cb" + i}
                          binary={true}
                          anyStyle={{ zIndex: 101, position: "relative" }}
                          checked={this.isSelected(option)}
                        ></any-checkbox>
                      )}
                      {!this.hasItemSlot ? (
                        <div>
                          {get(this.optionLabel.split("."), option)
                            ? get(this.optionLabel.split("."), option)
                            : option.label}
                        </div>
                      ) : (
                        <div innerHTML={this.getContent("item", option)}></div>
                      )}
                      <any-ripple-effect
                        exportparts="any-ink: any-ink"
                        anyStyle={{ zIndex: 100 }}
                      ></any-ripple-effect>
                    </li>
                  ))}
                </ul>
              ) : (
                <any-virtual-scroller
                  items={this.options}
                  scrollerHeight={this.scrollerHeight}
                  contentElemClass="any-listbox-list"
                  itemElemClass="any-listbox-item"
                  contentElemTag="ul"
                  itemTag="li"
                  onClusterChanged={() => this.onClusterChanged()}
                  onAOnItemClick={(e) =>
                    this.itemClick(
                      e.detail.originalEvent,
                      this.options[e.detail.index]
                    )
                  }
                >
                  {this.hasItemSlot ? (
                    <div
                      slot="item"
                      style={{ display: "flex" }}
                      innerHTML={this.getContent("item")}
                    ></div>
                  ) : (
                    <div slot="item" style={{ display: "flex" }}>
                      {multiple && checkbox && (
                        <any-checkbox
                          style={{ position: "relative", zIndex: "101" }}
                          binary={true}
                        ></any-checkbox>
                      )}
                      <div>#=item.{this.optionLabel}#</div>
                    </div>
                  )}
                </any-virtual-scroller>
              )}
            </div>
          </div>
        </div>
      </Host>
    );
  }
}

let listboxIds = 0;
