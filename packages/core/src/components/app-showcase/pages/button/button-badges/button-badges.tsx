import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "button-badges",
  styleUrl: "button-badges.scss",
  shadow: false,
  scoped: true,
})
export class ButtonBadges {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-button badge="8" label="Emails"></any-button>
<any-button badge="8" label="Messages" badge-class="any-badge-danger"></any-button>`,

    html: `<div class="full-card buttons-intro">
  <h5>Badges</h5>
  <any-button badge="8" label="Emails"></any-button>
  <any-button label="Messages" icon="fa-solid:user-friends"
    badge="8" badge-class="any-badge-danger"></any-button>

  <h5>Loading</h5>
  <any-button class="lb" label="Search" icon="fa-solid:search"></any-button>
</div>`,

    javascript: `document.querySelectorAll(".lb").forEach((button) => {
  button.addEventListener("aOnClick", () => {
    button.loading = true;
    setTimeout(() => {
      button.loading = false;
    }, 1000);
  });
});`,
  };

  private onLoadingClick = (event: Event) => {
    const button = event.currentTarget as HTMLAnyButtonElement;
    button.loading = true;
    setTimeout(() => {
      button.loading = false;
    }, 1000);
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>The badge property shows a badge inside the button. Set loading to true on click to show a spinner until the action finishes (the demo resets it after a second).</p>
          </app-docsectiontext>
            <div class="full-card buttons-intro">
              <h5>Badges</h5>
              <any-button badge="8" label="Emails"></any-button>
              <any-button label="Messages" icon="fa-solid:user-friends" styleClass="any-button-warning" badge="8" badgeClass="any-badge-danger"></any-button>
              <h5>Loading</h5>
              <any-button class="lb" label="Search" icon="fa-solid:search" onClick={this.onLoadingClick}></any-button>
              <any-button class="lb" label="Search" icon="fa-solid:search" iconPos="right" onClick={this.onLoadingClick}></any-button>
              <any-button class="lb" icon="fa-solid:search" onClick={this.onLoadingClick}></any-button>
              <any-button class="lb" label="Search" onClick={this.onLoadingClick}></any-button>
            </div>
          <app-code code={this.code} selector="button-badges"></app-code>
        </section>
      </Host>
    );
  }
}
