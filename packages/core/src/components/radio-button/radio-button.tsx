import {
  Component,
  Host,
  h,
  Prop,
  Element,
  State,
  EventEmitter,
  Event,
  Method,
} from "@stencil/core";

import {
  addEventListener,
  // getAriaLabel,
  removeEventListener,
} from "../../utils/helpers";

@Component({
  tag: "any-radio-button",
  styleUrl: "radio-button.scss",
  shadow: true,
})
export class RadioButton {
  @Element() private element: HTMLElement;

  private radiobutton: HTMLElement | null = null;
  private nativeInput!: HTMLInputElement;
  private radioGroup: HTMLAnyRadioGroupElement | null = null;

  /**
   * If `true`, the radio is focused.
   */
  @State() focused: boolean = false;

  /**
   * If `true`, the radio is selected.
   */
  @State() checked: boolean = false;

  /**
   * the value of the radio.
   */
  @Prop() value?: any | null;

  /**
   * Identifier of the focus input to match a label defined for the component.
   */
  @Prop() inputId: string = `any-rb-${radiobuttonIds++}`;

  /**
   * Label of the radiobutton.
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
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * Index of the element in tabbing order
   */
  @Prop() anyTabIndex?: number = 0;

  /**
   * Callback to invoke on radio button select.
   */
  @Event() aOnSelect?: EventEmitter;

  /**
   * Callback to invoke when the radio button receives focus.
   */
  @Event() aOnFocus?: EventEmitter;

  /**
   * Callback to invoke when the radio button loses focus.
   */
  @Event() aOnBlur?: EventEmitter;

  /**
   * Applies focus.
   */
  @Method()
  async setFocus(ev: any) {
    ev.stopPropagation();
    ev.preventDefault();

    this.radiobutton.focus();
  }

  connectedCallback() {
    if (this.value === undefined) {
      this.value = this.inputId;
    }
    const radioGroup = (this.radioGroup =
      this.element.closest("any-radio-group"));
    if (radioGroup) {
      this.updateState();
      addEventListener(radioGroup, "valueChange", this.updateState);
    }
  }

  disconnectedCallback() {
    const radioGroup = this.radioGroup;
    if (radioGroup) {
      removeEventListener(radioGroup, "valueChange", this.updateState);
      this.radioGroup = null;
    }
  }

  private updateState = () => {
    if (this.radioGroup) {
      console.log("UPDATE STATE", this.radioGroup.value, this.value);
      this.checked = this.radioGroup.value === this.value;
    }
  };

  componentWillLoad() {}

  componentDidLoad() {
    this.radiobutton = this.element.shadowRoot.querySelector(
      "input[type='radio']"
    ) as HTMLElement;
  }

  onClick(event, focus: boolean) {
    event.preventDefault();

    if (this.disabled) {
      return;
    }

    this.checked = this.nativeInput.checked;
    console.log("NATIVE", this.nativeInput);

    this.aOnSelect.emit(event);

    if (focus) {
      this.radiobutton.focus();
    }
  }

  onFocus(e) {
    this.focused = true;
    this.aOnFocus.emit(e);
  }

  onBlur(e) {
    this.focused = false;
    this.aOnBlur.emit(e);
  }

  render() {
    const { checked, focused, disabled } = this;

    return (
      <Host>
        <div class="any-element any-element-flex">
          <div
            style={this.anyStyle}
            class={
              "any-radiobutton any-component " +
              (this.styleClass ? " " + this.styleClass : "") +
              (checked ? " any-radiobutton-checked" : "") +
              (focused ? " any-radiobutton-focused" : "") +
              (disabled ? " any-radiobutton-disabled" : "")
            }
            role="radio"
          >
            <div class="any-hidden-accessible">
              <input
                type="radio"
                id={this.inputId}
                name={this.name}
                checked={checked}
                disabled={disabled}
                value={this.value}
                aria-checked={`${checked}`}
                tabindex={this.anyTabIndex}
                onFocus={(e) => {
                  this.onFocus(e);
                }}
                onBlur={(e) => {
                  this.onBlur(e);
                }}
                ref={(nativeEl) =>
                  (this.nativeInput = nativeEl as HTMLInputElement)
                }
              />
            </div>
            <div
              class={
                "any-radiobutton-box " +
                (checked ? " any-highlight" : "") +
                (focused ? " any-focus" : "") +
                (disabled ? " any-disabled" : "")
              }
              onClick={(e) => {
                this.onClick(e, true);
              }}
            >
              <span class="any-radiobutton-icon"></span>
            </div>
          </div>
          <label
            class={
              "any-radiobutton-label" +
              (this.labelStyleClass ? " " + this.labelStyleClass : "") +
              (checked ? " any-radiobutton-label-active" : "") +
              (focused ? " any-radiobutton-label-focus" : "") +
              (disabled ? " any-disabled" : "")
            }
            onClick={(e) => {
              this.onClick(e, true);
            }}
          >
            {this.label}
          </label>
        </div>
      </Host>
    );
  }
}

let radiobuttonIds = 0;
