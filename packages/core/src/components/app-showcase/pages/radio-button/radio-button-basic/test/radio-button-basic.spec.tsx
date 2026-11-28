import { describe, it, expect, render } from "@stencil/vitest";
import "../radio-button-basic";

describe("radio-button-basic", () => {
  it("renders", async () => {
    const { root } = await render("<radio-button-basic></radio-button-basic>");

    expect(root.tagName.toLowerCase()).toBe("radio-button-basic");
  });
});
