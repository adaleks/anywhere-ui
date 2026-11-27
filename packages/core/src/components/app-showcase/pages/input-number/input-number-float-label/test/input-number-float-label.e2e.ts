import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("input-number-float-label", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<input-number-float-label></input-number-float-label>");

    await expect(page.locator("input-number-float-label")).toHaveClass(/hydrated/);
  });
});
