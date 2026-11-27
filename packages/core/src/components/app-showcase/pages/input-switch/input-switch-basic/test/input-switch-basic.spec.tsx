import { describe, it, expect, render } from "@stencil/vitest";
import "../input-switch-basic";

describe("input-switch-basic", () => {
  it("renders", async () => {
    const { root } = await render("<input-switch-basic></input-switch-basic>");

    expect(root.tagName.toLowerCase()).toBe("input-switch-basic");
  });
});
