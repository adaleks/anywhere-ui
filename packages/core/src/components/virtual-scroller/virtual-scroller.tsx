import {
  Component,
  Host,
  h,
  Prop,
  Element,
  Watch,
  Event,
  EventEmitter,
} from "@stencil/core";
import Clusterize from "clusterize.js";
import {
  /*findAndReplaceInnerHtml,*/ uuid,
  scrollStop,
} from "../../utils/utils";
import { getRows } from "./virtual-scroller.worker";

@Component({
  tag: "any-virtual-scroller",
  styleUrl: "virtual-scroller.scss",
  scoped: true,
})
export class AnyVirtualScroller {
  clusterize = null;
  rows: any[] = [];
  instanceUuid: string = "";
  rowsInBlock: number = 10;
  blocksInCluster: number = 4;
  first: number = 0;
  firstInitCluster: boolean = false;
  private hasHeaderSlot: boolean;

  @Element() private element: HTMLElement;

  /**
   * An array of objects to display
   */
  @Prop() items: any[] = [];

  /**
   * Max height of the content area in inline mode
   */
  @Prop() scrollerHeight: any = null;

  /**
   * Height of an item in the list
   */
  @Prop() itemSize: number = null;

  /**
   * Defines if data is loaded and interacted with in lazy manner
   */
  @Prop() lazy: boolean = false;

  /**
   * Number of rows to display per page
   */
  @Prop({ mutable: true }) rowsPerPage: number = null;

  /**
   * Inline style of the component
   */
  @Prop() anyStyle: any = null;

  /**
   * Inline style of the component
   */
  @Prop() styleClass: string = null;

  /**
   * Tag name for supporting elements: spacing extra rows,
   * empty-data row. It will be determined by itself once data provided,
   * so it's optional. But if your data is not provided during
   * initialization - it is better to specify this option because
   * otherwise plugin will be unable to correctly render empty-data row.
   */
  @Prop() itemTag: string = "div";

  /**
   * Tag name of content element whwre items will be rendered
   */
  @Prop() contentElemTag: string = "div";

  /**
   * Text for placeholder element if there is no data provided
   */
  @Prop() noDataText: string = "No Data";

  /**
   * Threshold in milliseconds to delay lazy loading during scrolling
   */
  @Prop() delay: number = 250;

  /**
   * Class name of the content element where items will be rendered
   */
  @Prop() contentElemClass: string = null;

  /**
   * Class name of the scroll element
   */
  @Prop() scrollElemClass: string = null;

  /**
   * Class name of the item element
   */
  @Prop() itemElemClass: string = null;

  /**
   * Will be called on scrolling. Returns progress position
   */
  @Event() scrollingProgress?: EventEmitter;

  /**
   * Will be called right after replacing previous cluster with new one
   */
  @Event() clusterChanged?: EventEmitter;

  /**
   * Will be called right before replacing previous cluster with new one
   */
  @Event() clusterWillChange?: EventEmitter;

  /**
   * Callback to invoke in lazy mode to load new data
   */
  @Event() aOnLazyLoad?: EventEmitter;

  /**
   * Callback when item is clicked
   */
  @Event() aOnItemClick?: EventEmitter;

  @Watch("items")
  async itemsChanged() {
    if (this.clusterize) {
      let itemSlotNode = this.element
        .querySelector('[slot="item"]')
        .cloneNode(true) as HTMLElement;
      let loadingItemSlotNode = null;
      let loadingItemSlotNodeHTML = null;
      if (this.lazy) {
        loadingItemSlotNode = this.element
          .querySelector('[slot="loadingItem"]')
          .cloneNode(true) as HTMLElement;
        loadingItemSlotNodeHTML = loadingItemSlotNode.outerHTML;
      }

      let rows = [];
      rows = await getRows(
        this.itemTag,
        this.items,
        this.itemSize,
        itemSlotNode.outerHTML,
        null,
        null,
        this.itemElemClass,
        loadingItemSlotNodeHTML
      );
      this.clusterize.update(rows);
      this.clusterize.refresh(true);
    }
  }

  connectedCallback() {
    this.instanceUuid = uuid();
    if (!this.rowsPerPage) {
      this.rowsPerPage = this.rowsInBlock * this.blocksInCluster;
    } else {
      this.rowsInBlock = this.rowsPerPage / this.blocksInCluster;
    }
  }

  async componentWillLoad() {
    this.hasHeaderSlot = !!this.element.querySelector('[slot="header"]');

    // if (!this.items) this.items = [];
  }

  async componentDidLoad() {
    let itemSlotNode = this.element
      .querySelector('[slot="item"]')
      .cloneNode(true) as HTMLElement;
    if (this.lazy) {
      itemSlotNode = this.element
        .querySelector('[slot="loadingItem"]')
        .cloneNode(true) as HTMLElement;
    }
    this.rows = await getRows(
      this.itemTag,
      this.items,
      this.itemSize,
      itemSlotNode.outerHTML,
      0,
      this.rowsInBlock * this.blocksInCluster,
      this.itemElemClass
    );
    // initialilze Clusterize after worker get back prepared rows data
    this.initClusterize();
    // ok. now get rest of rows and update Clusterize
    this.rows = await getRows(
      this.itemTag,
      this.items,
      this.itemSize,
      itemSlotNode.outerHTML,
      this.rowsInBlock * this.blocksInCluster,
      null,
      this.itemElemClass
    );
    if (this.clusterize) {
      this.clusterize.append(this.rows);
      this.clusterize.refresh(true);
    }

    let scrollEl = this.element.querySelector(
      "#any-virtualscroller-scroll-" + this.instanceUuid
    ) as HTMLElement;

    scrollStop(
      scrollEl,
      () => {
        if (this.lazy) {
          this.aOnLazyLoad.emit({
            first: this.first,
            rows: this.rowsPerPage,
          });
        }
      },
      this.delay
    );
  }

  initClusterize(): void {
    this.clusterize = new Clusterize({
      rows: this.rows,
      scrollElem: this.element.querySelector(
        "#any-virtualscroller-scroll-" + this.instanceUuid
      ),
      contentElem: this.element.querySelector(
        "#any-virtualscroller-content-" + this.instanceUuid
      ),
      rows_in_block: this.rowsInBlock,
      blocks_in_cluster: this.blocksInCluster,
      tag: this.itemTag,
      no_data_text: this.noDataText,
      // show_no_data_row: false,
      // no_data_class: "any-no-data",
      callbacks: {
        clusterChanged: () => {
          const contentEl = this.element.querySelector(
            "#any-virtualscroller-content-" + this.instanceUuid
          ) as HTMLElement;
          const firstItemInCluster = contentEl.getElementsByClassName(
            "any-virtual-scroll-item"
          )[0] as HTMLElement;
          this.defineVscrollItemClick();
          this.first = parseInt(firstItemInCluster.getAttribute("data-index"));
          // console.log("CLUSTER CHANGED");
          this.clusterChanged.emit({
            first: this.first,
            rows: this.rowsPerPage,
          });
        },
        clusterWillChange: () => {
          const next =
            this.first + this.rowsPerPage >= this.items.length
              ? this.items.length - 1
              : this.first + this.rowsPerPage;
          this.clusterWillChange.emit({
            next: next,
            rows: this.rowsPerPage,
          });
          if (!this.firstInitCluster && this.lazy) {
            this.aOnLazyLoad.emit({
              first: this.first,
              rows: this.rowsPerPage,
            });
          }
        },
        scrollingProgress: (progress) => {
          this.scrollingProgress.emit({
            progress: progress,
          });
        },
      },
    });

    this.firstInitCluster = true;
  }

  defineVscrollItemClick() {
    let self = this;
    let anchors = this.element.querySelectorAll(".any-virtual-scroll-item");
    for (let i = 0; i < anchors.length; i++) {
      var anchor = anchors[i] as HTMLElement;
      anchor.onclick = function (e) {
        const item = this as HTMLElement;
        self.aOnItemClick.emit({
          originalEvent: e,
          index: parseInt(item.getAttribute("data-index")),
        });
      };
    }
  }

  render() {
    return (
      <Host>
        <div style={{ display: "none" }}>
          <slot name="item" />
          <slot name="loadingItem" />
        </div>
        <div
          class={
            "any-component any-virtualscroller" +
            (this.styleClass ? " " + this.styleClass : "")
          }
          style={this.anyStyle}
        >
          {this.hasHeaderSlot && (
            <div class="any-virtualscroller-header">
              <slot name="header" />
            </div>
          )}
          <div
            id={"any-virtualscroller-scroll-" + this.instanceUuid}
            class="any-virtualscroller-scroll clusterize-scroll"
            style={{ height: this.scrollerHeight }}
          >
            <this.contentElemTag
              id={"any-virtualscroller-content-" + this.instanceUuid}
              class={
                "any-virtualscroller-content clusterize-content" +
                this.contentElemClass
                  ? " " + this.contentElemClass
                  : ""
              }
            >
              <this.itemTag class="clusterize-no-data"></this.itemTag>
            </this.contentElemTag>
          </div>
          <div class="any-virtualscroller-footer">
            <slot name="footer" />
          </div>
        </div>
      </Host>
    );
  }
}
