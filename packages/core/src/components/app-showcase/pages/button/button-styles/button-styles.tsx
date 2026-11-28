import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "button-styles",
  styleUrl: "button-styles.scss",
  shadow: false,
  scoped: true,
})
export class ButtonStyles {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-button label="Primary" style-class="any-button-rounded"></any-button>
<any-button label="Success" style-class="any-button-text any-button-success"></any-button>
<any-button label="Warning" style-class="any-button-outlined any-button-warning"></any-button>`,

    html: `<div class="full-card buttons-intro">
  <h5>Rounded Buttons</h5>
  <div class="responsive">
    <any-button label="Primary" style-class="any-button-rounded"></any-button>
    <any-button label="Secondary" style-class="any-button-rounded any-button-secondary"></any-button>
    <any-button label="Danger" style-class="any-button-rounded any-button-danger"></any-button>
  </div>

  <h5>Text Buttons</h5>
  <div class="responsive">
    <any-button label="Primary" style-class="any-button-text"></any-button>
    <any-button label="Plain" style-class="any-button-text any-button-plain"></any-button>
  </div>

  <h5>Outlined Buttons</h5>
  <div class="responsive">
    <any-button label="Primary" style-class="any-button-outlined"></any-button>
    <any-button label="Danger" style-class="any-button-outlined any-button-danger"></any-button>
  </div>

  <h5>Rounded Outlined Buttons</h5>
  <div class="responsive">
    <any-button label="Primary" style-class="any-button-rounded any-button-outlined"></any-button>
    <any-button label="Danger" style-class="any-button-rounded any-button-outlined any-button-danger"></any-button>
  </div>
</div>`,

    javascript: ``,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>Besides the filled default, buttons support rounded, text, raised text, outlined and rounded outlined styles through styleClass helpers.</p>
          </app-docsectiontext>
            <div class="full-card buttons-intro">
              <h5>Rounded Buttons</h5>
              <div class="responsive">
                <any-button label="Primary" styleClass="any-button-rounded"></any-button>
                <any-button label="Secondary" styleClass="any-button-rounded any-button-secondary"></any-button>
                <any-button label="Success" styleClass="any-button-rounded any-button-success"></any-button>
                <any-button label="Info" styleClass="any-button-rounded any-button-info"></any-button>
                <any-button label="Warning" styleClass="any-button-rounded any-button-warning"></any-button>
                <any-button label="Help" styleClass="any-button-rounded any-button-help"></any-button>
                <any-button label="Danger" styleClass="any-button-rounded any-button-danger"></any-button>
              </div>
              <h5>Text Buttons</h5>
              <div class="responsive">
                <any-button label="Primary" styleClass="any-button-text"></any-button>
                <any-button label="Secondary" styleClass="any-button-text any-button-secondary"></any-button>
                <any-button label="Success" styleClass="any-button-text any-button-success"></any-button>
                <any-button label="Info" styleClass="any-button-text any-button-info"></any-button>
                <any-button label="Warning" styleClass="any-button-text any-button-warning"></any-button>
                <any-button label="Help" styleClass="any-button-text any-button-help"></any-button>
                <any-button label="Danger" styleClass="any-button-text any-button-danger"></any-button>
                <any-button label="Plain" styleClass="any-button-text any-button-plain"></any-button>
              </div>
              <h5>Outlined Buttons</h5>
              <div class="responsive">
                <any-button label="Primary" styleClass="any-button-outlined"></any-button>
                <any-button label="Secondary" styleClass="any-button-outlined any-button-secondary"></any-button>
                <any-button label="Success" styleClass="any-button-outlined any-button-success"></any-button>
                <any-button label="Info" styleClass="any-button-outlined any-button-info"></any-button>
                <any-button label="Warning" styleClass="any-button-outlined any-button-warning"></any-button>
                <any-button label="Help" styleClass="any-button-outlined any-button-help"></any-button>
                <any-button label="Danger" styleClass="any-button-outlined any-button-danger"></any-button>
              </div>
              <h5>Rounded Outlined Buttons</h5>
              <div class="responsive">
                <any-button label="Primary" styleClass="any-button-rounded any-button-outlined"></any-button>
                <any-button label="Secondary" styleClass="any-button-rounded any-button-outlined any-button-secondary"></any-button>
                <any-button label="Success" styleClass="any-button-rounded any-button-outlined any-button-success"></any-button>
                <any-button label="Info" styleClass="any-button-rounded any-button-outlined any-button-info"></any-button>
                <any-button label="Warning" styleClass="any-button-rounded any-button-outlined any-button-warning"></any-button>
                <any-button label="Help" styleClass="any-button-rounded any-button-outlined any-button-help"></any-button>
                <any-button label="Danger" styleClass="any-button-rounded any-button-outlined any-button-danger"></any-button>
              </div>
            </div>
          <app-code code={this.code} selector="button-styles"></app-code>
        </section>
      </Host>
    );
  }
}
