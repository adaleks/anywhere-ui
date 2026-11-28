import { describe, it, expect, render } from "@stencil/vitest";
import "../button-severities";

describe("button-severities", () => {
  it("renders", async () => {
    const { root } = await render("<button-severities></button-severities>");

    expect(root.tagName.toLowerCase()).toBe("button-severities");
  });
});
