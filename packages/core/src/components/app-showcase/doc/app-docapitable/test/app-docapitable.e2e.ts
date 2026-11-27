import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("app-docapitable", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<app-docapitable></app-docapitable>");

    await expect(page.locator("app-docapitable")).toHaveClass(/hydrated/);
  });
});
