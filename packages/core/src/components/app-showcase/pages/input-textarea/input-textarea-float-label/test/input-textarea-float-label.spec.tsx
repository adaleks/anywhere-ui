import { describe, it, expect, render } from "@stencil/vitest";
import "../input-textarea-float-label";

describe("input-textarea-float-label", () => {
  it("renders", async () => {
    const { root } = await render("<input-textarea-float-label></input-textarea-float-label>");

    expect(root.tagName.toLowerCase()).toBe("input-textarea-float-label");
  });
});
