import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("app-docapisection", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<app-docapisection></app-docapisection>");

    await expect(page.locator("app-docapisection")).toHaveClass(/hydrated/);
  });
});
