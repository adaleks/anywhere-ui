import { newE2EPage } from "@stencil/core/testing";

describe("virtual-scroller", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<any-virtual-scroller></any-virtual-scroller>");

    const element = await page.find("any-virtual-scroller");
    expect(element).toHaveClass("hydrated");
  });
});
