import { Component, Element, Host, Prop, getAssetPath, h } from "@stencil/core";
import { Cities } from "../../../../../app/data/Cities";
import CacheService from "../../../../../app/services/CacheService";

@Component({
  tag: "dropdown-template",
  styleUrl: "dropdown-template.scss",
  shadow: false,
  scoped: true,
})
export class DropdownTemplate {
  @Element() element: HTMLElement;

  @Prop() textId: string;

  @Prop() textTitle: string;

  public cities: any = Cities;
  public cache: any = new CacheService();
  public citiesFormated: any[] = [];
  public placeholderImage: string = getAssetPath(
    `../assets/images/flag/flag_placeholder.png`
  );
  public dropdownWidth = {
    template: { width: "14rem" },
  };

  public code: any = {
    basic: `

<link rel="stylesheet" class="flags-style" href="/assets/css/flags.css">

<any-dropdown class="dropdownTemplate" placeholder="Select a Country" show-clear="true">
  <div slot="selectedItem">
    <div style="display: flex; align-items: center;">
      <img part="flag-#=item.value.countryCode#" class="flag flag-#=item.value.countryCode#"
        style="margin-right: 10px; width: 20px;" src="assets/images/flag/flag_placeholder.png"
        alt="#=item.value.country# Flag">
      <b>#=item.label#</b>
    </div>
  </div>
  <div slot="item">
    <div style="display: flex; align-items: center;">
      <img part="flag-#=item.value.countryCode#" class="flag flag-#=item.value.countryCode#"
        style="margin-right: 10px; width: 20px;" src="assets/images/flag/flag_placeholder.png"
        alt="#=item.value.country# Flag">
      <b>#=item.label# (#=item.value.code#)</b>
    </div>
  </div>
</any-dropdown>

`,

    html: `

<link rel="stylesheet" class="flags-style" href="/assets/css/flags.css">

<div class="full-card flex justify-content-center">
  <any-dropdown id="dropdownTemplate" placeholder="Select a Country" show-clear="true">
    <div slot="selectedItem">
      <div style="display: flex; align-items: center;">
        <img part="flag-#=item.value.countryCode#" class="flag flag-#=item.value.countryCode#"
          style="margin-right: 10px; width: 20px;" src="assets/images/flag/flag_placeholder.png"
          alt="#=item.value.country# Flag">
        <b>#=item.label#</b>
      </div>
    </div>
    <div slot="item">
      <div style="display: flex; align-items: center;">
        <img part="flag-#=item.value.countryCode#" class="flag flag-#=item.value.countryCode#"
          style="margin-right: 10px; width: 20px;" src="assets/images/flag/flag_placeholder.png"
          alt="#=item.value.country# Flag">
        <b>#=item.label# (#=item.value.code#)</b>
      </div>
    </div>
  </any-dropdown>
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

let flagsStyle = document.querySelector(".flags-style");
let dropdownTemplate = document.getElementById("dropdownTemplate");

dropdownTemplate.options = cities;
dropdownTemplate.anyStyle = {
  width: "14rem"
};

dropdownTemplate.shadowRoot.appendChild(flagsStyle.cloneNode(true));
dropdownTemplate.shadowRoot
  .querySelector("any-listbox")
  .shadowRoot.appendChild(flagsStyle.cloneNode(true));

dropdownTemplate.addEventListener("valueChange", (event) => {
  console.log(event.detail.value);
});

`,
  };

  private templateDD: HTMLElement;

  componentWillLoad() {
    let cities = [];
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

  componentDidLoad() {
    this.templateDD = document.getElementById("dropdownTemplate");
    let style = document.querySelector(".flags-style");
    this.templateDD.shadowRoot.appendChild(style.cloneNode(true));
    let listboxAStyle = this.templateDD.shadowRoot
      .querySelector("any-listbox")
      .shadowRoot.querySelector(".flags-style");
    if (!listboxAStyle)
      this.templateDD.shadowRoot
        .querySelector("any-listbox")
        .shadowRoot.appendChild(style.cloneNode(true));
  }

  render() {
    return (
      <Host>
        <section>
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>
              Both the selected option and the options list can be templated to
              provide customizated representation. Use selectedItem template to
              customize the selected label display and the item template to
              change the content of the options in the dropdown panel. In
              addition when grouping is enabled, group template is available to
              customize the option groups. All templates get the option instance
              as the default local template variable.
            </p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center">
            <any-dropdown
              anyStyle={this.dropdownWidth.template}
              options={this.citiesFormated}
              id="dropdownTemplate"
              placeholder="Select a Country"
              show-clear="true"
            >
              <div slot="selectedItem">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    part="flag-#=item.value.countryCode#"
                    class="flag flag-#=item.value.countryCode#"
                    style={{ marginRight: "10px", width: "20px" }}
                    src={this.placeholderImage}
                    alt="#=item.value.country# Flag"
                  />
                  <b>#=item.value.country#</b>
                </div>
              </div>
              <div slot="item">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    part="flag-#=item.value.countryCode#"
                    class="flag flag-#=item.value.countryCode#"
                    style={{ marginRight: "10px", width: "20px" }}
                    src={this.placeholderImage}
                    alt="#=item.value.country# Flag"
                  />
                  <b>#=item.value.country#</b>
                </div>
              </div>
            </any-dropdown>
          </div>
          <app-code code={this.code} selector="dropdown-template"></app-code>
        </section>
      </Host>
    );
  }
}
