import { describe, it, expect, render } from "@stencil/vitest";
import "../checkbox-group";

describe("checkbox-group", () => {
  it("renders", async () => {
    const { root } = await render("<checkbox-group></checkbox-group>");

    expect(root.tagName.toLowerCase()).toBe("checkbox-group");
  });
});
