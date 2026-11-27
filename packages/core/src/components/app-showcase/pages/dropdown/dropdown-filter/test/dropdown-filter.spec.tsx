import { describe, it, expect, render } from "@stencil/vitest";
import "../dropdown-filter";

describe("dropdown-filter", () => {
  it("renders", async () => {
    const { root } = await render("<dropdown-filter></dropdown-filter>");

    expect(root.tagName.toLowerCase()).toBe("dropdown-filter");
  });
});
