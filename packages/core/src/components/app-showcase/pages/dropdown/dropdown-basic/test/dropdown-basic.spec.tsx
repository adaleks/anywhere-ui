import { describe, it, expect, render } from "@stencil/vitest";
import "../dropdown-basic";

describe("dropdown-basic", () => {
  it("renders", async () => {
    const { root } = await render("<dropdown-basic></dropdown-basic>");

    expect(root.tagName.toLowerCase()).toBe("dropdown-basic");
  });
});
