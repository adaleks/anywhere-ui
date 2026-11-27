import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("listbox-basic", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<listbox-basic></listbox-basic>");

    await expect(page.locator("listbox-basic")).toHaveClass(/hydrated/);
  });
});
