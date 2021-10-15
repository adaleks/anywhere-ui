import { newSpecPage } from "@stencil/core/testing";
import { AnyInputText } from "../input-text";

describe("any-input-text", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [AnyInputText],
      html: `<any-input-text></any-input-text>`,
    });
    expect(page.root).toEqualHtml(`
      <any-input-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-input-text>
    `);
  });
});
