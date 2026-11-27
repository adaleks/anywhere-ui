import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("any-dropdown", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<any-dropdown></any-dropdown>");

    await expect(page.locator("any-dropdown")).toHaveClass(/hydrated/);
  });
});
