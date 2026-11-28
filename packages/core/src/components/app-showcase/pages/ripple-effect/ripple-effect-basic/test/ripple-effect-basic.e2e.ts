import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("ripple-effect-basic", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<ripple-effect-basic></ripple-effect-basic>");

    await expect(page.locator("ripple-effect-basic")).toHaveClass(/hydrated/);
  });
});
