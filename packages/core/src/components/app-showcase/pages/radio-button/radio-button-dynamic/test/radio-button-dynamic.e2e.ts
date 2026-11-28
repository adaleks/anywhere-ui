import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("radio-button-dynamic", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<radio-button-dynamic></radio-button-dynamic>");

    await expect(page.locator("radio-button-dynamic")).toHaveClass(/hydrated/);
  });
});
