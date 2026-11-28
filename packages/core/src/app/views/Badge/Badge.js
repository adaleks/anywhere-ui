import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Badge");
  }

  executeScript() {
    this.appDoc = document.querySelector("#app-doc");
    this.appDoc.apiDocs = ["any-badge","any-badge-overlay"];
    this.appDoc.docs = [
      {
        id: "numbers",
        label: "Numbers",
        component: "badge-numbers",
      },
      {
        id: "positioned",
        label: "Positioned Badge",
        component: "badge-positioned",
      },
      {
        id: "inline",
        label: "Inline Button Badge",
        component: "badge-inline",
      },
      {
        id: "sizes",
        label: "Sizes",
        component: "badge-sizes",
      },
    ];
  }

  async getHtml() {
    return fetch("app/views/Badge/Badge.html").then((data) => {
      return data.text();
    });
  }
}
