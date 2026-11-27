import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("any-virtual-scroller", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<any-virtual-scroller></any-virtual-scroller>");

    await expect(page.locator("any-virtual-scroller")).toHaveClass(/hydrated/);
  });
});
