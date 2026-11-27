import { describe, it, expect, render } from "@stencil/vitest";
import "../app-docsection";

describe("app-docsection", () => {
  it("renders", async () => {
    const { root } = await render("<app-docsection></app-docsection>");

    expect(root.tagName.toLowerCase()).toBe("app-docsection");
  });
});
