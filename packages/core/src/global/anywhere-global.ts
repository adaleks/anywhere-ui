import { /*getMode, setMode,*/ setPlatformHelpers } from "@stencil/core";

import { AnywhereUIConfig /*, Mode, setupConfig*/ } from "../interfaces";
// import { isPlatform, setupPlatforms } from "../utils/platform";

import { config, saveConfig, configFromSession, configFromURL } from "./config";

// declare const Context: any;

export const initialize = (userConfig: AnywhereUIConfig = {}) => {
  if (typeof (window as any) === "undefined") {
    return;
  }

  //   const doc = window.document;
  const win = window;
  // Context.config = config;
  const AnywhereUI = ((win as any).AnywhereUI = (win as any).AnywhereUI || {});

  const platformHelpers: any = {};
  if (userConfig._ael) {
    platformHelpers.ael = userConfig._ael;
  }
  if (userConfig._rel) {
    platformHelpers.rel = userConfig._rel;
  }
  if (userConfig._ce) {
    platformHelpers.ce = userConfig._ce;
  }
  setPlatformHelpers(platformHelpers);

  const configObj = {
    ...configFromSession(win),
    persistConfig: false,
    ...AnywhereUI.config,
    ...configFromURL(win),
    ...userConfig,
  };

  config.reset(configObj);
  if (config.getBoolean("persistConfig")) {
    saveConfig(win, configObj);
  }

  config.set("translations", {
    emptyMessage: "No results found",
    emptyFilterMessage: "No results found",
    choose: "Choose",
  });

  AnywhereUI.config = config;
};

export default initialize;
