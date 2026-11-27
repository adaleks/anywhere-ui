import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("input-textarea-basic", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<input-textarea-basic></input-textarea-basic>");

    await expect(page.locator("input-textarea-basic")).toHaveClass(/hydrated/);
  });
});
