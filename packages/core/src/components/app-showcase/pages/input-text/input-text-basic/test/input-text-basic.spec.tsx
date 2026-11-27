import { describe, it, expect, render } from "@stencil/vitest";
import "../input-text-basic";

describe("input-text-basic", () => {
  it("renders", async () => {
    const { root } = await render("<input-text-basic></input-text-basic>");

    expect(root.tagName.toLowerCase()).toBe("input-text-basic");
  });
});
