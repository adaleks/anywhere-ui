import { describe, it, expect, render } from "@stencil/vitest";
import "../input-number-prefix-and-suffix";

describe("input-number-prefix-and-suffix", () => {
  it("renders", async () => {
    const { root } = await render("<input-number-prefix-and-suffix></input-number-prefix-and-suffix>");

    expect(root.tagName.toLowerCase()).toBe("input-number-prefix-and-suffix");
  });
});
