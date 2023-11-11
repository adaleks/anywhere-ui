import { Component, Event, EventEmitter, Host, Prop, h } from "@stencil/core";
@Component({
  tag: "checkbox-readonly",
  styleUrl: "checkbox-readonly.scss",
  shadow: false,
  scoped: false,
})
export class CheckboxReadonly {
  @Prop() textId: string;

  @Prop() textTitle: string;

  // Define properties

  // Define a custom event
  @Event() valueChange!: EventEmitter<boolean>;

  label: string = "Readonly";

  code: any = {
    basic: `

<any-checkbox id="checkboxReadonly" readonly="true" label="Readonly"></any-checkbox>

`,

    html: `

<div class="full-card flex justify-content-center ">
    <any-checkbox id="checkboxReadonly" readonly="true" label="Readonly"></any-checkbox>
</div>

`,

    javascript: `

let checkboxReadonly = document.getElementById("checkboxReadonly");
checkboxReadonly.checked = false;

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
              id="checkboxReadonly"
              label={this.label}
              readonly={true}
            ></any-checkbox>
          </div>
          <app-code code={this.code} selector="checkbox-disabled"></app-code>
        </section>
      </Host>
    );
  }
}
