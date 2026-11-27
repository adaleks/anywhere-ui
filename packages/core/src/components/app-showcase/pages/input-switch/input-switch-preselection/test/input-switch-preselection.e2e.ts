import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("input-switch-preselection", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<input-switch-preselection></input-switch-preselection>");

    await expect(page.locator("input-switch-preselection")).toHaveClass(/hydrated/);
  });
});
