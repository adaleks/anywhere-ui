import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("checkbox-readonly", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<checkbox-readonly></checkbox-readonly>");

    await expect(page.locator("checkbox-readonly")).toHaveClass(/hydrated/);
  });
});
