import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("InputSwitch");
  }

  executeScript() {
    this.appDoc = document.querySelector("#app-doc");
    this.appDoc.apiDocs = ["any-input-switch"];
    this.appDoc.docs = [
      {
        id: "basic",
        label: "Basic",
        component: "input-switch-basic",
      },
      {
        id: "preselection",
        label: "Preselection",
        component: "input-switch-preselection",
      },
      {
        id: "disabled",
        label: "Disabled",
        component: "input-switch-disabled",
      },
    ];
  }

  async getHtml() {
    return fetch("app/views/InputSwitch/InputSwitch.html").then((data) => {
      return data.text();
    });
  }
}
