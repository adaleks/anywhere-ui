import { Component, h, Host, Prop, State } from "@stencil/core";

@Component({
  tag: "app-doc",
  styleUrl: "app-doc.scss",
  shadow: false,
  scoped: true,
})
export class AppDoc {
  @Prop() docs!: any[];
  @Prop() apiDocs!: string[];
  @Prop() docTitle: string;
  @Prop() header!: string;
  @Prop() description!: string;
  @Prop() githubPage!: string;

  @State() activeTab: number = 0;

  componentWillLoad() {
    const currentURL = window.location.href;

    if (currentURL.includes("/api")) {
      this.activeTab = 1;
    } else {
      this.activeTab = 0;
    }
  }

  activateTab(index: number) {
    this.activeTab = index;
  }

  goOnGithubPage() {
    window.open(this.githubPage, "_blank");
  }

  render() {
    return (
      <Host>
        <div class="doc-component">
          <div class="doc-component-top">
            <ul class="doc-tabmenu">
              <li class={this.activeTab === 0 ? "doc-tabmenu-active" : ""}>
                <button type="button" onClick={() => this.activateTab(0)}>
                  FEATURES
                </button>
              </li>
              {this.apiDocs && (
                <li class={this.activeTab === 1 ? "doc-tabmenu-active" : ""}>
                  <button type="button" onClick={() => this.activateTab(1)}>
                    API
                  </button>
                </li>
              )}
            </ul>
            <div class="app-demoactions">
              <div class="any-d-flex any-ai-end any-jc-end any-mt-3">
                <any-button
                  title="How on Github Repository"
                  id="view_on_github"
                  icon="fa-brands:github"
                  style-class="any-button-rounded any-button-text any-button-lg any-button-plain"
                  onClick={() => this.goOnGithubPage()}
                ></any-button>
              </div>
            </div>
          </div>
          <div class="doc-tabpanels">
            <div class={`doc-tabpanel ${this.activeTab === 1 ? "hidden" : ""}`}>
              <div class="doc-main">
                <div class="doc-intro">
                  <h1>{this.header}</h1>
                  <p>{this.description}</p>
                </div>
                <app-docsection docs={this.docs}></app-docsection>
              </div>
              <app-docsection-nav docs={this.docs}></app-docsection-nav>
            </div>
            <div class={`${this.activeTab === 0 ? "hidden" : ""}`}>
              <app-docapisection
                docs={this.apiDocs}
                header={this.header}
              ></app-docapisection>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
