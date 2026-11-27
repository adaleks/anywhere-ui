import { describe, it, expect, render } from "@stencil/vitest";
import "../button";

describe("any-button", () => {
  it("renders", async () => {
    const { root } = await render("<any-button></any-button>");

    expect(root.tagName.toLowerCase()).toBe("any-button");
    expect(root).toHaveShadowRoot();
  });
});
