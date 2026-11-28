import { describe, it, expect, render } from "@stencil/vitest";
import "../badge-positioned";

describe("badge-positioned", () => {
  it("renders", async () => {
    const { root } = await render("<badge-positioned></badge-positioned>");

    expect(root.tagName.toLowerCase()).toBe("badge-positioned");
  });
});
