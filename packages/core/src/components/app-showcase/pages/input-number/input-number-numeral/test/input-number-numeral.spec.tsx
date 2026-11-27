import { describe, it, expect, render } from "@stencil/vitest";
import "../input-number-numeral";

describe("input-number-numeral", () => {
  it("renders", async () => {
    const { root } = await render("<input-number-numeral></input-number-numeral>");

    expect(root.tagName.toLowerCase()).toBe("input-number-numeral");
  });
});
