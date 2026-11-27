import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("input-text-icons", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<input-text-icons></input-text-icons>");

    await expect(page.locator("input-text-icons")).toHaveClass(/hydrated/);
  });
});
