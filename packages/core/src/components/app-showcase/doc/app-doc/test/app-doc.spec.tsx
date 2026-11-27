import { describe, it, expect, render } from "@stencil/vitest";
import "../app-doc";

describe("app-doc", () => {
  it("renders", async () => {
    const { root } = await render("<app-doc></app-doc>");

    expect(root.tagName.toLowerCase()).toBe("app-doc");
  });
});
