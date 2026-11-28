import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("badge-numbers", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<badge-numbers></badge-numbers>");

    await expect(page.locator("badge-numbers")).toHaveClass(/hydrated/);
  });
});
