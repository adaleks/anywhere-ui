import { describe, it, expect, render } from "@stencil/vitest";
import "../badge-sizes";

describe("badge-sizes", () => {
  it("renders", async () => {
    const { root } = await render("<badge-sizes></badge-sizes>");

    expect(root.tagName.toLowerCase()).toBe("badge-sizes");
  });
});
