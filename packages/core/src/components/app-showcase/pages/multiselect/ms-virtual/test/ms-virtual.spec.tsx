import { describe, it, expect, render } from "@stencil/vitest";
import "../ms-virtual";

describe("ms-virtual", () => {
  it("renders", async () => {
    const { root } = await render("<ms-virtual></ms-virtual>");

    expect(root.tagName.toLowerCase()).toBe("ms-virtual");
  });
});
