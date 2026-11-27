import { expect } from "@playwright/test";
import { matchers, createConfig } from "@stencil/playwright";

// stencil-specific assertions (toHaveClass, toHaveAttribute, ...)
expect.extend(matchers);

// The adapter derives "./www/build/<namespace>" from the www output target, but
// the Stencil dev server serves the www directory as its root, so the entry
// script is actually at "./build/<namespace>.esm.js".
process.env.STENCIL_ENTRY_PATH ??= "./build/anywhere-ui";

export default createConfig({
  testDir: "./src",
  testMatch: "**/*.e2e.ts",
  use: {
    // Stencil's default devServer.address is 0.0.0.0, which the browser cannot
    // load; the dev server is reachable on localhost for the test run.
    baseURL: "http://localhost:3333",
  },
  webServer: {
    // Stencil's dev server has no /ping endpoint; any 200 on the root is enough
    url: "http://localhost:3333/",
    timeout: 120_000,
  },
});
