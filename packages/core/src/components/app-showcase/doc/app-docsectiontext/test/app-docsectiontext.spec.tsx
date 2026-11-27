import { describe, it, expect, render } from "@stencil/vitest";
import "../app-docsectiontext";

describe("app-docsectiontext", () => {
  it("renders", async () => {
    const { root } = await render("<app-docsectiontext></app-docsectiontext>");

    expect(root.tagName.toLowerCase()).toBe("app-docsectiontext");
  });
});
