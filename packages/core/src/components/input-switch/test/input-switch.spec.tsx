import { describe, it, expect, render } from "@stencil/vitest";
import "../input-switch";

describe("any-input-switch", () => {
  it("renders", async () => {
    const { root } = await render("<any-input-switch></any-input-switch>");

    expect(root.tagName.toLowerCase()).toBe("any-input-switch");
    expect(root).toHaveShadowRoot();
  });
});
