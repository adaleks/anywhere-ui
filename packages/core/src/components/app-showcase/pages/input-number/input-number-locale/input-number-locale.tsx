import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "input-number-locale",
  styleUrl: "input-number-locale.scss",
  shadow: false,
  scoped: true,
})
export class InputNumberLocale {
  @Prop() textId: string;

  @Prop() textTitle: string;

  code: any = {
    basic: `

<any-input-number id="inputNumberUserLocale" value="151351" label="User Locale" min-fraction-digits="2"></any-input-number>
<any-input-number id="inputNumberUnitedStatesLocale" value="115744" label="United States Locale" min-fraction-digits="2" mode="decimal" locale="en-US"></any-input-number>
<any-input-number id="inputNumberMinGermanLocale" value="635524" label="German Locale" min-fraction-digits="2" mode="decimal" locale="de-DE"></any-input-number>
<any-input-number id="inputNumberIndianLocale" value="732762" label="Indian Locale" min-fraction-digits="2" mode="decimal" locale="en-IN"></any-input-number>

`,

    html: `

<div class="full-card flex flex-wrap gap-3 any-fluid">
  <div class="flex-auto">
    <any-input-number id="inputNumberUserLocale" class="in" value="151351" label="User Locale"></any-input-number>
  </div>
  <div class="flex-auto">
    <any-input-number id="inputNumberUnitedStatesLocale" class="in" value="115744" label="United States Locale" min-fraction-digits="2" mode="decimal" locale="en-US"></any-input-number>
  </div>
  <div class="flex-auto">
    <any-input-number id="inputNumberMinGermanLocale" class="in" value="635524" label="German Locale" min-fraction-digits="2" mode="decimal" locale="de-DE"></any-input-number>
  </div>
  <div class="flex-auto">
    <any-input-number id="inputNumberIndianLocale" class="in" value="732762" label="Indian Locale" min-fraction-digits="2" mode="decimal" locale="en-IN"></any-input-number>
  </div>
</div>

`,

    javascript: `

let inputNumberUserLocale = document.getElementById("inputNumberUserLocale");
let inputNumberUnitedStatesLocale = document.getElementById("inputNumberUnitedStatesLocale");
let inputNumberMinGermanLocale = document.getElementById("inputNumberMinGermanLocale");
let inputNumberIndianLocale document.getElementById("inputNumberIndianLocale");

const inputStyle = {
  width: "100%",
};
document.querySelectorAll(".in").forEach((inputNumberComp: any) => {
  inputNumberComp.inputWrapperClass = "any-field block";
  inputNumberComp.inputStyle = inputStyle;
});

inputNumberUserLocale.addEventListener("valueChange", (event) => {
  console.log("inputNumberUserLocale changed:", event);
});
inputNumberUnitedStatesLocale.addEventListener("valueChange", (event) => {
  console.log("inputNumberUnitedStatesLocale changed:", event);
});
inputNumberMinGermanLocale.addEventListener("valueChange", (event) => {
  console.log("inputNumberMinGermanLocale changed:", event);
});
inputNumberIndianLocale("valueChange", (event) => {
  console.log("inputNumberIndianLocale:", event);
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
              Localization information such as grouping and decimal symbols are
              defined with the locale property which defaults to the user
              locale.
            </p>
          </app-docsectiontext>
          <div class="full-card flex flex-wrap gap-3 any-fluid">
            <div class="flex-auto">
              <any-input-number
                class="in"
                id="inputNumberUserLocale"
                value={151351}
                label="User Locale"
                min-fraction-digits={2}
              ></any-input-number>
            </div>
            <div class="flex-auto">
              <any-input-number
                class="in"
                id="inputNumberUnitedStatesLocale"
                value={115744}
                label="United States Locale"
                min-fraction-digits={2}
                mode="decimal"
                locale="en-US"
              ></any-input-number>
            </div>
            <div class="flex-auto">
              <any-input-number
                class="in"
                id="inputNumberMinGermanLocale"
                value={635524}
                label="German Locale"
                min-fraction-digits={2}
                mode="decimal"
                locale="de-DE"
              ></any-input-number>
            </div>
            <div class="flex-auto">
              <any-input-number
                class="in"
                id="inputNumberIndianLocale"
                value={732762}
                label="Indian Locale"
                min-fraction-digits={2}
                mode="decimal"
                locale="en-IN"
              ></any-input-number>
            </div>
          </div>
          <app-code code={this.code} selector="input-number-locale"></app-code>
        </section>
      </Host>
    );
  }
}
