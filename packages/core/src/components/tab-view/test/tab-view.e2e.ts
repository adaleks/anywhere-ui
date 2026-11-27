import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("any-tab-view", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<any-tab-view></any-tab-view>");

    await expect(page.locator("any-tab-view")).toHaveClass(/hydrated/);
  });
});
