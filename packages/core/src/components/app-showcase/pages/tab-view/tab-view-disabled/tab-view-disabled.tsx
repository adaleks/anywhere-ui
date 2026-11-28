import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "tab-view-disabled",
  styleUrl: "tab-view-disabled.scss",
  shadow: false,
  scoped: true,
})
export class TabViewDisabled {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-tab-view>
  <any-tab-panel header="Header 1">Enabled panel</any-tab-panel>
  <any-tab-panel header="Header 2" disabled="true">Disabled panel</any-tab-panel>
</any-tab-view>`,

    html: `<div class="full-card">
  <any-tab-view>
    <any-tab-panel header="Header 1">Enabled panel</any-tab-panel>
    <any-tab-panel header="Header 2">Another panel</any-tab-panel>
    <any-tab-panel header="Header 3" disabled="true">Disabled panel</any-tab-panel>
  </any-tab-view>
</div>`,

    javascript: ``,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>A panel with disabled set cannot be selected from the tab bar.</p>
          </app-docsectiontext>
            <div class="full-card">
              <any-tab-view>
                <any-tab-panel header="Header 1">
                  <p>Enabled panel.</p>
                </any-tab-panel>
                <any-tab-panel header="Header 2">
                  <p>Another enabled panel.</p>
                </any-tab-panel>
                <any-tab-panel header="Header 3" disabled={true}>
                  <p>Disabled panel, the tab cannot be activated.</p>
                </any-tab-panel>
              </any-tab-view>
            </div>
          <app-code code={this.code} selector="tab-view-disabled"></app-code>
        </section>
      </Host>
    );
  }
}
