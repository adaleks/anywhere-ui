import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("dropdown-basic", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<dropdown-basic></dropdown-basic>");

    await expect(page.locator("dropdown-basic")).toHaveClass(/hydrated/);
  });
});
