import { Component, Host, Prop, h, Element } from "@stencil/core";

@Component({
  tag: "ms-virtual",
  styleUrl: "ms-virtual.scss",
  shadow: false,
  scoped: true,
})
export class MsVirtual {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-multiselect virtual-scroll="true" show-toggle-all="false">
  <div slot="item">#=item.label#</div>
  <div slot="selectedItem">#=item.value#</div>
</any-multiselect>`,

    html: `<div class="full-card">
  <any-multiselect
    style="min-width: 15rem; width: 18rem"
    show-clear="true"
    show-toggle-all="false"
    virtual-scroll="true"
  >
    <div slot="item">#=item.label#</div>
    <div slot="selectedItem">#=item.value#</div>
  </any-multiselect>
</div>`,

    javascript: `const multiselect = document.querySelector("any-multiselect");
multiselect.virtualScroll = true;
multiselect.options = Array.from({ length: 10000 }).map((_, index) => ({
  label: "Item " + index,
  value: "Item " + index,
}));`,
  };
  @Element() element: HTMLElement;

  public multiselectStyle = { minWidth: "15rem", width: "18rem" };

  public virtualItems: any[] = [];

  componentWillLoad() {
    this.virtualItems = Array.from({ length: 10000 }).map((_, index) => ({
      label: "Item " + index,
      value: "Item " + index,
    }));
  }

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>For long collections enable virtualScroll; only the rendered rows are kept in the DOM.</p>
          </app-docsectiontext>
            <div class="full-card">
              <any-multiselect
                anyStyle={this.multiselectStyle}
                showClear={true}
                showToggleAll={false}
                virtualScroll={true}
                options={this.virtualItems}
              >
                <div slot="item">#=item.label#</div>
                <div slot="selectedItem">#=item.value#</div>
              </any-multiselect>
            </div>
          <app-code code={this.code} selector="ms-virtual"></app-code>
        </section>
      </Host>
    );
  }
}
