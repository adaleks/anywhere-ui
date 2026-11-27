import { describe, it, expect, render } from "@stencil/vitest";
import "../checkbox-readonly";

describe("checkbox-readonly", () => {
  it("renders", async () => {
    const { root } = await render("<checkbox-readonly></checkbox-readonly>");

    expect(root.tagName.toLowerCase()).toBe("checkbox-readonly");
  });
});
