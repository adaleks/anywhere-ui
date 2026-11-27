import { describe, it, expect, render } from "@stencil/vitest";
import "../app-code";

describe("app-code", () => {
  it("renders", async () => {
    const { root } = await render("<app-code></app-code>");

    expect(root.tagName.toLowerCase()).toBe("app-code");
  });
});
