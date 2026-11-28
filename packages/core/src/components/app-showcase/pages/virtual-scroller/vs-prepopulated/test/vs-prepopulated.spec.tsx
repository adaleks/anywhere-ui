import { describe, it, expect, render } from "@stencil/vitest";
import "../vs-prepopulated";

describe("vs-prepopulated", () => {
  it("renders", async () => {
    const { root } = await render("<vs-prepopulated></vs-prepopulated>");

    expect(root.tagName.toLowerCase()).toBe("vs-prepopulated");
  });
});
