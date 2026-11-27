import { describe, it, expect, render } from "@stencil/vitest";
import "../listbox-virtual-scroll";

describe("listbox-virtual-scroll", () => {
  it("renders", async () => {
    const { root } = await render("<listbox-virtual-scroll></listbox-virtual-scroll>");

    expect(root.tagName.toLowerCase()).toBe("listbox-virtual-scroll");
  });
});
