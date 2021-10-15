import { newE2EPage } from "@stencil/core/testing";

describe("input-text", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<any-input-text></any-input-text>");

    const element = await page.find("any-input-text");
    expect(element).toHaveClass("hydrated");
  });
});
