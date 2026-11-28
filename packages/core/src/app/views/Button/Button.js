import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Button");
  }

  executeScript() {
    this.appDoc = document.querySelector("#app-doc");
    this.appDoc.apiDocs = ["any-button"];
    this.appDoc.docs = [
      {
        id: "basic",
        label: "Basic",
        component: "button-basic",
      },
      {
        id: "severities",
        label: "Severities",
        component: "button-severities",
      },
      {
        id: "styles",
        label: "Styles",
        component: "button-styles",
      },
      {
        id: "icon-styles",
        label: "Icon Styles",
        component: "button-icon-styles",
      },
      {
        id: "badges",
        label: "Badges & Loading",
        component: "button-badges",
      },
      {
        id: "templating",
        label: "Templating",
        component: "button-templating",
      },
      {
        id: "sizes",
        label: "Sizes",
        component: "button-sizes",
      },
    ];
  }

  async getHtml() {
    return fetch("app/views/Button/Button.html").then((data) => {
      return data.text();
    });
  }
}
