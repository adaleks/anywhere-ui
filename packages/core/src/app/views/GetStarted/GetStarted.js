import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("");
  }

  executeScript() {}

  async getHtml() {
    return fetch('app/views/GetStarted/GetStarted.html')
      .then(data => {
        return data.text();
      });
  }
}
