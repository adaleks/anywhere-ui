import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("app-doc", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<app-doc></app-doc>");

    await expect(page.locator("app-doc")).toHaveClass(/hydrated/);
  });
});
