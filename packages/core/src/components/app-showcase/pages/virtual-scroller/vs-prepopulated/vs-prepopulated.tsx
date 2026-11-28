import { Component, Host, Prop, h, Element, State } from "@stencil/core";
import ProductsService from "../../../../../app/services/ProductService";

@Component({
  tag: "vs-prepopulated",
  styleUrl: "vs-prepopulated.scss",
  shadow: false,
  scoped: true,
})
export class VsPrepopulated {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-virtual-scroller scroller-height="450px" item-size="100">
  <div slot="item">#=item.name#</div>
</any-virtual-scroller>`,

    html: `<div class="full-card">
  <div class="fetch-container">
    <any-virtual-scroller scroller-height="450px" item-size="100">
      <div slot="header">
        <div class="any-d-flex any-ai-center any-jc-between">
          List of Products
          <any-dropdown placeholder="Sort By" show-clear="true"></any-dropdown>
        </div>
      </div>
      <div slot="item">
        <div class="product-item">
          <h5>#=item.name#</h5>
        </div>
      </div>
    </any-virtual-scroller>
  </div>
</div>`,

    javascript: `const scroller = document.querySelector("any-virtual-scroller");
scroller.items = products;`,
  };
  @Element() element: HTMLElement;

  private productsService = new ProductsService();

  private products: any[] = [];

  @State() items: any[] = [];

  private sortOptions = [
    { label: "Cheapest First", value: "price" },
    { label: "Expensive First", value: "-price" },
  ];

  componentWillLoad() {
    this.products = Array.from({ length: 10000 }).map(() => {
      const product = this.productsService.generateProduct();
      product.inventoryStatusLowerCase = product.inventoryStatus.toLowerCase();
      return product;
    });
    this.items = this.products;
  }

  private onSortChange = (event: CustomEvent) => {
    const sortKey = event.detail.value;
    const products = [...this.products];
    if (!sortKey) {
      this.items = products;
      return;
    }
    const order = sortKey.indexOf("-") === 0 ? -1 : 1;
    products.sort((a, b) => {
      const result = a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
      return order * result;
    });
    this.items = products;
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>When the whole collection is available up front, pass it through items and optionally sort it from the header.</p>
          </app-docsectiontext>
            <div class="full-card">
              <div class="fetch-container">
                <any-virtual-scroller scrollerHeight="450px" itemSize={100} items={this.items}>
                  <div slot="header">
                    <div class="any-d-flex any-ai-center any-jc-between">
                      List of Products
                      <any-dropdown
                        options={this.sortOptions}
                        placeholder="Sort By"
                        showClear={true}
                        onValueChange={this.onSortChange}
                      ></any-dropdown>
                    </div>
                  </div>
                  <div slot="item">
                    <div class="product-item">
                      <div class="image-container">
                        <img src="assets/images/product/#=item.image#" alt="#=item.name#" class="product-image" />
                      </div>
                      <div class="product-list-detail">
                        <h5>#=item.name#</h5>
                        <i class="iconify" data-icon="fa-solid:tags"></i>
                        <span class="product-category">#=item.category#</span>
                      </div>
                      <div class="product-list-action">
                        <h6>$#=item.price#</h6>
                        <span class="product-badge status-#=item.inventoryStatusLowerCase#">#=item.inventoryStatus#</span>
                      </div>
                    </div>
                  </div>
                </any-virtual-scroller>
              </div>
            </div>
          <app-code code={this.code} selector="vs-prepopulated"></app-code>
        </section>
      </Host>
    );
  }
}
