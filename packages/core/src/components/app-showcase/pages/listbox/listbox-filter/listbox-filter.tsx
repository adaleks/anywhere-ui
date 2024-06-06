import { Component, Host, Prop, h } from "@stencil/core";
import { Cities } from "../../../../../app/data/Cities";
import CacheService from "../../../../../app/services/CacheService";

@Component({
  tag: "listbox-filter",
  styleUrl: "listbox-filter.scss",
  shadow: false,
  scoped: true,
})
export class ListboxFilter {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public cities: any = Cities;
  public cache: any = new CacheService();
  public citiesFormated: any[] = [];

  public listboxWidth = {
    filter: { width: "15rem" },
  };

  public code: any = {
    basic: `

<any-listbox id="listboxFilter" filter="true"></any-listbox>

`,

    html: `

<div class="full-card flex justify-content-center">
  <any-listbox id="listboxFilter" filter="true"></any-listbox>
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

let listboxFilter = document.getElementById("listboxFilter");

listboxFilter.options = cities;
listboxFilter.anyStyle = {
  width: "15rem"
};

listboxFilter.addEventListener("valueChange", (event) => {
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
              ListBox provides built-in filtering that is enabled by adding the
              filter property.
            </p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center">
            <any-listbox
              options={this.citiesFormated}
              anyStyle={this.listboxWidth.filter}
              filter={true}
              id="listboxFilter"
            ></any-listbox>
          </div>
          <app-code code={this.code} selector="listbox-filter"></app-code>
        </section>
      </Host>
    );
  }
}
