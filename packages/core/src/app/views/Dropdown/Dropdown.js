import AbstractView from "../AbstractView.js";
import { Cities } from "../../data/Cities.js";
import CacheService from "../../services/CacheService.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dropdown");
  }

  executeScript() {
    this.appDoc = document.querySelector("#app-doc");
    this.appDoc.apiDocs = ["any-dropdown"];
    this.appDoc.docs = [
      {
        id: "basic",
        label: "Basic",
        component: "dropdown-basic",
      },
      {
        id: "template",
        label: "Template",
        component: "dropdown-template",
      },
      {
        id: "filter",
        label: "Filter",
        component: "dropdown-filter",
      },
      {
        id: "virtual-scroll",
        label: "Virtual Scroll",
        component: "dropdown-virtual-scroll",
      },
      {
        id: "disabled",
        label: "Disabled",
        component: "dropdown-disabled",
      },
    ];
  }

  async getHtml() {
    return fetch("app/views/Dropdown/Dropdown.html").then((data) => {
      return data.text();
    });
  }
}
