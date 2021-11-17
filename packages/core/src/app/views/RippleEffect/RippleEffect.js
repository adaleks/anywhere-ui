import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("RippleEffect");
  }

  executeScript() {
    this.viewOnGithubBtn = document.querySelector("#view_on_github");
    this.viewOnGithubBtn.addEventListener("aOnClick", (event) => {
      window.open('https://github.com/adaleks/anywhere-ui/tree/main/packages/core/src/components/ripple-effect', '_blank');
    });
  }

  async getHtml() {
    return fetch('app/views/RippleEffect/RippleEffect.html')
      .then(data => {
        return data.text();
      });
  }
}
