import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("button-severities", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<button-severities></button-severities>");

    await expect(page.locator("button-severities")).toHaveClass(/hydrated/);
  });
});
