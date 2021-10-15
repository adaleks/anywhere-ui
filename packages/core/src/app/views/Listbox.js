import AbstractView from "./AbstractView.js";
import { Cities } from "../data/Cities.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Listbox");
    this.cities = Cities;
  }

  executeScript() {
    let citiesFormated = this.cities.map((obj) => {
      if (obj.value.countryCode) {
        obj.value.countryCode = obj.value.countryCode.toLowerCase();
      }
      return obj;
    });

    let virtualItems = Array.from({ length: 10000 }).map((v, i) => {
      return {
        label: "Item " + i,
        value: "Item " + i,
      };
    });

    this.singleListbox = document.querySelector(".lb1");
    this.singleListbox.anyStyle = {
      width: "15rem",
    };
    // this.singleListbox.listStyle = {
    //   maxHeight: "250px",
    // };
    this.singleListbox.options = citiesFormated;
    // this.singleListbox.disabled = true;
    // this.singleListbox.readonly = true;
    // setTimeout(() => {
    //   this.singleListbox.disabled = false;
    // }, 3000);
    this.singleListbox.optionLabel = "value.country";
    setTimeout(() => {
      this.singleListbox.value = {
        code: "NY",
        country: "USA",
        countryCode: "us",
        id: 1,
        name: "New York",
      };
    }, 3000);

    this.advancedListbox = document.querySelector(".lb2");
    this.advancedListbox.value = {
      code: "NY",
      country: "USA",
      countryCode: "us",
      id: 1,
      name: "New York",
    };
    // this.advancedListbox.disabled = true;
    // this.advancedListbox.readonly = true;
    this.advancedListbox.anyStyle = {
      width: "15rem",
    };
    this.advancedListbox.listStyle = {
      maxHeight: "200px",
    };
    this.advancedListbox.options = citiesFormated;
    let style = document.querySelector(".flags-style");
    this.advancedListbox.shadowRoot.appendChild(style.cloneNode(true));

    this.virtualListbox = document.querySelector(".vlb1");
    this.virtualListbox.anyStyle = {
      width: "15rem",
    };
    this.virtualListbox.scrollerHeight = "250px";
    // this.virtualListbox.listStyle = {
    //   height: "250px",
    // };
    this.virtualListbox.options = virtualItems;
    this.virtualListbox.virtualScroll = true;
  }

  async getHtml() {
    return `
            <div class="content-section introduction">
              <div class="feature-intro">
                <h1>Listbox</h1>
                <p>Listbox is used to select one or more values from a list of items.</p>
              </div>
            </div>
            <div class="content-section">
              <div class="full-card">
                <h5>Single</h5>
                <any-listbox class="lb1"></any-listbox>
                <h5>Advanced with Templating, Filtering and Multiple Selection</h5>
                <any-listbox class="lb2">
                  <div slot="item">
                    <div style="display: flex; align-items: center;">
                      <img part="flag-#=item.value.countryCode#" class="flag flag-#=item.value.countryCode#"
                        style="margin-right: 10px; width: 20px;" src="assets/images/flag/flag_placeholder.png"
                        alt="#=item.value.country# Flag">
                      <b>#=item.label# (#=item.value.country#)</b>
                    </div>
                  </div>
                </any-listbox>
                <h5>Virtual Scroll (10000 Items)</h5>
                <any-listbox class="vlb1">
                  <div slot="item">#=item.label#</div>
                </any-listbox>
              </div>
            </div>
        `;
  }
}
