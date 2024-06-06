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
    elementSelectors: [
      "any-dropdown",
      "any-multiselect",
      "any-listbox",
      "any-virtual-scroller",
      "any-radio-group",
    ],
    event: "valueChange",
    targetAttr: "value",
    type: "select",
  },
  {
    elementSelectors: [
      "any-input-text:not([type=number])",
      "any-input-textarea",
    ],
    event: "valueChange",
    targetAttr: "value",
    type: "text",
  },
  {
    elementSelectors: ["any-checkbox", "any-input-switch"],
    event: "valueChange",
    targetAttr: "checked",
    type: "boolean",
  },
  {
    elementSelectors: ["any-input-number"],
    event: "valueChange",
    targetAttr: "value",
    type: "number",
  },
  {
    elementSelectors: ["any-radio-button"],
    event: "aOnSelect",
    targetAttr: "checked",
    type: "radio",
  },
];

const vueComponentModels: ComponentModelConfig[] = [
  {
    elements: [
      "any-dropdown",
      "any-multiselect",
      "any-listbox",
      "any-input-text",
      "any-input-textarea",
      "any-radio-button",
      "any-radio-group",
      "any-input-number",
    ],
    event: "v-value-change",
    // externalEvent: "valueChange",
    targetAttr: "value",
  },
  {
    elements: ["any-checkbox", "any-input-switch"],
    event: "v-value-change",
    targetAttr: "checked",
    // externalEvent: "valueChange",
  },
  // {
  //   elements: ["any-radio-button"],
  //   event: "v-a-on-select",
  //   targetAttr: "checked",
  //   externalEvent: "aOnSelect",
  // },
];

export const config: Config = {
  autoprefixCss: true,
  namespace: "anywhere-ui",
  taskQueue: "async",
  globalStyle: "src/themes/anywhere.global.scss",
  globalScript: "src/global/anywhere-global.ts",
  buildEs5: "prod",
  sourceMap: false,
  extras: {
    initializeNextTick: true,
    scriptDataOpts: true,
  },
  bundles: [
    {
      components: [
        "any-dropdown",
        "any-multiselect",
        "any-listbox",
        "any-input-text",
        "any-input-textarea",
        "any-input-number",
      ],
    },
    { components: ["any-virtual-scroller"] },
    { components: ["any-checkbox"] },
    { components: ["any-input-switch"] },
    { components: ["any-tab-view", "any-tab-panel"] },
    { components: ["any-button"] },
    { components: ["any-badge", "any-badge-overlay"] },
    { components: ["any-ripple-effect"] },
    { components: ["any-radio-button", "any-radio-group"] },
    { components: ["any-overlay"] },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ["src/themes/anywhere.skip.warns.scss"],
    }),
  ],
  outputTargets: [
    // {
    //   type: "dist-hydrate-script",
    // },
    {
      type: "docs-json",
      file: "src/doc/docs.json",
    },
    {
      type: "dist-custom-elements",
      generateTypeDeclarations: false,
      customElementsExportBehavior: "bundle",
    },
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "docs-readme",
      footer: "*Built with love by **AdaleksTech!***",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
      empty: false,
      baseUrl: "http://localhost:3333",
      copy: [
        { src: "assets" },
        { src: "app" },
        { src: "docs/SHOWCASE_README.md", dest: "README.md" },
        { src: "docs/SHOWCASE_LICENSE", dest: "LICENSE" },
        {
          src: "../../../node_modules/@anywhere-ui/flex/anywhere-flex.css",
          dest: "assets/css/anywhere-flex.css",
        },
      ],
    },
    angularOutputTarget({
      componentCorePackage: "@anywhere-ui/core",
      directivesProxyFile:
        "../angular/projects/anywhere-ui/src/lib/directives/proxies.ts",
      valueAccessorConfigs: angularValueAccessorBindings,
      // excludeComponents: ["any-overlay"],
    }),

    vueOutputTarget({
      componentCorePackage: "@anywhere-ui/core",
      proxiesFile: "../vue/src/proxies.ts",
      componentModels: vueComponentModels,
      excludeComponents: ["any-overlay"],
    }),
    reactOutputTarget({
      componentCorePackage: "@anywhere-ui/core",
      proxiesFile: "../react/src/components.ts",
      includeDefineCustomElements: true,
      includePolyfills: true,
      excludeComponents: ["any-overlay"],
    }),
  ],
  devServer: {
    reloadStrategy: "pageReload",
    port: 3333,
  },
};
