import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("dropdown-template", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<dropdown-template></dropdown-template>");

    await expect(page.locator("dropdown-template")).toHaveClass(/hydrated/);
  });
});
