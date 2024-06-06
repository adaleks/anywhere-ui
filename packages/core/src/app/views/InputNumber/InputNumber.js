import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("InputNumber");
  }

  executeScript() {
    this.appDoc = document.querySelector("#app-doc");
    this.appDoc.apiDocs = ["any-input-number"];
    this.appDoc.docs = [
      {
        id: "numeral",
        label: "Numeral",
        component: "input-number-numeral",
      },
      {
        id: "locale",
        label: "Locale",
        component: "input-number-locale",
      },
      {
        id: "currency",
        label: "Currency",
        component: "input-number-currency",
      },
      {
        id: "prefix-and-suffix",
        label: "Prefix & Suffix",
        component: "input-number-prefix-and-suffix",
      },
      {
        id: "buttons",
        label: "Buttons",
        component: "input-number-buttons",
      },
      {
        id: "vertical",
        label: "Vertical",
        component: "input-number-vertical",
      },
      {
        id: "float-label",
        label: "Float Label",
        component: "input-number-float-label",
      },
      {
        id: "disabled",
        label: "Disabled",
        component: "input-number-disabled",
      },
    ];
  }

  async getHtml() {
    return fetch("app/views/InputNumber/InputNumber.html").then((data) => {
      return data.text();
    });
  }
}
