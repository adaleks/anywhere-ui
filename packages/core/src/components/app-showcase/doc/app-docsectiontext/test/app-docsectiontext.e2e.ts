import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("app-docsectiontext", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<app-docsectiontext></app-docsectiontext>");

    await expect(page.locator("app-docsectiontext")).toHaveClass(/hydrated/);
  });
});
