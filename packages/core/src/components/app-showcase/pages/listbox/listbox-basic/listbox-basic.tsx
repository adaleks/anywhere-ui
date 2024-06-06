import { Component, Host, Prop, h } from "@stencil/core";
import { Cities } from "../../../../../app/data/Cities";
import CacheService from "../../../../../app/services/CacheService";
@Component({
  tag: "listbox-basic",
  styleUrl: "listbox-basic.scss",
  shadow: false,
  scoped: true,
})
export class ListboxBasic {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public cities: any = Cities;
  public cache: any = new CacheService();
  public citiesFormated: any[] = [];

  public listboxWidth = {
    basic: { width: "15rem" },
  };

  public code: any = {
    basic: `

<any-listbox id="listboxBasic"></any-listbox>

`,

    html: `

<div class="full-card flex justify-content-center">
  <any-listbox id="listboxBasic"></any-listbox>
</div>

`,

    javascript: `

let cities = [
  {
    label: "New York",
    value: {
      id: 1,
      name: "New York",
      code: "NY",
      countryCode: "us",
      country: "USA",
    },
  },
  {
    label: "Rome",
    value: {
      id: 2,
      name: "Rome",
      code: "RM",
      countryCode: "it",
      country: "Italy",
    },
  },
  {
    label: "London",
    value: {
      id: 3,
      name: "London",
      code: "LDN",
      countryCode: "gb",
      country: "England",
    },
  },
  {
    label: "Istanbul",
    value: {
      id: 4,
      name: "Istanbul",
      code: "IST",
      countryCode: "tr",
      country: "Turkey",
    },
  },
  {
    label: "Paris",
    value: {
      id: 5,
      name: "Paris",
      code: "PRS",
      countryCode: "fr",
      country: "France",
    },
  },
  {
    label: "Belgrade",
    value: {
      id: 6,
      name: "Belgrade",
      code: "BGD",
      countryCode: "rs",
      country: "Serbia",
    },
  },
  {
    label: "Tokyo",
    value: {
      id: 7,
      name: "Tokyo",
      code: "TOK",
      countryCode: "jp",
      country: "Japan",
    },
  },
  {
    label: "Madrid",
    value: {
      id: 8,
      name: "Madrid",
      code: "MAD",
      countryCode: "es",
      country: "Spain",
    },
  },
];

let listboxBasic = document.getElementById("listboxBasic");

listboxBasic.options = cities;
listboxBasic.anyStyle = {
  width: "15rem"
};

listboxBasic.addEventListener("valueChange", (event) => {
  console.log(event.detail.value);
});

`,
  };

  componentWillLoad() {
    let cities = [];
    if (!this.cache.get("listboxCitiesItems")?.length) {
      cities = this.cities.map((obj) => {
        if (obj.value.countryCode) {
          obj.value.countryCode = obj.value.countryCode.toLowerCase();
        }
        return obj;
      });

      this.cache.set("listboxCitiesItems", cities);
    }

    this.citiesFormated = this.cache.get("listboxCitiesItems");
  }

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>
              Listbox is used as a controlled component with the value property
              along with an options collection. Label and value of an option are
              defined with the optionLabel and optionValue properties
              respectively. The default property name for the optionLabel is
              'label' and 'value' for the optionValue. If optionValue is omitted
              and the object has no value property, the object itself becomes
              the value of an option. Note that, when options are simple
              primitive values such as a string array, no optionLabel and
              optionValue would be necessary.
            </p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center">
            <any-listbox
              options={this.citiesFormated}
              anyStyle={this.listboxWidth.basic}
              id="listboxBasic"
            ></any-listbox>
          </div>
          <app-code code={this.code} selector="listbox-basic"></app-code>
        </section>
      </Host>
    );
  }
}
