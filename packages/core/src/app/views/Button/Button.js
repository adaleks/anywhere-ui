import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Button");
  }

  executeScript() {
    this.b1 = document.querySelector("#b1");
    this.b1.addEventListener("aOnClick", (event) => {
      console.log("Button onClick:", event);
    });
    this.b1.addEventListener("aOnBlur", (event) => {
      console.log("Button onBlur:", event);
    });
    this.b1.addEventListener("aOnFocus", (event) => {
      console.log("Button onFocus:", event);
    });
    this.viewOnGithubBtn = document.querySelector("#view_on_github");
    this.viewOnGithubBtn.addEventListener("aOnClick", (event) => {
      window.open('https://github.com/adaleks/anywhere-ui/tree/main/packages/core/src/components/button', '_blank');
    });

    document.querySelectorAll('.lb').forEach(item => {
      // item.loadingIcon = "icomoon-free:spinner3";
      item.addEventListener('aOnClick', event => {
        item.loading = true;
        setTimeout(() => {
          item.loading = false;
        }, 1000);
      });
    });

  }

  async getHtml() {
    return fetch('app/views/Button/Button.html')
      .then(data => {
        return data.text();
      });
  }
}
