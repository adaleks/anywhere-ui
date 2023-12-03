import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "input-number-buttons",
  styleUrl: "input-number-buttons.scss",
  shadow: false,
  scoped: true,
})
export class InputNumberButtons {
  @Prop() textId: string;

  @Prop() textTitle: string;

  code: any = {
    basic: `

<any-input-number id="inputNumberStacked" value="20" label="Stacked" show-buttons="true" mode="currency" currency="USD"></any-input-number>
<any-input-number id="inputNumberMinMaxBoundaries" value="10.5" label="Min-Max Boundaries" show-buttons="true" min="0" max="100"></any-input-number>
<any-input-number id="inputNumberHorizontalWithStep" value="25" label="Horizontal with Step" show-buttons="true" mode="currency" currency="EUR"
  button-layout="horizontal" step="0.25" increment-button-icon="fa-solid:plus" decrement-button-icon="fa-solid:minus" increment-button-class="any-button-success" decrement-button-icon="any-button-danger"></any-input-number>

`,

    html: `

<div class="full-card flex flex-wrap gap-3 any-fluid">
  <div class="flex-auto">
    <any-input-number id="inputNumberStacked" value="20" label="Stacked" show-buttons="true" mode="currency" currency="USD"></any-input-number>
  </div>
  <div class="flex-auto">
    <any-input-number id="inputNumberMinMaxBoundaries" value="10.5" label="Min-Max Boundaries" show-buttons="true" min="0" max="100"></any-input-number>
  </div>
  <div class="flex-auto">
    <any-input-number id="inputNumberHorizontalWithStep" value="25" label="Horizontal with Step" show-buttons="true" mode="currency" currency="EUR"
      button-layout="horizontal" step="0.25" increment-button-icon="fa-solid:plus" decrement-button-icon="fa-solid:minus" increment-button-class="any-button-success" decrement-button-icon="any-button-danger"></any-input-number>
  </div>
</div>

`,

    javascript: `

let inputNumberStacked = document.getElementById("inputNumberStacked");
let inputNumberMinMaxBoundaries = document.getElementById("inputNumberMinMaxBoundaries");
let inputNumberHorizontalWithStep = document.getElementById("inputNumberHorizontalWithStep");

const inputStyle = {
  width: "100%",
};
document.querySelectorAll(".in").forEach((inputNumberComp: any) => {
  inputNumberComp.inputWrapperClass = "any-field block";
  inputNumberComp.inputStyle = inputStyle;
});

inputNumberStacked.addEventListener("valueChange", (event) => {
  console.log("inputNumberStacked changed:", event);
});
inputNumberMinMaxBoundaries.addEventListener("valueChange", (event) => {
  console.log("inputNumberMinMaxBoundaries changed:", event);
});
inputNumberHorizontalWithStep.addEventListener("valueChange", (event) => {
  console.log("inputNumberHorizontalWithStep changed:", event);
});

`,
  };

  componentDidLoad() {
    const inputStyle = {
      width: "100%",
    };
    document.querySelectorAll(".in").forEach((inputNumberComp: any) => {
      inputNumberComp.inputWrapperClass = "any-field block";
      inputNumberComp.inputStyle = inputStyle;
    });
  }

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>
              Spinner buttons are enabled using the showButtons options and
              layout is defined with the buttonLayout. Default value is
              "stacked" whereas "horizontal" and "stacked" are alternatives.
              Note that even there are no buttons, up and down arrow keys can be
              used to spin the values with keyboard.
            </p>
          </app-docsectiontext>
          <div class="full-card flex flex-wrap gap-3 any-fluid">
            <div class="flex-auto">
              <any-input-number
                class="in"
                id="inputNumberStacked"
                value={20}
                label="Stacked"
                showButtons={true}
                mode="currency"
                currency="USD"
              ></any-input-number>
            </div>
            <div class="flex-auto">
              <any-input-number
                class="in"
                id="inputNumberMinMaxBoundaries"
                value={10.5}
                label="Min-Max Boundaries"
                showButtons={true}
                min={0}
                max={100}
              ></any-input-number>
            </div>
            <div class="flex-auto">
              <any-input-number
                class="in"
                id="inputNumberHorizontalWithStep"
                value={25}
                label="Horizontal with Step"
                showButtons={true}
                mode="currency"
                currency="EUR"
                buttonLayout="horizontal"
                step={0.25}
                incrementButtonIcon="fa-solid:plus"
                decrementButtonIcon="fa-solid:minus"
                decrementButtonClass="any-button-danger"
                incrementButtonClass="any-button-success"
              ></any-input-number>
            </div>
          </div>
          <app-code code={this.code} selector="input-number-buttons"></app-code>
        </section>
      </Host>
    );
  }
}
