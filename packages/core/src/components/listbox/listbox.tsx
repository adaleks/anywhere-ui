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
import { findAndReplaceInnerHtml } from "../../utils/utils";
// import Clusterize from "clusterize.js";
import { get } from "../../utils/utils";
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
   * Callback to invoke when value of listbox changes
   */
  @Event() valueChange: EventEmitter<SelectChangeEventDetail>;

  @Watch("value")
  valueChanged(newValue: any, oldValue: any) {
    if (this.didInit && this.mutationO) {
      console.log("The new value of listbox is: ", newValue, oldValue);
      // if (!this.readonly) {
      let items = this.element.shadowRoot.querySelectorAll(
        ".any-listbox-item.any-highlight"
      );
      for (var i = 0; i < items.length; i++) {
        if (items[i]) {
          items[i].classList.remove("any-highlight");
          items[i].setAttribute("aria-selected", "false");
        }
      }
      if (newValue) {
        const selected = this.options.find((x: any) =>
          _.isEqual(x.value, newValue)
        );
        if (selected && get(this.optionLabel.split("."), selected)) {
          const selectedItem = this.element.shadowRoot.querySelector(
            "[aria-label='" + get(this.optionLabel.split("."), selected) + "']"
          ) as HTMLElement;
          selectedItem.classList.add("any-highlight");
          selectedItem.setAttribute("aria-selected", "true");
        }
      }
      // }

      this.valueChange.emit({
        originalEvent: this.itemPointerEvent,
        value: this.value,
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
  }

  componentDidLoad() {
    this.didInit = true;
    if (this.value) {
      const selected = this.options.find((x) => _.isEqual(x.value, this.value));
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
      const selected = this.options.find((x) => _.isEqual(x.value, this.value));
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
  }

  private itemClick(e, selected) {
    if (this.readonly) return;
    let value = null;

    e.currentTarget.classList.add("any-highlight");
    e.currentTarget.setAttribute("aria-selected", "true");

    if (selected[this.optionValue]) {
      value = selected[this.optionValue];
    } else {
      value = selected;
    }

    if (!_.isEqual(value, this.value)) {
      this.itemPointerEvent = e;
      this.value = value;
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

  onVirtualItemClick() {}

  render() {
    const { disabled, element, name, value } = this;

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
        <div style={{ display: "none" }}>
          <slot name="item" />
        </div>
        <div
          class={
            "any-component any-listbox any-corner-all" +
            (this.disabled ? " any-disabled" : "")
          }
          style={this.anyStyle}
        >
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
            {!this.virtualScroll ? (
              <ul class="any-listbox-list" part="items">
                {this.options.map((option) => (
                  <li
                    class="any-listbox-item"
                    tabindex={this.hasTabIndex ? "0" : null}
                    aria-selected="false"
                    aria-label={
                      get(this.optionLabel.split("."), option)
                        ? get(this.optionLabel.split("."), option)
                        : option.label
                    }
                    onClick={(e) => this.itemClick(e, option)}
                  >
                    {!this.hasItemSlot ? (
                      <div>
                        {get(this.optionLabel.split("."), option)
                          ? get(this.optionLabel.split("."), option)
                          : option.label}
                      </div>
                    ) : (
                      <div innerHTML={this.getContent("item", option)}></div>
                    )}
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
                  <div slot="item" innerHTML={this.getContent("item")}></div>
                ) : (
                  <div slot="item">#=item.{this.optionLabel}#</div>
                )}
                {/* <div slot="item">#=item.{this.optionLabel}#</div> */}
              </any-virtual-scroller>
            )}
          </div>
        </div>
      </Host>
    );
  }
}

let listboxIds = 0;
