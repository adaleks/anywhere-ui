import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "input-textarea-disabled",
  styleUrl: "input-textarea-disabled.scss",
  shadow: false,
  scoped: true,
})
export class InputTextareaDisabled {
  @Prop() textId: string;

  @Prop() textTitle: string;

  code: any = {
    basic: `

<any-input-textarea id="inputTextareaDisabled" rows="5" cols="30" disabled="true"></any-input-textarea>

`,

    html: `

<div class="full-card flex justify-content-center">
    <any-input-textarea id="inputTextareaDisabled" rows="5" cols="30" disabled="true"></any-input-textarea>
</div>

`,

    javascript: `

let inputTextareaDisabled = document.getElementById("inputTextareaDisabled");

inputTextareaDisabled.addEventListener("valueChange", (event) => {
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
            <any-input-textarea
              id="inputTextareaDisabled"
              rows={5}
              cols={30}
              disabled={true}
            ></any-input-textarea>
          </div>
          <app-code code={this.code} selector="input-text-basic"></app-code>
        </section>
      </Host>
    );
  }
}
