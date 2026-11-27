import { describe, it, expect, render } from "@stencil/vitest";
import "../overlay";

describe("any-overlay", () => {
  it("renders", async () => {
    const { root } = await render("<any-overlay></any-overlay>");

    expect(root.tagName.toLowerCase()).toBe("any-overlay");
    expect(root).toHaveShadowRoot();
  });
});
