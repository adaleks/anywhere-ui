import { describe, it, expect, render } from "@stencil/vitest";
import "../radio-group";

describe("any-radio-group", () => {
  it("renders", async () => {
    const { root } = await render("<any-radio-group></any-radio-group>");

    expect(root.tagName.toLowerCase()).toBe("any-radio-group");
  });
});
