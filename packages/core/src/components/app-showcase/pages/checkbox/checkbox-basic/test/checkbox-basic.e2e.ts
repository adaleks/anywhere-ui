import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("checkbox-basic", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<checkbox-basic></checkbox-basic>");

    await expect(page.locator("checkbox-basic")).toHaveClass(/hydrated/);
  });
});
