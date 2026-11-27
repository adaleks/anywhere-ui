import { describe, it, expect, render } from "@stencil/vitest";
import "../checkbox-label";

describe("checkbox-label", () => {
  it("renders", async () => {
    const { root } = await render("<checkbox-label></checkbox-label>");

    expect(root.tagName.toLowerCase()).toBe("checkbox-label");
  });
});
