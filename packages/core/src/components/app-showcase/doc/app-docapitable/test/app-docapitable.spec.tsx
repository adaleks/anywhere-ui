import { newSpecPage } from "@stencil/core/testing";
import { AppDocApiTable } from "../app-docapitable";

describe("any-app-docapitable", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [AppDocApiTable],
      html: `<any-app-docapitable></any-app-docapitable>`,
    });
    expect(page.root).toEqualHtml(`
      <any-app-docapitable>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </any-app-docapitable>
    `);
  });
});
