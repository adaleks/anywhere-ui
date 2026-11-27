import { describe, it, expect, render } from "@stencil/vitest";
import "../checkbox-disabled";

describe("checkbox-disabled", () => {
  it("renders", async () => {
    const { root } = await render("<checkbox-disabled></checkbox-disabled>");

    expect(root.tagName.toLowerCase()).toBe("checkbox-disabled");
  });
});
