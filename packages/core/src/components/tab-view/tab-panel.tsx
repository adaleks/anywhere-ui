import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "any-tab-panel",
  styleUrl: "tab-panel.scss",
  shadow: true,
})
export class TabPanel {
  _selected: boolean;
  loaded: boolean;

  /**
   * Title of the tabPanel.
   */
  @Prop() header: string;

  /**
   * When true, tab cannot be activated.
   */
  @Prop({ reflect: true }) disabled: boolean;

  /**
   * Defines if tab is active.
   */
  @Prop() selected: boolean = false;

  render() {
    return (
      <Host>
        {this.selected && (
          <div class="any-tabview-panel">
            <slot></slot>
          </div>
        )}
      </Host>
    );
  }
}
