import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("InputTextArea");
  }

  executeScript() {
    this.viewOnGithubBtn = document.querySelector("#view_on_github");
    this.viewOnGithubBtn.addEventListener("aOnClick", (event) => {
      window.open('https://github.com/adaleks/anywhere-ui/tree/main/packages/core/src/components/input-textarea', '_blank');
    });
    this.it1 = document.querySelector("#ita1");
    this.it2 = document.querySelector("#ita2");
    this.it3 = document.querySelector("#ita3");

    this.it1.inputWrapperClass = "any-field block";

    // this.it3.addEventListener("valueChange", (event) => {
    //   console.log("Input Textaera Value changed:", event);
    // });

    // this.it3.addEventListener("aOnFocus", (event) => {
    //   console.log("Input Textaera On Focus:", event);
    // });
    // this.it3.addEventListener("aOnBlur", (event) => {
    //   console.log("Input Textaera On Blur:", event);
    // });
    // this.it3.addEventListener("aOnResize", (event) => {
    //   console.log("Input Textaera On Resize:", event);
    // });
  }

  async getHtml() {
    return fetch('app/views/InputTextarea/InputTextarea.html')
      .then(data => {
        return data.text();
      });
  }
}
