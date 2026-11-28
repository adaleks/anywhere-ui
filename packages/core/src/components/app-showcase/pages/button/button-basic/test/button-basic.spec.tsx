import { describe, it, expect, render } from "@stencil/vitest";
import "../button-basic";

describe("button-basic", () => {
  it("renders", async () => {
    const { root } = await render("<button-basic></button-basic>");

    expect(root.tagName.toLowerCase()).toBe("button-basic");
  });
});
