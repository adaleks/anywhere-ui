import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("dropdown-filter", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<dropdown-filter></dropdown-filter>");

    await expect(page.locator("dropdown-filter")).toHaveClass(/hydrated/);
  });
});
