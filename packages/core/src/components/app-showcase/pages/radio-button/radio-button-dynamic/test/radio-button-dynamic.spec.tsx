import { describe, it, expect, render } from "@stencil/vitest";
import "../radio-button-dynamic";

describe("radio-button-dynamic", () => {
  it("renders", async () => {
    const { root } = await render("<radio-button-dynamic></radio-button-dynamic>");

    expect(root.tagName.toLowerCase()).toBe("radio-button-dynamic");
  });
});
