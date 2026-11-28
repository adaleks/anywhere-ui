import { describe, it, expect, render } from "@stencil/vitest";
import "../ripple-effect-basic";

describe("ripple-effect-basic", () => {
  it("renders", async () => {
    const { root } = await render("<ripple-effect-basic></ripple-effect-basic>");

    expect(root.tagName.toLowerCase()).toBe("ripple-effect-basic");
  });
});
