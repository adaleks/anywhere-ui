import { Component, h, Element, Prop } from "@stencil/core";

@Component({
  tag: "app-docsectiontext",
  styleUrl: "app-docsectiontext.scss",
  shadow: false,
  scoped: true,
})
export class AppDocSectionText {
  @Prop() textTitle: string;
  @Prop() textId: string;
  @Prop() level: number = 2;
  @Prop() label: string;
  @Prop() parentTitle: string;
  @Prop() parentDescription: string;
  @Prop() parentId: string;

  @Element() element: HTMLElement;

  navigate(event: MouseEvent) {
    event.preventDefault();
    if (typeof window !== "undefined") {
      // const hash = window.location.hash.substring(1);
      const id = this.textId || this.parentId;
      window.location.hash = id;

      const parentElement = (event.target as HTMLElement).closest(
        ".doc-section-label"
      );
      if (parentElement) {
        parentElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }

      // if (hash === this.textId) {
      //   window.history.back();
      // }
    }
  }

  render() {
    return (
      <div>
        {this.parentTitle ? (
          <div>
            <h2 class="doc-section-label">
              {this.parentTitle}
              <a
                onClick={(event) => this.navigate(event)}
                class="cursor-pointer"
                id={this.parentId}
              >
                #
              </a>
            </h2>
            <div class="doc-section-description">
              <p class="mt-3">{this.parentDescription || null}</p>
            </div>
          </div>
        ) : (
          <div>
            {this.level === 2 ? (
              <h2 class="doc-section-label">
                {this.textTitle}
                <a
                  onClick={(event) => this.navigate(event)}
                  class="cursor-pointer"
                  id={this.textId}
                >
                  #
                </a>
              </h2>
            ) : (
              <h3 class="doc-section-label">
                {this.textTitle}
                <a
                  onClick={(event) => this.navigate(event)}
                  class="cursor-pointer"
                  id={this.textId}
                >
                  #
                </a>
              </h3>
            )}
            <div class="doc-section-description">
              <slot></slot>
            </div>
          </div>
        )}
      </div>
    );
  }
}
