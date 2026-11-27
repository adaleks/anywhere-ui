import { describe, it, expect, render } from "@stencil/vitest";
import "../input-number-disabled";

describe("input-number-disabled", () => {
  it("renders", async () => {
    const { root } = await render("<input-number-disabled></input-number-disabled>");

    expect(root.tagName.toLowerCase()).toBe("input-number-disabled");
  });
});
