import { describe, it, expect, render } from "@stencil/vitest";
import "../input-textarea-disabled";

describe("input-textarea-disabled", () => {
  it("renders", async () => {
    const { root } = await render("<input-textarea-disabled></input-textarea-disabled>");

    expect(root.tagName.toLowerCase()).toBe("input-textarea-disabled");
  });
});
