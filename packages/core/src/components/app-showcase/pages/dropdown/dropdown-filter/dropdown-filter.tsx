import { Component, Host, Prop, h } from "@stencil/core";
import { Cities } from "../../../../../app/data/Cities";
import CacheService from "../../../../../app/services/CacheService";

@Component({
  tag: "dropdown-filter",
  styleUrl: "dropdown-filter.scss",
  shadow: false,
  scoped: true,
})
export class DropdownFilter {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public cities: any = Cities;
  public cache: any = new CacheService();
  public citiesFormated: any[] = [];

  public dropdownWidth = {
    filter: { width: "14rem" },
  };

  public code: any = {
    basic: `

<any-dropdown id="dropdownBasic" placeholder="Select a City" show-clear="true" filter="true"></any-dropdown>

`,

    html: `

<div class="full-card flex justify-content-center">
  <any-dropdown id="dropdownBasic" placeholder="Select a City" show-clear="true" filter="true"></any-dropdown>
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

let dropdownBasic = document.getElementById("dropdownBasic");

dropdownBasic.options = cities;
dropdownBasic.anyStyle = {
  width: "14rem"
};

dropdownBasic.addEventListener("valueChange", (event) => {
  console.log(event.detail.value);
});

`,
  };

  componentWillLoad() {
    let cities = [];
    // Generate the virtual items array and add it to the Clusterize.js instance
    if (!this.cache.get("dropdownCitiesItems")?.length) {
      cities = this.cities.map((obj) => {
        if (obj.value.countryCode) {
          obj.value.countryCode = obj.value.countryCode.toLowerCase();
        }
        return obj;
      });

      this.cache.set("dropdownCitiesItems", cities);
    }

    this.citiesFormated = this.cache.get("dropdownCitiesItems");
  }

  render() {
    return (
      <Host>
        <section>
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>
              Dropdown provides built-in filtering that is enabled by adding the
              filter property.
            </p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center">
            <any-dropdown
              anyStyle={this.dropdownWidth.filter}
              options={this.citiesFormated}
              id="dropdownFilter"
              placeholder="Select a City"
              show-clear={true}
              filter={true}
            ></any-dropdown>
          </div>
          <app-code code={this.code} selector="dropdown-basic"></app-code>
        </section>
      </Host>
    );
  }
}
