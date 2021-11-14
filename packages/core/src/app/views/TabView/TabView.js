import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("TabView");
  }

  executeScript() {
    this.viewOnGithubBtn = document.querySelector("#view_on_github");
    this.viewOnGithubBtn.addEventListener("aOnClick", (event) => {
      window.open('https://github.com/adaleks/anywhere-ui/tree/main/packages/core/src/components/tab-view', '_blank');
    });
    this.tv1 = document.querySelector("#tv1");
    this.tv2 = document.querySelector("#tv2");
    this.tv2.activeIndex = 1;
    this.activateButton1 = document.querySelector("#activate_button_1");
    this.activateButton2 = document.querySelector("#activate_button_2");
    this.activateButton3 = document.querySelector("#activate_button_3");
    this.activateButton1.addEventListener("aOnClick", (event) => {
      this.tv2.activeIndex = 0;
    });
    this.activateButton2.addEventListener("aOnClick", (event) => {
      this.tv2.activeIndex = 1;
    });
    this.activateButton3.addEventListener("aOnClick", (event) => {
      this.tv2.activeIndex = 2;
    });
  }


  async getHtml() {
    return fetch('app/views/TabView/TabView.html')
      .then(data => {
        return data.text();
      });
  }
}
