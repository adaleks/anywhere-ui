const template = document.createElement('template');
template.innerHTML = `
<style>
    @import "/app/css/app.css";
    :host {
        display: block;
    }
    .layout-config {
        position: fixed;
        padding: 0;
        top: 0;
        right: 0;
        display: block;
        width: 550px;
        z-index: 1101;
        height: 100%;
        transition: transform .4s cubic-bezier(.05,.74,.2,.99);
        transform: translateX(100%);
        backface-visibility: hidden;
    }
    .layout-config.layout-config-active {
        transform: translateX(0);
    }

    .layout-config-content-wrapper {
        position: relative;
        height: 100%;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.24);
        color: var(--text-color);
        background-color: var(--surface-f);
    }

    .layout-config-content-wrapper .layout-config-button {
        display: block;
        position: absolute;
        width: 52px;
        height: 52px;
        line-height: 52px;
        background-color: var(--primary-color);
        text-align: center;
        color: var(--primary-color-text);
        top: 270px;
        left: -51px;
        z-index: -1;
        overflow: hidden;
        cursor: pointer;
        outline: 0 none;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }

    .layout-config-content-wrapper .layout-config-button i {
        font-size: 26px;
        line-height: inherit;
        cursor: pointer;
    }
    
    .layout-config-content-wrapper .layout-config-button span {
        display: block;
        line-height: 26px;
        margin: 13px;
    }

    .layout-config-content-wrapper .layout-config-button i:after {
        content: var(--cog-icon);
    }

    .layout-config-close {
        position: absolute;
        width: 25px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        right: 20px;
        top: 20px;
        z-index: 999;
        background-color: var(--primary-color);
        border-radius: 50%;
        cursor: pointer;
        transition: background-color .2s, box-shadow .2s, transform .2s;
    }

    .layout-config .layout-config-close:hover {
        transform: scale(1.1);
    }

    .layout-config-content-wrapper .layout-config-close span {
        display: block;
        line-height: 20px;
    }

    .layout-config-content-wrapper .layout-config-close i:after {
        content: var(--times-icon);
    }

    .layout-config-content-wrapper .layout-config-close i {
        font-size: 20px;
        line-height: inherit;
        cursor: pointer;
        vertical-align: -0.3em;
    }

    a {
        color: var(--linkColor);
        font-weight: 600;
    }

    a:hover {
        text-decoration: underline;
    }

    .layout-config-content {
        overflow: auto;
        height: 100%;
        padding: 2rem;
    }

    .any-grid > div {
        padding: 1rem;
        text-align: center;
    }

    .any-grid > div span {
        display: block;
    }

    .any-grid > div button {
        position: relative;
        display: inline-flex;
        justify-content: center;
    }

    .free-themes img {
        width: 50px;
        border-radius: 4px;
        transition: transform .2s;
    }
    .free-themes img:hover {
        transform: scale(1.1);
    }

    .free-themes span {
        font-size: .875rem;
        margin-top: .25rem;
    }
</style>
<div class="layout-config">
    <div class="layout-config-content-wrapper">
        <a tabindex="0" class="layout-config-button">
            <span style="display: inline-block; width: 26px;height:26px;">
                <i></i>
            </span>
        </a>
        <a tabindex="0" class="layout-config-close">
            <span style="display: inline-block; width: 25px;height:25px;">
                <i></i>
            </span>
        </a>
        <div class="layout-config-content">
            <div>
                <h4>Ripple Effect</h4>
                <any-input-switch id="ripple-switch"></any-input-switch>

                <h4>Free Themes</h4>
                <p>Built-in component themes created by AdaleksTech.</p>

                <h5>AdaleksTech Design</h5>
                <div class="any-grid free-themes">
                    <div class="any-col-3">
                        <button class="any-link" data-select-theme="anywhere-default">
                            <img src="assets/images/themes/anywhere-default-violet.png" alt="Adaleks Violet" />
                        </button>
                        <span>Violet</span>
                    </div>
                </div>
                <h5>Bootstrap</h5>
                <div class="any-grid free-themes">
                    <div class="any-col-3">
                        <button class="any-link" data-select-theme="bootstrap4-light-blue">
                            <img src="assets/images/themes/bootstrap4-light-blue.svg" alt="Bootstrap Light Blue" />
                        </button>
                        <span>Blue</span>
                    </div>
                    <div class="any-col-3">
                        <button class="any-link" data-select-theme="bootstrap4-light-purple">
                            <img src="assets/images/themes/bootstrap4-light-purple.svg" alt="Bootstrap Light Purple" />
                        </button>
                        <span>Purple</span>
                    </div>
                    <div class="any-col-3">
                        <button class="any-link" data-select-theme="bootstrap4-dark-blue">
                            <img src="assets/images/themes/bootstrap4-dark-blue.svg" alt="Bootstrap Dark Blue" />
                        </button>
                        <span>Blue</span>
                    </div>
                    <div class="any-col-3">
                        <button class="any-link" data-select-theme="bootstrap4-dark-purple">
                            <img src="assets/images/themes/bootstrap4-dark-purple.svg" alt="Bootstrap Dark Purple" />
                        </button>
                        <span>Purple</span>
                    </div>
                </div>
            </div
        </div>
    </div>
</div>`;

class AppConfig extends HTMLElement {
  constructor() {
    super();
    this.logoMap = {
      'anywhere-default': 'anywhere-default-violet.png',
      'bootstrap4-light-blue': 'bootstrap4-light-blue.svg',
      'bootstrap4-light-purple': 'bootstrap4-light-purple.svg',
      'bootstrap4-dark-blue': 'bootstrap4-dark-blue.svg',
      'bootstrap4-dark-purple': 'bootstrap4-dark-purple.svg',
    };
    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.$button = this.shadowRoot.querySelector('.layout-config-button');
    this.$closeButton = this.shadowRoot.querySelector('.layout-config-close');
    this.$buttonIcon = this.shadowRoot.querySelector('.layout-config-button span');
    this.$layoutConfig = this.shadowRoot.querySelector('.layout-config');
    this.appThemeImage = document.querySelector('.app-theme img');

    this.$button.addEventListener('click', (event) => {
      if (this.$layoutConfig.classList.contains("layout-config-active")) {
        this.$buttonIcon.classList.add("any-spin-right");
      } else {
        this.$buttonIcon.classList.add("any-spin-left");
      }
      this.$layoutConfig.classList.toggle("layout-config-active");
      setTimeout(() => {
        this.$buttonIcon.classList.remove("any-spin-left");
        this.$buttonIcon.classList.remove("any-spin-right");
      }, 1000);
    });

    this.$closeButton.addEventListener('click', (event) => {
      this.$layoutConfig.classList.remove("layout-config-active");
      this.$buttonIcon.classList.add("any-spin-right");
      setTimeout(() => {
        this.$buttonIcon.classList.remove("any-spin-right");
      }, 1000);
    });

    document.addEventListener("click", (event) => {
      let isClickInsideElement = this.contains(event.target);
      if (!isClickInsideElement) {
        if (this.$layoutConfig.classList.contains("layout-config-active")) {
          this.$buttonIcon.classList.add("any-spin-right");
          setTimeout(() => {
            // this.$buttonIcon.style.display = "block";
            this.$buttonIcon.classList.remove("any-spin-right");
          }, 1000);
        }
        this.$layoutConfig.classList.remove("layout-config-active");
      }
    });

    this.rippleSwitch = this.shadowRoot.getElementById('ripple-switch');
    this.rippleSwitch.checked = true;
    this.rippleSwitch.addEventListener("valueChange", (event) => {
      if (!event.detail.checked) {
        document.body.classList.add("any-ripple-disabled");
      } else {
        document.body.classList.remove("any-ripple-disabled");
      }
    });

    this.$themeLinks = this.shadowRoot.querySelectorAll(".any-link");
    this.$themeLinks.forEach(el => el.addEventListener('click', event => {
      const theme = event.currentTarget.getAttribute("data-select-theme");
      this.changeTheme(event, theme);
    }));

    const theme = localStorage.getItem('anywhereTheme');
    if (theme) {
      document.getElementsByTagName("HTML")[0].setAttribute("data-theme", theme);
      this.appThemeImage.src = "assets/images/themes/" + this.logoMap[theme];
      this.appThemeImage.parentNode.setAttribute("title", theme);
    }
  }

  changeTheme(e, theme) {
    if (theme === "anywhere-default") {
      document.getElementsByTagName("HTML")[0].removeAttribute("data-theme");
      localStorage.removeItem('anywhereTheme');
      this.appThemeImage.src = "assets/images/themes/" + this.logoMap[theme];
      this.appThemeImage.parentNode.setAttribute("title", theme);
      return;
    }
    document.getElementsByTagName("HTML")[0].setAttribute("data-theme", theme);
    localStorage.setItem('anywhereTheme', theme);
    this.appThemeImage.src = "assets/images/themes/" + this.logoMap[theme];
    this.appThemeImage.parentNode.setAttribute("title", theme);
  }

  connectedCallback() {
    this.render();
  }

  render() {}
}
window.customElements.define('app-config', AppConfig);
