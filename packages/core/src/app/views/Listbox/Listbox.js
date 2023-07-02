import AbstractView from "../AbstractView.js";
import { Cities } from "../../data/Cities.js";
import CacheService from "../../services/CacheService.js";

// const cache = new CacheService();

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Listbox");
    this.cities = Cities;
    this.cache = new CacheService(900);
  }

  executeScript() {
    this.viewOnGithubBtn = document.querySelector("#view_on_github");
    this.viewOnGithubBtn.addEventListener("aOnClick", (event) => {
      window.open(
        "https://github.com/adaleks/anywhere-ui/tree/main/packages/core/src/components/listbox",
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
    if (!this.cache.get("listboxVirtualItems")?.length) {
      const items = [];
      for (let i = 0; i < 10000; i++) {
        items.push({
          label: "Item " + i,
          value: "Item " + i,
        });
      }

      this.cache.set("listboxVirtualItems", items);
    }
    const virtualItems = this.cache.get("listboxVirtualItems");

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
    // setTimeout(() => {
    //   this.singleListbox.value = {
    //     code: "NY",
    //     country: "USA",
    //     countryCode: "us",
    //     id: 1,
    //     name: "New York",
    //   };
    // }, 3000);

    this.advancedListbox = document.querySelector(".lb2");
    // this.advancedListbox.value = [{
    //   code: "NY",
    //   country: "USA",
    //   countryCode: "us",
    //   id: 1,
    //   name: "New York",
    // }];
    // this.advancedListbox.disabled = true;
    // this.advancedListbox.readonly = true;
    this.advancedListbox.anyStyle = {
      width: "15rem",
    };
    this.advancedListbox.listStyle = {
      maxHeight: "250px",
    };
    this.advancedListbox.options = citiesFormated;
    let style = document.querySelector(".flags-style");
    this.advancedListbox.shadowRoot.appendChild(style.cloneNode(true));
    this.advancedListbox.multiple = true;
    this.advancedListbox.metaKeySelection = false;
    this.advancedListbox.checkbox = true;
    this.advancedListbox.filter = true;
    // this.advancedListbox.filterValue = "is";

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
    // this.virtualListbox.multiple = true;
    // this.virtualListbox.checkbox = true;
    // this.virtualListbox.filter = true;
    // this.virtualListbox.showToggleAll = false;
  }

  async getHtml() {
    return fetch("app/views/Listbox/Listbox.html").then((data) => {
      return data.text();
    });
  }
}
