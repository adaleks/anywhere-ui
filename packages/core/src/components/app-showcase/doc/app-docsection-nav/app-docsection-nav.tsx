import { Component, h, Element, Prop, State, Listen } from "@stencil/core";
// import { Doc } from "src/app/showcase/domain/doc";
import { DomHandler } from "../../../../utils/dom";
import { ObjectUtils } from "../../../../utils/objectutils";
@Component({
  tag: "app-docsection-nav",
  styleUrl: "app-docsection-nav.scss",
  shadow: false,
  scoped: true,
})
export class AppDocSectionNav {
  @Prop() docs!: any[];

  scrollListener!: any;
  @State() activeId!: string;
  isScrollBlocked: boolean = false;
  topbarHeight: number = 0;
  scrollEndTimer!: any;
  scrollInitTimer!: any;

  @Element() element: HTMLElement;

  componentwillLoad() {
    clearTimeout(this.scrollInitTimer);
    this.scrollInitTimer = setTimeout(() => {
      this.handleNavigation();
    }, 500);
  }

  componentDidLoad() {
    clearTimeout(this.scrollInitTimer);
    this.scrollInitTimer = setTimeout(() => {
      this.initScrollListener();
    }, 500);
  }

  initScrollListener() {
    this.activeId = this.getCurrentHash();
    this.scrollToLabelById(this.activeId);
  }

  getCurrentHash() {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.substring(1);
      return ObjectUtils.isNotEmpty(hash) ? hash : "";
    }
    return "";
  }

  handleNavigation() {
    const hash = this.getCurrentHash();
    if (hash) {
      this.initScrollListener();
    }
  }

  @Listen("scroll", { target: "window" })
  onScroll() {
    if (!this.isScrollBlocked) {
      const labels = [
        ...Array.from(
          document.querySelectorAll(":is(h1,h2,h3).doc-section-label")
        ),
      ].filter((el: any) => DomHandler.isVisible(el));
      const windowScrollTop = DomHandler.getWindowScrollTop();

      labels.forEach((label) => {
        const { top } = DomHandler.getOffset(label);
        const threshold = this.getThreshold(label);

        if (top - threshold <= windowScrollTop) {
          const link = DomHandler.findSingle(label, "a");
          this.activeId = link.id;
        }
      });
    }

    clearTimeout(this.scrollEndTimer);
    this.scrollEndTimer = setTimeout(() => {
      this.isScrollBlocked = false;

      const activeItem = DomHandler.findSingle(
        this.element,
        ".active-navbar-item"
      );

      activeItem &&
        activeItem.scrollIntoView({ block: "nearest", inline: "start" });
    }, 50);
  }

  onChildButtonClick(parent: any, isFirst: boolean, child: any): void {
    this.onButtonClick(isFirst ? parent : child);
  }

  onButtonClick(doc: any) {
    this.activeId = doc.id;
    setTimeout(() => {
      this.scrollToLabelById(doc.id);
      this.isScrollBlocked = true;
    }, 1);
  }

  getThreshold(label: any) {
    if (!this.topbarHeight) {
      const topbar = DomHandler.findSingle(document.body, ".layout-topbar");
      this.topbarHeight = topbar ? DomHandler.getHeight(topbar) : 0;
    }

    return this.topbarHeight + DomHandler.getHeight(label) * 3.5;
  }

  scrollToLabelById(id: string) {
    const label = document.getElementById(id);
    if (label) {
      const parentElement = label.parentElement;
      window.location.hash = id;

      if (parentElement) {
        parentElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  }

  isActiveChildId(
    isFirst: boolean,
    activeId: string,
    childId: string,
    parentId: string
  ): boolean {
    if (isFirst) {
      return this.getActiveChildId(activeId, parentId);
    }

    return this.getActiveChildId(activeId, childId);
  }

  getActiveChildId(activeId: string, childId: string) {
    if (!activeId) return false;
    return activeId.toLowerCase() === childId.toLowerCase();
  }

  disconnectedCallback() {
    window.removeEventListener("scroll", this.scrollListener, true);
  }

  render() {
    return (
      <ul class="doc-section-nav">
        {this.docs &&
          this.docs.length > 0 &&
          this.docs.map((doc) => this.renderNavItems(doc))}
      </ul>
    );
  }

  renderNavItems(doc: any) {
    if (!doc.isInterface) {
      return (
        <li
          class={{
            "navbar-item": true,
            "active-navbar-item": this.activeId === doc.id,
          }}
        >
          <div class="navbar-item-content">
            <button class="any-link" onClick={() => this.onButtonClick(doc)}>
              {doc.label}
            </button>
          </div>
          {doc.children && this.renderChildNavItems(doc.children, doc.id)}
        </li>
      );
    }
  }

  renderChildNavItems(children: any[], parentId: string) {
    return (
      <ul>
        {children.map((child, index) => (
          <li
            class={{
              "navbar-item": true,
              "active-navbar-item": this.isActiveChildId(
                index === 0,
                this.activeId,
                child.id,
                parentId
              ),
            }}
          >
            <div class="navbar-item-content">
              <button
                class="any-link"
                onClick={() =>
                  this.onChildButtonClick(children[0], index === 0, child)
                }
              >
                {child.label}
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
