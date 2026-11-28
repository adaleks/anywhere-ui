import { Component, Host, Prop, h, Element } from "@stencil/core";
import { Cities } from "../../../../../app/data/Cities";

@Component({
  tag: "ms-template",
  styleUrl: "ms-template.scss",
  shadow: false,
  scoped: true,
})
export class MsTemplate {
  @Prop() textId: string;

  @Prop() textTitle: string;

  public code: any = {
    basic: `<any-multiselect placeholder="Select a City">
  <div slot="selectedItem">#=item.label#</div>
  <div slot="item">#=item.label# (#=item.value.code#)</div>
</any-multiselect>`,

    html: `<div class="full-card">
  <any-multiselect placeholder="Select a City">
    <div slot="selectedItem">
      <div style="display: flex; align-items: center">
        <img class="flag flag-#=item.value.countryCode#" style="width: 20px" />
        <b>#=item.label#</b>
      </div>
    </div>
    <div slot="item">
      <div style="display: flex; align-items: center">
        <img class="flag flag-#=item.value.countryCode#" style="width: 20px" />
        <b>#=item.label# (#=item.value.code#)</b>
      </div>
    </div>
  </any-multiselect>
</div>`,

    javascript: ``,
  };
  @Element() element: HTMLElement;

  public multiselectStyle = { minWidth: "15rem", width: "18rem" };

  public cities: any[] = [];

  componentWillLoad() {
    this.cities = Cities.map((city) => {
      if (city.value.countryCode) {
        city.value.countryCode = city.value.countryCode.toLowerCase();
      }
      return city;
    });
  }

  componentDidLoad() {
    const multiselect = this.element.querySelector("any-multiselect");
    const style = document.querySelector("link.flags-style");
    if (!multiselect || !style) return;
    multiselect.shadowRoot?.appendChild(style.cloneNode(true));
    multiselect.addEventListener("aOnShowStart", () => {
      const listbox = multiselect.shadowRoot?.querySelector("any-listbox");
      listbox?.shadowRoot?.appendChild(style.cloneNode(true));
    });
  }

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>Customise the list rows with the item slot and the chips with the selectedItem slot; the #=item.field# placeholders are replaced per row.</p>
          </app-docsectiontext>
            <div class="full-card">
              <any-multiselect
                class="ms2"
                anyStyle={this.multiselectStyle}
                showClear={true}
                options={this.cities}
              >
                <div slot="selectedItem">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      part="flag-#=item.value.countryCode#"
                      class="flag flag-#=item.value.countryCode#"
                      style={{ marginRight: "10px", width: "20px" }}
                      src="assets/images/flag/flag_placeholder.png"
                      alt="#=item.value.country# Flag"
                    />
                    <b>#=item.label#</b>
                  </div>
                </div>
                <div slot="item">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      part="flag-#=item.value.countryCode#"
                      class="flag flag-#=item.value.countryCode#"
                      style={{ marginRight: "10px", width: "20px" }}
                      src="assets/images/flag/flag_placeholder.png"
                      alt="#=item.value.country# Flag"
                    />
                    <b>#=item.label# (#=item.value.code#)</b>
                  </div>
                </div>
              </any-multiselect>
            </div>
          <app-code code={this.code} selector="ms-template"></app-code>
        </section>
      </Host>
    );
  }
}
