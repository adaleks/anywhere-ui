import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("listbox-filter", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<listbox-filter></listbox-filter>");

    await expect(page.locator("listbox-filter")).toHaveClass(/hydrated/);
  });
});
