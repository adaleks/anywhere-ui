import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Checkbox");
  }

  executeScript() {
    this.cb1 = document.querySelector("#cb1");
    this.cb1.binary = true;
    this.cb1.label = "Binary";
    this.cb1.addEventListener("valueChange", (event) => {
      console.log("Checkbox Value changed:", event);
    });
  }

  async getHtml() {
    return `
            <div class="content-section introduction">
              <div class="feature-intro">
                <h1>Checkbox</h1>
                <p>Checkbox is an extension to standard checkbox element with theming.</p>
              </div>
            </div>
            <div class="content-section">
              <div class="full-card">
                <h5>Basic</h5>
                  <any-checkbox id="cb1"></any-checkbox>
                <h5>Multiple</h5>
                <div class="any-field-checkbox">
                  <any-checkbox name="group1[]" value="New York" id="cb2" inputId="ny" label="New York"></any-checkbox>
                </div>
                <div class="any-field-checkbox">
                  <any-checkbox name="group1[]" value="San Francisco" id="cb3" inputId="sf" label="San Francisco"></any-checkbox>
                </div>
                <div class="any-field-checkbox">
                  <any-checkbox name="group1[]" value="Los Angeles" id="cb4" inputId="la" label="Los Angeles"></any-checkbox>
                </div>
                <div class="any-field-checkbox">
                  <any-checkbox name="group1[]" value="Chicago" id="cb5" inputId="ch" label="Chicago"></any-checkbox>
                </div>
                <h5>Preselection, Readonly and Disabled Option</h5>
                <div class="any-field-checkbox">
                  <any-checkbox name="group2[]" readonly="true" value="New York" id="cb6" inputId="ny" label="New York"></any-checkbox>
                </div>
                <div class="any-field-checkbox">
                  <any-checkbox name="group2[]" checked="true" value="San Francisco" id="cb7" inputId="sf" label="San Francisco"></any-checkbox>
                </div>
                <div class="any-field-checkbox">
                  <any-checkbox name="group2[]" checked="true" value="Los Angeles" id="cb8" inputId="la" label="Los Angeles"></any-checkbox>
                </div>
                <div class="any-field-checkbox">
                  <any-checkbox name="group2[]" disabled="true" value="Chicago" id="cb9" inputId="ch" label="Chicago"></any-checkbox>
                </div>
              </div>
            </div>
        `;
  }
}
