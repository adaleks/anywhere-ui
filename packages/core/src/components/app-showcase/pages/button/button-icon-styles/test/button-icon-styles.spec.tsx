import { describe, it, expect, render } from "@stencil/vitest";
import "../button-icon-styles";

describe("button-icon-styles", () => {
  it("renders", async () => {
    const { root } = await render("<button-icon-styles></button-icon-styles>");

    expect(root.tagName.toLowerCase()).toBe("button-icon-styles");
  });
});
