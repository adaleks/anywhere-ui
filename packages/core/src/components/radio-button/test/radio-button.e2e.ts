import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("any-radio-button", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<any-radio-button></any-radio-button>");

    await expect(page.locator("any-radio-button")).toHaveClass(/hydrated/);
  });
});
