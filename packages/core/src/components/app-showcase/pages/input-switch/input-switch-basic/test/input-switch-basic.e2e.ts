import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("input-switch-basic", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<input-switch-basic></input-switch-basic>");

    await expect(page.locator("input-switch-basic")).toHaveClass(/hydrated/);
  });
});
