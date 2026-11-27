import { describe, it, expect, render } from "@stencil/vitest";
import "../listbox-grouping";

describe("listbox-grouping", () => {
  it("renders", async () => {
    const { root } = await render("<listbox-grouping></listbox-grouping>");

    expect(root.tagName.toLowerCase()).toBe("listbox-grouping");
  });
});
