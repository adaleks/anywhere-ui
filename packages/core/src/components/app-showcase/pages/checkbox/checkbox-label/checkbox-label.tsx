import { Component, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "checkbox-label",
  styleUrl: "checkbox-label.scss",
  shadow: false,
  scoped: true,
})
export class CheckboxLabel {
  @Prop() textId: string;

  @Prop() textTitle: string;

  // Define properties

  // Define a custom event
  @Event() valueChange!: EventEmitter<boolean>;

  label1: string = "Value 1";
  label2: string = "Value 2";

  binary = true;

  code: any = {
    basic: `

<any-checkbox name="groupname" value="val1" label="Value 1"></any-checkbox>
<any-checkbox name="groupname" value="val2" label="Value 2"></any-checkbox>

`,

    html: `

<div class="full-card flex justify-content-center gap-3">
    <any-checkbox name="groupname" value="val1" label="Value 1"></any-checkbox>
    <any-checkbox name="groupname" value="val2" label="Value 2"></any-checkbox>
</div>

`,

    javascript: `

const checkboxes = document.getElementsByName("groupname");
const selectedValues = [];

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("valueChange", (event) => {
    if (event.detail.checked) {
      selectedValues.push(event.detail.value);
    } else {
      const index = selectedValues.indexOf(event.detail.value);
      if (index !== -1) {
        selectedValues.splice(index, 1);
      }
    }
  });
});

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
              The label attribute provides a label text for the checkbox. This
              label is also clickable and toggles the checked state.
            </p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center gap-3">
            <any-checkbox id="cb1" label={this.label1}></any-checkbox>
            <any-checkbox id="cb2" label={this.label2}></any-checkbox>
          </div>
          <app-code code={this.code} selector="checkbox-label"></app-code>
        </section>
      </Host>
    );
  }
}
