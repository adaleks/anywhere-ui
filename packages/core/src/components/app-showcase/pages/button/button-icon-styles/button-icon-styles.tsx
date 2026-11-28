import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "button-icon-styles",
  styleUrl: "button-icon-styles.scss",
  shadow: false,
  scoped: true,
})
export class ButtonIconStyles {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-button icon="fa-solid:check" style-class="any-button-rounded"></any-button>
<any-button icon="fa-solid:search" style-class="any-button-rounded any-button-success"></any-button>`,

    html: `<div class="full-card buttons-intro">
  <any-button icon="fa-solid:check" style-class="any-button-rounded"></any-button>
  <any-button icon="fa-solid:search" style-class="any-button-rounded any-button-success"></any-button>
  <any-button icon="fa-solid:times" style-class="any-button-rounded any-button-outlined any-button-danger"></any-button>
</div>`,

    javascript: ``,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>Icon-only buttons work with the same style helpers; combine icon with rounded, text and outlined classes.</p>
          </app-docsectiontext>
            <div class="full-card buttons-intro">
              <h5>Rounded Icon Buttons</h5>
              <any-button icon="fa-solid:check" styleClass="any-button-rounded"></any-button>
              <any-button icon="fa-solid:bookmark" styleClass="any-button-rounded any-button-secondary"></any-button>
              <any-button icon="fa-solid:search" styleClass="any-button-rounded any-button-success"></any-button>
              <any-button icon="fa-solid:user" styleClass="any-button-rounded any-button-info"></any-button>
              <any-button icon="fa-solid:bell" styleClass="any-button-rounded any-button-warning"></any-button>
              <any-button icon="fa-solid:heart" styleClass="any-button-rounded any-button-help"></any-button>
              <any-button icon="fa-solid:times" styleClass="any-button-rounded any-button-danger"></any-button>
              <h5>Rounded Text Icon Buttons</h5>
              <any-button icon="fa-solid:check" styleClass="any-button-rounded any-button-text"></any-button>
              <any-button icon="fa-solid:bookmark" styleClass="any-button-rounded any-button-text any-button-secondary"></any-button>
              <any-button icon="fa-solid:search" styleClass="any-button-rounded any-button-text any-button-success"></any-button>
              <any-button icon="fa-solid:user" styleClass="any-button-rounded any-button-text any-button-info"></any-button>
              <any-button icon="fa-solid:bell" styleClass="any-button-rounded any-button-text any-button-warning"></any-button>
              <any-button icon="fa-solid:heart" styleClass="any-button-rounded any-button-text any-button-help"></any-button>
              <any-button icon="fa-solid:times" styleClass="any-button-rounded any-button-text any-button-danger"></any-button>
              <h5>Rounded and Outlined Icon Buttons</h5>
              <any-button icon="fa-solid:check" styleClass="any-button-rounded any-button-outlined"></any-button>
              <any-button icon="fa-solid:bookmark" styleClass="any-button-rounded any-button-outlined any-button-secondary"></any-button>
              <any-button icon="fa-solid:search" styleClass="any-button-rounded any-button-outlined any-button-success"></any-button>
              <any-button icon="fa-solid:user" styleClass="any-button-rounded any-button-outlined any-button-info"></any-button>
              <any-button icon="fa-solid:bell" styleClass="any-button-rounded any-button-outlined any-button-warning"></any-button>
              <any-button icon="fa-solid:heart" styleClass="any-button-rounded any-button-outlined any-button-help"></any-button>
              <any-button icon="fa-solid:times" styleClass="any-button-rounded any-button-outlined any-button-danger"></any-button>
            </div>
          <app-code code={this.code} selector="button-icon-styles"></app-code>
        </section>
      </Host>
    );
  }
}
