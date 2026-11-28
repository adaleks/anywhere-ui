import { describe, it, expect, render } from "@stencil/vitest";
import "../ms-basic";

describe("ms-basic", () => {
  it("renders", async () => {
    const { root } = await render("<ms-basic></ms-basic>");

    expect(root.tagName.toLowerCase()).toBe("ms-basic");
  });
});
