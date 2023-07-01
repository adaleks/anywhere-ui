import {
  Component,
  Host,
  h,
  Element,
  Prop,
  Event,
  EventEmitter,
} from "@stencil/core";

@Component({
  tag: "any-input-number",
  styleUrl: "input-number.scss",
  scoped: true,
})
export class InputNumber {
  @Element() element: HTMLElement;

  /**
   * Value of the component.
   */
  @Prop({ mutable: true }) value: string = null;

  /**
   * Whether to format the value.
   */
  @Prop() format: boolean = true;

  /**
   * Displays spinner buttons.
   */
  @Prop() showButtons: boolean = false;

  /**
   * Layout of the buttons, valid values are "stacked" (default), "horizontal" and "vertical".
   */
  @Prop() buttonLayout: string = "stacked";

  /**
   * Identifier of the focus input to match a label defined for the component.
   */
  @Prop() inputId: string = `any-input-number-${inputIds++}`;

  /**
   * Style class of the component.
   */
  @Prop() styleClass: string;

  /**
   * Inline style of the component.
   */
  @Prop() anyStyle: any;

  /**
   * Advisory information to display on input.
   */
  @Prop() placeholder: string;

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
   * Label of the component
   */
  @Prop() label: string = null;

  // @Prop() ariaLabel: string;

  /**
   * Used to indicate that user input is required on an element before a form can be submitted.
   */
  @Prop() anyAriaRequired: boolean;

  /**
   * Name of the component
   */
  @Prop() name: string;

  /**
   * When present, it specifies that an input field is required.
   */
  @Prop() required: boolean;

  /**
   * Used to define a string that autocomplete attribute the current element.
   */
  @Prop() autocomplete: string;

  /**
   * Mininum boundary value.
   */
  @Prop() min: number;

  /**
   * Maximum boundary value.
   */
  @Prop() max: number;

  /**
   * Style class of the increment button.
   */
  @Prop() incrementButtonClass: string;

  /**
   * Style class of the decrement button.
   */
  @Prop() decrementButtonClass: string;

  /**
   * Style class of the increment button.
   */
  @Prop() incrementButtonIcon: string = "fa-solid:angle-up";

  /**
   * Style class of the decrement button.
   */
  @Prop() decrementButtonIcon: string = "fa-solid:angle-down";

  /**
   * When present, it specifies that the element should be disabled.
   */
  @Prop() disabled: boolean = false;

  /**
   * When present, it specifies that an input field is read-only.
   */
  @Prop() readonly: boolean = false;

  /**
   * Step factor to increment/decrement the value.
   */
  @Prop() step: number = 1;

  /**
   * Determines whether the input field is empty.
   */
  @Prop() allowEmpty: boolean = true;

  /**
   * Locale to be used in formatting.
   */
  @Prop() locale: string;

  /**
   * The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit".
   * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation for details.
   */
  @Prop() localeMatcher: string;

  /**
   * Defines the behavior of the component, valid values are "decimal" and "currency".
   */
  @Prop() mode: string = "decimal";

  /**
   * The currency to use in currency formatting.
   * Possible values are the ISO 4217 currency codes(https://www.currency-iso.org/en/home/tables/table-a1.html),
   * such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB.
   * There is no default value; if the style is "currency", the currency property must be provided.
   */
  @Prop() currency: string;

  /**
   * How to display the currency in currency formatting.
   * Possible values are "symbol" to use a localized currency symbol such as €, ü"code" to use the ISO currency code, "name" to use a localized currency name such as "dollar"; the default is "symbol".
   *
   */
  @Prop() currencyDisplay: string;

  /**
   * Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.
   */
  @Prop() useGrouping: boolean = true;

  /**
   * The minimum number of fraction digits to use.
   * Possible values are from 0 to 20; the default for plain number and percent formatting is 0;
   * the default for currency formatting is the number of minor unit digits provided by the
   * ISO 4217 currency code list (https://www.currency-iso.org/en/home/tables/table-a1.html) (2 if the list doesn't provide that information).
   */
  @Prop() minFractionDigits: number;

  /**
   * The maximum number of fraction digits to use.
   * Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3;
   * the default for currency formatting is the larger of minimumFractionDigits
   * and the number of minor unit digits provided by the ISO 4217 currency code list (https://www.currency-iso.org/en/home/tables/table-a1.html) (2 if the list doesn't provide that information).
   */
  @Prop() maxFractionDigits: number;

  /**
   * Text to display before the value.
   */
  @Prop() aPrefix: string;

  /**
   * Text to display after the value.
   */
  @Prop() aSuffix: string;

  /**
   * Inline style of the input field.
   */
  @Prop() inputStyle: any;

  /**
   * The class of input wrapper element
   */
  @Prop() inputWrapperClass: string = null;

  /**
   * Style class of the input field.
   */
  @Prop() inputStyleClass: string;

  /**
   * Callback to invoke when the value is entered.
   */
  @Event() aOnInput: EventEmitter<any>;

  /**
   * Callback to invoke when input receives focus.
   */
  @Event() aOnFocus: EventEmitter<any>;

  /**
   * Callback to invoke when input loses focus.
   */
  @Event() aOnBlur: EventEmitter<any>;

  /**
   * Callback to invoke when keyboard key is down.
   */
  @Event() aOnKeyDown: EventEmitter<any>;

  /**
   * Callback to invoke when value of componnt changes
   */
  @Event() valueChange: EventEmitter;

  private input?: HTMLInputElement;
  private upButton?: HTMLButtonElement;
  private downButton?: HTMLButtonElement;

  focused: boolean;

  initialized: boolean;

  groupChar: string = "";

  aPrefixChar: string = "";

  aSuffixChar: string = "";

  isSpecialChar: boolean;

  timer: any;

  lastValue: string;

  _numeral: any;

  numberFormat: any;

  _decimal: any;

  _group: any;

  _minusSign: any;

  _currency: any;

  _prefix: any;

  _suffix: any;

  _index: any;

  _disabled: boolean;

  componentWillLoad() {
    this.constructParser();
  }

  componentDidLoad() {
    this.initialized = true;
    const input = this.element.querySelector(
      "any-input-text"
    ) as HTMLAnyInputTextElement;
    input.componentOnReady().then(async () => {
      this.input = await input.getInputRef();
      this.defineInputEvents();
    });
    const upButton = this.element.querySelector(
      ".any-inputnumber-button-up any-button"
    ) as HTMLAnyButtonElement;
    const downButton = this.element.querySelector(
      ".any-inputnumber-button-down any-button"
    ) as HTMLAnyButtonElement;

    if (upButton) {
      upButton.componentOnReady().then(async () => {
        this.upButton = await upButton.getButtonRef();
        this.defineUpButtonEvents();
      });
    }

    if (downButton) {
      downButton.componentOnReady().then(async () => {
        this.downButton = await downButton.getButtonRef();
        this.defineDownButtonEvents();
      });
    }
  }

  disconnectedCallback() {
    this.input.removeEventListener("input", this.onUserInput, false);
    this.input.removeEventListener("keydown", this.onInputKeyDown, false);
    this.input.removeEventListener("keypress", this.onInputKeyPress, false);
    this.input.removeEventListener("paste", this.onPaste, false);
    this.input.removeEventListener("click", this.onInputClick, false);
    this.input.removeEventListener("focus", this.onInputFocus, false);
    this.input.removeEventListener("blur", this.onInputBlur, false);

    if (this.upButton) {
      this.upButton.removeEventListener(
        "mouseup",
        this.onUpButtonMouseUp,
        false
      );
      this.upButton.removeEventListener(
        "mousedown",
        this.onUpButtonMouseDown,
        false
      );
      this.upButton.removeEventListener(
        "mouseleave",
        this.onUpButtonMouseLeave,
        false
      );
      this.upButton.removeEventListener(
        "keydown",
        this.onUpButtonKeyDown,
        false
      );
      this.upButton.removeEventListener("keyup", this.onUpButtonKeyUp, false);
    }

    if (this.downButton) {
      this.downButton.removeEventListener(
        "mouseup",
        this.onDownButtonMouseUp,
        false
      );
      this.downButton.removeEventListener(
        "mousedown",
        this.onDownButtonMouseDown,
        false
      );
      this.downButton.removeEventListener(
        "mouseleave",
        this.onDownButtonMouseLeave,
        false
      );
      this.downButton.removeEventListener(
        "keydown",
        this.onDownButtonKeyDown,
        false
      );
      this.downButton.removeEventListener(
        "keyup",
        this.onDownButtonKeyUp,
        false
      );
    }
  }

  defineUpButtonEvents() {
    this.upButton.addEventListener("mousedown", (e) => {
      this.onUpButtonMouseDown(e);
    });
    this.upButton.addEventListener("mouseup", () => {
      this.onUpButtonMouseUp();
    });
    this.upButton.addEventListener("mouseleave", () => {
      this.onUpButtonMouseLeave();
    });
    this.upButton.addEventListener("keydown", (e) => {
      this.onUpButtonKeyDown(e);
    });
    this.upButton.addEventListener("keyup", () => {
      this.onUpButtonKeyUp();
    });
  }

  defineDownButtonEvents() {
    this.downButton.addEventListener("mousedown", (e) => {
      this.onDownButtonMouseDown(e);
    });
    this.downButton.addEventListener("mouseup", () => {
      this.onDownButtonMouseUp();
    });
    this.downButton.addEventListener("mouseleave", () => {
      this.onDownButtonMouseLeave();
    });
    this.downButton.addEventListener("keydown", (e) => {
      this.onDownButtonKeyDown(e);
    });
    this.downButton.addEventListener("keyup", () => {
      this.onDownButtonKeyUp();
    });
  }

  defineInputEvents() {
    this.input.addEventListener("input", (e) => {
      this.onUserInput(e);
    });
    this.input.addEventListener("keydown", (e) => {
      this.onInputKeyDown(e);
    });
    this.input.addEventListener("keypress", (e) => {
      this.onInputKeyPress(e);
    });
    this.input.addEventListener("paste", (e) => {
      this.onPaste(e);
    });
    this.input.addEventListener("click", () => {
      this.onInputClick();
    });
    this.input.addEventListener("focus", (e) => {
      this.onInputFocus(e);
    });
    this.input.addEventListener("blur", (e) => {
      this.onInputBlur(e);
    });
  }

  getOptions() {
    return {
      localeMatcher: this.localeMatcher,
      style: this.mode,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: this.useGrouping,
      minimumFractionDigits: this.minFractionDigits,
      maximumFractionDigits: this.maxFractionDigits,
    };
  }

  constructParser() {
    this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
    // const numerals = [
    //   ...new Intl.NumberFormat(this.locale, { useGrouping: false }).format(
    //     9876543210
    //     ),
    //   ].reverse();
    const numerals = Array.from(String(9876543210)).reverse();
    const index = new Map(numerals.map((d, i) => [d, i]));
    this._numeral = new RegExp(`[${numerals.join("")}]`, "g");
    this._group = this.getGroupingExpression();
    this._minusSign = this.getMinusSignExpression();
    this._currency = this.getCurrencyExpression();
    this._decimal = this.getDecimalExpression();
    this._suffix = this.getSuffixExpression();
    this._prefix = this.getPrefixExpression();
    this._index = (d) => index.get(d);
  }

  updateConstructParser() {
    if (this.initialized) {
      this.constructParser();
    }
  }

  escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }

  getDecimalExpression() {
    const formatter = new Intl.NumberFormat(this.locale, {
      ...this.getOptions(),
      useGrouping: false,
    });
    return new RegExp(
      `[${formatter
        .format(1.1)
        .replace(this._currency, "")
        .trim()
        .replace(this._numeral, "")}]`,
      "g"
    );
  }

  getGroupingExpression() {
    const formatter = new Intl.NumberFormat(this.locale, { useGrouping: true });
    this.groupChar = formatter
      .format(1000000)
      .trim()
      .replace(this._numeral, "")
      .charAt(0);
    return new RegExp(`[${this.groupChar}]`, "g");
  }

  getMinusSignExpression() {
    const formatter = new Intl.NumberFormat(this.locale, {
      useGrouping: false,
    });
    return new RegExp(
      `[${formatter.format(-1).trim().replace(this._numeral, "")}]`,
      "g"
    );
  }

  getCurrencyExpression() {
    if (this.currency) {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: "currency",
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      return new RegExp(
        `[${formatter
          .format(1)
          .replace(/\s/g, "")
          .replace(this._numeral, "")
          .replace(this._group, "")}]`,
        "g"
      );
    }

    return new RegExp(`[]`, "g");
  }

  getPrefixExpression() {
    if (this.aPrefix) {
      this.aPrefixChar = this.aPrefix;
    } else {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
      });
      this.aPrefixChar = formatter.format(1).split("1")[0];
    }

    return new RegExp(`${this.escapeRegExp(this.aPrefixChar || "")}`, "g");
  }

  getSuffixExpression() {
    if (this.aSuffix) {
      this.aSuffixChar = this.aSuffix;
    } else {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      this.aSuffixChar = formatter.format(1).split("1")[1];
    }

    return new RegExp(`${this.escapeRegExp(this.aSuffixChar || "")}`, "g");
  }

  formatValue(value) {
    if (value != null) {
      if (value === "-") {
        // Minus sign
        return value;
      }

      if (this.format) {
        let formatter = new Intl.NumberFormat(this.locale, this.getOptions());
        let formattedValue = formatter.format(value);
        if (this.aPrefix) {
          formattedValue = this.aPrefix + formattedValue;
        }

        if (this.aSuffix) {
          formattedValue = formattedValue + this.aSuffix;
        }

        return formattedValue;
      }

      return value.toString();
    }

    return "";
  }

  parseValue(text) {
    let filteredText = text
      .replace(this._suffix, "")
      .replace(this._prefix, "")
      .trim()
      .replace(/\s/g, "")
      .replace(this._currency, "")
      .replace(this._group, "")
      .replace(this._minusSign, "-")
      .replace(this._decimal, ".")
      .replace(this._numeral, this._index);

    if (filteredText) {
      if (filteredText === "-")
        // Minus sign
        return filteredText;

      let parsedValue = +filteredText;
      return isNaN(parsedValue) ? null : parsedValue;
    }

    return null;
  }

  repeat(event, interval, dir) {
    if (this.readonly) {
      return;
    }

    let i = interval || 500;

    this.clearTimer();
    this.timer = setTimeout(() => {
      this.repeat(event, 40, dir);
    }, i);

    this.spin(event, dir);
  }

  spin(event, dir) {
    let step = this.step * dir;
    let currentValue = this.parseValue(this.input.value) || 0;
    let newValue = this.validateValue(currentValue + step);
    if (this.maxlength && this.maxlength < this.formatValue(newValue).length) {
      return;
    }

    this.updateInput(newValue, null, "spin", null);
    this.updateModel(newValue);

    this.handleOnInput(event, currentValue, newValue);
  }

  onUpButtonMouseDown(event) {
    this.input.focus();
    this.repeat(event, null, 1);
    event.preventDefault();
  }

  onUpButtonMouseUp() {
    this.clearTimer();
  }

  onUpButtonMouseLeave() {
    this.clearTimer();
  }

  onUpButtonKeyDown(event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      this.repeat(event, null, 1);
    }
  }

  onUpButtonKeyUp() {
    this.clearTimer();
  }

  onDownButtonMouseDown(event) {
    this.input.focus();
    this.repeat(event, null, -1);
    event.preventDefault();
  }

  onDownButtonMouseUp() {
    this.clearTimer();
  }

  onDownButtonMouseLeave() {
    this.clearTimer();
  }

  onDownButtonKeyUp() {
    this.clearTimer();
  }

  onDownButtonKeyDown(event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      this.repeat(event, null, -1);
    }
  }

  onUserInput(event) {
    if (this.readonly) {
      return;
    }

    if (this.isSpecialChar) {
      event.target.value = this.lastValue;
    }
    this.isSpecialChar = false;
  }

  onInputKeyDown(event) {
    if (this.readonly) {
      return;
    }

    this.lastValue = event.target.value;
    if (event.shiftKey || event.altKey) {
      this.isSpecialChar = true;
      return;
    }

    let selectionStart = event.target.selectionStart;
    let selectionEnd = event.target.selectionEnd;
    let inputValue = event.target.value;
    let newValueStr = null;

    if (event.altKey) {
      event.preventDefault();
    }

    switch (event.which) {
      //up
      case 38:
        this.spin(event, 1);
        event.preventDefault();
        break;

      //down
      case 40:
        this.spin(event, -1);
        event.preventDefault();
        break;

      //left
      case 37:
        if (!this.isNumeralChar(inputValue.charAt(selectionStart - 1))) {
          event.preventDefault();
        }
        break;

      //right
      case 39:
        if (!this.isNumeralChar(inputValue.charAt(selectionStart))) {
          event.preventDefault();
        }
        break;

      //enter
      case 13:
        newValueStr = this.validateValue(this.parseValue(this.input.value));
        this.input.value = this.formatValue(newValueStr);
        this.input.setAttribute("aria-valuenow", newValueStr);
        this.updateModel(newValueStr);
        break;

      //backspace
      case 8: {
        event.preventDefault();

        if (selectionStart === selectionEnd) {
          const deleteChar = inputValue.charAt(selectionStart - 1);
          const { decimalCharIndex, decimalCharIndexWithoutPrefix } =
            this.getDecimalCharIndexes(inputValue);

          if (this.isNumeralChar(deleteChar)) {
            const decimalLength = this.getDecimalLength(inputValue);

            if (this._group.test(deleteChar)) {
              this._group.lastIndex = 0;
              newValueStr =
                inputValue.slice(0, selectionStart - 2) +
                inputValue.slice(selectionStart - 1);
            } else if (this._decimal.test(deleteChar)) {
              this._decimal.lastIndex = 0;

              if (decimalLength) {
                this.input.setSelectionRange(
                  selectionStart - 1,
                  selectionStart - 1
                );
              } else {
                newValueStr =
                  inputValue.slice(0, selectionStart - 1) +
                  inputValue.slice(selectionStart);
              }
            } else if (
              decimalCharIndex > 0 &&
              selectionStart > decimalCharIndex
            ) {
              const insertedText =
                this.isDecimalMode() &&
                (this.minFractionDigits || 0) < decimalLength
                  ? ""
                  : "0";
              newValueStr =
                inputValue.slice(0, selectionStart - 1) +
                insertedText +
                inputValue.slice(selectionStart);
            } else if (decimalCharIndexWithoutPrefix === 1) {
              newValueStr =
                inputValue.slice(0, selectionStart - 1) +
                "0" +
                inputValue.slice(selectionStart);
              newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
            } else {
              newValueStr =
                inputValue.slice(0, selectionStart - 1) +
                inputValue.slice(selectionStart);
            }
          }

          this.updateValue(event, newValueStr, null, "delete-single");
        } else {
          newValueStr = this.deleteRange(
            inputValue,
            selectionStart,
            selectionEnd
          );
          this.updateValue(event, newValueStr, null, "delete-range");
        }

        break;
      }

      // del
      case 46:
        event.preventDefault();

        if (selectionStart === selectionEnd) {
          const deleteChar = inputValue.charAt(selectionStart);
          const { decimalCharIndex, decimalCharIndexWithoutPrefix } =
            this.getDecimalCharIndexes(inputValue);

          if (this.isNumeralChar(deleteChar)) {
            const decimalLength = this.getDecimalLength(inputValue);

            if (this._group.test(deleteChar)) {
              this._group.lastIndex = 0;
              newValueStr =
                inputValue.slice(0, selectionStart) +
                inputValue.slice(selectionStart + 2);
            } else if (this._decimal.test(deleteChar)) {
              this._decimal.lastIndex = 0;

              if (decimalLength) {
                this.input.setSelectionRange(
                  selectionStart + 1,
                  selectionStart + 1
                );
              } else {
                newValueStr =
                  inputValue.slice(0, selectionStart) +
                  inputValue.slice(selectionStart + 1);
              }
            } else if (
              decimalCharIndex > 0 &&
              selectionStart > decimalCharIndex
            ) {
              const insertedText =
                this.isDecimalMode() &&
                (this.minFractionDigits || 0) < decimalLength
                  ? ""
                  : "0";
              newValueStr =
                inputValue.slice(0, selectionStart) +
                insertedText +
                inputValue.slice(selectionStart + 1);
            } else if (decimalCharIndexWithoutPrefix === 1) {
              newValueStr =
                inputValue.slice(0, selectionStart) +
                "0" +
                inputValue.slice(selectionStart + 1);
              newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
            } else {
              newValueStr =
                inputValue.slice(0, selectionStart) +
                inputValue.slice(selectionStart + 1);
            }
          }

          this.updateValue(event, newValueStr, null, "delete-back-single");
        } else {
          newValueStr = this.deleteRange(
            inputValue,
            selectionStart,
            selectionEnd
          );
          this.updateValue(event, newValueStr, null, "delete-range");
        }
        break;

      default:
        break;
    }

    this.aOnKeyDown.emit(event);
  }

  onInputKeyPress(event) {
    if (this.readonly) {
      return;
    }

    event.preventDefault();
    let code = event.which || event.keyCode;
    let char = String.fromCharCode(code);
    const isDecimalSign = this.isDecimalSign(char);
    const isMinusSign = this.isMinusSign(char);

    if ((48 <= code && code <= 57) || isMinusSign || isDecimalSign) {
      this.insert(event, char, { isDecimalSign, isMinusSign });
    }
  }

  onPaste(event) {
    if (!this.disabled && !this.readonly) {
      event.preventDefault();
      let data = (event.clipboardData || window["clipboardData"]).getData(
        "Text"
      );
      if (data) {
        let filteredData = this.parseValue(data);
        if (filteredData != null) {
          this.insert(event, filteredData.toString());
        }
      }
    }
  }

  allowMinusSign() {
    return this.min == null || this.min < 0;
  }

  isMinusSign(char) {
    if (this._minusSign.test(char) || char === "-") {
      this._minusSign.lastIndex = 0;
      return true;
    }

    return false;
  }

  isDecimalSign(char) {
    if (this._decimal.test(char)) {
      this._decimal.lastIndex = 0;
      return true;
    }

    return false;
  }

  isDecimalMode() {
    return this.mode === "decimal";
  }

  getDecimalCharIndexes(val) {
    let decimalCharIndex = val.search(this._decimal);
    this._decimal.lastIndex = 0;

    const filteredVal = val
      .replace(this._prefix, "")
      .trim()
      .replace(/\s/g, "")
      .replace(this._currency, "");
    const decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal);
    this._decimal.lastIndex = 0;

    return { decimalCharIndex, decimalCharIndexWithoutPrefix };
  }

  getCharIndexes(val) {
    const decimalCharIndex = val.search(this._decimal);
    this._decimal.lastIndex = 0;
    const minusCharIndex = val.search(this._minusSign);
    this._minusSign.lastIndex = 0;
    const suffixCharIndex = val.search(this._suffix);
    this._suffix.lastIndex = 0;
    const currencyCharIndex = val.search(this._currency);
    this._currency.lastIndex = 0;

    return {
      decimalCharIndex,
      minusCharIndex,
      suffixCharIndex,
      currencyCharIndex,
    };
  }

  insert(event, text, sign = { isDecimalSign: false, isMinusSign: false }) {
    const minusCharIndexOnText = text.search(this._minusSign);
    this._minusSign.lastIndex = 0;
    if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {
      return;
    }

    let selectionStart = this.input.selectionStart;
    let selectionEnd = this.input.selectionEnd;
    let inputValue = this.input.value.trim();
    const {
      decimalCharIndex,
      minusCharIndex,
      suffixCharIndex,
      currencyCharIndex,
    } = this.getCharIndexes(inputValue);
    let newValueStr;

    if (sign.isMinusSign) {
      if (selectionStart === 0) {
        newValueStr = inputValue;
        if (minusCharIndex === -1 || selectionEnd !== 0) {
          newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
        }

        this.updateValue(event, newValueStr, text, "insert");
      }
    } else if (sign.isDecimalSign) {
      if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
        this.updateValue(event, inputValue, text, "insert");
      } else if (
        decimalCharIndex > selectionStart &&
        decimalCharIndex < selectionEnd
      ) {
        newValueStr = this.insertText(
          inputValue,
          text,
          selectionStart,
          selectionEnd
        );
        this.updateValue(event, newValueStr, text, "insert");
      } else if (decimalCharIndex === -1 && this.maxFractionDigits) {
        newValueStr = this.insertText(
          inputValue,
          text,
          selectionStart,
          selectionEnd
        );
        this.updateValue(event, newValueStr, text, "insert");
      }
    } else {
      const maxFractionDigits =
        this.numberFormat.resolvedOptions().maximumFractionDigits;
      const operation =
        selectionStart !== selectionEnd ? "range-insert" : "insert";

      if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
        if (
          selectionStart + text.length - (decimalCharIndex + 1) <=
          maxFractionDigits
        ) {
          const charIndex =
            currencyCharIndex >= selectionStart
              ? currencyCharIndex - 1
              : suffixCharIndex >= selectionStart
              ? suffixCharIndex
              : inputValue.length;

          newValueStr =
            inputValue.slice(0, selectionStart) +
            text +
            inputValue.slice(selectionStart + text.length, charIndex) +
            inputValue.slice(charIndex);
          this.updateValue(event, newValueStr, text, operation);
        }
      } else {
        newValueStr = this.insertText(
          inputValue,
          text,
          selectionStart,
          selectionEnd
        );
        this.updateValue(event, newValueStr, text, operation);
      }
    }
  }

  insertText(value, text, start, end) {
    let textSplit = text === "." ? text : text.split(".");

    if (textSplit.length === 2) {
      const decimalCharIndex = value.slice(start, end).search(this._decimal);
      this._decimal.lastIndex = 0;
      return decimalCharIndex > 0
        ? value.slice(0, start) + this.formatValue(text) + value.slice(end)
        : value || this.formatValue(text);
    } else if (end - start === value.length) {
      return this.formatValue(text);
    } else if (start === 0) {
      return text + value.slice(end);
    } else if (end === value.length) {
      return value.slice(0, start) + text;
    } else {
      return value.slice(0, start) + text + value.slice(end);
    }
  }

  deleteRange(value, start, end) {
    let newValueStr;

    if (end - start === value.length) newValueStr = "";
    else if (start === 0) newValueStr = value.slice(end);
    else if (end === value.length) newValueStr = value.slice(0, start);
    else newValueStr = value.slice(0, start) + value.slice(end);

    return newValueStr;
  }

  initCursor() {
    let selectionStart = this.input.selectionStart;
    let inputValue = this.input.value;
    let valueLength = inputValue.length;
    let index = null;

    // remove prefix
    let prefixLength = (this.aPrefixChar || "").length;
    inputValue = inputValue.replace(this._prefix, "");
    selectionStart = selectionStart - prefixLength;

    let char = inputValue.charAt(selectionStart);
    if (this.isNumeralChar(char)) {
      return selectionStart + prefixLength;
    }

    //left
    let i = selectionStart - 1;
    while (i >= 0) {
      char = inputValue.charAt(i);
      if (this.isNumeralChar(char)) {
        index = i + prefixLength;
        break;
      } else {
        i--;
      }
    }

    if (index !== null) {
      this.input.setSelectionRange(index + 1, index + 1);
    } else {
      i = selectionStart;
      while (i < valueLength) {
        char = inputValue.charAt(i);
        if (this.isNumeralChar(char)) {
          index = i + prefixLength;
          break;
        } else {
          i++;
        }
      }

      if (index !== null) {
        this.input.setSelectionRange(index, index);
      }
    }

    return index || 0;
  }

  onInputClick() {
    if (!this.readonly) {
      this.initCursor();
    }
  }

  isNumeralChar(char) {
    if (
      char.length === 1 &&
      (this._numeral.test(char) ||
        this._decimal.test(char) ||
        this._group.test(char) ||
        this._minusSign.test(char))
    ) {
      this.resetRegex();
      return true;
    }

    return false;
  }

  resetRegex() {
    this._numeral.lastIndex = 0;
    this._decimal.lastIndex = 0;
    this._group.lastIndex = 0;
    this._minusSign.lastIndex = 0;
  }

  updateValue(event, valueStr, insertedValueStr, operation) {
    let currentValue = this.input.value;
    let newValue = null;

    if (valueStr != null) {
      newValue = this.parseValue(valueStr);
      newValue = !newValue && !this.allowEmpty ? 0 : newValue;
      this.updateInput(newValue, insertedValueStr, operation, valueStr);

      this.handleOnInput(event, currentValue, newValue);
    }
  }

  handleOnInput(event, currentValue, newValue) {
    if (this.isValueChanged(currentValue, newValue)) {
      this.aOnInput.emit({ originalEvent: event, value: newValue });
      if (this.value !== newValue) {
        this.value = newValue;
        this.valueChange.emit({
          originalEvent: event,
          value: Number(newValue),
        });
      }
    }
  }

  isValueChanged(currentValue, newValue) {
    if (newValue === null && currentValue !== null) {
      return true;
    }

    if (newValue != null) {
      let parsedCurrentValue =
        typeof currentValue === "string"
          ? this.parseValue(currentValue)
          : currentValue;
      return newValue !== parsedCurrentValue;
    }

    return false;
  }

  validateValue(value) {
    if (value === "-" || value == null) {
      return null;
    }

    if (this.min != null && value < this.min) {
      return this.min;
    }

    if (this.max != null && value > this.max) {
      return this.max;
    }

    return value;
  }

  updateInput(value, insertedValueStr, operation, valueStr) {
    insertedValueStr = insertedValueStr || "";

    let inputValue = this.input.value;
    let newValue = this.formatValue(value);
    let currentLength = inputValue.length;

    if (newValue !== valueStr) {
      newValue = this.concatValues(newValue, valueStr);
    }

    if (currentLength === 0) {
      this.input.value = newValue;
      this.input.setSelectionRange(0, 0);
      const index = this.initCursor();
      const selectionEnd = index + insertedValueStr.length;
      this.input.setSelectionRange(selectionEnd, selectionEnd);
    } else {
      let selectionStart = this.input.selectionStart;
      let selectionEnd = this.input.selectionEnd;
      if (this.maxlength && this.maxlength < newValue.length) {
        return;
      }

      this.input.value = newValue;
      let newLength = newValue.length;

      if (operation === "range-insert") {
        const startValue = this.parseValue(
          (inputValue || "").slice(0, selectionStart)
        );
        const startValueStr = startValue !== null ? startValue.toString() : "";
        const startExpr = startValueStr.split("").join(`(${this.groupChar})?`);
        const sRegex = new RegExp(startExpr, "g");
        sRegex.test(newValue);

        const tExpr = insertedValueStr.split("").join(`(${this.groupChar})?`);
        const tRegex = new RegExp(tExpr, "g");
        tRegex.test(newValue.slice(sRegex.lastIndex));

        selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
        this.input.setSelectionRange(selectionEnd, selectionEnd);
      } else if (newLength === currentLength) {
        if (operation === "insert" || operation === "delete-back-single")
          this.input.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
        else if (operation === "delete-single")
          this.input.setSelectionRange(selectionEnd - 1, selectionEnd - 1);
        else if (operation === "delete-range" || operation === "spin")
          this.input.setSelectionRange(selectionEnd, selectionEnd);
      } else if (operation === "delete-back-single") {
        let prevChar = inputValue.charAt(selectionEnd - 1);
        let nextChar = inputValue.charAt(selectionEnd);
        let diff = currentLength - newLength;
        let isGroupChar = this._group.test(nextChar);

        if (isGroupChar && diff === 1) {
          selectionEnd += 1;
        } else if (!isGroupChar && this.isNumeralChar(prevChar)) {
          selectionEnd += -1 * diff + 1;
        }

        this._group.lastIndex = 0;
        this.input.setSelectionRange(selectionEnd, selectionEnd);
      } else if (inputValue === "-" && operation === "insert") {
        this.input.setSelectionRange(0, 0);
        const index = this.initCursor();
        const selectionEnd = index + insertedValueStr.length + 1;
        this.input.setSelectionRange(selectionEnd, selectionEnd);
      } else {
        selectionEnd = selectionEnd + (newLength - currentLength);
        this.input.setSelectionRange(selectionEnd, selectionEnd);
      }
    }

    this.input.setAttribute("aria-valuenow", value);
  }

  concatValues(val1, val2) {
    if (val1 && val2) {
      let decimalCharIndex = val2.search(this._decimal);
      this._decimal.lastIndex = 0;

      return decimalCharIndex !== -1
        ? val1.split(this._decimal)[0] + val2.slice(decimalCharIndex)
        : val1;
    }

    return val1;
  }

  getDecimalLength(value) {
    if (value) {
      const valueSplit = value.split(this._decimal);

      if (valueSplit.length === 2) {
        return valueSplit[1]
          .replace(this._suffix, "")
          .trim()
          .replace(/\s/g, "")
          .replace(this._currency, "").length;
      }
    }

    return 0;
  }

  onInputFocus(event) {
    this.focused = true;
    this.aOnFocus.emit(event);
  }

  onInputBlur(event) {
    this.focused = false;

    let newValue = this.validateValue(this.parseValue(this.input.value));
    this.input.value = this.formatValue(newValue);
    this.input.setAttribute("aria-valuenow", newValue);
    this.updateModel(newValue);

    this.aOnBlur.emit(event);
  }

  formattedValue() {
    const val = !this.value && !this.allowEmpty ? 0 : this.value;
    return this.formatValue(val);
  }

  updateModel(value) {
    if (Number(this.value) !== value) {
      this.value = value;
    }
  }

  writeValue(value: any): void {
    this.value = value;
    // this.cd.markForCheck();
  }

  setDisabledState(val: boolean): void {
    this.disabled = val;
    // this.cd.markForCheck();
  }

  get filled() {
    return this.value != null && this.value.toString().length > 0;
  }

  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  getFormatter() {
    return this.numberFormat;
  }

  render() {
    return (
      <Host>
        <div class="any-element">
          <span
            style={this.anyStyle}
            class={
              "any-component any-inputnumber" +
              (this.showButtons && this.buttonLayout === "stacked"
                ? " any-inputnumber-buttons-stacked"
                : "") +
              (this.showButtons && this.buttonLayout === "horizontal"
                ? " any-inputnumber-buttons-horizontal"
                : "") +
              (this.showButtons && this.buttonLayout === "vertical"
                ? " any-inputnumber-buttons-vertical"
                : "") +
              (this.styleClass ? " " + this.styleClass : "")
            }
          >
            <any-input-text
              exportparts="any-inputtext"
              inputStyle={this.inputStyle}
              label={this.label}
              inputId={this.inputId}
              value={this.formattedValue()}
              placeholder={this.placeholder}
              disabled={this.disabled}
              readonly={this.readonly}
              size={this.size}
              maxlength={this.maxlength}
              anyTabIndex={this.anyTabIndex}
              aTitle={this.aTitle}
              anyAriaRequired={this.anyAriaRequired}
              required={this.required}
              autocomplete={this.autocomplete}
              inputClass="any-inputnumber-input"
              inputHolderClass={
                this.showButtons ? "any-inputnumber-buttons" : ""
              }
              inputWrapperClass={
                (this.inputWrapperClass ? this.inputWrapperClass : "") +
                (this.showButtons && this.buttonLayout === "stacked"
                  ? " any-inputnumber-buttons-stacked"
                  : "") +
                (this.showButtons && this.buttonLayout === "horizontal"
                  ? " any-inputnumber-buttons-horizontal"
                  : "") +
                (this.showButtons && this.buttonLayout === "vertical"
                  ? " any-inputnumber-buttons-vertical"
                  : "")
              }
            >
              {this.showButtons && this.buttonLayout === "stacked" && (
                <span class={"any-inputnumber-button-group"} slot="end">
                  <span
                    class={"any-inputnumber-button any-inputnumber-button-up"}
                  >
                    <any-button
                      anyStyle={{ display: "flex" }}
                      icon={this.incrementButtonIcon}
                      disabled={this.disabled}
                    ></any-button>
                  </span>
                  <span
                    class={"any-inputnumber-button any-inputnumber-button-down"}
                  >
                    <any-button
                      anyStyle={{ display: "flex" }}
                      icon={this.decrementButtonIcon}
                      disabled={this.disabled}
                    ></any-button>
                  </span>
                </span>
              )}
              {this.showButtons && this.buttonLayout !== "stacked" && (
                <span
                  slot="start"
                  class={
                    "any-inputnumber-button" +
                    (this.buttonLayout === "vertical"
                      ? " any-inputnumber-button-up"
                      : " any-inputnumber-button-down")
                  }
                >
                  <any-button
                    icon={
                      this.buttonLayout === "vertical"
                        ? this.incrementButtonIcon
                        : this.decrementButtonIcon
                    }
                    styleClass={this.decrementButtonClass}
                    disabled={this.disabled}
                  ></any-button>
                </span>
              )}
              {this.showButtons && this.buttonLayout !== "stacked" && (
                <span
                  slot="end"
                  class={
                    "any-inputnumber-button" +
                    (this.buttonLayout === "vertical"
                      ? " any-inputnumber-button-down"
                      : " any-inputnumber-button-up")
                  }
                >
                  <any-button
                    icon={
                      this.buttonLayout === "vertical"
                        ? this.decrementButtonIcon
                        : this.incrementButtonIcon
                    }
                    styleClass={this.incrementButtonClass}
                    disabled={this.disabled}
                  ></any-button>
                </span>
              )}
            </any-input-text>
          </span>
        </div>
      </Host>
    );
  }
}

let inputIds = 0;
