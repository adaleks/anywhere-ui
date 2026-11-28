import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "tab-view-basic",
  styleUrl: "tab-view-basic.scss",
  shadow: false,
  scoped: true,
})
export class TabViewBasic {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-tab-view>
  <any-tab-panel header="Header 1">Content 1</any-tab-panel>
  <any-tab-panel header="Header 2">Content 2</any-tab-panel>
  <any-tab-panel header="Header 3">Content 3</any-tab-panel>
</any-tab-view>`,

    html: `<div class="full-card">
  <any-tab-view>
    <any-tab-panel header="Header 1">...</any-tab-panel>
    <any-tab-panel header="Header 2">...</any-tab-panel>
    <any-tab-panel header="Header 3">...</any-tab-panel>
  </any-tab-view>
</div>`,

    javascript: ``,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>Each any-tab-panel becomes a tab; the header property is the tab title and the panel content is the tab body.</p>
          </app-docsectiontext>
            <div class="full-card">
              <any-tab-view>
                <any-tab-panel header="Header 1">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </any-tab-panel>
                <any-tab-panel header="Header 2">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </any-tab-panel>
                <any-tab-panel header="Header 3">
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>
                </any-tab-panel>
              </any-tab-view>
            </div>
          <app-code code={this.code} selector="tab-view-basic"></app-code>
        </section>
      </Host>
    );
  }
}
