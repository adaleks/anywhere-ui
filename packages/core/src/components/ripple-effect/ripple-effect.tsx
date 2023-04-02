import { Component, Host, h, Element, Prop } from "@stencil/core";
import { DomHandler } from "../../utils/dom";
import { config } from "../../global/config";

@Component({
  tag: "any-ripple-effect",
  styleUrl: "ripple-effect.scss",
  shadow: true,
})
export class RippleEffect {
  private animationListener: any;

  private mouseDownListener: any;

  private useRippleEffect: boolean = true;

  @Element() element: HTMLElement;

  /**
   * Sets the type of ripple-effect:
   */
  @Prop() type: "bounded" | "unbounded" = "bounded";

  /**
   * Inline style of the component.
   */
  @Prop() anyStyle: any = null;

  connectedCallback() {
    this.useRippleEffect = config.getBoolean("rippleEffect", true);
  }

  componentDidLoad() {
    if (this.useRippleEffect) {
      this.create();
      this.mouseDownListener = this.onMouseDown.bind(this);
      this.element.parentNode.addEventListener(
        "mousedown",
        this.mouseDownListener
      );
    }
  }

  onMouseDown(event: MouseEvent) {
    let ink = this.element.shadowRoot.querySelector(".any-ink") as HTMLElement;
    if (!ink || getComputedStyle(ink, null).display === "none") {
      return;
    }
    DomHandler.removeClass(ink, "any-ink-active");
    if (!DomHandler.getHeight(ink) && !DomHandler.getWidth(ink)) {
      let d = Math.max(
        DomHandler.getOuterWidth(this.element.parentElement),
        DomHandler.getOuterHeight(this.element.parentElement)
      );
      ink.style.height = d + "px";
      ink.style.width = d + "px";
      this.element.style.height = d + "px";
      this.element.style.width = d + "px";
    }
    let offset = DomHandler.getOffset(this.element);
    if (this.type === "bounded") {
      let x =
        event.pageX -
        offset.left +
        document.body.scrollTop -
        DomHandler.getWidth(ink) / 2;
      let y =
        event.pageY -
        offset.top +
        document.body.scrollLeft -
        DomHandler.getHeight(ink) / 2;
      ink.style.top = y + "px";
      ink.style.left = x + "px";
    } else {
      ink.style.left = "0";
      ink.style.top = "0";
    }
    DomHandler.addClass(ink, "any-ink-active");
  }

  onAnimationEnd(event) {
    DomHandler.removeClass(event.currentTarget, "any-ink-active");
  }

  create() {
    let ink = this.element.shadowRoot.querySelector(".any-ink") as HTMLElement;
    this.element.parentElement.style.position = "relative";
    this.element.parentElement.style.overflow = "hidden";
    this.animationListener = this.onAnimationEnd.bind(this);
    ink.addEventListener("animationend", this.animationListener);
  }

  render() {
    return (
      <Host class="any-ripple any-element" style={this.anyStyle}>
        <span part="any-ink" class="any-ink"></span>
      </Host>
    );
  }
}
