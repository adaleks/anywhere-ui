import { describe, it, expect, render } from "@stencil/vitest";
import "../badge-numbers";

describe("badge-numbers", () => {
  it("renders", async () => {
    const { root } = await render("<badge-numbers></badge-numbers>");

    expect(root.tagName.toLowerCase()).toBe("badge-numbers");
  });
});
