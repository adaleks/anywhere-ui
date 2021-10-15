import { newSpecPage } from "@stencil/core/testing";
import { AnyVirtualScroller } from "../virtual-scroller";

describe("virtual-scroller", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [AnyVirtualScroller],
      html: `<any-virtual-scroller></any-virtual-scroller>`,
    });
    expect(page.root).toEqualHtml(`
      <any-virtual-scroller>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-virtual-scroller>
    `);
  });
});
