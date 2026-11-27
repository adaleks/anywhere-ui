import { describe, it, expect, render } from "@stencil/vitest";
import "../multiselect";

describe("any-multiselect", () => {
  it("renders", async () => {
    const { root } = await render("<any-multiselect></any-multiselect>");

    expect(root.tagName.toLowerCase()).toBe("any-multiselect");
    expect(root).toHaveShadowRoot();
  });
});
