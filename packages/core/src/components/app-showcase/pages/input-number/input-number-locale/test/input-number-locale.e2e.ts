import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("input-number-locale", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<input-number-locale></input-number-locale>");

    await expect(page.locator("input-number-locale")).toHaveClass(/hydrated/);
  });
});
