import { Component, Host, Prop, h, State } from "@stencil/core";

@Component({
  tag: "tab-view-programmatic",
  styleUrl: "tab-view-programmatic.scss",
  shadow: false,
  scoped: true,
})
export class TabViewProgrammatic {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-tab-view active-index="1">
  <any-tab-panel header="Header 1">...</any-tab-panel>
  <any-tab-panel header="Header 2">...</any-tab-panel>
  <any-tab-panel header="Header 3">...</any-tab-panel>
</any-tab-view>`,

    html: `<div class="full-card">
  <any-button label="Activate 1st" style-class="any-button-text"></any-button>
  <any-button label="Activate 2nd" style-class="any-button-text"></any-button>

  <any-tab-view id="tv">
    <any-tab-panel header="Header 1">...</any-tab-panel>
    <any-tab-panel header="Header 2">...</any-tab-panel>
    <any-tab-panel header="Header 3">...</any-tab-panel>
  </any-tab-view>
</div>`,

    javascript: `const tabView = document.querySelector("#tv");
document.querySelector("#activate_button_1").addEventListener("aOnClick", () => {
  tabView.activeIndex = 0;
});
document.querySelector("#activate_button_2").addEventListener("aOnClick", () => {
  tabView.activeIndex = 1;
});`,
  };
  @State() activeIndex = 1;

  private setIndex = (index: number) => {
    this.activeIndex = index;
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>Control the open tab with the activeIndex property; the buttons below update it from code.</p>
          </app-docsectiontext>
            <div class="full-card">
              <div style={{ padding: "0.5em 0 1em 0" }}>
                <any-button label="Activate 1st" styleClass="any-button-text" onClick={() => this.setIndex(0)}></any-button>
                <any-button label="Activate 2nd" styleClass="any-button-text" onClick={() => this.setIndex(1)}></any-button>
                <any-button label="Activate 3rd" styleClass="any-button-text" onClick={() => this.setIndex(2)}></any-button>
              </div>
              <any-tab-view activeIndex={this.activeIndex}>
                <any-tab-panel header="Header 1">
                  <p>First panel, activated with activeIndex = 0.</p>
                </any-tab-panel>
                <any-tab-panel header="Header 2">
                  <p>Second panel, activated with activeIndex = 1.</p>
                </any-tab-panel>
                <any-tab-panel header="Header 3">
                  <p>Third panel, activated with activeIndex = 2.</p>
                </any-tab-panel>
              </any-tab-view>
            </div>
          <app-code code={this.code} selector="tab-view-programmatic"></app-code>
        </section>
      </Host>
    );
  }
}
