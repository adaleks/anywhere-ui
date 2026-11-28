import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("vs-prepopulated", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<vs-prepopulated></vs-prepopulated>");

    await expect(page.locator("vs-prepopulated")).toHaveClass(/hydrated/);
  });
});
