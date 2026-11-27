import { describe, it, expect, render } from "@stencil/vitest";
import "../input-switch-disabled";

describe("input-switch-disabled", () => {
  it("renders", async () => {
    const { root } = await render("<input-switch-disabled></input-switch-disabled>");

    expect(root.tagName.toLowerCase()).toBe("input-switch-disabled");
  });
});
