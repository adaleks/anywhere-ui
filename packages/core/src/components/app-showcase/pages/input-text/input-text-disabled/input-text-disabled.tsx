import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "input-text-disabled",
  styleUrl: "input-text-disabled.scss",
  shadow: false,
  scoped: true,
})
export class InputTextDisabled {
  @Prop() textId: string;

  @Prop() textTitle: string;

  code: any = {
    basic: `

<any-input-text id="inputTextDisabled" disabled="true"></any-input-text>

`,

    html: `

<div class="full-card flex justify-content-center">
    <any-input-text id="inputTextDisabled" disabled="true"></any-input-text>
</div>

`,

    javascript: `

let inputTextDisabled = document.getElementById("inputTextDisabled");

inputTextDisabled.addEventListener("valueChange", (event) => {
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
              When disabled is present, the element cannot be edited and
              focused.
            </p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center">
            <any-input-text
              id="inputTextDisabled"
              disabled={true}
            ></any-input-text>
          </div>
          <app-code code={this.code} selector="input-text-disabled"></app-code>
        </section>
      </Host>
    );
  }
}
