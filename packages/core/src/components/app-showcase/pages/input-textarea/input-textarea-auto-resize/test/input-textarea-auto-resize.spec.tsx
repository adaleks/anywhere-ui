import { describe, it, expect, render } from "@stencil/vitest";
import "../input-textarea-auto-resize";

describe("input-textarea-auto-resize", () => {
  it("renders", async () => {
    const { root } = await render("<input-textarea-auto-resize></input-textarea-auto-resize>");

    expect(root.tagName.toLowerCase()).toBe("input-textarea-auto-resize");
  });
});
