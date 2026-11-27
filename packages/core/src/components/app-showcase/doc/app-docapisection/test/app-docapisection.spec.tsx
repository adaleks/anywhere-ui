import { describe, it, expect, render } from "@stencil/vitest";
import "../app-docapisection";

describe("app-docapisection", () => {
  it("renders", async () => {
    const { root } = await render("<app-docapisection></app-docapisection>");

    expect(root.tagName.toLowerCase()).toBe("app-docapisection");
  });
});
