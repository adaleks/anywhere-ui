import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("any-button", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<any-button></any-button>");

    await expect(page.locator("any-button")).toHaveClass(/hydrated/);
  });
});
