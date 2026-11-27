import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("checkbox-disabled", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<checkbox-disabled></checkbox-disabled>");

    await expect(page.locator("checkbox-disabled")).toHaveClass(/hydrated/);
  });
});
