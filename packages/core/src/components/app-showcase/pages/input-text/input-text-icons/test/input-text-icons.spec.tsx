import { describe, it, expect, render } from "@stencil/vitest";
import "../input-text-icons";

describe("input-text-icons", () => {
  it("renders", async () => {
    const { root } = await render("<input-text-icons></input-text-icons>");

    expect(root.tagName.toLowerCase()).toBe("input-text-icons");
  });
});
