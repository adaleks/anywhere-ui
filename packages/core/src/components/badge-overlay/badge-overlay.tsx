import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "any-badge-overlay",
  styleUrl: "badge-overlay.scss",
  shadow: true,
})
export class BadgeOverlay {
  /**
   * Style class of the component.
   */
  @Prop() styleClass: string = null;

  render() {
    return (
      <Host>
        <div class="any-element">
          <div
            class={
              "any-component any-overlay-badge" +
              (this.styleClass ? " " + this.styleClass : "")
            }
          >
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
