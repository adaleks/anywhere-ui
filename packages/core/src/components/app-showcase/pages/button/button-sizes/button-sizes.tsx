import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "button-sizes",
  styleUrl: "button-sizes.scss",
  shadow: false,
  scoped: true,
})
export class ButtonSizes {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-button label="Small" style-class="any-button-sm"></any-button>
<any-button label="Normal"></any-button>
<any-button label="Large" style-class="any-button-lg"></any-button>`,

    html: `<div class="sizes">
  <any-button label="Small" icon="fa-solid:check" style-class="any-button-sm"></any-button>
  <any-button label="Normal" icon="fa-solid:check"></any-button>
  <any-button label="Large" icon="fa-solid:check" style-class="any-button-lg"></any-button>
</div>`,

    javascript: ``,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>Four sizes are available through styleClass: any-button-sm, the default any-button and any-button-lg.</p>
          </app-docsectiontext>
            <div class="full-card buttons-intro">
              <div class="sizes">
                <any-button label="Small" icon="fa-solid:check" styleClass="any-button-sm"></any-button>
                <any-button label="Normal" icon="fa-solid:check" styleClass="any-button"></any-button>
                <any-button label="Large" icon="fa-solid:check" styleClass="any-button-lg"></any-button>
              </div>
            </div>
          <app-code code={this.code} selector="button-sizes"></app-code>
        </section>
      </Host>
    );
  }
}
