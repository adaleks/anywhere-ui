import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("input-number-vertical", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<input-number-vertical></input-number-vertical>");

    await expect(page.locator("input-number-vertical")).toHaveClass(/hydrated/);
  });
});
