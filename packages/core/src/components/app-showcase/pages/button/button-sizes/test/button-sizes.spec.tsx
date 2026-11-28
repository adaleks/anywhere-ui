import { describe, it, expect, render } from "@stencil/vitest";
import "../button-sizes";

describe("button-sizes", () => {
  it("renders", async () => {
    const { root } = await render("<button-sizes></button-sizes>");

    expect(root.tagName.toLowerCase()).toBe("button-sizes");
  });
});
