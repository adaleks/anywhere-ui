import {
  Component,
  Host,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
  State,
  Watch,
  Method,
} from "@stencil/core";

import Iconify from "@iconify/iconify";
import { loadIcons } from "../../utils/load-icons";
import { renderHiddenInput } from "../../utils/helpers";

@Component({
  tag: "any-checkbox",
  styleUrl: "checkbox.scss",
  shadow: true,
})
export class AnyCheckbox {
  @Element() private element: HTMLElement;

  @State() focused: boolean = false;

  checkbox: HTMLElement | null = null;

  /**
   * If `true`, the checkbox is selected.
   */
  @Prop({ mutable: true }) checked: boolean = false;

  /**
   * Allows to select a boolean value instead of multiple values.
   */
  @Prop() binary: boolean = false;

  /**
   * Identifier of the focus input to match a label defined for the component.
   */
  @Prop() inputId: string = `any-cb-${checkboxIds++}`;

  /**
   * Name of the checkbox group.
   */
  @Prop() name: string = this.inputId;

  /**
   * Index of the element in tabbing order
   */
  @Prop() anyTabIndex?: number = 0;

  /**
   * The value of the checkbox does not mean if it's checked or not, use the `checked`
   * property for that.
   *
   * The value of a checkbox is analogous to the value of an `<input type="checkbox">`,
   * it's only used when the checkbox participates in a native `<form>`.
   */
  @Prop({ mutable: true }) value: any = "on";

  /**
   * Label of the checkbox.
   */
  @Prop() label: string = null;

  /**
   * Inline style of the component.
   */
  @Prop() anyStyle: any = null;

  /**
   * Style class of the component.
   */
  @Prop() styleClass: any = null;

  /**
   * Style class of the label.
   */
  @Prop() labelStyleClass: string = null;

  /**
   * When present, it specifies that the element should be disabled.
   */
  @Prop() disabled: boolean = false;

  /**
   * When present, it specifies that the component cannot be edited.
   */
  @Prop() readonly: boolean = false;

  /**
   * Icon class of the checkbox icon.
   */
  @Prop() checkboxIcon: string = "fa-solid:check";

  /**
   * Callback to invoke when value of dropdown changes.
   */
  @Event({ composed: false }) valueChange?: EventEmitter;

  /**
   * Emitted when the toggle has focus.
   */
  @Event() aOnFocus?: EventEmitter;

  /**
   * Emitted when the toggle loses focus.
   */
  @Event() aOnBlur?: EventEmitter;

  @Watch("checked")
  checkedChanged(isChecked: boolean) {
    let value = this.value;
    if (this.binary) {
      value = isChecked;
      this.value = isChecked;
    }
    this.valueChange.emit({
      checked: isChecked,
      value: value,
    });
  }

  componentWillLoad() {
    this.loadIcons();
  }

  componentDidLoad() {
    this.checkbox = this.element.shadowRoot.querySelector(
      "input[type='checkbox']"
    ) as HTMLElement;
  }

  async loadIcons() {
    await loadIcons([this.checkboxIcon]).catch((err) => {
      console.error("Failed to load icons:", err.missing);
    });
    const checkboxElement = this.element.shadowRoot.querySelector(
      ".any-checkbox-icon"
    ) as HTMLElement;
    // if (this.checked && checkboxElement)
    checkboxElement.innerHTML = Iconify.renderHTML(this.checkboxIcon, {});
  }

  onClick(event, focus: boolean) {
    event.preventDefault();

    if (this.disabled || this.readonly) {
      return;
    }

    this.checked = !this.checked;

    if (focus) {
      this.checkbox.focus();
    }
  }

  onFocus() {
    this.focused = true;
    this.aOnFocus.emit();
  }

  onBlur() {
    this.focused = false;
    this.aOnBlur.emit();
  }

  handleChange(event) {
    if (!this.readonly) {
      this.checked = event.target.checked;
    }
  }

  @Method()
  async inputFocus() {
    this.checkbox.focus();
  }

  render() {
    const { checked, disabled, element, name, value } = this;

    renderHiddenInput(true, element, name, checked ? value : "", disabled);

    return (
      <Host>
        <div class="any-element any-element-flex">
          <div
            class={
              "any-checkbox any-component" +
              (this.styleClass ? " " + this.styleClass : "") +
              (checked ? " any-checkbox-checked" : "") +
              (this.focused ? " any-checkbox-focused" : "") +
              (disabled ? " any-checkbox-disabled" : "")
            }
            style={this.anyStyle}
          >
            <div class="any-hidden-accessible">
              <input
                type="checkbox"
                id={this.inputId}
                name={this.name}
                checked={checked}
                value={this.value}
                aria-checked={`${checked}`}
                tabindex={this.anyTabIndex}
                onFocus={() => {
                  this.onFocus();
                }}
                onBlur={() => {
                  this.onBlur();
                }}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />
              <slot name="label" />
            </div>
            <div
              part={checked ? "any-checkbox-box-highlight" : "any-checkbox-box"}
              class={
                "any-checkbox-box" +
                (checked ? " any-highlight" : "") +
                (this.focused ? " any-focus" : "") +
                (disabled ? " any-disabled" : "")
              }
              onClick={(e) => {
                this.onClick(e, true);
              }}
            >
              <span
                class="any-checkbox-icon iconify"
                style={{ visibility: checked ? "visible" : "hidden" }}
              ></span>
            </div>
          </div>
          {this.label && (
            <label
              onClick={(e) => {
                this.onClick(e, true);
              }}
              htmlFor={this.inputId}
              class={
                "any-checkbox-label" +
                (this.labelStyleClass ? " " + this.labelStyleClass : "") +
                (checked ? " any-checkbox-label-active" : "") +
                (this.focused ? " any-checkbox-label-focus" : "") +
                (disabled ? " any-disabled" : "")
              }
            >
              {this.label}
            </label>
          )}
        </div>
      </Host>
    );
  }
}

let checkboxIds = 0;
