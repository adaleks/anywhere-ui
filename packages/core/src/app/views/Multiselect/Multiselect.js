import AbstractView from "../AbstractView.js";
import { Cities } from "../../data/Cities.js";
import CacheService from "../../services/CacheService.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Multiselect");
    this.cities = Cities;
    this.cache = new CacheService(900);
  }

  executeScript() {
    this.viewOnGithubBtn = document.querySelector("#view_on_github");
    this.viewOnGithubBtn.addEventListener("aOnClick", (event) => {
      window.open(
        "https://github.com/adaleks/anywhere-ui/tree/main/packages/core/src/components/multiselect",
        "_blank"
      );
    });
    let citiesFormated = this.cities.map((obj) => {
      if (obj.value.countryCode) {
        obj.value.countryCode = obj.value.countryCode.toLowerCase();
      }
      return obj;
    });

    // const virtualItems = [];
    // for (let i = 0; i < 10000; i++) {
    //   virtualItems.push({
    //     label: "Item " + i,
    //     value: "Item " + i,
    //   });
    // }

    // BAsic Dropdown
    this.multiselect = document.querySelector(".ms1");
    this.multiselectTemplate = document.querySelector(".ms2");
    this.multiselectVirtual = document.querySelector(".ms3");
    // this.multiselect.showAnimation = "slideDownFadeIn";
    // this.multiselect.hideAnimation = "slideUpFadeOut";
    // this.multiselect.disabled = true;
    // this.multiselect.readonly = true;
    // this.multiselect.filter = false;
    // this.multiselect.checkbox = false;
    // setTimeout(() => {
    //   this.multiselect.value = [
    //     {
    //       code: "NY",
    //       country: "USA",
    //       countryCode: "us",
    //       id: 1,
    //       name: "New York",
    //     },
    //   ];
    // }, 2000);
    this.multiselect.anyStyle = {
      minWidth: "15rem",
      width: "18rem",
    };
    this.multiselect.showClear = true;
    this.multiselect.options = citiesFormated;
    this.multiselect.optionLabel = "value.country";

    this.multiselect.addEventListener("valueChange", (event) => {
      console.log("Multiselect ValueChange:", event);
    });

    this.multiselectTemplate.anyStyle = {
      minWidth: "15rem",
      width: "18rem",
    };
    this.multiselectTemplate.showClear = true;
    this.multiselectTemplate.options = citiesFormated;
    let style = document.querySelector(".flags-style");
    this.multiselectTemplate.shadowRoot.appendChild(style.cloneNode(true));

    this.multiselectTemplate.addEventListener("aOnShowStart", (event) => {
      console.log("Multiselect onShowStart:", event);
      let style = document.querySelector(".flags-style");
      this.multiselectTemplate.shadowRoot
        .querySelector("any-listbox")
        .shadowRoot.appendChild(style.cloneNode(true));
    });

    // Generate the virtual items array and add it to the Clusterize.js instance
    if (!this.cache.get("multiselectVirtualItems")?.length) {
      const items = [];
      for (let i = 0; i < 10; i++) {
        items.push({
          label: "Item " + i,
          value: "Item " + i,
        });
      }

      this.cache.set("multiselectVirtualItems", items);
    }
    // const virtualItems = this.cache.get("multiselectVirtualItems");

    // this.multiselectVirtual.anyStyle = {
    //   minWidth: "15rem",
    //   width: "18rem",
    // };
    // this.multiselectVirtual.showClear = true;
    // // this.multiselectVirtual.filter = false;
    // this.multiselectVirtual.virtualScroll = true;
    // this.multiselectVirtual.options = virtualItems;
  }

  async getHtml() {
    return fetch("app/views/Multiselect/Multiselect.html").then((data) => {
      return data.text();
    });
  }
}
