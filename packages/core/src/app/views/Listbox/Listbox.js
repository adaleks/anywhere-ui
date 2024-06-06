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
    this.appDoc = document.querySelector("#app-doc");
    this.appDoc.apiDocs = ["any-listbox"];
    this.appDoc.docs = [
      {
        id: "basic",
        label: "Basic",
        component: "listbox-basic",
      },
      {
        id: "multiple",
        label: "Multiple",
        component: "listbox-multiple",
      },
      {
        id: "filter",
        label: "Filter",
        component: "listbox-filter",
      },
      {
        id: "template",
        label: "Template",
        component: "listbox-template",
      },
      {
        id: "virtual-scroll",
        label: "Virtual Scroll",
        component: "listbox-virtual-scroll",
      },
      {
        id: "disabled",
        label: "Disabled",
        component: "listbox-disabled",
      },
    ];
  }

  async getHtml() {
    return fetch("app/views/Listbox/Listbox.html").then((data) => {
      return data.text();
    });
  }
}
