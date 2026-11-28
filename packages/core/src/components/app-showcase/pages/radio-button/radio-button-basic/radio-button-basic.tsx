import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "radio-button-basic",
  styleUrl: "radio-button-basic.scss",
  shadow: false,
  scoped: true,
})
export class RadioButtonBasic {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-radio-group name="city">
  <any-radio-button value="Chicago" label="Chicago"></any-radio-button>
  <any-radio-button value="Los Angeles" label="Los Angeles"></any-radio-button>
  <any-radio-button value="New York" label="New York"></any-radio-button>
</any-radio-group>`,

    html: `<div class="full-card">
  <any-radio-group name="city">
    <div class="any-field-radiobutton">
      <any-radio-button value="Chicago" label="Chicago"></any-radio-button>
    </div>
    <div class="any-field-radiobutton">
      <any-radio-button value="Los Angeles" label="Los Angeles"></any-radio-button>
    </div>
    <div class="any-field-radiobutton">
      <any-radio-button value="New York" label="New York"></any-radio-button>
    </div>
  </any-radio-group>
</div>`,

    javascript: ``,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>Wrap any-radio-button elements in an any-radio-group and give the group a name; the group keeps the selected value in sync automatically.</p>
          </app-docsectiontext>
            <div class="full-card">
              <any-radio-group name="city">
                <div class="any-field-radiobutton">
                  <any-radio-button value="Chicago" label="Chicago"></any-radio-button>
                </div>
                <div class="any-field-radiobutton">
                  <any-radio-button value="Los Angeles" label="Los Angeles"></any-radio-button>
                </div>
                <div class="any-field-radiobutton">
                  <any-radio-button value="New York" label="New York"></any-radio-button>
                </div>
                <div class="any-field-radiobutton">
                  <any-radio-button value="San Francisco" label="San Francisco"></any-radio-button>
                </div>
              </any-radio-group>
            </div>
          <app-code code={this.code} selector="radio-button-basic"></app-code>
        </section>
      </Host>
    );
  }
}
