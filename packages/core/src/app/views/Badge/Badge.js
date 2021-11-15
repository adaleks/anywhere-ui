import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Badge");
  }

  executeScript() {
    this.viewOnGithubBtn = document.querySelector("#view_on_github");
    this.viewOnGithubBtn.addEventListener("aOnClick", (event) => {
      window.open('https://github.com/adaleks/anywhere-ui/tree/main/packages/core/src/components/badge', '_blank');
    });
  }

  async getHtml() {
    return fetch('app/views/Badge/Badge.html')
      .then(data => {
        return data.text();
      });
  }
}
