import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("input-textarea-auto-resize", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<input-textarea-auto-resize></input-textarea-auto-resize>");

    await expect(page.locator("input-textarea-auto-resize")).toHaveClass(/hydrated/);
  });
});
