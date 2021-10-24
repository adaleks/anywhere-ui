import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
import {
  angularOutputTarget,
  ValueAccessorConfig,
} from "@stencil/angular-output-target";
import {
  vueOutputTarget,
  ComponentModelConfig,
} from "@stencil/vue-output-target";
import { reactOutputTarget } from "@stencil/react-output-target";

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ["any-dropdown", "any-listbox", "any-virtual-scroller"],
    event: "valueChange",
    targetAttr: "value",
    type: "select",
  },
  {
    elementSelectors: ["any-input-text[type=text]"],
    event: "valueChange",
    targetAttr: "value",
    type: "text",
  },
  {
    elementSelectors: ["any-checkbox"],
    event: "valueChange",
    targetAttr: "checked",
    type: "boolean",
  },
];

const vueComponentModels: ComponentModelConfig[] = [
  {
    elements: [
      "any-dropdown",
      "any-listbox",
      "any-virtual-scroller",
      "any-input-text",
    ],
    event: "v-valueChange",
    externalEvent: "valueChange",
    targetAttr: "value",
  },
  {
    elements: ["any-checkbox"],
    event: "v-valueChange",
    targetAttr: "checked",
    externalEvent: "valueChange",
  },
];

export const config: Config = {
  namespace: "anywhere-ui",
  taskQueue: "async",
  globalStyle: "src/themes/anywhere.theme.default.scss",
  globalScript: "src/globals/scripts/index.ts",
  buildEs5: "prod",
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    initializeNextTick: true,
    safari10: true,
    scriptDataOpts: true,
    shadowDomShim: true,
  },
  bundles: [
    { components: ["any-dropdown", "any-listbox", "any-input-text"] },
    { components: ["any-virtual-scroller"] },
    { components: ["any-checkbox"] },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ["src/themes/anywhere.skip.warns.scss"],
    }),
  ],
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
      empty: false,
      copy: [
        { src: "assets" },
        { src: "app" },
        { src: "docs/SHOWCASE_README.md", dest: "README.md" },
        { src: "docs/SHOWCASE_LICENSE", dest: "LICENSE" },
      ],
    },
    angularOutputTarget({
      componentCorePackage: "@anywhere-ui/core",
      directivesProxyFile:
        "../angular/projects/anywhere-ui/src/lib/directives/proxies.ts",
      valueAccessorConfigs: angularValueAccessorBindings,
    }),

    vueOutputTarget({
      componentCorePackage: "@anywhere-ui/core",
      proxiesFile: "../vue/src/proxies.ts",
      componentModels: vueComponentModels,
    }),
    reactOutputTarget({
      componentCorePackage: "@anywhere-ui/core",
      proxiesFile: "../react/src/components.ts",
      includeDefineCustomElements: true,
      includePolyfills: true,
    }),
  ],
  devServer: {
    reloadStrategy: "pageReload",
    port: 3333,
  },
};
