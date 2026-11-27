import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("input-text-basic", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<input-text-basic></input-text-basic>");

    await expect(page.locator("input-text-basic")).toHaveClass(/hydrated/);
  });
});
