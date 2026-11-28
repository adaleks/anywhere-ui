import { describe, it, expect, render } from "@stencil/vitest";
import "../ms-template";

describe("ms-template", () => {
  it("renders", async () => {
    const { root } = await render("<ms-template></ms-template>");

    expect(root.tagName.toLowerCase()).toBe("ms-template");
  });
});
