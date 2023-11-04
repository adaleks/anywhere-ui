import {
  Component,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  h,
} from "@stencil/core";

@Component({
  tag: "checkbox-dynamic",
  styleUrl: "checkbox-dynamic.scss",
  shadow: false,
  scoped: true,
})
export class CheckboxDynamic {
  @Prop() textId: string;

  @Prop() textTitle: string;
  // Define a custom event
  @Event() valueChange!: EventEmitter<boolean>;

  @State() selectedCategories: string[] = [];

  categories = [
    { name: "Accounting", key: "A" },
    { name: "Marketing", key: "M" },
    { name: "Production", key: "P" },
    { name: "Research", key: "R" },
  ];

  code: any = {
    basic: `

<div class="field-checkbox">
    <!-- Dynamic checkboxes will be rendered here... -->
</div>

`,

    html: `

<div class="full-card flex justify-content-center">
    <div class="flex flex-column gap-2">
        <div id="checkboxContainer">
            <div class="field-checkbox">
                <!-- Dynamic checkboxes will be rendered here... -->
            </div>
        </div>
    </div>
</div>

`,

    javascript: `

const selectedCategories = [];

const categories = [
  { name: "Accounting", key: "A" },
  { name: "Marketing", key: "M" },
  { name: "Production", key: "P" },
  { name: "Research", key: "R" },
];

const container = document.getElementById("checkboxContainer")

categories.forEach((category) => {
  const div = document.querySelector(".field-checkbox")
  const checkbox = document.createElement("any-checkbox");
  checkbox.name = "group";
  checkbox.value = category;
  checkbox.id = category.key;
  checkbox.label = category.name
  checkbox.addEventListener("valueChange", (event) => {
    if (event.detail.checked) {
      selectedCategories.push(event.detail.value);
    } else {
      const index = selectedCategories.indexOf(event.detail.value);
      if (index !== -1) {
        selectedCategories.splice(index, 1);
      }
    }
  })
  div.appendChild(checkbox)
});

`,
  };

  // Event listener for the checkbox value change
  handleCheckboxChange(event: CustomEvent, value: string) {
    if (event.detail.checked) {
      this.selectedCategories = [...this.selectedCategories, value];
    } else {
      this.selectedCategories = this.selectedCategories.filter(
        (category) => category !== value
      );
    }
  }

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>Checkboxes can be generated using a list of values.</p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center">
            <div class="flex flex-column gap-2">
              <div id="checkboxContainer">
                {this.categories.map((category) => (
                  <div class="field-checkbox">
                    <any-checkbox
                      name="group"
                      value={category.key}
                      id={category.key}
                      label={category.name}
                      onValueChange={(event) =>
                        this.handleCheckboxChange(event, category.key)
                      }
                    ></any-checkbox>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <app-code code={this.code} selector="checkbox-basic"></app-code>
        </section>
      </Host>
    );
  }
}
