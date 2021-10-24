import AbstractView from "../AbstractView.js";
import {
  Cities
} from "../../data/Cities.js";

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

    let virtualItems = Array.from({
      length: 10000
    }).map((v, i) => {
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
    // this.advancedListbox.value = {
    //   code: "NY",
    //   country: "USA",
    //   countryCode: "us",
    //   id: 1,
    //   name: "New York",
    // };
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
    return fetch('app/views/Listbox/Listbox.html')
      .then(data => {
        return data.text();
      });
  }
}
