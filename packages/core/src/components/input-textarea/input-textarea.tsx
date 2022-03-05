import {
  Component,
  Host,
  h,
  Element,
  Prop,
  Watch,
  Method,
  Event,
  EventEmitter,
} from "@stencil/core";
import { Attributes, inheritAttributes, raf } from "../../utils/helpers";
import { TextareaChangeEventDetail } from "../../interfaces";

@Component({
  tag: "any-input-textarea",
  styleUrl: "input-textarea.scss",
  scoped: true,
})
export class InputTextarea {
  private nativeInput?: HTMLTextAreaElement;
  private inheritedAttributes: Attributes = {};
  private resizeOb: ResizeObserver;

  @Element() element: HTMLElement;

  /**
   * Identifier of the focus input to match a label defined for the component.
   */
  @Prop() inputId: string = `any-input-textarea-${textareaIds++}`;

  /**
   * Name of the input text.
   */
  @Prop() name: string = this.inputId;

  /**
   * Label of the input text
   */
  @Prop() label: string = null;

  /**
   * When present, textarea size changes as being typed.
   */
  @Prop() autoResize: boolean = false;

  /**
   * When present, it specifies that the element should be disabled.
   */
  @Prop() disabled: boolean = false;

  /**
   * When present, it specifies that the element value cannot be changed
   */
  @Prop() readonly: boolean = false;

  /**
   * Default text to display when no value in input textarea
   */
  @Prop() placeholder: string = null;

  /**
   * If `true`, the element will have its spelling and grammar checked.
   */
  @Prop() spellcheck = false;

  /**
   * When enabled, the label will have floating effect on input text focus
   */
  @Prop() floatLabel: boolean = false;

  /**
   * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.
   */
  @Prop() cols?: number;

  /**
   * The number of visible text lines for the control.
   */
  @Prop() rows?: number;
  /**
   * Indicates how the control wraps text.
   */
  @Prop() wrap?: "hard" | "soft" | "off";

  /**
   * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
   * Available options: `"off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`.
   */
  @Prop() autocapitalize = "none";

  /**
   * The class of input wrapper element
   */
  @Prop() inputWrapperClass: string = null;

  /**
   * The value of the textarea.
   */
  @Prop({ mutable: true }) value?: string | null = "";

  /**
   * Emitted when the input loses focus.
   */
  @Event() aOnBlur!: EventEmitter<FocusEvent>;

  /**
   * Emitted when the input has focus.
   */
  @Event() aOnFocus!: EventEmitter<FocusEvent>;

  /**
   * Emitted when the input has resized.
   */
  @Event() aOnResize!: EventEmitter<any>;

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() aOnInput!: EventEmitter<InputEvent>;

  /**
   * Emitted when the input value has changed.
   */
  @Event() valueChange!: EventEmitter<TextareaChangeEventDetail>;

  @Watch("value")
  valueChanged() {
    const nativeInput = this.nativeInput;
    const value = this.getValue();
    // // only update if model and view differ
    if (nativeInput.value !== this.value) {
      nativeInput.value = this.value;
    }

    if (this.autoResize) {
      this.resize();
    }
    this.valueChange.emit({ value });
  }

  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.element, ["title"]);
  }

  componentDidLoad() {
    this.resizeOb = new ResizeObserver((entries) => {
      // since we are observing only a single element, so we access the first element in entries array
      let rect = entries[0].contentRect;

      // current width & height
      let width = rect.width;
      let height = rect.height;

      this.aOnResize.emit({ inputHeight: height, inputWidth: width });
    });
    this.resizeOb.observe(this.element.querySelector("textarea"));

    if (this.autoResize) raf(() => this.resize());
  }

  disconnectedCallback() {
    this.resizeOb.disconnect();
  }

  /**
   * Sets focus on the native `textarea` in `ion-textarea`. Use this method instead of the global
   * `textarea.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }

  /**
   * Sets blur on the native `textarea` in `ion-textarea`. Use this method instead of the global
   * `textarea.blur()`.
   * @internal
   */
  @Method()
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }

  /**
   * Returns the native `<textarea>` element used under the hood.
   */
  @Method()
  getInputElement(): Promise<HTMLTextAreaElement> {
    return Promise.resolve(this.nativeInput!);
  }

  private getValue(): string {
    return this.value || "";
  }

  resize() {
    const nativeInput = this.nativeInput;

    nativeInput.style.height = "auto";
    nativeInput.style.height = nativeInput.scrollHeight + "px";

    if (
      parseFloat(nativeInput.style.height) >=
      parseFloat(nativeInput.style.maxHeight)
    ) {
      nativeInput.style.overflowY = "scroll";
      nativeInput.style.height = nativeInput.style.maxHeight;
    } else {
      nativeInput.style.overflow = "hidden";
    }
  }

  private onInput = (ev: Event) => {
    if (this.nativeInput) {
      this.value = this.nativeInput.value;
    }
    // this.emitStyle();
    this.aOnInput.emit(ev as InputEvent);
  };

  private onFocus = (ev: FocusEvent) => {
    this.aOnFocus.emit(ev);
  };

  private onBlur = (ev: FocusEvent) => {
    this.aOnBlur.emit(ev);
  };

  render() {
    const labelId = this.inputId + "-lbl";

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
            {this.label && !this.floatLabel && (
              <label htmlFor={this.inputId}>{this.label}</label>
            )}
            <textarea
              class={
                "any-inputtextarea any-inputtext any-component any-corner-all" +
                (this.autoResize ? " any-inputtextarea-resizable" : "") +
                (this.value ? " any-filled" : "")
              }
              aria-labelledby={this.label ? labelId : null}
              ref={(el) => (this.nativeInput = el)}
              autoCapitalize={this.autocapitalize}
              // autoFocus={this.autofocus}
              // enterKeyHint={this.enterkeyhint}
              // inputMode={this.inputmode}
              disabled={this.disabled}
              // maxLength={this.maxlength}
              // minLength={this.minlength}
              id={this.inputId}
              name={this.name}
              placeholder={this.placeholder || ""}
              readOnly={this.readonly}
              // required={this.required}
              spellcheck={this.spellcheck}
              cols={this.cols}
              rows={this.rows}
              wrap={this.wrap}
              onInput={this.onInput}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              // onKeyDown={this.onKeyDown}
              {...this.inheritedAttributes}
            >
              {this.value}
            </textarea>
            {this.label && this.floatLabel && (
              <label htmlFor={this.inputId}>{this.label}</label>
            )}
          </div>
        </div>
      </Host>
    );
  }
}

let textareaIds = 0;
