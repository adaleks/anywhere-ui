import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("any-input-text", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<any-input-text></any-input-text>");

    await expect(page.locator("any-input-text")).toHaveClass(/hydrated/);
  });
});
