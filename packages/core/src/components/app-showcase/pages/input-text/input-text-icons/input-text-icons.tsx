import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "input-text-icons",
  styleUrl: "input-text-icons.scss",
  shadow: false,
  scoped: true,
})
export class InputTextIcons {
  @Prop() textId: string;

  @Prop() textTitle: string;

  code: any = {
    basic: `

<span>
    <any-input-text id="inputTextIconsLeft">
        <i slot="iconLeft"
          class="iconify"
          data-icon="fa-solid:search"
        ></i>
    </any-input-text>
</span>
<span>
    <any-input-text id="inputTextIconsRight">
        <i slot="iconRight"
            class="iconify"
            data-icon="fa-solid:spinner"
        ></i>
    </any-input-text>
</span>

`,

    html: `

<div class="full-card flex justify-content-center gap-3">
    <span>
        <any-input-text id="inputTextIconsLeft">
            <i slot="iconLeft"
               class="iconify"
               data-icon="fa-solid:search"
            ></i>
        </any-input-text>
    </span>
    <span>
        <any-input-text id="inputTextIconsRight">
            <i slot="iconRight"
               class="iconify"
               data-icon="fa-solid:spinner"
            ></i>
        </any-input-text>
    </span>
</div>

`,

    javascript: `

let inputTextIconsLeft = document.getElementById("inputTextIconsLeft");
inputTextIconsLeft.inputWrapperClass = "any-input-icon-left";
inputTextIconsLeft.placeholder = "Search";

let inputTextIconsRight = document.getElementById("inputTextIconsRight");
inputTextIconsRight.inputWrapperClass = "any-input-icon-right";
inputTextIconsRight.placeholder = "Loading...";
inputTextIconsRight.rightIconClass = "any-spin";

inputTextIconsLeft.addEventListener("valueChange", (event) => {
  console.log("InputTextLeft changed:", event);
});
inputTextIconsRight.addEventListener("valueChange", (event) => {
  console.log("InputTextRight changed:", event);
});

`,
  };

  render() {
    return (
      <Host>
        <section class="py-4">
          <app-docsectiontext textTitle={this.textTitle} textId={this.textId}>
            <p>
              Icons can be placed inside an input element by wrapping both the
              input and the icon with an element that has either
              .any-input-icon-left or .any-input-icon-right class.
            </p>
          </app-docsectiontext>
          <div class="full-card flex justify-content-center gap-3">
            <span>
              <any-input-text
                id="inputTextIconsLeft"
                inputWrapperClass="any-input-icon-left"
                placeholder="Search"
              >
                <i
                  slot="iconLeft"
                  class="iconify"
                  data-icon="fa-solid:search"
                ></i>
              </any-input-text>
            </span>
            <span>
              <any-input-text
                id="inputTextIconsRight"
                inputWrapperClass="any-input-icon-right"
                rightIconClass="any-spin"
                placeholder="Loading..."
              >
                <i
                  slot="iconRight"
                  class="iconify"
                  data-icon="fa-solid:spinner"
                ></i>
              </any-input-text>
            </span>
          </div>
          <app-code code={this.code} selector="input-text-icons"></app-code>
        </section>
      </Host>
    );
  }
}
