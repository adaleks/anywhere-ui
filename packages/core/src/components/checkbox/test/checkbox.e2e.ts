import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("any-checkbox", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<any-checkbox></any-checkbox>");

    await expect(page.locator("any-checkbox")).toHaveClass(/hydrated/);
  });
});
