import { describe, it, expect, render } from "@stencil/vitest";
import "../vs-lazy";

describe("vs-lazy", () => {
  it("renders", async () => {
    const { root } = await render("<vs-lazy></vs-lazy>");

    expect(root.tagName.toLowerCase()).toBe("vs-lazy");
  });
});
