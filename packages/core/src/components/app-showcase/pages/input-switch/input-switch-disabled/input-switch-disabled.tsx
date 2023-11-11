import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "input-switch-disabled",
  styleUrl: "input-switch-disabled.scss",
  shadow: false,
  scoped: true,
})
export class InputSwitchDisabled {
  @Prop() textId: string;

  @Prop() textTitle: string;

  code: any = {
    basic: `

<any-input-switch id="inputSwitchDisabled" disabled="true"></any-input-switch>

`,

    html: `

<div class="full-card flex justify-content-center">
    <any-input-switch id="inputSwitchDisabled" disabled="true"></any-input-switch>
</div>

`,

    javascript: `

let inputSwitchDisabled = document.getElementById("inputSwitchDisabled");

inputSwitchDisabled.addEventListener("valueChange", (event) => {
  console.log("InputSwitch changed:", event);
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
            <any-input-switch
              id="inputSwitchDisabled"
              disabled={true}
            ></any-input-switch>
          </div>
          <app-code code={this.code} selector="checkbox-basic"></app-code>
        </section>
      </Host>
    );
  }
}
