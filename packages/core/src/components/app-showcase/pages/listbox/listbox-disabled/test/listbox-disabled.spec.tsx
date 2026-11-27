import { describe, it, expect, render } from "@stencil/vitest";
import "../listbox-disabled";

describe("listbox-disabled", () => {
  it("renders", async () => {
    const { root } = await render("<listbox-disabled></listbox-disabled>");

    expect(root.tagName.toLowerCase()).toBe("listbox-disabled");
  });
});
