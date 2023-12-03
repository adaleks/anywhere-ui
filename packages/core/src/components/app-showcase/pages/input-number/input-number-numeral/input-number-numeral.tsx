import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "input-number-numeral",
  styleUrl: "input-number-numeral.scss",
  shadow: false,
  scoped: true,
})
export class InputNumberNumeral {
  @Prop() textId: string;

  @Prop() textTitle: string;

  code: any = {
    basic: `

<any-input-number id="inputNumberIntegerOnly" value="42733" label="Integer Only"></any-input-number>
<any-input-number id="inputNumberWithoutGrouping" value="58446" label="Without Grouping" use-grouping="false"></any-input-number>
<any-input-number id="inputNumberMinMaxFractionDigits" value="2351.35" label="Min-Max Fraction Digits" use-grouping="false" min-fraction-digits="2" max-fraction-digits="5"></any-input-number>
<any-input-number id="inputNumberMinMaxBoundaries" value="50" label="Min-Max Boundaries" min="0" max="100"></any-input-number>

`,

    html: `

<div class="full-card flex flex-wrap gap-3 any-fluid">
  <div class="flex-auto">
    <any-input-number id="inputNumberIntegerOnly" class="in" value="42733" label="Integer Only"></any-input-number>
  </div>
  <div class="flex-auto">
    <any-input-number id="inputNumberWithoutGrouping" class="in" value="58446" label="Without Grouping" use-grouping="false"></any-input-number>
  </div>
  <div class="flex-auto">
    <any-input-number id="inputNumberMinMaxFractionDigits" class="in" value="2351.35" label="Min-Max Fraction Digits" use-grouping="false" min-fraction-digits="2" max-fraction-digits="5"></any-input-number>
  </div>
  <div class="flex-auto">
    <any-input-number id="inputNumberMinMaxBoundaries" class="in" value="50" label="Min-Max Boundaries" min="0" max="100"></any-input-number>
  </div>
</div>

`,

    javascript: `

let inputNumberIntegerOnly = document.getElementById("inputNumberIntegerOnly");
let inputNumberWithoutGrouping = document.getElementById("inputNumberWithoutGrouping");
let inputNumberMinMaxFractionDigits = document.getElementById("inputNumberMinMaxFractionDigits");
let inputNumberMinMaxBoundaries = document.getElementById("inputNumberMinMaxBoundaries");

const inputStyle = {
  width: "100%",
};
document.querySelectorAll(".in").forEach((inputNumberComp: any) => {
  inputNumberComp.inputWrapperClass = "any-field block";
  inputNumberComp.inputStyle = inputStyle;
});

inputNumberIntegerOnly.addEventListener("valueChange", (event) => {
  console.log("inputNumberIntegerOnly changed:", event);
});
inputNumberWithoutGrouping.addEventListener("valueChange", (event) => {
  console.log("inputNumberWithoutGrouping changed:", event);
});
inputNumberMinMaxFractionDigits.addEventListener("valueChange", (event) => {
  console.log("inputNumberMinMaxFractionDigits changed:", event);
});
inputNumberMinMaxBoundaries.addEventListener("valueChange", (event) => {
  console.log("inputNumberMinMaxBoundaries changed:", event);
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
              InputNumber is used as a controlled input with value property.
            </p>
          </app-docsectiontext>
          <div class="full-card flex flex-wrap gap-3 any-fluid">
            <div class="flex-auto">
              <any-input-number
                class="in"
                id="inputNumberIntegerOnly"
                value={42733}
                label="Integer Only"
              ></any-input-number>
            </div>
            <div class="flex-auto">
              <any-input-number
                class="in"
                id="inputNumberWithoutGrouping"
                value={58446}
                label="Without Grouping"
                useGrouping={false}
              ></any-input-number>
            </div>
            <div class="flex-auto">
              <any-input-number
                class="in"
                id="inputNumberMinMaxFractionDigits"
                value={2351.35}
                label="Min-Max Fraction Digits"
                useGrouping={false}
                minFractionDigits={2}
                maxFractionDigits={5}
              ></any-input-number>
            </div>
            <div class="flex-auto">
              <any-input-number
                class="in"
                id="inputNumberMinMaxBoundaries"
                value={50}
                label="Min-Max Boundaries"
                mode="decimal"
                min={0}
                max={100}
              ></any-input-number>
            </div>
          </div>
          <app-code code={this.code} selector="input-number-numeral"></app-code>
        </section>
      </Host>
    );
  }
}
