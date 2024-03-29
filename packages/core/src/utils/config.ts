import { /*getMode, setMode,*/ setPlatformHelpers } from "@stencil/core";
import { Translation } from "./translation";

export interface AnywhereUIConfig {
  /**
   * When it's set to `false`, it disables all material-design ripple-effects across the app.
   * Defaults to `true`.
   */
  rippleEffect?: boolean;

  /**
   * Unstyled mode is enabled for the whole suite by setting unstyled as true.
   * Theming is implemented with the pass through properties in unstyled mode.
   */
  unstyled?: boolean;

  /**
   * The mode determines which platform styles to use for the whole application.
   */
  mode?: string;

  translations?: Translation;

  persistConfig?: boolean;
  _zoneGate?: (h: () => any) => any;
  _ael?: (el: any, name: string, cb: any, opts: any) => any;
  _rel?: (el: any, name: string, cb: any, opts: any) => any;
  _ce?: (eventName: string, opts: any) => any;
}

// const translation: Translation = {
//   emptyMessage: "No results found",
//   emptyFilterMessage: "No results found",
// };

export const setupConfig = (config: AnywhereUIConfig) => {
  const win = window as any;
  const AnywhereUI = win.AnywhereUI;
  if (
    AnywhereUI &&
    AnywhereUI.config &&
    AnywhereUI.config.constructor.name !== "Object"
  ) {
    return;
  }

  const platformHelpers: any = {};
  if (config._ael) {
    platformHelpers.ael = config._ael;
  }
  if (config._rel) {
    platformHelpers.rel = config._rel;
  }
  if (config._ce) {
    platformHelpers.ce = config._ce;
  }
  setPlatformHelpers(platformHelpers);

  win.AnywhereUI = win.AnywhereUI || {};
  win.AnywhereUI.config = {
    ...win.AnywhereUI.config,
    ...config,
  };
  return win.AnywhereUI.config;
};
