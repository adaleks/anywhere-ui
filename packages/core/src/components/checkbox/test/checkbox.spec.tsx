import { describe, it, expect, render } from "@stencil/vitest";
import { vi } from "vitest";
import "../checkbox";

const getBox = (root: HTMLElement) =>
  root.shadowRoot.querySelector(".any-checkbox-box") as HTMLElement;

const getInput = (root: HTMLElement) =>
  root.shadowRoot.querySelector('input[type="checkbox"]') as HTMLInputElement;

describe("any-checkbox", () => {
  it("renders a native checkbox input", async () => {
    const { root } = await render("<any-checkbox></any-checkbox>");

    expect(getInput(root)).toBeTruthy();
  });

  it("toggles the checked state when the box is clicked", async () => {
    const { root, waitForChanges } = await render("<any-checkbox></any-checkbox>");

    expect((root as any).checked).toBe(false);

    getBox(root).click();
    await waitForChanges();
    expect((root as any).checked).toBe(true);

    getBox(root).click();
    await waitForChanges();
    expect((root as any).checked).toBe(false);
  });

  it("emits valueChange with the checked state and value", async () => {
    const { root, setProps, waitForChanges } = await render(
      "<any-checkbox></any-checkbox>"
    );
    await setProps({ value: "on" });

    const eventSpy = vi.fn();
    root.addEventListener("valueChange", eventSpy);

    getBox(root).click();
    await waitForChanges();

    expect(eventSpy).toHaveBeenCalledTimes(1);
    expect(eventSpy.mock.calls[0][0].detail).toEqual({
      checked: true,
      value: "on",
    });
  });

  it("focuses the checkbox input when inputFocus is called", async () => {
    const { root } = await render("<any-checkbox></any-checkbox>");

    const input = getInput(root);
    const focusSpy = vi.spyOn(input, "focus");

    await (root as any).inputFocus();

    expect(focusSpy).toHaveBeenCalled();
  });

  it("renders the label when the label prop is provided", async () => {
    const { root, setProps } = await render("<any-checkbox></any-checkbox>");
    await setProps({ label: "Test Label" });

    expect(
      root.shadowRoot.querySelector(".any-checkbox-label").textContent
    ).toBe("Test Label");
  });

  it("applies styleClass and labelStyleClass", async () => {
    const { root, setProps } = await render("<any-checkbox></any-checkbox>");
    await setProps({
      label: "Label",
      styleClass: "custom-style",
      labelStyleClass: "label-custom-style",
    });

    expect(
      root.shadowRoot
        .querySelector(".any-checkbox")
        .classList.contains("custom-style")
    ).toBe(true);
    expect(
      root.shadowRoot
        .querySelector(".any-checkbox-label")
        .classList.contains("label-custom-style")
    ).toBe(true);
  });

  it("disables the native input when disabled", async () => {
    const { root, setProps } = await render("<any-checkbox></any-checkbox>");
    await setProps({ disabled: true });

    expect(getInput(root).disabled).toBe(true);
  });

  it("renders the icon container element", async () => {
    const { root, setProps } = await render("<any-checkbox></any-checkbox>");
    await setProps({ checkboxIcon: "fa-solid:check" });

    expect(root.shadowRoot.querySelector(".any-checkbox-icon")).toBeTruthy();
  });

  it("mirrors the checked state into value when binary", async () => {
    const { root, setProps, waitForChanges } = await render(
      "<any-checkbox></any-checkbox>"
    );
    await setProps({ binary: true });

    // clicking the native checkbox toggles `checked` and fires `change`
    getInput(root).click();
    await waitForChanges();

    expect((root as any).checked).toBe(true);
    expect((root as any).value).toBe(true);
  });
});