import { Component, h, Element, State } from "@stencil/core";

@Component({
  tag: "app-config",
  styleUrl: "app-config.scss",
  shadow: false,
  scoped: true,
})
export class AppConfig {
  @Element() element: HTMLElement;

  @State() rippleSwitchChecked = true;

  logoMap = {
    "anywhere-default": "anywhere-default-violet.png",
    "anywhere-default-dark-violet": "anywhere-dark-violet.png",
    "anywhere-default-dark-purple": "anywhere-dark-purple.png",
    "anywhere-default-light-purple": "anywhere-light-purple.png",
    "bootstrap4-light-blue": "bootstrap4-light-blue.svg",
    "bootstrap4-light-purple": "bootstrap4-light-purple.svg",
    "bootstrap4-dark-blue": "bootstrap4-dark-blue.svg",
    "bootstrap4-dark-purple": "bootstrap4-dark-purple.svg",
  };

  componentDidLoad() {
    this.attachEventListeners();
    const theme = localStorage.getItem("anywhereTheme");
    document
      .querySelector(".layout-wrapper")
      .classList.remove("layout-wrapper-light");
    document
      .querySelector(".layout-wrapper")
      .classList.remove("layout-wrapper-dark");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      this.updateAppThemeImage(theme);
      if (theme.includes("dark")) {
        if (theme.includes("dark")) {
          document
            .querySelector(".layout-wrapper")
            .classList.add("layout-wrapper-dark");
        } else {
          document
            .querySelector(".layout-wrapper")
            .classList.add("layout-wrapper-light");
        }
      } else {
        document
          .querySelector(".layout-wrapper")
          .classList.add("layout-wrapper-light");
      }
    } else {
      document
        .querySelector(".layout-wrapper")
        .classList.add("layout-wrapper-light");
    }

    const rippleSwitch = this.element.querySelector(
      "#ripple-switch"
    ) as HTMLAnyCheckboxElement;
    rippleSwitch.checked = true;
    rippleSwitch.addEventListener("valueChange", (event: CustomEvent) => {
      if (!event.detail.checked) {
        document.body.classList.add("any-ripple-disabled");
      } else {
        document.body.classList.remove("any-ripple-disabled");
      }
    });
  }

  attachEventListeners() {
    this.element
      .querySelector(".layout-config-button")
      .addEventListener("click", () => {
        this.toggleConfigPanel();
      });

    this.element
      .querySelector(".layout-config-close")
      .addEventListener("click", () => {
        this.closeConfigPanel();
      });

    document.addEventListener("click", (event) => {
      if (
        this.element
          .querySelector(".layout-config")
          .classList.contains("layout-config-active") &&
        !this.element.contains(event.target as HTMLElement)
      ) {
        this.closeConfigPanel();
      }
    });

    this.element.querySelectorAll(".any-link").forEach((el) => {
      el.addEventListener("click", (event) => {
        const theme = (event.currentTarget as HTMLElement).getAttribute(
          "data-select-theme"
        );
        this.changeTheme(theme);
      });
    });
  }

  toggleConfigPanel() {
    const configPanel = this.element.querySelector(".layout-config");
    const buttonIcon = this.element.querySelector(".layout-config-button span");

    if (configPanel.classList.contains("layout-config-active")) {
      buttonIcon.classList.add("any-spin-right");
    } else {
      buttonIcon.classList.add("any-spin-left");
    }

    configPanel.classList.toggle("layout-config-active");

    setTimeout(() => {
      buttonIcon.classList.remove("any-spin-left", "any-spin-right");
    }, 1000);
  }

  closeConfigPanel() {
    const configPanel = this.element.querySelector(".layout-config");
    const buttonIcon = this.element.querySelector(".layout-config-button span");

    configPanel.classList.remove("layout-config-active");
    buttonIcon.classList.add("any-spin-right");

    setTimeout(() => {
      buttonIcon.classList.remove("any-spin-right");
    }, 1000);
  }

  changeTheme(theme: string) {
    if (theme === "anywhere-default") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.removeItem("anywhereTheme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("anywhereTheme", theme);
    }

    document
      .querySelector(".layout-wrapper")
      .classList.remove("layout-wrapper-light");
    document
      .querySelector(".layout-wrapper")
      .classList.remove("layout-wrapper-dark");

    if (theme.includes("dark")) {
      document
        .querySelector(".layout-wrapper")
        .classList.add("layout-wrapper-dark");
    } else {
      document
        .querySelector(".layout-wrapper")
        .classList.add("layout-wrapper-light");
    }

    this.updateAppThemeImage(theme);
  }

  updateAppThemeImage(theme: string) {
    const appThemeImage = document.querySelector(".app-theme img");
    (
      appThemeImage as HTMLImageElement
    ).src = `assets/images/themes/${this.logoMap[theme]}`;
    (appThemeImage.parentNode as HTMLElement).setAttribute("title", theme);
  }

  render() {
    return (
      <div class="layout-config">
        <div class="layout-config-content-wrapper">
          <a tabindex="0" class="layout-config-button">
            <span
              style={{ display: "inline-block", width: "26px", height: "26px" }}
            >
              <i></i>
            </span>
          </a>
          <a tabindex="0" class="layout-config-close">
            <span
              style={{
                display: "inline-flex",
                width: "25px",
                height: "25px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i></i>
            </span>
          </a>
          <div class="layout-config-content">
            <div>
              <h4>Ripple Effect</h4>
              <any-input-switch
                id="ripple-switch"
                checked={this.rippleSwitchChecked}
              ></any-input-switch>

              <h4>Free Themes</h4>
              <p>Built-in component themes created by AdaleksTech.</p>

              <h5>AdaleksTech Design</h5>
              <div class="grid free-themes">
                <div class="col-3">
                  <button class="any-link" data-select-theme="anywhere-default">
                    <img
                      src="assets/images/themes/anywhere-default-violet.png"
                      alt="Adaleks Violet"
                    />
                  </button>
                  <span>Violet</span>
                </div>
                <div class="col-3">
                  <button
                    class="any-link"
                    data-select-theme="anywhere-default-light-purple"
                  >
                    <img
                      src="assets/images/themes/anywhere-light-purple.png"
                      alt="Adaleks Light Purple"
                    />
                  </button>
                  <span>Purple</span>
                </div>
                <div class="col-3">
                  <button
                    class="any-link"
                    data-select-theme="anywhere-default-dark-violet"
                  >
                    <img
                      src="assets/images/themes/anywhere-dark-violet.png"
                      alt="Adaleks Dark Violet"
                    />
                  </button>
                  <span>Violet</span>
                </div>
                <div class="col-3">
                  <button
                    class="any-link"
                    data-select-theme="anywhere-default-dark-purple"
                  >
                    <img
                      src="assets/images/themes/anywhere-dark-purple.png"
                      alt="Adaleks Dark Purple"
                    />
                  </button>
                  <span>Purple</span>
                </div>
              </div>
              <h5>Bootstrap</h5>
              <div class="grid free-themes">
                <div class="col-3">
                  <button
                    class="any-link"
                    data-select-theme="bootstrap4-light-blue"
                  >
                    <img
                      src="assets/images/themes/bootstrap4-light-blue.svg"
                      alt="Bootstrap Light Blue"
                    />
                  </button>
                  <span>Blue</span>
                </div>
                <div class="col-3">
                  <button
                    class="any-link"
                    data-select-theme="bootstrap4-light-purple"
                  >
                    <img
                      src="assets/images/themes/bootstrap4-light-purple.svg"
                      alt="Bootstrap Light Purple"
                    />
                  </button>
                  <span>Purple</span>
                </div>
                <div class="col-3">
                  <button
                    class="any-link"
                    data-select-theme="bootstrap4-dark-blue"
                  >
                    <img
                      src="assets/images/themes/bootstrap4-dark-blue.svg"
                      alt="Bootstrap Dark Blue"
                    />
                  </button>
                  <span>Blue</span>
                </div>
                <div class="col-3">
                  <button
                    class="any-link"
                    data-select-theme="bootstrap4-dark-purple"
                  >
                    <img
                      src="assets/images/themes/bootstrap4-dark-purple.svg"
                      alt="Bootstrap Dark Purple"
                    />
                  </button>
                  <span>Purple</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
