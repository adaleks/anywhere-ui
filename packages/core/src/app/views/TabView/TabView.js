import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("TabView");
  }

  executeScript() {
    this.appDoc = document.querySelector("#app-doc");
    this.appDoc.apiDocs = ["any-tab-view","any-tab-panel"];
    this.appDoc.docs = [
      {
        id: "basic",
        label: "Default",
        component: "tab-view-basic",
      },
      {
        id: "programmatic",
        label: "Programmatic",
        component: "tab-view-programmatic",
      },
      {
        id: "disabled",
        label: "Disabled",
        component: "tab-view-disabled",
      },
    ];
  }

  async getHtml() {
    return fetch("app/views/TabView/TabView.html").then((data) => {
      return data.text();
    });
  }
}
