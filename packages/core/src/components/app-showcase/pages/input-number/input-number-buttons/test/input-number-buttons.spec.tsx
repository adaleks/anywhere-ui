import { describe, it, expect, render } from "@stencil/vitest";
import "../input-number-buttons";

describe("input-number-buttons", () => {
  it("renders", async () => {
    const { root } = await render("<input-number-buttons></input-number-buttons>");

    expect(root.tagName.toLowerCase()).toBe("input-number-buttons");
  });
});
