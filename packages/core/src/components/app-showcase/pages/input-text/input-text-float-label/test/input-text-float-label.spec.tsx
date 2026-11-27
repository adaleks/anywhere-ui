import { describe, it, expect, render } from "@stencil/vitest";
import "../input-text-float-label";

describe("input-text-float-label", () => {
  it("renders", async () => {
    const { root } = await render("<input-text-float-label></input-text-float-label>");

    expect(root.tagName.toLowerCase()).toBe("input-text-float-label");
  });
});
