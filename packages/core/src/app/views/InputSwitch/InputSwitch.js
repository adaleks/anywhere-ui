import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("InputSwitch");
  }

  executeScript() {
    this.viewOnGithubBtn = document.querySelector("#view_on_github");
    this.viewOnGithubBtn.addEventListener("aOnClick", (event) => {
      window.open('https://github.com/adaleks/anywhere-ui/tree/main/packages/core/src/components/input-switch', '_blank');
    });
    this.is1 = document.querySelector("#is1");
    this.is2 = document.querySelector("#is2");
    this.is2.trueValue = "on";
    this.is2.falseValue = "off";
    this.is2.checked = "on";
    this.is2.addEventListener("valueChange", (event) => {
      console.log("Input switch changed:", event);
    });
    // this.is2.readonly = true;
    // this.is2.disabled = true;
    // setTimeout(() => {
    //   this.is2.checked = false;
    // }, 2000);
  }

  async getHtml() {
    return fetch('app/views/InputSwitch/InputSwitch.html')
      .then(data => {
        return data.text();
      });
  }
}
