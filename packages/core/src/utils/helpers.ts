/**
 * This method is used to add a hidden input to a host element that contains
 * a Shadow DOM. It does not add the input inside of the Shadow root which
 * allows it to be picked up inside of forms. It should contain the same
 * values as the host element.
 *
 * @param always Add a hidden input even if the container does not use Shadow
 * @param container The element where the input will be added
 * @param name The name of the input
 * @param value The value of the input
 * @param disabled If true, the input is disabled
 */
export const renderHiddenInput = (
  always: boolean,
  container: HTMLElement,
  name: string,
  value: string | undefined | null,
  disabled: boolean
) => {
  if (always || hasShadowDom(container)) {
    let input = container.querySelector(
      "input.aux-input"
    ) as HTMLInputElement | null;
    if (!input) {
      input = container.ownerDocument!.createElement("input");
      input.type = "hidden";
      input.classList.add("aux-input");
      container.appendChild(input);
    }
    input.disabled = disabled;
    input.name = name;
    input.value = value || "";
  }
};

export const hasShadowDom = (el: HTMLElement) => {
  return !!el.shadowRoot && !!(el as any).attachShadow;
};

export const addEventListener = (
  el: any,
  eventName: string,
  callback: any,
  opts?: any
) => {
  if (typeof (window as any) !== "undefined") {
    const win = window as any;
    const config = win && win.AnywhereUI && win.AnywhereUI.config;
    if (config) {
      const ael = config.get("_ael");
      if (ael) {
        return ael(el, eventName, callback, opts);
      } else if (config._ael) {
        return config._ael(el, eventName, callback, opts);
      }
    }
  }

  return el.addEventListener(eventName, callback, opts);
};

export const removeEventListener = (
  el: any,
  eventName: string,
  callback: any,
  opts?: any
) => {
  if (typeof (window as any) !== "undefined") {
    const win = window as any;
    const config = win && win.AnywhereUI && win.AnywhereUI.config;
    if (config) {
      const rel = config.get("_rel");
      if (rel) {
        return rel(el, eventName, callback, opts);
      } else if (config._rel) {
        return config._rel(el, eventName, callback, opts);
      }
    }
  }

  return el.removeEventListener(eventName, callback, opts);
};
