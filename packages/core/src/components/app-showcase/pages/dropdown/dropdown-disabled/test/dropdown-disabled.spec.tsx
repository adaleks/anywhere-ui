import { describe, it, expect, render } from "@stencil/vitest";
import "../dropdown-disabled";

describe("dropdown-disabled", () => {
  it("renders", async () => {
    const { root } = await render("<dropdown-disabled></dropdown-disabled>");

    expect(root.tagName.toLowerCase()).toBe("dropdown-disabled");
  });
});
