import { describe, it, expect, render } from "@stencil/vitest";
import "../app-docsection-nav";

describe("app-docsection-nav", () => {
  it("renders", async () => {
    const { root } = await render("<app-docsection-nav></app-docsection-nav>");

    expect(root.tagName.toLowerCase()).toBe("app-docsection-nav");
  });
});
