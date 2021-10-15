import AbstractView from "./AbstractView.js";
import ProductsService from "../services/ProductService.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Virtual Scroller");
    this.items = [];
    this.sortKey = null;
    this.products = [];
    this.virtualProducts = [];
    this.itemsDOMs = "";
    this.productsService = new ProductsService();
    this.sortOptions = [
      { label: "Cheapest First", value: "price" },
      { label: "Expensive First", value: "-price" },
    ];
  }

  executeScript() {
    this.vs1 = document.querySelector("#vs1");
    this.sortDD1 = document.querySelector("#sortDD1");
    this.sortDD1.options = this.sortOptions;
    this.sortDD1.placeholder = "Sort By";
    this.sortDD1.showClear = true;
    this.sortDD1.addEventListener("valueChange", (event) => {
      this.sortKey = event.detail.value;
      this.onSortChange();
    });
    // setTimeout(() => {
    this.products = Array.from({ length: 10000 }).map(() => {
      const product = this.productsService.generateProduct();
      product.inventoryStatusLowerCase = product.inventoryStatus.toLowerCase();
      product.inventoryStatusLowerCase = product.inventoryStatus.toLowerCase();
      return product;
    });
    this.virtualProducts = Array.from({ length: 10000 });
    this.vs1.items = this.products;
    // }, 5000);

    this.vs1.scrollerHeight = "450px";
    this.vs1.itemSize = 100;
    this.vs1.noDataText = "Loading...";

    this.vs2 = document.querySelector("#vs2");
    this.vs2.scrollerHeight = "450px";
    this.vs2.itemSize = 100;
    this.vs2.lazy = true;
    // this.vs2.rowsPerPage = 200;

    this.vs2.items = this.virtualProducts;

    this.vs2.addEventListener("aOnLazyLoad", (event) => {
      console.log("lazyLoad", event.detail);
      // simulate remote connection with a timeout
      setTimeout(() => {
        //load data of required page
        let loadedProducts = this.products.slice(
          event.detail.first,
          event.detail.first + event.detail.rows
        );

        //populate page of virtual cars
        Array.prototype.splice.apply(this.virtualProducts, [
          ...[event.detail.first, event.detail.rows],
          ...loadedProducts,
        ]);
        // console.log(this.virtualProducts);

        //trigger change detection
        this.virtualProducts = [...this.virtualProducts];
        this.vs2.items = this.virtualProducts;
      }, 1000);
    });
    this.vs2.addEventListener("scrollingProgress", (event) => {
      // console.log("scrolling", event.detail.progress);
    });
    this.vs2.addEventListener("clusterWillChange", (event) => {
      console.log("clusterWillChange", event.detail);
    });
    this.vs2.addEventListener("aOnItemClick", (event) => {
      console.log("aOnItemClick", event.detail);
    });
  }

  sort(order) {
    let products = [...this.products];
    products.sort((data1, data2) => {
      let value1 = data1.price;
      let value2 = data2.price;
      let result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return order * result;
    });
    this.vs1.items = products;
  }

  onSortChange() {
    if (!this.sortKey) this.vs1.items = this.products;
    else if (this.sortKey.indexOf("-") === 0) this.sort(-1);
    else this.sort(1);
  }

  async getHtml() {
    return `
            <div class="content-section introduction">
              <div class="feature-intro">
                <h1>Virtual Scroller</h1>
                <p>Virtual Scroller is an efficient way of rendering lists by displaying a small subset of data in the viewport at any time.</p>
              </div>
            </div>
            <div class="content-section">
              <div class="full-card">
                <h5>Lazy Loading (10000 Items)</h5>
                <div class="fetch-container">
                  <any-virtual-scroller id="vs2">
                    <div slot="header">
                        <div class="any-d-flex any-ai-center any-jc-between">
                            List of Products
                        </div>
                    </div>
                    <div slot="item">
                        <div class="product-item">
                          <div class="image-container">
                              <img src="assets/images/product/#=item.image#" [alt]="#=item.name#" class="product-image" />
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
                            <i class="product-category-icon"></i>
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
              <div class="full-card">
                <h5>Prepopulated List (10000 Items)</h5>
                <div class='fetch-container'>
                  <any-virtual-scroller id="vs1">
                    <div slot="header">
                        <div class="any-d-flex any-ai-center any-jc-between">
                            List of Products
                            <any-dropdown id="sortDD1"></any-dropdown>
                        </div>
                    </div>
                    <div slot="item">
                        <div class="product-item">
                          <div class="image-container">
                              <img src="assets/images/product/#=item.image#" [alt]="#=item.name#" class="product-image" />
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
            </div>
        `;
  }
}
