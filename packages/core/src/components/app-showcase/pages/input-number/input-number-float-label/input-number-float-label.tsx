import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "input-number-float-label",
  styleUrl: "input-number-float-label.scss",
  shadow: false,
  scoped: true,
})
export class InputNumberFloatLabel {
  @Prop() textId: string;

  @Prop() textTitle: string;

  code: any = {
    basic: `

<any-input-number id="inputNumberFloatLabel" class="in" label="Number" float-label="true"></any-input-number>

`,

    html: `

<div class="full-card flex justify-content-center">
  <any-input-number id="inputNumberFloatLabel" class="in" label="Number" float-label="true"></any-input-number>
</div>

`,

    javascript: `

let inputNumberFloatLabel = document.getElementById("inputNumberFloatLabel");

inputNumberFloatLabel.addEventListener("valueChange", (event) => {
  console.log("inputNumberFloatLabel changed:", event);
});

`,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>
              A floating label appears on top of the input field when focused.
            </p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center">
            <any-input-number
              class="in"
              id="inputNumberFloatLabel"
              label="Number"
              floatLabel={true}
            ></any-input-number>
          </div>
          <app-code
            code={this.code}
            selector="input-number-float-label"
          ></app-code>
        </section>
      </Host>
    );
  }
}
