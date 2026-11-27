import { describe, it, expect, render } from "@stencil/vitest";
import "../checkbox-basic";

describe("checkbox-basic", () => {
  it("renders", async () => {
    const { root } = await render("<checkbox-basic></checkbox-basic>");

    expect(root.tagName.toLowerCase()).toBe("checkbox-basic");
  });
});
