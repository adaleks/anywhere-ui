import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("any-input-textarea", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<any-input-textarea></any-input-textarea>");

    await expect(page.locator("any-input-textarea")).toHaveClass(/hydrated/);
  });
});
