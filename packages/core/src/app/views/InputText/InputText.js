import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("InputText");
  }

  executeScript() {
    this.appDoc = document.querySelector("#app-doc");
    this.appDoc.apiDocs = ["any-input-text"];
    this.appDoc.docs = [
      {
        id: "basic",
        label: "Basic",
        component: "input-text-basic",
      },
      {
        id: "icons",
        label: "Icons",
        component: "input-text-icons",
      },
      {
        id: "float-label",
        label: "Float Label",
        component: "input-text-float-label",
      },
      {
        id: "disabled",
        label: "Disabled",
        component: "input-text-disabled",
      },
    ];
  }

  async getHtml() {
    return fetch("app/views/InputText/InputText.html").then((data) => {
      return data.text();
    });
  }
}
