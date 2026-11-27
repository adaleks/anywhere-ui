import { describe, it, expect, render } from "@stencil/vitest";
import "../dropdown-template";

describe("dropdown-template", () => {
  it("renders", async () => {
    const { root } = await render("<dropdown-template></dropdown-template>");

    expect(root.tagName.toLowerCase()).toBe("dropdown-template");
  });
});
