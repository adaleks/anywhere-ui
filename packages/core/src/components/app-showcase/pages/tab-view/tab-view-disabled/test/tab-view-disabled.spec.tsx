import { describe, it, expect, render } from "@stencil/vitest";
import "../tab-view-disabled";

describe("tab-view-disabled", () => {
  it("renders", async () => {
    const { root } = await render("<tab-view-disabled></tab-view-disabled>");

    expect(root.tagName.toLowerCase()).toBe("tab-view-disabled");
  });
});
