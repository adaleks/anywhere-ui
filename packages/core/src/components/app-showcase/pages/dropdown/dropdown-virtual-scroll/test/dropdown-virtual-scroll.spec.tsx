import { describe, it, expect, render } from "@stencil/vitest";
import "../dropdown-virtual-scroll";

describe("dropdown-virtual-scroll", () => {
  it("renders", async () => {
    const { root } = await render("<dropdown-virtual-scroll></dropdown-virtual-scroll>");

    expect(root.tagName.toLowerCase()).toBe("dropdown-virtual-scroll");
  });
});
