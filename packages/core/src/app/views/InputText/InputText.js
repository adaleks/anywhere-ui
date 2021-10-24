import AbstractView from "../AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("InputText");
  }

  executeScript() {
    this.it1 = document.querySelector("#it1");
    this.it2 = document.querySelector("#it2");
    this.it3 = document.querySelector("#it3");
    this.it4 = document.querySelector("#it4");
    this.it5 = document.querySelector("#it5");
    // this.it1.value = "Goran";
    // it1 options
    this.it1.label = "Username";
    this.it1.inputWrapperClass = "any-field";
    // this.it1.disabled = true;
    // this.it1.readonly = true;
    this.it1.addEventListener("valueChange", (event) => {
      console.log("Input Value changed:", event);
    });
    // const linkElem = document.createElement("link");
    // linkElem.setAttribute("rel", "stylesheet");
    // linkElem.setAttribute("href", "/assets/css/inputtext.css");

    // this.it1.shadowRoot.appendChild(linkElem);
    // (async () => {
    //   await customElements.whenDefined("any-input-text");
    //   const anyInput1 = document.querySelector("any-input-text#it1");
    //   const anyInput2 = document.querySelector("any-input-text#it2");
    //   let input1 = await anyInput1.getInputRef();
    //   let input2 = await anyInput2.getInputRef();
    //   console.log(input1, input2);
    //   input1.setAttribute("required", true);
    // })();
    // it2 options
    this.it2.floatLabel = true;
    this.it2.label = "Username";

    this.it3.disabled = true;
    this.it3.placeholder = "Disabled";

    this.it4.inputWrapperClass = "any-input-icon-left";
    this.it4.placeholder = "Search";

    this.it5.inputWrapperClass = "any-input-icon-right";
    this.it5.rightIconClass = "spin-animation";
  }

  async getHtml() {
    return fetch('app/views/InputText/InputText.html')
      .then(data => {
        return data.text();
      });
  }
}
