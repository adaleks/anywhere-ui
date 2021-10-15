export default class {
  constructor(params) {
    this.params = params;
  }

  setTitle(title) {
    if (title) {
      document.title = "AnywhereUI - " + title;
    } else {
      document.title = "AnywhereUI ";
    }
  }

  async getHtml() {
    return "";
  }

  executeScript() {}
}
