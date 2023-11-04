import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
  State,
  Watch,
  h,
} from "@stencil/core";
import { getNodeIndex } from "../../utils/utils";

@Component({
  tag: "any-overlay",
  styleUrl: "overlay.scss",
  shadow: true,
})
export class AnyOverlay {
  private openDown: boolean = true;
  private positionLeft: number = 0;
  private minWidth: number = 0;

  @Element() element: HTMLElement;

  @State() positionTop: number = 0;

  @State() showPanel: boolean = false;

  /**
   * Whether to automatically manage layering
   */
  @Prop() autoZIndex?: boolean = true;

  /**
   * Base zIndex value to use in layering
   */
  @Prop() baseZIndex?: string = "0";

  /**
   * The target element to attach the dropdown to.
   */
  @Prop() target: any;

  /**
   * Keyframe name for the show animation.
   */
  @Prop() showAnimation?: string = "growDown";

  /**
   * Transition options for the hide animation.
   */
  @Prop() hideAnimation?: string = "growUp";

  /**
   * Whether the dropdown is currently visible or hidden.
   */
  @Prop() visible: boolean = false;

  /**
   * Callback to invoke when the dropdown overlay becomes visible.
   */
  @Event() aOnShow?: EventEmitter;

  /**
   * Callback to invoke when the dropdown overlay is about to become visible.
   */
  @Event() aOnShowStart?: EventEmitter;

  /**
   * Callback to invoke when the dropdown overlay becomes hidden.
   */
  @Event() aOnHide?: EventEmitter;

  /**
   * Callback to invoke when the dropdown overlay is about to become hidden.
   */
  @Event() aOnHideStart?: EventEmitter;

  @Watch("visible")
  visibleChanged(visible: boolean) {
    if (visible) {
      this.animatePanelAppearance("open");
    } else {
      this.animatePanelAppearance("close");
    }
  }

  @Listen("resize", { target: "window" })
  handleViewportSizeChange(_event: Event) {
    this.calculatePosition();
    this.calculateSize();
  }

  @Listen("scroll", { target: "window" })
  handleScroll(_ev: Event) {
    this.calculatePosition();
    this.calculateSize();
  }

  componentDidLoad() {}

  componentWillLoad() {
    const targetRect = this.target.getBoundingClientRect();
    this.positionTop = targetRect.height;
  }

  componentDidUpdate() {}

  calculatePosition() {
    const overlayPanel = this.element.shadowRoot.querySelector(
      ".any-overlay"
    ) as HTMLElement;

    if (!overlayPanel) return;

    const targetElement = this.target;
    const targetRect = targetElement.getBoundingClientRect();
    const overlayHeight = overlayPanel.offsetHeight;
    const availableSpace = window.innerHeight - targetRect.bottom;

    if (availableSpace < overlayHeight) {
      this.openDown = false;
      overlayPanel.classList.remove("direction-down");
      overlayPanel.classList.add("direction-up");
      this.positionTop = -overlayHeight;
    } else {
      this.openDown = true;
      overlayPanel.classList.remove("direction-up");
      overlayPanel.classList.add("direction-down");
      this.positionTop = targetRect.height;
    }
  }

  calculateSize() {
    this.minWidth = this.target.offsetWidth;
  }

  /**
   * Panel appearance animation definition
   *
   * @private
   * @param {string} action
   * @memberof AnyDropdown
   */
  private animatePanelAppearance(action: string) {
    const overlayPanel = this.element.shadowRoot.querySelector(
      ".any-overlay"
    ) as HTMLElement;
    if (action === "open") {
      if (!overlayPanel) {
        window.requestAnimationFrame(() => {
          this.calculatePosition();
          this.calculateSize();
          this.showPanel = true;
          this.animatePanelAppearance("open");
        });
      } else {
        document.removeEventListener("animationend", () => {});
        overlayPanel.classList.remove(this.hideAnimation + "-animation");
        overlayPanel.classList.add(this.showAnimation + "-animation");
        // overlayPanel.style.zIndex = this.baseZIndex ;
        if (this.openDown) {
          overlayPanel.classList.add("direction-down");
        } else {
          overlayPanel.classList.add("direction-up");
        }
        this.element.style.zIndex = this.autoZIndex
          ? (1090 + getNodeIndex(this.element)).toString()
          : this.baseZIndex;
      }
    } else {
      if (overlayPanel) {
        overlayPanel.classList.remove(this.showAnimation + "-animation");
        overlayPanel.classList.add(this.hideAnimation + "-animation");
        document.removeEventListener("animationstart", () => {});
        overlayPanel.addEventListener(
          "animationend",
          () => {
            this.showPanel = false;
            const targetRect = this.target.getBoundingClientRect();
            if (!this.openDown) {
              this.positionTop = targetRect.height;
            } else {
              const overlayHeight = overlayPanel.offsetHeight;
              this.positionTop = -overlayHeight;
            }
          },
          false
        );
      }
    }
  }

  onAnimationEndCallback(e: AnimationEvent) {
    // console.log('event anim', e);
    if (e.animationName === this.showAnimation) {
      this.aOnShow.emit(e);
    }
    if (e.animationName === this.hideAnimation) {
      this.aOnHide.emit(e);
    }
  }

  onAnimationStartCallback(e: AnimationEvent) {
    if (e.animationName === this.showAnimation) {
      this.aOnShowStart.emit(e);
    }
    if (e.animationName === this.hideAnimation) {
      this.aOnHideStart.emit(e);
    }
  }

  render() {
    return (
      <Host
        style={{
          top: this.positionTop + "px",
          left: this.positionLeft + "px",
          minWidth: this.minWidth + "px",
        }}
      >
        {this.showPanel && (
          <div
            class={"any-element any-component any-overlay"}
            onAnimationEnd={(e) => this.onAnimationEndCallback(e)}
            onAnimationStart={(e) => this.onAnimationStartCallback(e)}
          >
            <slot></slot>
          </div>
        )}
      </Host>
    );
  }
}
