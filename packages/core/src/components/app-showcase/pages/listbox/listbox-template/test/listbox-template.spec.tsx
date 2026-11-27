import { describe, it, expect, render } from "@stencil/vitest";
import "../listbox-template";

describe("listbox-template", () => {
  it("renders", async () => {
    const { root } = await render("<listbox-template></listbox-template>");

    expect(root.tagName.toLowerCase()).toBe("listbox-template");
  });
});
