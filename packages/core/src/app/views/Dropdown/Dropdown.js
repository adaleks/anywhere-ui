import AbstractView from "../AbstractView.js";
import { Cities } from "../../data/Cities.js";
import { Cache } from "../../data/Cache.js";
import CacheService from "../../services/CacheService.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dropdown");
    this.cities = Cities;
    this.cache = new CacheService(900);
  }

  executeScript() {
    this.viewOnGithubBtn = document.querySelector("#view_on_github");
    this.viewOnGithubBtn.addEventListener("aOnClick", (event) => {
      window.open(
        "https://github.com/adaleks/anywhere-ui/tree/main/packages/core/src/components/dropdown",
        "_blank"
      );
    });
    let citiesFormated = this.cities.map((obj) => {
      if (obj.value.countryCode) {
        obj.value.countryCode = obj.value.countryCode.toLowerCase();
      }
      return obj;
    });

    // Generate the virtual items array and add it to the Clusterize.js instance
    if (!this.cache.get("dropdownVirtualItems")?.length) {
      const items = [];
      for (let i = 0; i < 10000; i++) {
        items.push({
          label: "Item " + i,
          value: "Item " + i,
        });
      }

      this.cache.set("dropdownVirtualItems", items);
    }
    const virtualItems = this.cache.get("dropdownVirtualItems");

    // BAsic Dropdown
    this.singleDropdown = document.querySelector(".dd1");
    // this.singleDropdown.disabled = true;
    // this.singleDropdown.readonly = true;
    this.singleDropdown.anyStyle = {
      width: "14rem",
    };
    this.singleDropdown.options = citiesFormated;
    this.singleDropdown.optionLabel = "value.country";
    // setTimeout(() => {
    //   this.singleDropdown.value = {
    //     code: "NY",
    //     country: "USA",
    //     countryCode: "us",
    //     id: 1,
    //     name: "New York",
    //   };
    //   // this.virtualDropdown.value = "Item 9950";
    // }, 2000);

    // Advanced Dropdown
    this.advancedDropdown = document.querySelector(".dd2");
    // this.advancedDropdown.readonly = true;
    // this.advancedDropdown.disabled = true;
    // this.advancedDropdown.value = {
    //   code: "NY",
    //   country: "USA",
    //   countryCode: "us",
    //   id: 1,
    //   name: "New York",
    // };
    this.advancedDropdown.anyStyle = {
      width: "14rem",
    };
    this.advancedDropdown.options = citiesFormated;
    let style = document.querySelector(".flags-style");
    this.advancedDropdown.shadowRoot.appendChild(style.cloneNode(true));

    this.advancedDropdown.addEventListener("aOnShowStart", (event) => {
      console.log("Dropdown onShowStart:", event);
      let style = document.querySelector(".flags-style");
      this.advancedDropdown.shadowRoot
        .querySelector("any-listbox")
        .shadowRoot.appendChild(style.cloneNode(true));
    });
    // Dropdown with virtual scroll
    this.virtualDropdown = document.querySelector(".dd3");
    this.virtualDropdown.anyStyle = {
      width: "14rem",
    };
    this.virtualDropdown.options = virtualItems;
    // this.virtualDropdown.options = citiesFormated;
    this.virtualDropdown.virtualScroll = true;
    // this.advancedDropdown.virtualScroll = true;
    // this.singleDropdown.virtualScroll = true;
    // this.virtualDropdown.value = "Item 9950";
    // this.virtualDropdown.disabled = true;
  }

  async getHtml() {
    return fetch("app/views/Dropdown/Dropdown.html").then((data) => {
      return data.text();
    });
  }
}
