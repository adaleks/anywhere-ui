import { Component, Host, Prop, h, Element, State } from "@stencil/core";
import ProductsService from "../../../../../app/services/ProductService";

@Component({
  tag: "vs-lazy",
  styleUrl: "vs-lazy.scss",
  shadow: false,
  scoped: true,
})
export class VsLazy {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-virtual-scroller lazy="true" scroller-height="450px" item-size="100">
  <div slot="item">#=item.name#</div>
  <div slot="loadingItem">Loading...</div>
</any-virtual-scroller>`,

    html: `<div class="full-card">
  <div class="fetch-container">
    <any-virtual-scroller lazy="true" scroller-height="450px" item-size="100">
      <div slot="header">List of Products</div>
      <div slot="item">
        <div class="product-item">
          <h5>#=item.name#</h5>
        </div>
      </div>
      <div slot="loadingItem">Loading...</div>
    </any-virtual-scroller>
  </div>
</div>`,

    javascript: `const scroller = document.querySelector("any-virtual-scroller");
scroller.addEventListener("aOnLazyLoad", (event) => {
  const { first, rows } = event.detail;
  setTimeout(() => {
    scroller.items = loadPage(first, rows);
  }, 1000);
});`,
  };
  @Element() element: HTMLElement;

  private productsService = new ProductsService();

  private products: any[] = [];

  @State() virtualProducts: any[] = [];

  componentWillLoad() {
    this.products = Array.from({ length: 10000 }).map(() => {
      const product = this.productsService.generateProduct();
      product.inventoryStatusLowerCase = product.inventoryStatus.toLowerCase();
      return product;
    });
    this.virtualProducts = Array.from({ length: 10000 });
  }

  private onLazyLoad = (event: CustomEvent) => {
    const { first, rows } = event.detail;
    setTimeout(() => {
      const loaded = this.products.slice(first, first + rows);
      const next = [...this.virtualProducts];
      next.splice(first, rows, ...loaded);
      this.virtualProducts = next;
    }, 1000);
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>With lazy enabled the scroller only receives the visible page through the aOnLazyLoad event; a loadingItem slot is rendered until the data arrives.</p>
          </app-docsectiontext>
            <div class="full-card">
              <div class="fetch-container">
                <any-virtual-scroller
                  scrollerHeight="450px"
                  itemSize={100}
                  lazy={true}
                  items={this.virtualProducts}
                  onAOnLazyLoad={this.onLazyLoad}
                >
                  <div slot="header">
                    <div class="any-d-flex any-ai-center any-jc-between">List of Products</div>
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
                  <div slot="loadingItem">
                    <div class="product-item loading-item">
                      <div class="image-container"></div>
                      <div class="product-list-detail">
                        <h5></h5>
                        <span class="product-category"></span>
                      </div>
                      <div class="product-list-action">
                        <h6></h6>
                        <span class="product-badge"></span>
                      </div>
                    </div>
                  </div>
                </any-virtual-scroller>
              </div>
            </div>
          <app-code code={this.code} selector="vs-lazy"></app-code>
        </section>
      </Host>
    );
  }
}
