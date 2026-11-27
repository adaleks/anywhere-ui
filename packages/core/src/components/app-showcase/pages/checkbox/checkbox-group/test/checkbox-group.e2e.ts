import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("checkbox-group", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<checkbox-group></checkbox-group>");

    await expect(page.locator("checkbox-group")).toHaveClass(/hydrated/);
  });
});
