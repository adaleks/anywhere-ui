import { describe, it, expect, render } from "@stencil/vitest";
import "../listbox-basic";

describe("listbox-basic", () => {
  it("renders", async () => {
    const { root } = await render("<listbox-basic></listbox-basic>");

    expect(root.tagName.toLowerCase()).toBe("listbox-basic");
  });
});
