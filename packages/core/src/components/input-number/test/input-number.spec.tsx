import { describe, it, expect, render } from "@stencil/vitest";
import "../input-number";

describe("any-input-number", () => {
  it("renders", async () => {
    const { root } = await render("<any-input-number></any-input-number>");

    expect(root.tagName.toLowerCase()).toBe("any-input-number");
  });
});
