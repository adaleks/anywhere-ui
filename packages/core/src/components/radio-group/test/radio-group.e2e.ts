import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("any-radio-group", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<any-radio-group></any-radio-group>");

    await expect(page.locator("any-radio-group")).toHaveClass(/hydrated/);
  });
});
