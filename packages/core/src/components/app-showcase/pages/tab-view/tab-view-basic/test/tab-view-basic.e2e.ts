import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("tab-view-basic", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<tab-view-basic></tab-view-basic>");

    await expect(page.locator("tab-view-basic")).toHaveClass(/hydrated/);
  });
});
