import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("ms-virtual", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<ms-virtual></ms-virtual>");

    await expect(page.locator("ms-virtual")).toHaveClass(/hydrated/);
  });
});
