import { App, Plugin } from "vue";
import { AnywhereUIConfig } from "@anywhere-ui/core";
// import { initialize } from "@anywhere-ui/core";
import { setupConfig } from "@anywhere-ui/core";
import { applyPolyfills, defineCustomElements } from "@anywhere-ui/core/loader";

/**
 * We need to make sure that the web component fires an event
 * that will not conflict with the user's @valueChange binding,
 * otherwise the binding's callback will fire before any
 * v-model values have been updated.
 */
const toKebabCase = (eventName: string) =>
  eventName === "valueChange"
    ? "v-value-change"
    : eventName.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();

const getHelperFunctions = () => {
  return {
    ael: (el: any, eventName: string, cb: any, opts: any) =>
      el.addEventListener(toKebabCase(eventName), cb, opts),
    rel: (el: any, eventName: string, cb: any, opts: any) =>
      el.removeEventListener(toKebabCase(eventName), cb, opts),
    ce: (eventName: string, opts: any) =>
      new CustomEvent(toKebabCase(eventName), opts),
  };
};

export const AnywhereUIVue: Plugin = {
  async install(_: App, config: AnywhereUIConfig = {}) {
    const win = window;
    /**
     * By default Ionic Framework hides elements that
     * are not hydrated, but in the CE build there is no
     * hydration.
     * TODO: Remove when all integrations have been
     * migrated to CE build.
     */
    const { ael, rel, ce } = getHelperFunctions();
    if (win && typeof (document as any) !== "undefined") {
      document.documentElement.classList.add("any-ce");
      applyPolyfills().then(() => {
        return defineCustomElements(win, {
          syncQueue: true,
          ael: ael,
          rel: rel,
          // _ce: ce,
        });
      });
    }

    setupConfig({
      ...config,
      ...{ _ael: ael, _rel: rel, _ce: ce },
    });

    // initialize({
    //   ...config,
    //   _ael: ael,
    //   _rel: rel,
    //   _ce: ce,
    // });
  },
};
