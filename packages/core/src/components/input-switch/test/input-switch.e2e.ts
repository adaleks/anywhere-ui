import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("any-input-switch", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<any-input-switch></any-input-switch>");

    await expect(page.locator("any-input-switch")).toHaveClass(/hydrated/);
  });
});
