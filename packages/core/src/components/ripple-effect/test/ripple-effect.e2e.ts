import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("any-ripple-effect", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<any-ripple-effect></any-ripple-effect>");

    await expect(page.locator("any-ripple-effect")).toHaveClass(/hydrated/);
  });
});
