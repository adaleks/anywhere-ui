import { newSpecPage } from "@stencil/core/testing";
import { InputTextarea } from "../input-textarea";

describe("any-input-textarea", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [InputTextarea],
      html: `<any-input-textarea></any-input-textarea>`,
    });
    expect(page.root).toEqualHtml(`
      <any-input-textarea>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-input-textarea>
    `);
  });
});
