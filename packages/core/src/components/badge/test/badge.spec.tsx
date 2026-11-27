import { describe, it, expect, render } from "@stencil/vitest";
import "../badge";

describe("any-badge", () => {
  it("renders", async () => {
    const { root } = await render("<any-badge></any-badge>");

    expect(root.tagName.toLowerCase()).toBe("any-badge");
    expect(root).toHaveShadowRoot();
  });
});
