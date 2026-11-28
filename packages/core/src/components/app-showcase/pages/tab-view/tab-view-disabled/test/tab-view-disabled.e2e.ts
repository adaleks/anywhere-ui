import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("tab-view-disabled", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<tab-view-disabled></tab-view-disabled>");

    await expect(page.locator("tab-view-disabled")).toHaveClass(/hydrated/);
  });
});
