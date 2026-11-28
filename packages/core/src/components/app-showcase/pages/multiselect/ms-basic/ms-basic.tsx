import { Component, Host, Prop, h, Element } from "@stencil/core";
import { Cities } from "../../../../../app/data/Cities";

@Component({
  tag: "ms-basic",
  styleUrl: "ms-basic.scss",
  shadow: false,
  scoped: true,
})
export class MsBasic {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-multiselect placeholder="Select a Country"></any-multiselect>`,

    html: `<div class="full-card">
  <any-multiselect
    style="min-width: 15rem; width: 18rem"
    show-clear="true"
    option-label="value.country"
  ></any-multiselect>
</div>`,

    javascript: `const multiselect = document.querySelector("any-multiselect");
multiselect.options = cities;
multiselect.optionLabel = "value.country";`,
  };
  @Element() element: HTMLElement;

  public multiselectStyle = { minWidth: "15rem", width: "18rem" };

  public cities: any[] = [];

  componentWillLoad() {
    this.cities = Cities.map((city) => {
      if (city.value.countryCode) {
        city.value.countryCode = city.value.countryCode.toLowerCase();
      }
      return city;
    });
  }

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>Provide an options collection and set optionLabel to the field shown in the list; showClear adds a clear icon.</p>
          </app-docsectiontext>
            <div class="full-card">
              <any-multiselect
                anyStyle={this.multiselectStyle}
                showClear={true}
                options={this.cities}
                optionLabel="value.country"
              ></any-multiselect>
            </div>
          <app-code code={this.code} selector="ms-basic"></app-code>
        </section>
      </Host>
    );
  }
}
