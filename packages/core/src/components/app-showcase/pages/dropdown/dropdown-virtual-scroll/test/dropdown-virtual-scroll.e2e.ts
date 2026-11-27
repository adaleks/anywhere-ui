import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("dropdown-virtual-scroll", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<dropdown-virtual-scroll></dropdown-virtual-scroll>");

    await expect(page.locator("dropdown-virtual-scroll")).toHaveClass(/hydrated/);
  });
});
