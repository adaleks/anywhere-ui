import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  /*Listen,*/
  Prop,
  Watch,
  h,
} from "@stencil/core";

import { RadioGroupChangeEventDetail } from "../../interfaces";
// import { renderHiddenInput } from "../../utils/helpers";

@Component({
  tag: "any-radio-group",
  styleUrl: "radio-group.scss",
  // shadow: true,
})
export class RadioGroup implements ComponentInterface {
  private inputId = `any-rg-${radioGroupIds++}`;
  private labelId = `${this.inputId}-lbl`;
  private label?: HTMLElement | null;

  @Element() element!: HTMLElement;

  /**
   * If `true`, the radios can be deselected.
   */
  @Prop() allowEmptySelection = false;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * the value of the radio group.
   */
  @Prop({ mutable: true }) value?: any | null;

  @Watch("value")
  valueChanged(value: any | undefined) {
    this.setRadioTabindex(value);

    this.valueChange.emit({ value });
  }

  /**
   * Emitted when the value has changed.
   */
  @Event() valueChange!: EventEmitter<RadioGroupChangeEventDetail>;

  componentDidLoad() {
    this.setRadioTabindex(this.value);
  }

  private setRadioTabindex = (value: any | undefined) => {
    const radios = this.getRadios();

    // Get the first radio that is not disabled and the checked one
    const first = radios.find((radio) => !radio.disabled);
    const checked = radios.find(
      (radio) => radio.value === value && !radio.disabled
    );

    if (!first && !checked) {
      return;
    }

    // If an enabled checked radio exists, set it to be the focusable radio
    // otherwise we default to focus the first radio
    // const focusable = checked || first;

    // for (const radio of radios) {
    //   const tabindex = radio === focusable ? 0 : -1;
    //   radio.setButtonTabindex(tabindex);
    // }
  };

  private getRadios(): HTMLAnyRadioButtonElement[] {
    return Array.from(this.element.querySelectorAll("any-radio-button"));
  }

  private onClick = (ev: Event) => {
    ev.preventDefault();

    const selectedRadio =
      ev.target && (ev.target as HTMLElement).closest("any-radio-button");

    if (selectedRadio) {
      const currentValue = this.value;
      const newValue = selectedRadio.value;
      if (newValue !== currentValue && !selectedRadio.disabled) {
        this.value = newValue;
      } else if (this.allowEmptySelection) {
        this.value = undefined;
      }
      selectedRadio.setFocus(ev);
    }
  };

  render() {
    const { name, labelId, label } = this;

    return (
      <Host
        role="radiogroup"
        aria-labelledby={label ? labelId : null}
        onClick={this.onClick}
        name={name}
      ></Host>
    );
  }
}

let radioGroupIds = 0;
