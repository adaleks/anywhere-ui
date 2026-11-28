import { describe, it, expect, render } from "@stencil/vitest";
import "../button-styles";

describe("button-styles", () => {
  it("renders", async () => {
    const { root } = await render("<button-styles></button-styles>");

    expect(root.tagName.toLowerCase()).toBe("button-styles");
  });
});
