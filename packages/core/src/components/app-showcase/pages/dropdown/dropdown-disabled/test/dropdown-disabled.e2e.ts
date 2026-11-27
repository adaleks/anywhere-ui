import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("dropdown-disabled", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<dropdown-disabled></dropdown-disabled>");

    await expect(page.locator("dropdown-disabled")).toHaveClass(/hydrated/);
  });
});
