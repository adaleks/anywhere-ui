import { describe, it, expect, render } from "@stencil/vitest";
import "../input-number-vertical";

describe("input-number-vertical", () => {
  it("renders", async () => {
    const { root } = await render("<input-number-vertical></input-number-vertical>");

    expect(root.tagName.toLowerCase()).toBe("input-number-vertical");
  });
});
