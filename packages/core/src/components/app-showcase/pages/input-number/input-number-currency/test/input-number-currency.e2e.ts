import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("input-number-currency", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<input-number-currency></input-number-currency>");

    await expect(page.locator("input-number-currency")).toHaveClass(/hydrated/);
  });
});
