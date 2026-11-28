import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("VirtualScroller");
  }

  executeScript() {
    this.appDoc = document.querySelector("#app-doc");
    this.appDoc.apiDocs = ["any-virtual-scroller"];
    this.appDoc.docs = [
      {
        id: "lazy",
        label: "Lazy Loading",
        component: "vs-lazy",
      },
      {
        id: "prepopulated",
        label: "Prepopulated",
        component: "vs-prepopulated",
      },
    ];
  }

  async getHtml() {
    return fetch("app/views/VirtualScroller/VirtualScroller.html").then((data) => {
      return data.text();
    });
  }
}
