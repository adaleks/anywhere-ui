import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "input-switch-basic",
  styleUrl: "input-switch-basic.scss",
  shadow: false,
  scoped: true,
})
export class InputSwitchBasic {
  @Prop() textId: string;

  @Prop() textTitle: string;

  code: any = {
    basic: `

<any-input-switch id="inputSwitchBasic"></any-input-switch>

`,

    html: `

<div class="full-card flex justify-content-center">
    <any-input-switch id="inputSwitchBasic"></any-input-switch>
</div>

`,

    javascript: `

let inputSwitchBasic = document.getElementById("inputSwitchBasic");

inputSwitchBasic.checked = false;
inputSwitchBasic.addEventListener("valueChange", (event) => {
  console.log("InputSwitch changed:", event);
});

`,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>Two-way value binding is defined using value property</p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center">
            <any-input-switch id="inputSwitchBasic"></any-input-switch>
          </div>
          <app-code code={this.code} selector="checkbox-basic"></app-code>
        </section>
      </Host>
    );
  }
}
