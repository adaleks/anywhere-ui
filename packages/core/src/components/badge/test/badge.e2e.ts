import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("any-badge", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<any-badge></any-badge>");

    await expect(page.locator("any-badge")).toHaveClass(/hydrated/);
  });
});
