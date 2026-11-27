import { describe, it, expect, render } from "@stencil/vitest";
import "../input-number-currency";

describe("input-number-currency", () => {
  it("renders", async () => {
    const { root } = await render("<input-number-currency></input-number-currency>");

    expect(root.tagName.toLowerCase()).toBe("input-number-currency");
  });
});
