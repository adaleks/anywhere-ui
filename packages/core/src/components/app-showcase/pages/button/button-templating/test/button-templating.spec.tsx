import { describe, it, expect, render } from "@stencil/vitest";
import "../button-templating";

describe("button-templating", () => {
  it("renders", async () => {
    const { root } = await render("<button-templating></button-templating>");

    expect(root.tagName.toLowerCase()).toBe("button-templating");
  });
});
