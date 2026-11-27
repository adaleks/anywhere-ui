import { describe, it, expect, render } from "@stencil/vitest";
import "../input-number-locale";

describe("input-number-locale", () => {
  it("renders", async () => {
    const { root } = await render("<input-number-locale></input-number-locale>");

    expect(root.tagName.toLowerCase()).toBe("input-number-locale");
  });
});
