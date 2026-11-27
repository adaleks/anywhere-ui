import { describe, it, expect, render } from "@stencil/vitest";
import "../input-number-float-label";

describe("input-number-float-label", () => {
  it("renders", async () => {
    const { root } = await render("<input-number-float-label></input-number-float-label>");

    expect(root.tagName.toLowerCase()).toBe("input-number-float-label");
  });
});
