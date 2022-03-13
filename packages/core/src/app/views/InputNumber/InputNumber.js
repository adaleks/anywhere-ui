import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("InputNumber");
  }

  executeScript() {
    const inputStyle = {
      width: "100%"
    }
    this.viewOnGithubBtn = document.querySelector("#view_on_github");
    this.viewOnGithubBtn.addEventListener("aOnClick", (event) => {
      window.open('https://github.com/adaleks/anywhere-ui/tree/main/packages/core/src/components/input-number', '_blank');
    });
    this.in1 = document.querySelector("#in1");
    this.in3 = document.querySelector("#in3");
    this.vertical = document.querySelector("#vertical");

    // this.in1.addEventListener("valueChange", (event) => {
    //   console.log("Input Value changed:", event);
    // });
    // this.in3.addEventListener("valueChange", (event) => {
    //   console.log("Input Value changed:", event);
    // });
    this.vertical.anyStyle = {
      width: "4rem"
    };

    document.querySelectorAll('.in').forEach(inputNumber => {
      inputNumber.inputWrapperClass = "any-field block";
      inputNumber.inputStyle = inputStyle;
    });

  }

  async getHtml() {
    return fetch('app/views/InputNumber/InputNumber.html')
      .then(data => {
        return data.text();
      });
  }
}
