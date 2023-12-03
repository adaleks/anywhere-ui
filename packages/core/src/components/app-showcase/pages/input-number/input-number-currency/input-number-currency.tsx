import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "input-number-currency",
  styleUrl: "input-number-currency.scss",
  shadow: false,
  scoped: true,
})
export class InputNumberCurrency {
  @Prop() textId: string;

  @Prop() textTitle: string;

  code: any = {
    basic: `

<any-input-number id="inputNumberCurrencyUnitedStates" value="1500" label="United States" mode="currency" currency="USD" locale="en-US"></any-input-number>
<any-input-number id="inputNumberCurremcyGermany" value="2500" label="Germany" mode="currency" currency="USD" locale="de-DE"></any-input-number>
<any-input-number id="inputNumberCurremcyIndia" value="4250" label="India" mode="currency" currency="INR" currency-display="code" locale="en-IN"></any-input-number>
<any-input-number id="inputNumberCurremcyJapan" value="5002" label="Japan" mode="currency" currency="JPY" locale="jp-JP"></any-input-number>

`,

    html: `

<div class="full-card flex flex-wrap gap-3 any-fluid">
  <div class="flex-auto">
    <any-input-number id="inputNumberCurrencyUnitedStates" class="in" value="1500" label="United States" mode="currency" currency="USD" locale="en-US"></any-input-number>
  </div>
  <div class="flex-auto">
    <any-input-number id="inputNumberCurremcyGermany" class="in" value="2500" label="Germany" mode="currency" currency="USD" locale="de-DE"></any-input-number>
  </div>
  <div class="flex-auto">
    <any-input-number id="inputNumberCurremcyIndia" class="in" value="4250" label="India" mode="currency" currency="INR" currency-display="code" locale="en-IN"></any-input-number>
  </div>
  <div class="flex-auto">
    <any-input-number id="inputNumberCurremcyJapan" class="in" value="5002" label="Japan" mode="currency" currency="JPY" locale="jp-JP"></any-input-number>
  </div>
</div>

`,

    javascript: `

let inputNumberCurrencyUnitedStates = document.getElementById("inputNumberCurrencyUnitedStates");
let inputNumberCurremcyGermany = document.getElementById("inputNumberCurremcyGermany");
let inputNumberCurrencyIndia = document.getElementById("inputNumberCurrencyIndia");
let inputNumberCurremcyJapan document.getElementById("inputNumberCurremcyJapan");

const inputStyle = {
  width: "100%",
};
document.querySelectorAll(".in").forEach((inputNumberComp: any) => {
  inputNumberComp.inputWrapperClass = "any-field block";
  inputNumberComp.inputStyle = inputStyle;
});

inputNumberCurrencyUnitedStates.addEventListener("valueChange", (event) => {
  console.log("inputNumberCurrencyUnitedStates changed:", event);
});
inputNumberCurremcyGermany.addEventListener("valueChange", (event) => {
  console.log("inputNumberCurremcyGermany changed:", event);
});
inputNumberCurrencyIndia.addEventListener("valueChange", (event) => {
  console.log("inputNumberCurrencyIndia changed:", event);
});
inputNumberCurremcyJapan("valueChange", (event) => {
  console.log("inputNumberCurremcyJapan:", event);
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
              Currency formatting is specified by setting the mode option to
              currency and currency property. In addition currencyDisplay option
              allows how the currency is displayed, valid values are "symbol"
              (default) or "code".
            </p>
          </app-docsectiontext>
          <div class="full-card flex flex-wrap gap-3 any-fluid">
            <div class="flex-auto">
              <any-input-number
                class="in"
                id="inputNumberCurrencyUnitedStates"
                value={1500}
                mode="currency"
                currency="USD"
                locale="en-US"
                label="United Stated"
              ></any-input-number>
            </div>
            <div class="flex-auto">
              <any-input-number
                class="in"
                id="inputNumberCurremcyGermany"
                value={2500}
                mode="currency"
                currency="EUR"
                locale="de-DE"
                label="Germany"
              ></any-input-number>
            </div>
            <div class="flex-auto">
              <any-input-number
                class="in"
                id="inputNumberCurrencyIndia"
                value={4250}
                mode="currency"
                currencyDisplay="code"
                currency="INR"
                locale="en-IN"
                label="India"
              ></any-input-number>
            </div>
            <div class="flex-auto">
              <any-input-number
                class="in"
                id="inputNumberCurremcyJapan"
                value={5002}
                mode="currency"
                currency="JPY"
                locale="jp-JP"
                label="Japan"
              ></any-input-number>
            </div>
          </div>
          <app-code
            code={this.code}
            selector="input-number-currency"
          ></app-code>
        </section>
      </Host>
    );
  }
}
