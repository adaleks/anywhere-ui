import { describe, it, expect, render } from "@stencil/vitest";
import "../app-docapitable";

describe("app-docapitable", () => {
  it("renders", async () => {
    const { root } = await render("<app-docapitable></app-docapitable>");

    expect(root.tagName.toLowerCase()).toBe("app-docapitable");
  });
});
