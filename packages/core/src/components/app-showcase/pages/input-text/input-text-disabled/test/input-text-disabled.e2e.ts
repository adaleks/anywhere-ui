import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("input-text-disabled", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<input-text-disabled></input-text-disabled>");

    await expect(page.locator("input-text-disabled")).toHaveClass(/hydrated/);
  });
});
