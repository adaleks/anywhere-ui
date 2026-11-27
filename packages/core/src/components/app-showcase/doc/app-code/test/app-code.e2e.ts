import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("app-code", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<app-code></app-code>");

    await expect(page.locator("app-code")).toHaveClass(/hydrated/);
  });
});
