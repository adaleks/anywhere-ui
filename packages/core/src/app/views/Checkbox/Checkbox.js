import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Checkbox");
  }

  executeScript() {
    this.cb1 = document.querySelector("#cb1");
    this.cb1.binary = true;
    this.cb1.label = false;
    this.cb1.addEventListener("valueChange", (event) => {
      console.log("Checkbox Value changed:", event);
      this.cb1.label = event.detail.value;
    });
  }

  async getHtml() {
    return fetch('app/views/Checkbox/Checkbox.html')
      .then(data => {
        return data.text();
      });
  }
}
