import { describe, it, expect, render } from "@stencil/vitest";
import "../virtual-scroller";

describe("any-virtual-scroller", () => {
  it("renders", async () => {
    const { root } = await render("<any-virtual-scroller></any-virtual-scroller>");

    expect(root.tagName.toLowerCase()).toBe("any-virtual-scroller");
  });
});
