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
    this.viewOnGithubBtn = document.querySelector("#view_on_github");
    this.viewOnGithubBtn.addEventListener("aOnClick", (event) => {
      window.open('https://github.com/adaleks/anywhere-ui/tree/main/packages/core/src/components/checkbox', '_blank');
    });
  }

  async getHtml() {
    return fetch('app/views/Checkbox/Checkbox.html')
      .then(data => {
        return data.text();
      });
  }
}
