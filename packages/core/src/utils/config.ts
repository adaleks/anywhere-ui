import { /*getMode, setMode,*/ setPlatformHelpers } from "@stencil/core";

export interface AnywhereUIConfig {
  /**
   * When it's set to `false`, it disables all material-design ripple-effects across the app.
   * Defaults to `true`.
   */
  rippleEffect?: boolean;

  /**
   * The mode determines which platform styles to use for the whole application.
   */
  mode?: string;

  persistConfig?: boolean;
  _zoneGate?: (h: () => any) => any;
  _ael?: (el: any, name: string, cb: any, opts: any) => any;
  _rel?: (el: any, name: string, cb: any, opts: any) => any;
  _ce?: (eventName: string, opts: any) => any;
}

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
