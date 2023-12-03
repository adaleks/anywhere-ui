import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "input-number-disabled",
  styleUrl: "input-number-disabled.scss",
  shadow: false,
  scoped: true,
})
export class InputNumberDisabled {
  @Prop() textId: string;

  @Prop() textTitle: string;

  code: any = {
    basic: `

<any-input-number id="inputNumberDisabled" class="in" value="50" disabled="true" a-prefix="%"></any-input-number>

`,

    html: `

<div class="full-card flex justify-content-center">
  <any-input-number id="inputNumberDisabled" class="in" value="50" disabled="true" a-prefix="%"></any-input-number>
</div>

`,

    javascript: `

let inputNumberDisabled = document.getElementById("inputNumberDisabled");

inputNumberDisabled.addEventListener("valueChange", (event) => {
  console.log("inputNumberDisabled changed:", event);
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
            <any-input-number
              class="in"
              id="inputNumberDisabled"
              value={50}
              disabled={true}
              aPrefix="%"
            ></any-input-number>
          </div>
          <app-code
            code={this.code}
            selector="input-number-disabled"
          ></app-code>
        </section>
      </Host>
    );
  }
}
