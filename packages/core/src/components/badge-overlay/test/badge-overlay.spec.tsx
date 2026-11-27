import { describe, it, expect, render } from "@stencil/vitest";
import "../badge-overlay";

describe("any-badge-overlay", () => {
  it("renders", async () => {
    const { root } = await render("<any-badge-overlay></any-badge-overlay>");

    expect(root.tagName.toLowerCase()).toBe("any-badge-overlay");
    expect(root).toHaveShadowRoot();
  });
});
