import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "input-textarea-basic",
  styleUrl: "input-textarea-basic.scss",
  shadow: false,
  scoped: true,
})
export class InputTextareaBasic {
  @Prop() textId: string;

  @Prop() textTitle: string;

  code: any = {
    basic: `

<any-input-textarea id="inputTextareaBasic" rows="5" cols="30"></any-input-textarea>

`,

    html: `

<div class="full-card flex justify-content-center">
    <any-input-textarea id="inputTextareaBasic" rows="5" cols="30"></any-input-textarea>
</div>

`,

    javascript: `

let inputTextareaBasic = document.getElementById("inputTextareaBasic");

inputTextareaBasic.addEventListener("valueChange", (event) => {
  console.log("InputText changed:", event);
});

`,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>Textarea is a multi-line text input element.</p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center">
            <any-input-textarea
              id="inputTextareaBasic"
              rows={5}
              cols={30}
            ></any-input-textarea>
          </div>
          <app-code code={this.code} selector="input-textarea-basic"></app-code>
        </section>
      </Host>
    );
  }
}
