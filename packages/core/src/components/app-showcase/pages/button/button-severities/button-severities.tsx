import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "button-severities",
  styleUrl: "button-severities.scss",
  shadow: false,
  scoped: true,
})
export class ButtonSeverities {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-button label="Primary"></any-button>
<any-button label="Secondary" style-class="any-button-secondary"></any-button>
<any-button label="Success" style-class="any-button-success"></any-button>
<any-button label="Danger" style-class="any-button-danger"></any-button>`,

    html: `<div class="full-card buttons-intro">
  <h5>Severities</h5>
  <div class="responsive">
    <any-button label="Primary"></any-button>
    <any-button label="Secondary" style-class="any-button-secondary"></any-button>
    <any-button label="Success" style-class="any-button-success"></any-button>
    <any-button label="Info" style-class="any-button-info"></any-button>
    <any-button label="Warning" style-class="any-button-warning"></any-button>
    <any-button label="Help" style-class="any-button-help"></any-button>
    <any-button label="Danger" style-class="any-button-danger"></any-button>
  </div>

  <h5>Raised Buttons</h5>
  <div class="responsive">
    <any-button label="Primary" style-class="any-button-raised"></any-button>
    <any-button label="Secondary" style-class="any-button-raised any-button-secondary"></any-button>
    <any-button label="Success" style-class="any-button-raised any-button-success"></any-button>
    <any-button label="Info" style-class="any-button-raised any-button-info"></any-button>
    <any-button label="Warning" style-class="any-button-raised any-button-warning"></any-button>
    <any-button label="Help" style-class="any-button-raised any-button-help"></any-button>
    <any-button label="Danger" style-class="any-button-raised any-button-danger"></any-button>
  </div>
</div>`,

    javascript: ``,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>The styleClass property applies any of the severity helpers (secondary, success, info, warning, help, danger) and any-button-raised adds an elevation.</p>
          </app-docsectiontext>
            <div class="full-card buttons-intro">
              <h5>Severities</h5>
              <div class="responsive">
                <any-button label="Primary"></any-button>
                <any-button label="Secondary" styleClass="any-button-secondary"></any-button>
                <any-button label="Success" styleClass="any-button-success"></any-button>
                <any-button label="Info" styleClass="any-button-info"></any-button>
                <any-button label="Warning" styleClass="any-button-warning"></any-button>
                <any-button label="Help" styleClass="any-button-help"></any-button>
                <any-button label="Danger" styleClass="any-button-danger"></any-button>
              </div>
              <h5>Raised Buttons</h5>
              <div class="responsive">
                <any-button label="Primary" styleClass="any-button-raised"></any-button>
                <any-button label="Secondary" styleClass="any-button-raised any-button-secondary"></any-button>
                <any-button label="Success" styleClass="any-button-raised any-button-success"></any-button>
                <any-button label="Info" styleClass="any-button-raised any-button-info"></any-button>
                <any-button label="Warning" styleClass="any-button-raised any-button-warning"></any-button>
                <any-button label="Help" styleClass="any-button-raised any-button-help"></any-button>
                <any-button label="Danger" styleClass="any-button-raised any-button-danger"></any-button>
              </div>
            </div>
          <app-code code={this.code} selector="button-severities"></app-code>
        </section>
      </Host>
    );
  }
}
