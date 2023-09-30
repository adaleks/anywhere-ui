import { newSpecPage } from "@stencil/core/testing";
import { AppDocSectionText } from "../app-docsectiontext";

describe("any-app-docsectiontext", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [AppDocSectionText],
      html: `<any-app-docsectiontext></any-app-docsectiontext>`,
    });
    expect(page.root).toEqualHtml(`
      <any-app-docsectiontext>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-app-docsectiontext>
    `);
  });
});
