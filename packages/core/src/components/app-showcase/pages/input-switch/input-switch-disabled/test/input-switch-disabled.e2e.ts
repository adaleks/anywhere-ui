import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("input-switch-disabled", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<input-switch-disabled></input-switch-disabled>");

    await expect(page.locator("input-switch-disabled")).toHaveClass(/hydrated/);
  });
});
