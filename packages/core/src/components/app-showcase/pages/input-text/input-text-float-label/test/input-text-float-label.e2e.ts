import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("input-text-float-label", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<input-text-float-label></input-text-float-label>");

    await expect(page.locator("input-text-float-label")).toHaveClass(/hydrated/);
  });
});
