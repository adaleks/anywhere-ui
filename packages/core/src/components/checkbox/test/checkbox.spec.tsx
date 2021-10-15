import { newSpecPage } from "@stencil/core/testing";
import { AnyCheckbox } from "../checkbox";

describe("any-checkbox", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [AnyCheckbox],
      html: `<any-checkbox></any-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <any-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-checkbox>
    `);
  });
});
