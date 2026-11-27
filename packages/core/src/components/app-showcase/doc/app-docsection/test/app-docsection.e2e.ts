import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("app-docsection", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<app-docsection></app-docsection>");

    await expect(page.locator("app-docsection")).toHaveClass(/hydrated/);
  });
});
