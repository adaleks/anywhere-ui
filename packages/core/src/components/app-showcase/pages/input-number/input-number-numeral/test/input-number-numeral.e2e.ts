import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("input-number-numeral", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<input-number-numeral></input-number-numeral>");

    await expect(page.locator("input-number-numeral")).toHaveClass(/hydrated/);
  });
});
