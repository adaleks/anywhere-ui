import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("any-multiselect", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<any-multiselect></any-multiselect>");

    await expect(page.locator("any-multiselect")).toHaveClass(/hydrated/);
  });
});
