import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("RadioButton");
  }

  executeScript() {
    this.appDoc = document.querySelector("#app-doc");
    this.appDoc.apiDocs = ["any-radio-button","any-radio-group"];
    this.appDoc.docs = [
      {
        id: "basic",
        label: "Basic",
        component: "radio-button-basic",
      },
      {
        id: "dynamic",
        label: "Preselection & Disabled",
        component: "radio-button-dynamic",
      },
    ];
  }

  async getHtml() {
    return fetch("app/views/RadioButton/RadioButton.html").then((data) => {
      return data.text();
    });
  }
}
