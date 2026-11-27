import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("any-input-number", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<any-input-number></any-input-number>");

    await expect(page.locator("any-input-number")).toHaveClass(/hydrated/);
  });
});
