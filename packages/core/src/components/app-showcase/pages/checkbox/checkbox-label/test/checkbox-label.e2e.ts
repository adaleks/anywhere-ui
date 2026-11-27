import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("checkbox-label", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<checkbox-label></checkbox-label>");

    await expect(page.locator("checkbox-label")).toHaveClass(/hydrated/);
  });
});
