import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "input-textarea-auto-resize",
  styleUrl: "input-textarea-auto-resize.scss",
  shadow: false,
  scoped: true,
})
export class InputTextareaAutoResize {
  @Prop() textId: string;

  @Prop() textTitle: string;

  code: any = {
    basic: `

<any-input-textarea id="inputTextareaAutoResize" rows="5" cols="30" auto-resize="true"></any-input-textarea>

`,

    html: `

<div class="full-card flex justify-content-center">
    <any-input-textarea id="inputTextareaAutoResize" rows="5" cols="30" auto-resize="true"></any-input-textarea>
</div>

`,

    javascript: `

let inputTextareaAutoResize = document.getElementById("inputTextareaAutoResize");

inputTextareaAutoResize.addEventListener("valueChange", (event) => {
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
              When autoResize is enabled, textarea grows instead of displaying a
              scrollbar.
            </p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center">
            <any-input-textarea
              id="inputTextareaAutoResize"
              rows={5}
              cols={30}
              autoResize={true}
            ></any-input-textarea>
          </div>
          <app-code
            code={this.code}
            selector="input-textarea-auto-resize"
          ></app-code>
        </section>
      </Host>
    );
  }
}
