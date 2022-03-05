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

  @Method()
  async getInputRef() {
    return this.element.querySelector("input");
  }

  inputChanged(ev: any) {
    let val = ev.target && ev.target.value;
    this.value = val;
    this.valueChange.emit(this.value);
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
            <input
              id={this.inputId}
              name={this.name}
              disabled={this.disabled}
              readonly={this.readonly}
              placeholder={this.placeholder}
              type="text"
              class={
                this.value
                  ? "any-component any-inputtext any-corner-all any-filled"
                  : "any-component any-inputtext any-corner-all"
              }
              value={this.value}
              onInput={this.inputChanged.bind(this)}
            />
            <i
              class={
                this.rightIconClass
                  ? this.rightIconClass + " iconify"
                  : "iconify"
              }
            >
              <slot name="iconRight" />
            </i>
            {this.label && this.floatLabel && (
              <label htmlFor={this.inputId}>{this.label}</label>
            )}
          </div>
        </div>
      </Host>
    );
  }
}

let inputIds = 0;
