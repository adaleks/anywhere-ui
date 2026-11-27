import { describe, it, expect, render } from "@stencil/vitest";
import "../input-text-disabled";

describe("input-text-disabled", () => {
  it("renders", async () => {
    const { root } = await render("<input-text-disabled></input-text-disabled>");

    expect(root.tagName.toLowerCase()).toBe("input-text-disabled");
  });
});
