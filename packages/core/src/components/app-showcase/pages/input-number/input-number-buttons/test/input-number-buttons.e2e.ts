import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("input-number-buttons", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<input-number-buttons></input-number-buttons>");

    await expect(page.locator("input-number-buttons")).toHaveClass(/hydrated/);
  });
});
