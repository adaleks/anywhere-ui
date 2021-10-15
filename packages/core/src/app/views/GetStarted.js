import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("");
  }

  executeScript() {
    // setTimeout(() => {
    // Prism.highlightAll();
    // }, 200);
    // this.it1 = document.querySelector("#it1");
  }

  async getHtml() {
    return `
            <div class="content-section introduction">
              <div class="feature-intro">
                <h1>Get Started</h1>
                <p>AnywhereUI is a rich set of open source Web Components.</p>
              </div>
            </div>
            <div class="content-section documentation">
                <h5>Download</h5>
                <p>AnywhereUI is available at npm, if you have an existing application run the following command to download it to your project.</p>
<pre class="language-markup"><code class="language-markup">
npm install @anywhere-ui/core --save\n
</code></pre>
            </div>
        `;
  }
}
