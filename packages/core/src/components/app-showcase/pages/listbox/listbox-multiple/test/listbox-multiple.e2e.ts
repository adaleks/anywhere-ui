import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("listbox-multiple", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<listbox-multiple></listbox-multiple>");

    await expect(page.locator("listbox-multiple")).toHaveClass(/hydrated/);
  });
});
