import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("checkbox-dynamic", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<checkbox-dynamic></checkbox-dynamic>");

    await expect(page.locator("checkbox-dynamic")).toHaveClass(/hydrated/);
  });
});
