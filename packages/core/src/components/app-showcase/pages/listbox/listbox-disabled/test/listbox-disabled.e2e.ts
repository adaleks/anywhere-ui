import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("listbox-disabled", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<listbox-disabled></listbox-disabled>");

    await expect(page.locator("listbox-disabled")).toHaveClass(/hydrated/);
  });
});
