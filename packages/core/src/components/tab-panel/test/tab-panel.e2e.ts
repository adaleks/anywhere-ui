import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("any-tab-panel", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<any-tab-panel></any-tab-panel>");

    await expect(page.locator("any-tab-panel")).toHaveClass(/hydrated/);
  });
});
