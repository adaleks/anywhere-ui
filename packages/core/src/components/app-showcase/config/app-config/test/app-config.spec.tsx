import { describe, it, expect, render } from "@stencil/vitest";
import "../app-config";

describe("app-config", () => {
  it("renders", async () => {
    const { root } = await render("<app-config></app-config>");

    expect(root.tagName.toLowerCase()).toBe("app-config");
  });
});
