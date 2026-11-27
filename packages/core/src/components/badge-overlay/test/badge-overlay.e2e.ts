import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("any-badge-overlay", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<any-badge-overlay></any-badge-overlay>");

    await expect(page.locator("any-badge-overlay")).toHaveClass(/hydrated/);
  });
});
