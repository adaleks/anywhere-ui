import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "any-badge",
  styleUrl: "badge.scss",
  shadow: true,
})
export class AnyBadge {
  /**
   * Style class of the component.
   */
  @Prop() styleClass: string = null;

  /**
   * Inline style of the component.
   */
  @Prop() anyStyle: any = null;

  /**
   * Size of the badge, valid options are "large" and "xlarge".
   */
  @Prop() size: string = null;

  /**
   * Severity type of the badge.
   */
  @Prop() severity: string = null;

  /**
   * Value to display inside the badge.
   */
  @Prop() value: string = null;

  containerClass() {
    return (
      "any-badge any-component" +
      (this.value != undefined && String(this.value).length === 1
        ? " any-badge-no-gutter"
        : "") +
      (!this.value ? " any-badge-dot" : "") +
      (this.size === "large" ? " any-badge-lg" : "") +
      (this.size === "xlarge" ? " any-badge-xl" : "") +
      (this.severity === "info" ? " any-badge-info" : "") +
      (this.severity === "success" ? " any-badge-success" : "") +
      (this.severity === "warning" ? " any-badge-warning" : "") +
      (this.severity === "danger" ? " any-badge-danger" : "") +
      (this.severity === "secondary" ? " any-badge-secondary" : "") +
      (this.styleClass ? " " + this.styleClass : "")
    );
  }

  render() {
    return (
      <Host>
        <div class="any-element">
          <span part="any-badge" class={this.containerClass()}>
            {this.value}
          </span>
        </div>
      </Host>
    );
  }
}
