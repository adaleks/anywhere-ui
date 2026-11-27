import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("app-docsection-nav", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<app-docsection-nav></app-docsection-nav>");

    await expect(page.locator("app-docsection-nav")).toHaveClass(/hydrated/);
  });
});
