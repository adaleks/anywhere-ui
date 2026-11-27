import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("input-textarea-float-label", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<input-textarea-float-label></input-textarea-float-label>");

    await expect(page.locator("input-textarea-float-label")).toHaveClass(/hydrated/);
  });
});
