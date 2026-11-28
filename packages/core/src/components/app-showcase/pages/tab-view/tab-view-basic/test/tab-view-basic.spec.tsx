import { describe, it, expect, render } from "@stencil/vitest";
import "../tab-view-basic";

describe("tab-view-basic", () => {
  it("renders", async () => {
    const { root } = await render("<tab-view-basic></tab-view-basic>");

    expect(root.tagName.toLowerCase()).toBe("tab-view-basic");
  });
});
