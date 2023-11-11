import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "input-text-float-label",
  styleUrl: "input-text-float-label.scss",
  shadow: false,
  scoped: true,
})
export class InputTextFloatLabel {
  @Prop() textId: string;

  @Prop() textTitle: string;

  code: any = {
    basic: `

<any-input-text id="inputTextFloatLabel" label="Username" float-label="true"></any-input-text>

`,

    html: `

<div class="full-card flex justify-content-center">
    <any-input-text id="inputTextFloatLabel" label="Username" float-label="true"></any-input-text>
</div>

`,

    javascript: `

let inputTextFloatLabel = document.getElementById("inputTextFloatLabel");

inputTextFloatLabel.addEventListener("valueChange", (event) => {
  console.log("InputText changed:", event);
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
            <any-input-text
              id="inputTextFloatLabel"
              label="Username"
              floatLabel={true}
            ></any-input-text>
          </div>
          <app-code
            code={this.code}
            selector="input-text-float-label"
          ></app-code>
        </section>
      </Host>
    );
  }
}
