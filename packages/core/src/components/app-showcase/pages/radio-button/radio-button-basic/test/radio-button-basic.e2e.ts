import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("radio-button-basic", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<radio-button-basic></radio-button-basic>");

    await expect(page.locator("radio-button-basic")).toHaveClass(/hydrated/);
  });
});
