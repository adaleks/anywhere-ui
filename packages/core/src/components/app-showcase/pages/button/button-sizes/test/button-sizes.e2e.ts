import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("button-sizes", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<button-sizes></button-sizes>");

    await expect(page.locator("button-sizes")).toHaveClass(/hydrated/);
  });
});
