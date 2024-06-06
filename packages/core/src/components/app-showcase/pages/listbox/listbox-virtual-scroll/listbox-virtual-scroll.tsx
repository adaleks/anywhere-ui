import { Component, Host, Prop, h } from "@stencil/core";
import CacheService from "../../../../../app/services/CacheService";

@Component({
  tag: "listbox-virtual-scroll",
  styleUrl: "listbox-virtual-scroll.scss",
  shadow: false,
  scoped: true,
})
export class ListboxVirtualScroll {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public virtualItems: any = [];
  public cache: any = new CacheService();

  public listboxWidth = {
    virtual: { width: "15rem" },
  };

  public code: any = {
    basic: `

<any-listbox id="listboxVirtual" virtual-scroll="true">
   <div slot="item">#=item.label#</div>
</any-listbox>

`,

    html: `

<div class="full-card flex justify-content-center">
  <any-listbox id="listboxVirtual" virtual-scroll="true">
     <div slot="item">#=item.label#</div>
  </any-listbox>
</div>

`,

    javascript: `

let listboxVirtual = document.getElementById("listboxVirtual");

const virtualItems = [];
for (let i = 0; i < 10000; i++) {
  items.push({
    label: "Item " + i,
    value: "Item " + i,
  });
}

listboxVirtual.options = virtualItems;
listboxVirtual.anyStyle = {
  width: "15rem"
};

listboxVirtual.addEventListener("valueChange", (event) => {
  console.log(event.detail.value);
});

`,
  };

  componentWillLoad() {
    // Generate the virtual items array and add it to the Clusterize.js instance
    if (!this.cache.get("listboxalItems")?.length) {
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
      this.cache.set("listboxalItems", items);
    }
    this.virtualItems = this.cache.get("listboxalItems");
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
              simple as setting virtualScroll property to true and defining
              virtualScrollItemSize to specify the height of an item.
            </p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center">
            <any-listbox
              anyStyle={this.listboxWidth.virtual}
              options={this.virtualItems}
              id="listboxVirtual"
              virtualScroll={true}
            >
              <div slot="item">#=item.label#</div>
            </any-listbox>
          </div>
          <app-code
            code={this.code}
            selector="listbox-virtual-scroll"
          ></app-code>
        </section>
      </Host>
    );
  }
}
