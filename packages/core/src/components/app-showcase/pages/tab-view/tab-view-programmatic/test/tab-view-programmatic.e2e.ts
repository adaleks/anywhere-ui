import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("tab-view-programmatic", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<tab-view-programmatic></tab-view-programmatic>");

    await expect(page.locator("tab-view-programmatic")).toHaveClass(/hydrated/);
  });
});
