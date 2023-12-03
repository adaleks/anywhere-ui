import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "input-number-vertical",
  styleUrl: "input-number-vertical.scss",
  shadow: false,
  scoped: true,
})
export class InputNumberVertical {
  @Prop() textId: string;

  @Prop() textTitle: string;

  code: any = {
    basic: `

<any-input-number id="inputNumberVertical" class="in" value="24" label="Vertical" show-buttons="true" spinner-mode="vertical" button-layout="vertical"
  increment-button-icon="fa-solid:plus" decrement-button-icon="fa-solid:minus" decrement-button-class="any-button-secondary" increment-button-class="any-button-secondary">

`,

    html: `

<div class="full-card flex justify-content-center">
  <any-input-number id="inputNumberVertical" class="in" value="24" show-buttons="true" spinner-mode="vertical" button-layout="vertical"
     increment-button-icon="fa-solid:plus" decrement-button-icon="fa-solid:minus" decrement-button-class="any-button-secondary" increment-button-class="any-button-secondary">
</div>

`,

    javascript: `

let inputNumberVertical = document.getElementById("inputNumberVertical");

inputNumberVertical.addEventListener("valueChange", (event) => {
  console.log("inputNumberVertical changed:", event);
});

`,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>
              Buttons can also placed vertically by setting buttonLayout as
              vertical.
            </p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center">
            <any-input-number
              class="in"
              id="inputNumberHorizontalWithStep"
              value={24}
              showButtons={true}
              buttonLayout="vertical"
              incrementButtonIcon="fa-solid:plus"
              decrementButtonIcon="fa-solid:minus"
              decrementButtonClass="any-button-secondary"
              incrementButtonClass="any-button-secondary"
              anyStyle={{ width: "4rem" }}
            ></any-input-number>
          </div>
          <app-code
            code={this.code}
            selector="input-number-vertical"
          ></app-code>
        </section>
      </Host>
    );
  }
}
