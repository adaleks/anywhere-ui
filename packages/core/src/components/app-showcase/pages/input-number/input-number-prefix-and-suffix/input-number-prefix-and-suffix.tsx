import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "input-number-prefix-and-suffix",
  styleUrl: "input-number-prefix-and-suffix.scss",
  shadow: false,
  scoped: true,
})
export class InputNumberPrefixAndSuffix {
  @Prop() textId: string;

  @Prop() textTitle: string;

  code: any = {
    basic: `

<any-input-number id="inputNumberMile" value="20" label="Mile" a-suffix=" ml"></any-input-number>
<any-input-number id="inputNumberPercent" value="50" label="Percent" a-prefix="%"></any-input-number>
<any-input-number id="inputNumberExpiry" value="10" label="Expiry" a-prefix="Expires in " a-suffix=" days"></any-input-number>
<any-input-number id="inputNumberTemperature" value="20" label="Temperature" a-prefix="↑ " a-suffix="℃" min="0" max="40"></any-input-number>

`,

    html: `

<div class="full-card flex flex-wrap gap-3 any-fluid">
  <div class="flex-auto">
    <any-input-number id="inputNumberMile" class="in" value="20" label="Mile" a-suffix=" ml"></any-input-number>
  </div>
  <div class="flex-auto">
    <any-input-number id="inputNumberPercent" class="in" value="50" label="Percent" a-prefix="%"></any-input-number>
  </div>
  <div class="flex-auto">
    <any-input-number id="inputNumberExpiry" class="in" value="10" label="Expiry" a-prefix="Expires in " a-suffix=" days"></any-input-number>
  </div>
  <div class="flex-auto">
    <any-input-number id="inputNumberTemperature" class="in" value="20" label="Temperature" a-prefix="↑ " a-suffix="℃" min="0" max="40"></any-input-number>
  </div>
</div>

`,

    javascript: `

let inputNumberMile = document.getElementById("inputNumberMile");
let inputNumberPercent = document.getElementById("inputNumberPercent");
let inputNumberExpiry = document.getElementById("inputNumberExpiry");
let inputNumberTemperature document.getElementById("inputNumberTemperature");

const inputStyle = {
  width: "100%",
};
document.querySelectorAll(".in").forEach((inputNumberComp: any) => {
  inputNumberComp.inputWrapperClass = "any-field block";
  inputNumberComp.inputStyle = inputStyle;
});

inputNumberMile.addEventListener("valueChange", (event) => {
  console.log("inputNumberMile changed:", event);
});
inputNumberPercent.addEventListener("valueChange", (event) => {
  console.log("inputNumberPercent changed:", event);
});
inputNumberExpiry.addEventListener("valueChange", (event) => {
  console.log("inputNumberExpiry changed:", event);
});
inputNumberTemperature("valueChange", (event) => {
  console.log("inputNumberTemperature:", event);
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
              Custom texts e.g. units can be placed before or after the input
              section with the a-prefix and a-suffix properties.
            </p>
          </app-docsectiontext>
          <div class="full-card flex flex-wrap gap-3 any-fluid">
            <div class="flex-auto">
              <any-input-number
                class="in"
                id="inputNumberMile"
                value={20}
                label="Mile"
                aSuffix=" ml"
              ></any-input-number>
            </div>
            <div class="flex-auto">
              <any-input-number
                class="in"
                id="inputNumberPercent"
                value={50}
                label="Percent"
                aPrefix="%"
              ></any-input-number>
            </div>
            <div class="flex-auto">
              <any-input-number
                class="in"
                id="inputNumberExpiry"
                value={10}
                label="Expiry"
                aPrefix="Expires in "
                aSuffix=" days"
              ></any-input-number>
            </div>
            <div class="flex-auto">
              <any-input-number
                class="in"
                id="inputNumberTemperature"
                value={20}
                label="Temperature"
                aPrefix="↑ "
                aSuffix="℃"
                min={0}
                max={40}
              ></any-input-number>
            </div>
          </div>
          <app-code
            code={this.code}
            selector="input-number-prefix-and-suffix"
          ></app-code>
        </section>
      </Host>
    );
  }
}
