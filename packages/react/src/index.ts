import {
  AnywhereUIConfig /*, initialize*/,
  // initialize,
  setupConfig,
} from "@anywhere-ui/core";

export * from "./components";

export const setupAnywhereUIReact = (config: AnywhereUIConfig = {}) => {
  /**
   * By default Ionic Framework hides elements that
   * are not hydrated, but in the CE build there is no
   * hydration.
   * TODO: Remove when all integrations have been
   * migrated to CE build.
   */
  if (typeof (document as any) !== "undefined") {
    document.documentElement.classList.add("any-ce");
  }
  // initialize({
  //   ...config,
  // });
  setupConfig({
    ...config,
  });
};
