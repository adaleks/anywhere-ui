import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "ripple-effect-basic",
  styleUrl: "ripple-effect-basic.scss",
  shadow: false,
  scoped: true,
})
export class RippleEffectBasic {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<div class="full-card primary-box">
  Default
  <any-ripple-effect></any-ripple-effect>
</div>`,

    html: `<div class="card-container any-d-flex">
  <div class="full-card primary-box">
    Default
    <any-ripple-effect></any-ripple-effect>
  </div>
  <div class="full-card styled-box-green">
    Green
    <any-ripple-effect></any-ripple-effect>
  </div>
  <div class="full-card styled-box-orange">
    Orange
    <any-ripple-effect></any-ripple-effect>
  </div>
  <div class="full-card styled-box-purple">
    Purple
    <any-ripple-effect></any-ripple-effect>
  </div>
</div>`,

    javascript: ``,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>Place any-ripple-effect inside a positioned element. Click the boxes to see the ink animation.</p>
          </app-docsectiontext>
            <div class="card-container any-d-flex">
              <div class="full-card primary-box">
                Default
                <any-ripple-effect></any-ripple-effect>
              </div>
              <div class="full-card styled-box-green">
                Green
                <any-ripple-effect></any-ripple-effect>
              </div>
              <div class="full-card styled-box-orange">
                Orange
                <any-ripple-effect></any-ripple-effect>
              </div>
              <div class="full-card styled-box-purple">
                Purple
                <any-ripple-effect></any-ripple-effect>
              </div>
            </div>
          <app-code code={this.code} selector="ripple-effect-basic"></app-code>
        </section>
      </Host>
    );
  }
}
