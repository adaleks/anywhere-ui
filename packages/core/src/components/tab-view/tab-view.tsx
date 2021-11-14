import { Component, Host, h, Element, State, Prop, Watch } from "@stencil/core";
import { watchForOptions } from "../../utils/watch-options";

@Component({
  tag: "any-tab-view",
  styleUrl: "tab-view.scss",
  shadow: true,
})
export class TabView {
  private didInit: boolean = false;
  private mutationO?: MutationObserver;

  @State() tabPanels: NodeListOf<HTMLAnyTabPanelElement>;
  @State() tabs: HTMLAnyTabPanelElement[];
  @State() _activeIndex: number = null;

  @Element() private element: HTMLElement;

  /**
   * Index of the active tab to change selected tab programmatically.
   */
  @Prop({ mutable: true }) activeIndex: number;

  /**
   * Inline style of the component.
   */
  @Prop() anyStyle: any = null;

  /**
   * Style class of the component.
   */
  @Prop() styleClass: string = null;

  @Watch("activeIndex")
  activeIndexChanged(newValue: number) {
    if (this.didInit && this.mutationO) {
      this._activeIndex = newValue;

      if (
        this.tabs &&
        this.tabs.length &&
        this._activeIndex != null &&
        this.tabs.length > this._activeIndex
      ) {
        this.findSelectedTab().selected = false;
        this.tabs[this._activeIndex].selected = true;
      }
    }
  }

  componentWillLoad() {
    this.initTabs();
    this.activeIndexChanged(this.activeIndex);
  }

  componentDidLoad() {
    this.didInit = true;
  }

  async connectedCallback() {
    this.mutationO = watchForOptions(this.element, "li", async () => {});
  }

  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = undefined;
    }
  }

  initTabs(): void {
    this.tabPanels = this.element.querySelectorAll("any-tab-panel");
    this.tabs = Array.from(this.tabPanels);
    let selectedTab: HTMLAnyTabPanelElement = this.findSelectedTab();

    if (!selectedTab && this.tabs.length) {
      if (this.activeIndex != null && this.tabs.length > this.activeIndex)
        this.tabs[this.activeIndex].selected = true;
      else this.tabs[0].selected = true;
    }
  }

  findSelectedTab() {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].selected) {
        return this.tabs[i];
      }
    }
    return null;
  }

  open(event: Event, tab: HTMLAnyTabPanelElement, index: number) {
    if (tab.disabled) {
      if (event) {
        event.preventDefault();
      }
      return;
    }

    if (!tab.selected) {
      let selectedTab: HTMLAnyTabPanelElement = this.findSelectedTab();
      if (selectedTab) {
        selectedTab.selected = false;
      }

      tab.selected = true;
      this._activeIndex = index;
      this.activeIndex = index;
    }

    if (event) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <Host>
        <div class="any-element">
          <div
            class={
              "any-tabview any-component" +
              (this.styleClass ? " " + this.styleClass : "")
            }
            style={this.anyStyle}
          >
            <div class="any-tabview-nav-container">
              <div class="any-tabview-nav-content">
                <ul class="any-tabview-nav" role="tablist">
                  {this.tabs.map(
                    (tab: HTMLAnyTabPanelElement, index: number) => (
                      <li
                        role="presentation"
                        class={
                          (tab.selected ? "any-highlight" : "") +
                          (tab.disabled ? " any-disabled" : "")
                        }
                      >
                        <a
                          role="tab"
                          class="any-tabview-nav-link"
                          onClick={(e: Event) => this.open(e, tab, index)}
                          onKeyDown={(e: KeyboardEvent) => {
                            if (e.key === "Enter") this.open(e, tab, index);
                          }}
                          tabindex={tab.disabled ? null : 0}
                        >
                          <span class="any-tabview-title">{tab.header}</span>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div class="any-tabview-panels">
              <slot></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
