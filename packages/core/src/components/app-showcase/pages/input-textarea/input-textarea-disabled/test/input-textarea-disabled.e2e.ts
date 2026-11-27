import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("input-textarea-disabled", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<input-textarea-disabled></input-textarea-disabled>");

    await expect(page.locator("input-textarea-disabled")).toHaveClass(/hydrated/);
  });
});
