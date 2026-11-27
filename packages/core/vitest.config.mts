import { defineVitestConfig } from "@stencil/vitest/config";
import { stencilVitestPlugin } from "@stencil/vitest/plugin";

/**
 * Spec tests run against the component sources (the plugin compiles them on the
 * fly), so no `dist` build has to exist before running them.
 *
 * jsdom is used instead of mock-doc because a few showcase components rely on
 * `getAssetPath()` (needs a base URL), `localStorage` and `URL`.
 */
export default defineVitestConfig({
  stencilConfig: "./stencil.config.ts",
  test: {
    projects: [
      {
        plugins: [stencilVitestPlugin()],
        test: {
          name: "spec",
          include: ["src/**/*.spec.{ts,tsx}"],
          environment: "stencil",
          environmentOptions: {
            stencil: {
              domEnvironment: "jsdom",
            },
          },
        },
      },
    ],
  },
});
