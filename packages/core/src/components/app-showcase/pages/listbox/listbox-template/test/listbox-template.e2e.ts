import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("listbox-template", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<listbox-template></listbox-template>");

    await expect(page.locator("listbox-template")).toHaveClass(/hydrated/);
  });
});
