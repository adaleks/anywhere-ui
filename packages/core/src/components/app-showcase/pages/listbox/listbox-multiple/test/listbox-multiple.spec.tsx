import { describe, it, expect, render } from "@stencil/vitest";
import "../listbox-multiple";

describe("listbox-multiple", () => {
  it("renders", async () => {
    const { root } = await render("<listbox-multiple></listbox-multiple>");

    expect(root.tagName.toLowerCase()).toBe("listbox-multiple");
  });
});
