import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("ms-template", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<ms-template></ms-template>");

    await expect(page.locator("ms-template")).toHaveClass(/hydrated/);
  });
});
