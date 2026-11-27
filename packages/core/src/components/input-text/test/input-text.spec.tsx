import { describe, it, expect, render } from "@stencil/vitest";
import "../input-text";

describe("any-input-text", () => {
  it("renders", async () => {
    const { root } = await render("<any-input-text></any-input-text>");

    expect(root.tagName.toLowerCase()).toBe("any-input-text");
  });
});
