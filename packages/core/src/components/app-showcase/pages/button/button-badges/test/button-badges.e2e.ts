import { expect } from "@playwright/test";
import { test } from "@stencil/playwright";

test.describe("button-badges", () => {
  test("renders", async ({ page }) => {
    await page.setContent("<button-badges></button-badges>");

    await expect(page.locator("button-badges")).toHaveClass(/hydrated/);
  });
});
