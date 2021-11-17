import {
  Component,
  Host,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
  Watch,
} from "@stencil/core";
import Iconify from "@iconify/iconify";
import { loadIcons } from "../../utils/load-icons";
import { hasShadowDom } from "../../utils/helpers";
import { waitForElm } from "../../utils/utils";

@Component({
  tag: "any-button",
  styleUrl: "button.scss",
  shadow: true,
})
export class AnyButton {
  private hasContentSlot: boolean = false;

  @Element() private element: HTMLElement;

  /**
   * Type of the button.
   */
  @Prop() type: "button" | "submit" | "reset" = "button";

  /**
   * Text of the button.
   */
  @Prop() label: string = null;

  /**
   * When present, it specifies that the component should be disabled.
   */
  @Prop() disabled: boolean = false;

  /**
   * Style class of the element.
   */
  @Prop() styleClass: string = null;

  /**
   * Name of the icon.
   */
  @Prop() icon: string = null;

  /**
   * Position of the icon, valid values are "left" and "right".
   */
  @Prop() iconPos: "left" | "right" | "top" | "bottom" = "left";

  /**
   * Width of the icon
   */
  @Prop() iconWidth: number = null;

  /**
   * Height of the icon
   */
  @Prop() iconHeight: number = null;

  /**
   * Value of the badge.
   */
  @Prop() badge: string = null;

  /**
   * Style class of the badge.
   */
  @Prop() badgeClass: string = null;

  /**
   * Icon to display in loading state.
   */
  @Prop() loadingIcon: string = "fa-solid:spinner";

  /**
   * Style class of the icon element
   */
  @Prop() loadingIconStyleClass: string = "any-spin";

  /**
   * Whether the button is in loading state.
   */
  @Prop() loading: boolean = false;

  /**
   * Inline style of the element.
   */
  @Prop() anyStyle?: any = null;

  /**
   * Callback to execute when button is clicked.
   */
  @Event() aOnClick?: EventEmitter;

  /**
   * Callback to execute when button is focused.
   */
  @Event() aOnFocus?: EventEmitter;

  /**
   * Callback to execute when button loses focus.
   */
  @Event() aOnBlur?: EventEmitter;

  @Watch("loading")
  valueChanged() {
    waitForElm(this.element.shadowRoot, ".any-button-icon").then(
      (icon: HTMLElement) => {
        this.renderIcon(icon);
      }
    );
  }

  componentWillLoad() {
    this.hasContentSlot = !!this.element.querySelector('[slot="content"]');
    this.loadIcons();
  }

  async loadIcons() {
    await loadIcons([this.icon, this.loadingIcon]).catch((err) => {
      console.error("Failed to load icons:", err.missing);
    });
    waitForElm(this.element.shadowRoot, ".any-button-icon").then(
      (icon: HTMLElement) => {
        this.renderIcon(icon);
      }
    );
  }

  renderIcon(icon: HTMLElement) {
    icon.innerHTML = Iconify.renderHTML(
      this.loading ? this.loadingIcon : this.icon,
      {
        width: this.iconWidth,
        height: this.iconHeight,
      }
    );
  }

  private handleClick = (ev: Event) => {
    if (this.type !== "button") {
      if (hasShadowDom(this.element)) {
        // this button wants to specifically submit a form
        // climb up the dom to see if we're in a <form>
        // and if so, then use JS to submit it
        const form = this.element.closest("form");
        if (form) {
          ev.preventDefault();

          const fakeButton = document.createElement("button");
          fakeButton.type = this.type;
          fakeButton.style.display = "none";
          form.appendChild(fakeButton);
          fakeButton.click();
          fakeButton.remove();
        }
      }
    }
    this.aOnClick.emit(ev);
  };

  private getContent(slot: string) {
    const node = this.element
      .querySelector('[slot="' + slot + '"]')
      .cloneNode(true) as HTMLElement;

    return node.innerHTML;
  }

  render() {
    return (
      <Host>
        <div class="any-element">
          <div style={{ display: "none" }}>
            <slot name="content" />
          </div>
          <button
            part="any-button"
            type={this.type}
            style={this.anyStyle}
            class={
              "any-button any-component" +
              (this.disabled || this.loading ? " any-disabled" : "") +
              (this.styleClass ? " " + this.styleClass : "") +
              ((this.iconPos === "top" || this.iconPos === "bottom") &&
              this.label
                ? " any-button-vertical"
                : "") +
              (this.icon && !this.label && !this.badge
                ? " any-button-icon-only"
                : "")
            }
            disabled={this.disabled || this.loading}
            onClick={(e) => this.handleClick(e)}
            onBlur={(e) => this.aOnBlur.emit(e)}
            onFocus={(e) => this.aOnFocus.emit(e)}
          >
            {this.hasContentSlot && (
              <span
                class="any-button-content"
                innerHTML={this.getContent("content")}
              ></span>
            )}
            {(this.icon || (this.loading && !this.hasContentSlot)) && (
              <span
                aria-hidden="true"
                class={
                  "any-button-icon" +
                  (this.iconPos === "left" && this.label
                    ? " any-button-icon-left"
                    : "") +
                  (this.iconPos === "right" && this.label
                    ? " any-button-icon-right"
                    : "") +
                  (this.iconPos === "top" && this.label
                    ? " any-button-icon-top"
                    : "") +
                  (this.iconPos === "bottom" && this.label
                    ? " any-button-icon-bottom"
                    : "") +
                  (this.loading
                    ? " any-button-loading-icon " + this.loadingIconStyleClass
                    : "")
                }
              ></span>
            )}
            {!this.hasContentSlot &&
              (this.label ? (
                <span class="any-button-label">{this.label}</span>
              ) : (
                <span class="any-button-label">&nbsp;</span>
              ))}
            {!this.hasContentSlot && this.badge && (
              <any-badge
                value={this.badge}
                styleClass={this.badgeClass}
              ></any-badge>
            )}
            <any-ripple-effect exportparts="any-ink: any-ink"></any-ripple-effect>
          </button>
        </div>
      </Host>
    );
  }
}
