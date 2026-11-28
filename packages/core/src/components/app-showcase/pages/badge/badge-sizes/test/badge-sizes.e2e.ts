import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("badge-sizes", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<badge-sizes></badge-sizes>");

    await expect(page.locator("badge-sizes")).toHaveClass(/hydrated/);
  });
});
