import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("input-number-disabled", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<input-number-disabled></input-number-disabled>");

    await expect(page.locator("input-number-disabled")).toHaveClass(/hydrated/);
  });
});
