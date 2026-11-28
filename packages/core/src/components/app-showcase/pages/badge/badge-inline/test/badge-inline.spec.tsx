import { describe, it, expect, render } from "@stencil/vitest";
import "../badge-inline";

describe("badge-inline", () => {
  it("renders", async () => {
    const { root } = await render("<badge-inline></badge-inline>");

    expect(root.tagName.toLowerCase()).toBe("badge-inline");
  });
});
