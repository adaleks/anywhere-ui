import { describe, it, expect, render } from "@stencil/vitest";
import "../ripple-effect";

describe("any-ripple-effect", () => {
  it("renders", async () => {
    const { root } = await render("<any-ripple-effect></any-ripple-effect>");

    expect(root.tagName.toLowerCase()).toBe("any-ripple-effect");
    expect(root).toHaveShadowRoot();
  });
});
