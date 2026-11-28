import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("button-styles", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<button-styles></button-styles>");

    await expect(page.locator("button-styles")).toHaveClass(/hydrated/);
  });
});
