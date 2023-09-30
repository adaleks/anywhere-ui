import { Component, Event, EventEmitter, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "checkbox-group",
  styleUrl: "checkbox-group.scss",
  shadow: false,
  scoped: true,
})
export class CheckboxGroup {
  @Prop() textId: string;

  @Prop() textTitle: string;

  // Define properties

  // Define a custom event
  @Event() valueChange!: EventEmitter<boolean>;

  label1: string = "New York";
  label2: string = "San Francisco";
  label3: string = "Los Angeles";

  binary = true;

  code: any = {
    basic: `

<any-checkbox name="group1" value="New York" label="New York" inputId="ny"></any-checkbox>
<any-checkbox name="group1" value="San Francisco" label="San Francisco" inputId="sf"></any-checkbox>
<any-checkbox name="group1" value="Los Angeles" label="Los Angeles" inputId="la"></any-checkbox>

`,

    html: `

<div class="full-card flex justify-content-center gap-3">
    <any-checkbox name="group1" value="New York" label="New York" inputId="ny"></any-checkbox>
    <any-checkbox name="group1" value="San Francisco" label="San Francisco" inputId="sf"></any-checkbox>
    <any-checkbox name="group1" value="Los Angeles" label="Los Angeles" inputId="la"></any-checkbox>
</div>

`,

    javascript: `

const checkboxes = document.getElementsByName("group1");
const selectedCities = [];

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("valueChange", (event) => {
    if (event.detail.checked) {
      selectedCities.push(event.detail.value);
    } else {
      const index = selectedCities.indexOf(event.detail.value);
      if (index !== -1) {
        selectedCities.splice(index, 1);
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
        <section>
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>Multiple checkboxes can be grouped together.</p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center gap-3">
            <any-checkbox
              id="cb1"
              label={this.label1}
              name="group1"
            ></any-checkbox>
            <any-checkbox
              id="cb2"
              label={this.label2}
              name="group1"
            ></any-checkbox>
            <any-checkbox
              id="cb3"
              label={this.label3}
              name="group1"
            ></any-checkbox>
          </div>
          <app-code code={this.code} selector="checkboxgroup"></app-code>
        </section>
      </Host>
    );
  }
}
