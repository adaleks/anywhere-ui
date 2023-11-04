import { Component, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "checkbox-disabled",
  styleUrl: "checkbox-disabled.scss",
  shadow: false,
  scoped: true,
})
export class CheckboxDisabled {
  @Prop() textId: string;

  @Prop() textTitle: string;

  // Define properties

  // Define a custom event
  @Event() valueChange!: EventEmitter<boolean>;

  label: string = "Disabled";

  code: any = {
    basic: `

<any-checkbox id="cb1" disabled="true" label="Disabled"></any-checkbox>

`,

    html: `

<div class="full-card flex justify-content-center ">
    <any-checkbox id="cb1" disabled="true" label="Disabled"></any-checkbox>
</div>

`,

    javascript: `

let cb1 = document.getElementById("cb1");
cb1.checked = false;

    `,
  };

  // Event listener for the checkbox value change
  handleValueChange(_event: any) {}

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
            <any-checkbox
              id="cb1"
              label={this.label}
              disabled={true}
            ></any-checkbox>
          </div>
          <app-code code={this.code} selector="checkbox-disabled"></app-code>
        </section>
      </Host>
    );
  }
}
