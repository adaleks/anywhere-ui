import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("vs-lazy", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<vs-lazy></vs-lazy>");

    await expect(page.locator("vs-lazy")).toHaveClass(/hydrated/);
  });
});
