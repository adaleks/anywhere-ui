import { newE2EPage } from "@stencil/core/testing";

describe("any-input-textarea", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<any-input-textarea></any-input-textarea>");

    const element = await page.find("any-input-textarea");
    expect(element).toHaveClass("hydrated");
  });
});
