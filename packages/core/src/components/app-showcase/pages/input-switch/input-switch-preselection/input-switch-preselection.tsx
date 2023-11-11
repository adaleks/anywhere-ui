import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "input-switch-preselection",
  styleUrl: "input-switch-preselection.scss",
  shadow: false,
  scoped: true,
})
export class InputSwitchPreselection {
  @Prop() textId: string;

  @Prop() textTitle: string;

  code: any = {
    basic: `

<any-input-switch id="inputSwitchPreselection" checked="true"></any-input-switch>

`,

    html: `

<div class="full-card flex justify-content-center">
    <any-input-switch id="inputSwitchPreselection" checked="true"></any-input-switch>
</div>

`,

    javascript: `

let inputSwitchPreselection = document.getElementById("inputSwitchPreselection");

inputSwitchPreselection.addEventListener("valueChange", (event) => {
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
              Enabling value property displays the component as active
              initially.
            </p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center">
            <any-input-switch
              id="inputSwitchPreselection"
              checked={true}
            ></any-input-switch>
          </div>
          <app-code code={this.code} selector="checkbox-basic"></app-code>
        </section>
      </Host>
    );
  }
}
