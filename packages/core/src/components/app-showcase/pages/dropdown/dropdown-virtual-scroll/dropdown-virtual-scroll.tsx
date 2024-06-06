import { Component, Host, Prop, h } from "@stencil/core";
import CacheService from "../../../../../app/services/CacheService";

@Component({
  tag: "dropdown-virtual-scroll",
  styleUrl: "dropdown-virtual-scroll.scss",
  shadow: false,
  scoped: true,
})
export class DropdownVirtualScroll {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public virtualItems: any = [];
  public cache: any = new CacheService();

  public dropdownWidth = {
    virtual: { width: "14rem" },
  };

  public code: any = {
    basic: `

<any-dropdown id="dropdownVirtual" placeholder="Select a Item" show-clear="true" virtual-scroll="true"></any-dropdown>

`,

    html: `

<div class="full-card flex justify-content-center">
  <any-dropdown id="dropdownVirtual" placeholder="Select a City" show-clear="true" virtual-scroll="true"></any-dropdown>
</div>

`,

    javascript: `

let dropdownVirtual = document.getElementById("dropdownVirtual");

const virtualItems = [];
for (let i = 0; i < 10000; i++) {
  items.push({
    label: "Item " + i,
    value: "Item " + i,
  });
}

dropdownVirtual.options = virtualItems;
dropdownVirtual.anyStyle = {
  width: "14rem"
};

dropdownVirtual.addEventListener("valueChange", (event) => {
  console.log(event.detail.value);
});

`,
  };

  componentWillLoad() {
    // Generate the virtual items array and add it to the Clusterize.js instance
    if (!this.cache.get("dropdownVirtualItems")?.length) {
      // Create items array in chunks of 1000
      const items = [];
      const chunkSize = 1000;
      const chunkCount = Math.ceil(10000 / chunkSize);
      for (let i = 0; i < chunkCount; i++) {
        const chunk = Array.from({ length: chunkSize }, (_v, k) => ({
          label: `Item ${i * chunkSize + k}`,
          value: `Item ${i * chunkSize + k}`,
        }));
        items.push(...chunk);
      }
      this.cache.set("dropdownVirtualItems", items);
    }
    this.virtualItems = this.cache.get("dropdownVirtualItems");
  }

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>
              VirtualScrolling is an efficient way of rendering the options by
              displaying a small subset of data in the viewport at any time.
              When dealing with huge number of options, it is suggested to
              enable VirtualScrolling to avoid performance issues. Usage is
              simple as setting virtualScroll property to true.
            </p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center">
            <any-dropdown
              anyStyle={this.dropdownWidth.virtual}
              options={this.virtualItems}
              id="dropdownVirtual"
              placeholder="Select a Item"
              show-clear="true"
              virtualScroll={true}
            >
              <div slot="item">#=item.label#</div>
              <div slot="selectedItem">#=item.value#</div>
            </any-dropdown>
          </div>
          <app-code
            code={this.code}
            selector="dropdown-virtual-scroll"
          ></app-code>
        </section>
      </Host>
    );
  }
}
