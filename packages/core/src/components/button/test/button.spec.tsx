import { newSpecPage } from "@stencil/core/testing";
import { AnyButton } from "../button";

describe("any-button", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [AnyButton],
      html: `<any-button></any-button>`,
    });
    expect(page.root).toEqualHtml(`
      <any-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-button>
    `);
  });
});
