import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("InputTextArea");
  }

  executeScript() {
    this.appDoc = document.querySelector("#app-doc");
    this.appDoc.apiDocs = ["any-input-textarea"];
    this.appDoc.docs = [
      {
        id: "basic",
        label: "Basic",
        component: "input-textarea-basic",
      },
      {
        id: "auto-resize",
        label: "AutoResize",
        component: "input-textarea-auto-resize",
      },
      {
        id: "float-label",
        label: "Float Label",
        component: "input-textarea-float-label",
      },
      {
        id: "disabled",
        label: "Disabled",
        component: "input-textarea-disabled",
      },
    ];
  }

  async getHtml() {
    return fetch("app/views/InputTextarea/InputTextarea.html").then((data) => {
      return data.text();
    });
  }
}
