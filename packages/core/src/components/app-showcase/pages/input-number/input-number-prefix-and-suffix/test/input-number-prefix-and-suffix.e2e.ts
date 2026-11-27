import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("input-number-prefix-and-suffix", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<input-number-prefix-and-suffix></input-number-prefix-and-suffix>");

    await expect(page.locator("input-number-prefix-and-suffix")).toHaveClass(/hydrated/);
  });
});
