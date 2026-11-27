import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("listbox-virtual-scroll", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<listbox-virtual-scroll></listbox-virtual-scroll>");

    await expect(page.locator("listbox-virtual-scroll")).toHaveClass(/hydrated/);
  });
});
