import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("InputText");
  }

  executeScript() {
    this.viewOnGithubBtn = document.querySelector("#view_on_github");
    this.viewOnGithubBtn.addEventListener("aOnClick", (event) => {
      window.open('https://github.com/adaleks/anywhere-ui/tree/main/packages/core/src/components/input-text', '_blank');
    });
    this.it1 = document.querySelector("#it1");
    this.it2 = document.querySelector("#it2");
    this.it3 = document.querySelector("#it3");
    this.it4 = document.querySelector("#it4");
    this.it5 = document.querySelector("#it5");
    // this.it1.value = "Goran";
    // it1 options
    this.it1.label = "Username";
    this.it1.inputWrapperClass = "any-field";
    // this.it1.disabled = true;
    // this.it1.readonly = true;
    this.it1.addEventListener("valueChange", (event) => {
      console.log("Input Value changed:", event);
    });

    this.it2.floatLabel = true;
    this.it2.label = "Username";

    this.it3.disabled = true;
    this.it3.placeholder = "Disabled";

    this.it4.inputWrapperClass = "any-input-icon-left";
    this.it4.placeholder = "Search";

    this.it5.inputWrapperClass = "any-input-icon-right";
    this.it5.rightIconClass = "any-spin";
  }

  async getHtml() {
    return fetch('app/views/InputText/InputText.html')
      .then(data => {
        return data.text();
      });
  }
}
