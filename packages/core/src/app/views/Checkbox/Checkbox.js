import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Checkbox");
  }

  executeScript() {
    this.appDoc = document.querySelector("#app-doc");
    this.appDoc.apiDocs = ["any-checkbox"];
    this.appDoc.docs = [
      {
        id: "basic",
        label: "Basic",
        component: "checkbox-basic",
      },
      {
        id: "label",
        label: "Label",
        component: "checkbox-label",
      },
      {
        id: "group",
        label: "Group",
        component: "checkbox-group",
      },
      {
        id: "disabled",
        label: "Disabled",
        component: "checkbox-disabled",
      },
      {
        id: "readonly",
        label: "Readonly",
        component: "checkbox-readonly",
      },
      {
        id: "dynamic",
        label: "Dynamic",
        component: "checkbox-dynamic",
      },
    ];
  }

  async getHtml() {
    return fetch("app/views/Checkbox/Checkbox.html").then((data) => {
      return data.text();
    });
  }
}
