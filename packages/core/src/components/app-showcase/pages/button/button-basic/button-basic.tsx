import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "button-basic",
  styleUrl: "button-basic.scss",
  shadow: false,
  scoped: true,
})
export class ButtonBasic {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-button label="Submit"></any-button>
<any-button label="Disabled" disabled="true"></any-button>
<any-button label="Link" style-class="any-button-link"></any-button>`,

    html: `<div class="full-card buttons-intro">
  <h5>Basic</h5>
  <any-button label="Submit"></any-button>
  <any-button label="Disabled" disabled="true"></any-button>
  <any-button label="Link" style-class="any-button-link"></any-button>

  <h5>Icons</h5>
  <any-button icon="fa-solid:check"></any-button>
  <any-button label="Submit" icon="fa-solid:check"></any-button>
  <any-button label="Submit" icon="fa-solid:check" icon-pos="right"></any-button>
</div>`,

    javascript: ``,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>any-button renders a native button. Use label for the text, icon plus iconPos for a leading or trailing icon, and disabled to block interaction.</p>
          </app-docsectiontext>
            <div class="full-card buttons-intro">
              <h5>Basic</h5>
              <any-button label="Submit"></any-button>
              <any-button label="Disabled" disabled={true}></any-button>
              <any-button label="Link" styleClass="any-button-link"></any-button>
              <h5>Icons</h5>
              <any-button icon="fa-solid:check"></any-button>
              <any-button label="Submit" icon="fa-solid:check"></any-button>
              <any-button label="Submit" icon="fa-solid:check" iconPos="right"></any-button>
            </div>
          <app-code code={this.code} selector="button-basic"></app-code>
        </section>
      </Host>
    );
  }
}
