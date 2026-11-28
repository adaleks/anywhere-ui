import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "badge-positioned",
  styleUrl: "badge-positioned.scss",
  shadow: false,
  scoped: true,
})
export class BadgePositioned {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-badge-overlay>
  <i class="iconify" data-icon="fa-solid:bell"></i>
  <any-badge value="2"></any-badge>
</any-badge-overlay>`,

    html: `<div class="full-card">
  <any-badge-overlay style-class="any-mr-4">
    <i class="iconify" data-width="2rem" data-icon="fa-solid:bell"></i>
    <any-badge value="2"></any-badge>
  </any-badge-overlay>
  <any-badge-overlay>
    <i class="iconify" data-width="2rem" data-icon="fa-solid:calendar"></i>
    <any-badge value="10+" severity="danger"></any-badge>
  </any-badge-overlay>
</div>`,

    javascript: ``,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>any-badge-overlay positions a badge on the corner of any element, for example an icon or an avatar.</p>
          </app-docsectiontext>
            <div class="full-card">
              <any-badge-overlay styleClass="any-mr-4">
                <i class="iconify" data-width="2rem" data-icon="fa-solid:bell"></i>
                <any-badge value="2"></any-badge>
              </any-badge-overlay>
              <any-badge-overlay styleClass="any-mr-4">
                <i class="iconify" data-width="2rem" data-icon="fa-solid:calendar"></i>
                <any-badge value="10+" severity="danger"></any-badge>
              </any-badge-overlay>
              <any-badge-overlay>
                <i class="iconify" data-width="2rem" data-height="2rem" data-icon="fa-solid:envelope"></i>
                <any-badge severity="danger"></any-badge>
              </any-badge-overlay>
            </div>
          <app-code code={this.code} selector="badge-positioned"></app-code>
        </section>
      </Host>
    );
  }
}
