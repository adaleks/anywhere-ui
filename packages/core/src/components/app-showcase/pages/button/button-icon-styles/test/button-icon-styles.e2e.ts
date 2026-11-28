import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("button-icon-styles", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<button-icon-styles></button-icon-styles>");

    await expect(page.locator("button-icon-styles")).toHaveClass(/hydrated/);
  });
});
