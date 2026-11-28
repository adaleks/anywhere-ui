import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("MultiSelect");
  }

  executeScript() {
    this.appDoc = document.querySelector("#app-doc");
    this.appDoc.apiDocs = ["any-multiselect"];
    this.appDoc.docs = [
      {
        id: "basic",
        label: "Basic",
        component: "ms-basic",
      },
      {
        id: "template",
        label: "Templating",
        component: "ms-template",
      },
      {
        id: "virtual",
        label: "Virtual Scroll",
        component: "ms-virtual",
      },
    ];
  }

  async getHtml() {
    return fetch("app/views/Multiselect/Multiselect.html").then((data) => {
      return data.text();
    });
  }
}
