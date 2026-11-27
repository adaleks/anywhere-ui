import { describe, it, expect, render } from "@stencil/vitest";
import "../input-textarea-basic";

describe("input-textarea-basic", () => {
  it("renders", async () => {
    const { root } = await render("<input-textarea-basic></input-textarea-basic>");

    expect(root.tagName.toLowerCase()).toBe("input-textarea-basic");
  });
});
