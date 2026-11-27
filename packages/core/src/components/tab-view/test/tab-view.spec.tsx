import { describe, it, expect, render } from "@stencil/vitest";
import "../tab-view";

describe("any-tab-view", () => {
  it("renders", async () => {
    const { root } = await render("<any-tab-view></any-tab-view>");

    expect(root.tagName.toLowerCase()).toBe("any-tab-view");
    expect(root).toHaveShadowRoot();
  });
});
