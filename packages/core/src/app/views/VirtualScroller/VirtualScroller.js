import AbstractView from "../AbstractView.js";
import ProductsService from "../../services/ProductService.js";

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
    this.sortOptions = [{
        label: "Cheapest First",
        value: "price"
      },
      {
        label: "Expensive First",
        value: "-price"
      },
    ];
  }

  executeScript() {
    this.viewOnGithubBtn = document.querySelector("#view_on_github");
    this.viewOnGithubBtn.addEventListener("aOnClick", (event) => {
      window.open('https://github.com/adaleks/anywhere-ui/tree/main/packages/core/src/components/virtual-scroller', '_blank');
    });
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
    this.products = Array.from({
      length: 10000
    }).map(() => {
      const product = this.productsService.generateProduct();
      product.inventoryStatusLowerCase = product.inventoryStatus.toLowerCase();
      product.inventoryStatusLowerCase = product.inventoryStatus.toLowerCase();
      return product;
    });
    this.virtualProducts = Array.from({
      length: 10000
    });
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
    return fetch('app/views/VirtualScroller/VirtualScroller.html')
      .then(data => {
        return data.text();
      });
  }
}
