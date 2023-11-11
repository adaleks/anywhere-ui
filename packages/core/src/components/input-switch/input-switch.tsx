import {
  Component,
  Host,
  h,
  Element,
  Event,
  EventEmitter,
  State,
  Prop,
} from "@stencil/core";

import { renderHiddenInput } from "../../utils/helpers";

/**
 * InputSwitch is used to select a boolean value.
 */
@Component({
  tag: "any-input-switch",
  styleUrl: "input-switch.scss",
  shadow: true,
})
export class InputSwitch {
  private inputswitch: HTMLElement | null = null;
  private value: any = false;

  @Element() private element: HTMLElement;

  @State() focused: boolean = false;

  /**
   * Identifier of the focus input to match a label defined for the component.
   */
  @Prop() inputId: string = `any-isw-${inputSwitchIds++}`;

  /**
   * Name of the checkbox group.
   */
  @Prop() name: string = this.inputId;

  /**
   * If `true`, the input-switch is selected.
   */
  @Prop({ mutable: true }) checked: boolean = false;

  /**
   * Inline style of the component.
   */
  @Prop() anyStyle: any = null;

  /**
   * Style class of the component.
   */
  @Prop() styleClass: any = null;

  /**
   * When present, it specifies that the element should be disabled.
   */
  @Prop() disabled: boolean = false;

  /**
   * When present, it specifies that the component cannot be edited.
   */
  @Prop() readonly: boolean = false;

  /**
   * Value in checked state.
   */
  @Prop() trueValue: any = true;

  /**
   * Value in unchecked state.
   */
  @Prop() falseValue: any = false;

  /**
   * Index of the element in tabbing order
   */
  @Prop() anyTabIndex?: number = 0;

  /**
   *  Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   */
  @Prop() ariaLabeledBy?: string = null;

  /**
   * Callback to invoke when value of dropdown changes.
   */
  @Event() valueChange?: EventEmitter;

  /**
   * Emitted when the toggle has focus.
   */
  @Event() aOnFocus?: EventEmitter;

  /**
   * Emitted when the toggle loses focus.
   */
  @Event() aOnBlur?: EventEmitter;

  componentDidLoad() {
    this.inputswitch = this.element.shadowRoot.querySelector(
      "input[type='checkbox']"
    ) as HTMLInputElement;

    this.value = this.checked ? this.trueValue : this.falseValue;
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
      const inputChecked = event.target.checked;
      this.updateValue(event, inputChecked);
    }
  }

  onClick(event: Event) {
    if (!this.disabled && !this.readonly) {
      event.preventDefault();
      this.toggle(event);
      this.inputswitch.focus();
    }
  }

  updateValue(event: Event, value: boolean) {
    this.value = value ? this.trueValue : this.falseValue;
    this.checked = value;
    // this.onModelChange(this.modelValue);
    this.valueChange.emit({
      originalEvent: event,
      checked: this.value,
    });
  }

  toggle(event: Event) {
    this.updateValue(event, !this.isChecked());
  }

  isChecked() {
    return this.value === this.trueValue;
  }

  render() {
    const { checked, disabled, element, name, value } = this;

    renderHiddenInput(true, element, name, checked ? value : "", disabled);

    return (
      <Host>
        <div class="any-element">
          <div
            class={
              "any-inputswitch any-component" +
              (checked ? " any-inputswitch-checked" : "") +
              (this.focused ? " any-focus" : "") +
              (disabled ? " any-disabled" : "")
            }
            style={this.anyStyle}
            onClick={(e) => {
              this.onClick(e);
            }}
            onKeyDown={(e: KeyboardEvent) => {
              if (e.key === "Enter") this.onClick(e);
            }}
          >
            <div class="any-hidden-accessible">
              <input
                type="checkbox"
                tabindex={this.anyTabIndex}
                aria-labelledby={this.ariaLabeledBy}
                role="switch"
                id={this.inputId}
                name={this.name}
                checked={checked}
                disabled={this.disabled}
                value={this.value}
                aria-checked={`${checked}`}
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
            </div>
            <span class="any-inputswitch-slider"></span>
          </div>
        </div>
      </Host>
    );
  }
}

let inputSwitchIds = 0;
