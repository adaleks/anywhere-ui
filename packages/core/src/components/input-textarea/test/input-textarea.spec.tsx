import { describe, it, expect, render } from "@stencil/vitest";
import "../input-textarea";

describe("any-input-textarea", () => {
  it("renders", async () => {
    const { root } = await render("<any-input-textarea></any-input-textarea>");

    expect(root.tagName.toLowerCase()).toBe("any-input-textarea");
  });
});
