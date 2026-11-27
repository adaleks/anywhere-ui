import { describe, it, expect, render } from "@stencil/vitest";
import "../listbox-filter";

describe("listbox-filter", () => {
  it("renders", async () => {
    const { root } = await render("<listbox-filter></listbox-filter>");

    expect(root.tagName.toLowerCase()).toBe("listbox-filter");
  });
});
