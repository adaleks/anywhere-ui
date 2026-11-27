import { describe, it, expect, render } from "@stencil/vitest";
import "../radio-button";

describe("any-radio-button", () => {
  it("renders", async () => {
    const { root } = await render("<any-radio-button></any-radio-button>");

    expect(root.tagName.toLowerCase()).toBe("any-radio-button");
    expect(root).toHaveShadowRoot();
  });
});
