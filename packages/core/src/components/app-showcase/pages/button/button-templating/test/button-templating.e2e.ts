import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("button-templating", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<button-templating></button-templating>");

    await expect(page.locator("button-templating")).toHaveClass(/hydrated/);
  });
});
