import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "input-text-basic",
  styleUrl: "input-text-basic.scss",
  shadow: false,
  scoped: true,
})
export class InputTextBasic {
  @Prop() textId: string;

  @Prop() textTitle: string;

  code: any = {
    basic: `

<any-input-text id="inputTextBasic"></any-input-text>

`,

    html: `

<div class="full-card flex justify-content-center">
    <any-input-text id="inputTextBasic"></any-input-text>
</div>

`,

    javascript: `

let inputTextBasic = document.getElementById("inputTextBasic");

inputTextBasic.addEventListener("valueChange", (event) => {
  console.log("InputText changed:", event);
});

`,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>InputText renders a text field to enter data.</p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center">
            <any-input-text id="inputTextBasic"></any-input-text>
          </div>
          <app-code code={this.code} selector="input-text-basic"></app-code>
        </section>
      </Host>
    );
  }
}
