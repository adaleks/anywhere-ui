import { describe, it, expect, render } from "@stencil/vitest";
import "../tab-panel";

describe("any-tab-panel", () => {
  it("renders", async () => {
    const { root } = await render("<any-tab-panel></any-tab-panel>");

    expect(root.tagName.toLowerCase()).toBe("any-tab-panel");
    expect(root).toHaveShadowRoot();
  });
});
