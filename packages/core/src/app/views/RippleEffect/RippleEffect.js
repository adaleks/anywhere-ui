import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("RippleEffect");
  }

  executeScript() {
    this.appDoc = document.querySelector("#app-doc");
    this.appDoc.apiDocs = ["any-ripple-effect"];
    this.appDoc.docs = [
      {
        id: "effect-basic",
        label: "Basic",
        component: "ripple-effect-basic",
      },
    ];
  }

  async getHtml() {
    return fetch("app/views/RippleEffect/RippleEffect.html").then((data) => {
      return data.text();
    });
  }
}
