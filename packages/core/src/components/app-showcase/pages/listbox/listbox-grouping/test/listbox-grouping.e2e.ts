import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("listbox-grouping", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<listbox-grouping></listbox-grouping>");

    await expect(page.locator("listbox-grouping")).toHaveClass(/hydrated/);
  });
});
