import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "input-textarea-float-label",
  styleUrl: "input-textarea-float-label.scss",
  shadow: false,
  scoped: true,
})
export class InputTextareaFloatLabel {
  @Prop() textId: string;

  @Prop() textTitle: string;

  code: any = {
    basic: `

<any-input-textarea id="inputTextareaFloatlabel" rows="5" cols="30" float-label="true" label="Summary"></any-input-textarea>

`,

    html: `

<div class="full-card flex justify-content-center">
    <any-input-textarea id="inputTextareaFloatlabel" rows="5" cols="30" float-label="true" label="Summary"></any-input-textarea>
</div>

`,

    javascript: `

let inputTextareaFloatlabel = document.getElementById("inputTextareaFloatlabel");

inputTextareaFloatlabel.addEventListener("valueChange", (event) => {
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
            <any-input-textarea
              id="inputTextareaFloatlabel"
              rows={5}
              cols={30}
              label="Summary"
              floatLabel={true}
            ></any-input-textarea>
          </div>
          <app-code code={this.code} selector="input-text-basic"></app-code>
        </section>
      </Host>
    );
  }
}
