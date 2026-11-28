import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("badge-positioned", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<badge-positioned></badge-positioned>");

    await expect(page.locator("badge-positioned")).toHaveClass(/hydrated/);
  });
});
