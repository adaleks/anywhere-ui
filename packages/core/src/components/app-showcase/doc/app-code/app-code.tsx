import { Component, h, Prop, State } from "@stencil/core";
// import { Code, ExtFile, RouteFile } from "../../showcase/domain/code";
// import { useStackBlitz, useCodeSandbox } from "../codeeditor";

@Component({
  tag: "app-code",
  styleUrl: "app-code.scss",
  shadow: false,
  scoped: true,
})
export class AppCode {
  // @Prop() code!: Code;
  @Prop() code!: any;
  @Prop() service: any;
  @Prop() selector!: string;
  @Prop() extFiles: any[] = [];
  @Prop() routeFiles: any[] = [];
  // @Prop() extFiles: ExtFile[] = [];
  // @Prop() routeFiles: RouteFile[] = [];
  @Prop() hideToggleCode: boolean = false;
  @Prop() hideCodeSandbox: boolean = false;
  @Prop() hideStackBlitz: boolean = false;

  @State() fullCodeVisible: boolean = false;
  @State() lang: string;

  codeElement!: HTMLElement;

  componentWillLoad() {
    this.lang = this.getInitialLang();
  }

  componentDidLoad() {
    this.initHighlight();
  }

  initHighlight() {
    if (
      typeof window !== "undefined" &&
      window["Prism"] &&
      this.codeElement &&
      !this.codeElement.classList.contains("prism")
    ) {
      window["Prism"].highlightElement(this.codeElement);
      this.codeElement.classList.add("prism");
    }
  }

  getInitialLang(): string {
    if (this.code) {
      return Object.keys(this.code)[0];
    }
    return "";
  }

  async copyCode() {
    await navigator.clipboard.writeText(this.code[this.lang]);
  }

  getCode(lang: string = "basic") {
    if (this.code) {
      if (this.fullCodeVisible || this.hideToggleCode) {
        return this.code[lang];
      } else {
        return this.code["basic"];
      }
    }
    return "";
  }

  changeLang(lang: string) {
    this.lang = lang;
    this.codeElement.textContent = this.code[this.lang];
    this.rerunCodeHighlight(lang);
  }

  toggleCode() {
    // this.codeElement.textContent = "";
    this.fullCodeVisible = !this.fullCodeVisible;
    this.fullCodeVisible && (this.lang = "html");
    !this.fullCodeVisible && (this.lang = "basic");
    this.codeElement.textContent = this.code[this.lang];

    this.rerunCodeHighlight(this.lang);
  }

  rerunCodeHighlight(lang: string) {
    this.codeElement.classList.remove("prism");
    this.codeElement.classList.remove("language-javascript");
    this.codeElement.classList.remove("language-json");
    if (lang === "basic" || lang === "html") {
      this.codeElement.classList.add("language-markup");
    } else {
      this.codeElement.classList.remove("language-markup");
      this.codeElement.classList.add("language-" + lang);
    }
    this.initHighlight();
  }

  openStackBlitz() {
    if (this.code) {
      // useStackBlitz({
      //   code: this.code,
      //   selector: this.selector,
      //   extFiles: this.extFiles,
      //   routeFiles: this.routeFiles,
      // });
    }
  }

  openCodeSandbox() {
    if (this.code) {
      // useCodeSandbox({
      //   code: this.code,
      //   selector: this.selector,
      //   extFiles: this.extFiles,
      //   routeFiles: this.routeFiles,
      // });
    }
  }

  render() {
    return (
      <div class="relative doc-section-code">
        <div
          class="flex surface-card align-items-center justify-content-end absolute z-2"
          style={{ right: ".75rem", top: ".75rem", gap: ".75rem" }}
        >
          {this.fullCodeVisible && (
            <div class="flex align-items-center gap-2">
              {this.code.html && (
                <any-button
                  label="HTML"
                  onAOnClick={() => this.changeLang("html")}
                  styleClass={`
                    any-button-rounded 
                    w-3rem 
                    any-button-text 
                    any-button-sm 
                    any-0 
                    inline-flex 
                    align-items-center 
                    justify-content-center 
                    ${this.lang === "html" ? "" : "any-button-plain"}`}
                ></any-button>
              )}

              {this.code.javascript && (
                <any-button
                  label="JavaScript"
                  onAOnClick={() => this.changeLang("javascript")}
                  styleClass={`
                    any-button-rounded 
                    w-3rem 
                    any-button-text 
                    any-button-sm 
                    any-0 
                    inline-flex 
                    align-items-center 
                    justify-content-center 
                    ${this.lang === "javascript" ? "" : "any-button-plain"}`}
                ></any-button>
              )}

              {/* {this.code.data && (
              <button
                pButton
                icon="pi pi-database"
                pTooltip="View Data"
                tooltipPosition="bottom"
                tooltipStyleClass="doc-section-code-tooltip"
                onClick={() => this.changeLang("data")}
                class={{
                  "p-button-rounded": true,
                  "p-button-text": true,
                  "text-sm": true,
                  "p-button-plain": true,
                  "p-0": true,
                  "w-2rem": true,
                  "h-2rem": true,
                  "inline-flex": true,
                  "align-items-center": true,
                  "justify-content-center": true,
                  "doc-section-code-active": this.lang === "data",
                }}
                ></button>
              )} */}
            </div>
          )}
          <any-button
            icon="fa-solid:code"
            title="Toggle Full Code"
            // pTooltip="Toggle Full Code"
            // tooltipStyleClass="doc-section-code-tooltip"
            // tooltipPosition="bottom"
            onAOnClick={() => this.toggleCode()}
            styleClass={`
              any-button-rounded 
              any-button-text 
              text-sm 
              any-button-plain  
              any-button-sm
              any-0  
              w-2rem  
              h-2rem  
              inline-flex  
              align-items-center  
              justify-content-center`}
          ></any-button>

          {/* {!this.hideCodeSandbox && !this.hideToggleCode && (
            <button
              pButton
              pTooltip="Edit in CodeSandbox"
              tooltipPosition="bottom"
              tooltipStyleClass="doc-section-code-tooltip"
              onClick={() => this.openCodeSandbox()}
              class={{
                "p-button-rounded": true,
                "p-button-text": true,
                "text-sm": true,
                "p-button-plain": true,
                "p-0": true,
                "w-2rem": true,
                "h-2rem": true,
                "inline-flex": true,
                "align-items-center": true,
                "justify-content-center": true,
              }}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="var(--text-color-secondary)"
                style={{ display: "block" }}
              >
                <path d="M0 15.98H8.15844L3.40299 27.26L19 11.1945H10.7979L15.5098 0L0 15.98Z" />
              </svg>
            </button>
          )} */}

          {!this.hideStackBlitz && !this.hideToggleCode && (
            <any-button
              icon="simple-icons:stackblitz"
              title="Edit in StackBlitz"
              // pTooltip="Toggle Full Code"
              // tooltipStyleClass="doc-section-code-tooltip"
              // tooltipPosition="bottom"
              onAOnClick={() => this.openStackBlitz()}
              styleClass={`
              any-button-rounded 
              any-button-text 
              text-sm 
              any-button-plain  
              any-button-sm
              any-0  
              w-2rem  
              h-2rem  
              inline-flex  
              align-items-center  
              justify-content-center`}
            ></any-button>
          )}

          <any-button
            icon="fa-solid:copy"
            title="Copy Code"
            // pTooltip="Copy Code"
            // tooltipStyleClass="doc-section-code-tooltip"
            // tooltipPosition="bottom"
            onAOnClick={() => this.copyCode()}
            styleClass={`
              any-button-rounded 
              any-button-text 
              text-sm 
              any-button-plain  
              any-button-sm
              any-0  
              w-2rem  
              h-2rem  
              inline-flex  
              align-items-center  
              justify-content-center`}
          ></any-button>
        </div>

        {this.code && (
          <pre class="language-markup">
            <code ref={(el) => (this.codeElement = el)}>
              {this.getCode(this.lang)}
            </code>
          </pre>
        )}
      </div>
    );
  }
}
