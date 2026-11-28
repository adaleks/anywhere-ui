import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "badge-inline",
  styleUrl: "badge-inline.scss",
  shadow: false,
  scoped: true,
})
export class BadgeInline {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-button badge="8" label="Emails"></any-button>
<any-button badge="8" label="Messages" icon="fa-solid:user-friends"
  badge-class="any-badge-danger"></any-button>`,

    html: `<div class="full-card">
  <any-button badge="8" label="Emails"></any-button>
  <any-button badge="8" label="Messages" icon="fa-solid:user-friends"
    style-class="any-button-warning" badge-class="any-badge-danger"></any-button>
</div>`,

    javascript: ``,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>any-button accepts a badge and a badgeClass property to render an inline badge inside the button.</p>
          </app-docsectiontext>
            <div class="full-card">
              <any-button badge="8" label="Emails"></any-button>
              <any-button
                badge="8"
                label="Messages"
                icon="fa-solid:user-friends"
                styleClass="any-button-warning"
                badgeClass="any-badge-danger"
              ></any-button>
            </div>
          <app-code code={this.code} selector="badge-inline"></app-code>
        </section>
      </Host>
    );
  }
}
