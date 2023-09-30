import { newSpecPage } from "@stencil/core/testing";
import { AppDocSectionNav } from "../app-docsection-nav";

describe("any-app-docsection-nav", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [AppDocSectionNav],
      html: `<any-app-docsection-nav></any-app-docsection-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <any-app-docsection-nav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-app-docsection-nav>
    `);
  });
});
