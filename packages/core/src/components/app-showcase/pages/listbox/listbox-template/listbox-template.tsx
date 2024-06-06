import { Component, Host, Prop, getAssetPath, h } from "@stencil/core";
import { Cities } from "../../../../../app/data/Cities";
import CacheService from "../../../../../app/services/CacheService";

@Component({
  tag: "listbox-template",
  styleUrl: "listbox-template.scss",
  shadow: false,
  scoped: true,
})
export class ListboxTemplate {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public cities: any = Cities;
  public cache: any = new CacheService();
  public citiesFormated: any[] = [];
  public placeholderImage: string = getAssetPath(
    `../assets/images/flag/flag_placeholder.png`
  );
  private templateDD: HTMLElement;

  public listboxWidth = {
    basic: { width: "15rem" },
  };

  public code: any = {
    basic: `
<link rel="stylesheet" class="flags-style" href="/assets/css/flags.css">

<any-listbox id="listboxTemplate">
  <div slot="item">
    <div style="display: flex; align-items: center;">
      <img part="flag-#=item.value.countryCode#" class="flag flag-#=item.value.countryCode#"
        style="margin-right: 10px; width: 20px;" src="assets/images/flag/flag_placeholder.png"
        alt="#=item.value.country# Flag">
      <b>#=item.label# (#=item.value.code#)</b>
    </div>
  </div>
</any-listbox>

`,

    html: `
<link rel="stylesheet" class="flags-style" href="/assets/css/flags.css">

<div class="full-card flex justify-content-center">
  <any-listbox id="listboxTemplate">
    <div slot="item">
      <div style="display: flex; align-items: center;">
        <img part="flag-#=item.value.countryCode#" class="flag flag-#=item.value.countryCode#"
          style="margin-right: 10px; width: 20px;" src="assets/images/flag/flag_placeholder.png"
          alt="#=item.value.country# Flag">
        <b>#=item.label# (#=item.value.code#)</b>
      </div>
    </div>
  </any-listbox>
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
let listboxTemplate = document.getElementById("listboxTemplate");

listboxTemplate.options = cities;
listboxTemplate.anyStyle = {
  width: "15rem"
};

listboxTemplate.shadowRoot.appendChild(flagsStyle.cloneNode(true));

listboxTemplate.addEventListener("valueChange", (event) => {
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

  componentDidLoad() {
    this.templateDD = document.getElementById("listboxTemplate");
    let style = document.querySelector(".flags-style");
    this.templateDD.shadowRoot.appendChild(style.cloneNode(true));
    let listboxAStyle =
      this.templateDD.shadowRoot.querySelector(".flags-style");
    if (!listboxAStyle)
      this.templateDD.shadowRoot.appendChild(style.cloneNode(true));
  }

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>
              Custom content for an option is displayed using a slot named item.
              The slot provides access to the option data.
            </p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center">
            <any-listbox
              options={this.citiesFormated}
              anyStyle={this.listboxWidth.basic}
              id="listboxTemplate"
            >
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
            </any-listbox>
          </div>
          <app-code code={this.code} selector="listbox-template"></app-code>
        </section>
      </Host>
    );
  }
}
