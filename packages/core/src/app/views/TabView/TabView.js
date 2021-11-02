import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("TabView");
  }

  executeScript() {
    this.tv1 = document.querySelector("#tv1");
    this.tv2 = document.querySelector("#tv2");
    this.butonsText = document.querySelectorAll(".button-text");
    this.butonsText.forEach(btn => {
      btn.addEventListener('click', e => {
        const index = parseInt(e.target.dataset.tabIndex);
        this.tv2.activeIndex = index;
      });

    });
  }


  async getHtml() {
    return fetch('app/views/TabView/TabView.html')
      .then(data => {
        return data.text();
      });
  }
}
