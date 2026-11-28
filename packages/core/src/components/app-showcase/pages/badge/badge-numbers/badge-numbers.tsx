import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "badge-numbers",
  styleUrl: "badge-numbers.scss",
  shadow: false,
  scoped: true,
})
export class BadgeNumbers {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-badge value="2"></any-badge>
<any-badge value="15" severity="secondary"></any-badge>
<any-badge value="8" severity="success"></any-badge>
<any-badge value="4" severity="info"></any-badge>
<any-badge value="12" severity="warning"></any-badge>
<any-badge value="3" severity="danger"></any-badge>`,

    html: `<div class="full-card">
  <any-badge value="2" style-class="any-mr-2"></any-badge>
  <any-badge value="15" severity="secondary" style-class="any-mr-2"></any-badge>
  <any-badge value="8" severity="success" style-class="any-mr-2"></any-badge>
  <any-badge value="4" severity="info" style-class="any-mr-2"></any-badge>
  <any-badge value="12" severity="warning" style-class="any-mr-2"></any-badge>
  <any-badge value="3" severity="danger"></any-badge>
</div>`,

    javascript: ``,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>Numbers are displayed with the value property and the severity property changes the colour of the badge.</p>
          </app-docsectiontext>
            <div class="full-card">
              <any-badge value="2" styleClass="any-mr-2"></any-badge>
              <any-badge value="15" severity="secondary" styleClass="any-mr-2"></any-badge>
              <any-badge value="8" severity="success" styleClass="any-mr-2"></any-badge>
              <any-badge value="4" severity="info" styleClass="any-mr-2"></any-badge>
              <any-badge value="12" severity="warning" styleClass="any-mr-2"></any-badge>
              <any-badge value="3" severity="danger"></any-badge>
            </div>
          <app-code code={this.code} selector="badge-numbers"></app-code>
        </section>
      </Host>
    );
  }
}
