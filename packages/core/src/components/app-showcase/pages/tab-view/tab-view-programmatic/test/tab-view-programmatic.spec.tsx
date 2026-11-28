import { describe, it, expect, render } from "@stencil/vitest";
import "../tab-view-programmatic";

describe("tab-view-programmatic", () => {
  it("renders", async () => {
    const { root } = await render("<tab-view-programmatic></tab-view-programmatic>");

    expect(root.tagName.toLowerCase()).toBe("tab-view-programmatic");
  });
});
