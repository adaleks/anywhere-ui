import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("ms-basic", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<ms-basic></ms-basic>");

    await expect(page.locator("ms-basic")).toHaveClass(/hydrated/);
  });
});
