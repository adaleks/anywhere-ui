import { newE2EPage } from "@stencil/core/testing";

describe("any-checkbox", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<any-checkbox></any-checkbox>");

    const element = await page.find("any-checkbox");
    expect(element).toHaveClass("hydrated");
  });
});
