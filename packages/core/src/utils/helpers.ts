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
