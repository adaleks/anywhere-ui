import { describe, it, expect, render } from "@stencil/vitest";
import "../input-switch-preselection";

describe("input-switch-preselection", () => {
  it("renders", async () => {
    const { root } = await render("<input-switch-preselection></input-switch-preselection>");

    expect(root.tagName.toLowerCase()).toBe("input-switch-preselection");
  });
});
