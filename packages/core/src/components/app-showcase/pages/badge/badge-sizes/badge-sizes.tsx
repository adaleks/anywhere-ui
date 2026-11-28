import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "badge-sizes",
  styleUrl: "badge-sizes.scss",
  shadow: false,
  scoped: true,
})
export class BadgeSizes {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-badge value="2"></any-badge>
<any-badge value="4" severity="warning" size="large"></any-badge>
<any-badge value="6" severity="success" size="xlarge"></any-badge>`,

    html: `<div class="full-card">
  <any-badge value="2" style-class="any-mr-2"></any-badge>
  <any-badge value="4" severity="warning" size="large" style-class="any-mr-2"></any-badge>
  <any-badge value="6" severity="success" size="xlarge"></any-badge>
</div>`,

    javascript: ``,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>The size property controls the badge size, use large or xlarge for bigger indicators.</p>
          </app-docsectiontext>
            <div class="full-card">
              <any-badge value="2" styleClass="any-mr-2"></any-badge>
              <any-badge value="4" severity="warning" size="large" styleClass="any-mr-2"></any-badge>
              <any-badge value="6" severity="success" size="xlarge"></any-badge>
            </div>
          <app-code code={this.code} selector="badge-sizes"></app-code>
        </section>
      </Host>
    );
  }
}
