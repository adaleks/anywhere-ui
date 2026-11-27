import { describe, it, expect, render } from "@stencil/vitest";
import "../checkbox-dynamic";

describe("checkbox-dynamic", () => {
  it("renders", async () => {
    const { root } = await render("<checkbox-dynamic></checkbox-dynamic>");

    expect(root.tagName.toLowerCase()).toBe("checkbox-dynamic");
  });
});
