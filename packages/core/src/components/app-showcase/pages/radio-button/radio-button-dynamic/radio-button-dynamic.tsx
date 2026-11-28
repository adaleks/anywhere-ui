import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "radio-button-dynamic",
  styleUrl: "radio-button-dynamic.scss",
  shadow: false,
  scoped: true,
})
export class RadioButtonDynamic {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-radio-group value="losangeles" name="dynamicGroup">
  <any-radio-button value="chicago" disabled="true" label="Chicago"></any-radio-button>
  <any-radio-button value="losangeles" label="Los Angeles"></any-radio-button>
</any-radio-group>`,

    html: `<div class="full-card">
  <any-radio-group value="losangeles" name="dynamicGroup">
    <div class="any-field-radiobutton">
      <any-radio-button value="chicago" disabled="true" label="Chicago"></any-radio-button>
    </div>
    <div class="any-field-radiobutton">
      <any-radio-button value="losangeles" label="Los Angeles"></any-radio-button>
    </div>
    <div class="any-field-radiobutton">
      <any-radio-button value="newyork" label="New York"></any-radio-button>
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
            <p>Set the group value to preselect an option and use disabled on an any-radio-button to block that option.</p>
          </app-docsectiontext>
            <div class="full-card">
              <any-radio-group value="losangeles" name="dynamicGroup">
                <div class="any-field-radiobutton">
                  <any-radio-button value="chicago" disabled={true} label="Chicago"></any-radio-button>
                </div>
                <div class="any-field-radiobutton">
                  <any-radio-button value="losangeles" label="Los Angeles"></any-radio-button>
                </div>
                <div class="any-field-radiobutton">
                  <any-radio-button value="newyork" label="New York"></any-radio-button>
                </div>
                <div class="any-field-radiobutton">
                  <any-radio-button value="sanfrancisco" label="San Francisco"></any-radio-button>
                </div>
              </any-radio-group>
            </div>
          <app-code code={this.code} selector="radio-button-dynamic"></app-code>
        </section>
      </Host>
    );
  }
}
