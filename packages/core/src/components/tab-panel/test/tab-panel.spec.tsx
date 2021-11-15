import { newSpecPage } from "@stencil/core/testing";
import { TabPanel } from "../tab-panel";

describe("any-tab-panel", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [TabPanel],
      html: `<any-tab-panel></any-tab-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <any-tab-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-tab-panel>
    `);
  });
});
