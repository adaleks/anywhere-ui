import { describe, it, expect, render } from "@stencil/vitest";
import "../button-badges";

describe("button-badges", () => {
  it("renders", async () => {
    const { root } = await render("<button-badges></button-badges>");

    expect(root.tagName.toLowerCase()).toBe("button-badges");
  });
});
