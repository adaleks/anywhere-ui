import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("app-config", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<app-config></app-config>");

    await expect(page.locator("app-config")).toHaveClass(/hydrated/);
  });
});
