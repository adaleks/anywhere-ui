import {
  Component,
  Host,
  h,
  Prop,
  Event,
  EventEmitter,
  Watch,
  Element,
  Method,
} from "@stencil/core";

/**
 * The InputText component is a wrapper to the HTML input element with custom styling and additional
 * functionality.
 *
 * @part any-inputtext - The main input text element.
 * @slot iconLeft - Slot for an icon to be placed on the left side of the input.
 * @slot start - Slot for content to be placed at the start of the input.
 * @slot end - Slot for content to be placed at the end of the input.
 * @slot iconRight - Slot for an icon to be placed on the right side of the input.
 *
 */
@Component({
  tag: "any-input-text",
  styleUrl: "input-text.scss",
  scoped: true,
})
export class AnyInputText {
  @Element() element: HTMLElement;

  /**
   * Value of the input text
   */
  @Prop({ mutable: true }) value: string = null;

  /**
   * Identifier of the focus input to match a label defined for the component.
   */
  @Prop() inputId: string = `any-input-text-${inputIds++}`;

  /**
   * Name of the input text.
   */
  @Prop() name: string = this.inputId;

  /**
   * Label of the input text
   */
  @Prop() label: string = null;

  /**
   * When enabled, the label will have floating effect on input text focus
   */
  @Prop() floatLabel: boolean = false;

  /**
   * The class of input wrapper element
   */
  @Prop() inputWrapperClass: string = null;

  /**
   * The class of input holder element
   */
  @Prop() inputHolderClass: string = null;

  /**
   * When present, it specifies that the element should be disabled
   */
  @Prop() disabled: boolean = false;

  /**
   * When present, it specifies that the element value cannot be changed
   */
  @Prop() readonly: boolean = false;

  /**
   * Default text to display when no value in input text
   */
  @Prop() placeholder: string = null;

  /**
   * The class of right icon wrapper element
   */
  @Prop() rightIconClass: string = null;

  /**
   * The class of left icon wrapper element
   */
  @Prop() leftIconClass: string = null;

  /**
   * Inline style of the element
   */
  @Prop() inputStyle?: any = null;

  /**
   * Inline style of the element
   */
  @Prop() inputClass?: string = null;

  /**
   * Size of the input field.
   */
  @Prop() size: number;

  /**
   * Maximum number of character allows in the input field.
   */
  @Prop() maxlength: number;

  /**
   * Specifies tab order of the element.
   */
  @Prop() anyTabIndex: string;

  /**
   * Title text of the input text.
   */
  @Prop() aTitle: string;

  /**
   * Used to indicate that user input is required on an element before a form can be submitted.
   */
  @Prop() anyAriaRequired: boolean;
  /**
   * When present, it specifies that an input field is required.
   */
  @Prop() required: boolean;

  /**
   * Used to define a string that autocomplete attribute the current element.
   */
  @Prop() autocomplete: string;

  /**
   * Callback to invoke when value of input text changes
   */
  @Event() valueChange: EventEmitter;

  @Watch("value")
  valueChanged() {
    const inputEl = this.element.querySelector("input");
    // only update if model and view differ
    if (inputEl.value !== this.value) {
      inputEl.value = this.value;
    }
  }

  /**
   * Retrieves a reference to the input element within the component.
   *
   * @returns {HTMLInputElement | null} The input element, or null if not found.
   * @example
   * const inputElement = await myComponent.getInputRef();
   * if (inputElement) {
   *   // Do something with the input element
   *   inputElement.focus();
   * }
   */
  @Method()
  async getInputRef(): Promise<HTMLInputElement | null> {
    return this.element.querySelector("input");
  }

  inputChanged(ev: any) {
    let val = ev.target && ev.target.value;
    if (this.value !== val) {
      this.value = val;
      this.valueChange.emit(this.value);
    }
  }

  render() {
    return (
      <Host>
        <div class="any-element">
          <div
            class={
              this.floatLabel
                ? " any-float-label " +
                  (this.inputWrapperClass ? this.inputWrapperClass : "")
                : this.inputWrapperClass
            }
          >
            <i
              class={
                this.leftIconClass ? this.leftIconClass + " iconify" : "iconify"
              }
            >
              <slot name="iconLeft" />
            </i>
            {this.label && !this.floatLabel && (
              <label htmlFor={this.inputId}>{this.label}</label>
            )}
            <span
              class={
                (this.floatLabel ? "any-float-label " : "") +
                (this.inputHolderClass ? this.inputHolderClass : "")
              }
            >
              <slot name="start" />
              <input
                part="any-inputtext"
                id={this.inputId}
                name={this.name}
                disabled={this.disabled}
                readonly={this.readonly}
                placeholder={this.placeholder}
                type="text"
                style={this.inputStyle}
                size={this.size}
                maxlength={this.maxlength}
                tabindex={this.anyTabIndex}
                title={this.aTitle}
                aria-required={this.anyAriaRequired}
                required={this.required}
                autocomplete={this.autocomplete}
                class={
                  (this.value
                    ? "any-component any-inputtext any-corner-all any-filled"
                    : "any-component any-inputtext any-corner-all") +
                  (this.inputClass ? " " + this.inputClass : "")
                }
                value={this.value}
                onInput={this.inputChanged.bind(this)}
              />
              <slot name="end" />
              {this.label && this.floatLabel && (
                <label htmlFor={this.inputId}>{this.label}</label>
              )}
            </span>
            <i
              class={
                this.rightIconClass
                  ? this.rightIconClass + " iconify"
                  : "iconify"
              }
            >
              <slot name="iconRight" />
            </i>
          </div>
        </div>
      </Host>
    );
  }
}

let inputIds = 0;
