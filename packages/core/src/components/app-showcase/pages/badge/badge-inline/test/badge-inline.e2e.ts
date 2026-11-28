import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("badge-inline", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<badge-inline></badge-inline>");

    await expect(page.locator("badge-inline")).toHaveClass(/hydrated/);
  });
});
