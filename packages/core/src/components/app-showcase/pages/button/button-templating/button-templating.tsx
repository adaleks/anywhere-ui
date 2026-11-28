import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "button-templating",
  styleUrl: "button-templating.scss",
  shadow: false,
  scoped: true,
})
export class ButtonTemplating {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-button>
  <div slot="content">
    <img src="assets/images/webcomponents-logo.png" style="width: 1.5rem" />
  </div>
</any-button>`,

    html: `<div class="full-card buttons-intro">
  <any-button>
    <div slot="content">
      <img src="assets/images/webcomponents-logo.png" style="width: 1.5rem" />
      <span class="any-ml-2 any-text-bold">AnywhereUI</span>
    </div>
  </any-button>

  <div class="responsive">
    <span class="any-buttonset">
      <any-button label="Save" icon="fa-solid:check"></any-button>
      <any-button label="Delete" icon="fa-solid:trash-alt"></any-button>
      <any-button label="Cancel" icon="fa-solid:times"></any-button>
    </span>
  </div>
</div>`,

    javascript: ``,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>Provide a slot named content to render custom markup inside the button. group buttons with the any-buttonset wrapper.</p>
          </app-docsectiontext>
            <div class="full-card buttons-intro">
              <h5>Templating</h5>
              <any-button class="cb">
                <div slot="content">
                  <img alt="logo" src="assets/images/webcomponents-logo.png" style={{ width: "1.5rem" }} />
                </div>
              </any-button>
              <any-button class="cb" styleClass="any-button-outlined">
                <div slot="content">
                  <img alt="logo" src="assets/images/webcomponents-logo.png" style={{ width: "1.5rem" }} />
                  <span class="any-ml-2 any-text-bold">AnywhereUI</span>
                </div>
              </any-button>
              <h5>Button Set</h5>
              <div class="responsive">
                <span class="any-buttonset">
                  <any-button label="Save" icon="fa-solid:check"></any-button>
                  <any-button label="Delete" icon="fa-solid:trash-alt"></any-button>
                  <any-button label="Cancel" icon="fa-solid:times"></any-button>
                </span>
              </div>
            </div>
          <app-code code={this.code} selector="button-templating"></app-code>
        </section>
      </Host>
    );
  }
}
