import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("button-basic", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<button-basic></button-basic>");

    await expect(page.locator("button-basic")).toHaveClass(/hydrated/);
  });
});
