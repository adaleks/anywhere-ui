import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("any-overlay", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<any-overlay></any-overlay>");

    await expect(page.locator("any-overlay")).toHaveClass(/hydrated/);
  });
});
