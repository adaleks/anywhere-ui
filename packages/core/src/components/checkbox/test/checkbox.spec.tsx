import { newSpecPage } from "@stencil/core/testing";
import { AnyCheckbox } from "../checkbox";

// Icon loading hits the Iconify network API; the checkbox behaviour under test
// does not depend on the actual icon data.
jest.mock("../../../utils/load-icons", () => ({
  loadIcons: jest.fn(() => Promise.resolve()),
}));

const getBox = (page) =>
  page.root.shadowRoot.querySelector(".any-checkbox-box") as HTMLDivElement;

const getInput = (page) =>
  page.root.shadowRoot.querySelector(
    'input[type="checkbox"]'
  ) as HTMLInputElement;

describe("AnyCheckbox", () => {
  it("renders a native checkbox input", async () => {
    const page = await newSpecPage({
      components: [AnyCheckbox],
      html: `<any-checkbox></any-checkbox>`,
    });

    expect(getInput(page)).toBeTruthy();
  });

  it("toggles the checked state when the box is clicked", async () => {
    const page = await newSpecPage({
      components: [AnyCheckbox],
      html: `<any-checkbox></any-checkbox>`,
    });

    expect(page.rootInstance.checked).toBe(false);

    getBox(page).click();
    await page.waitForChanges();
    expect(page.rootInstance.checked).toBe(true);

    getBox(page).click();
    await page.waitForChanges();
    expect(page.rootInstance.checked).toBe(false);
  });

  it("emits valueChange with the checked state and value", async () => {
    const page = await newSpecPage({
      components: [AnyCheckbox],
      html: `<any-checkbox value="on"></any-checkbox>`,
    });

    const eventSpy = jest.fn();
    page.root.addEventListener("valueChange", eventSpy);

    getBox(page).click();
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledTimes(1);
    expect(eventSpy.mock.calls[0][0].detail).toEqual({
      checked: true,
      value: "on",
    });
  });

  it("focuses the checkbox input when inputFocus is called", async () => {
    const page = await newSpecPage({
      components: [AnyCheckbox],
      html: `<any-checkbox></any-checkbox>`,
    });

    const input = getInput(page);
    const focusSpy = jest.spyOn(input, "focus");

    await page.rootInstance.inputFocus();

    expect(focusSpy).toHaveBeenCalled();
  });

  it("renders the label when the label prop is provided", async () => {
    const page = await newSpecPage({
      components: [AnyCheckbox],
      html: `<any-checkbox label="Test Label"></any-checkbox>`,
    });

    expect(
      page.root.shadowRoot.querySelector(".any-checkbox-label").textContent
    ).toBe("Test Label");
  });

  it("applies styleClass and labelStyleClass", async () => {
    const page = await newSpecPage({
      components: [AnyCheckbox],
      html: `<any-checkbox label="Label" style-class="custom-style" label-style-class="label-custom-style"></any-checkbox>`,
    });

    expect(
      page.root.shadowRoot
        .querySelector(".any-checkbox")
        .classList.contains("custom-style")
    ).toBe(true);
    expect(
      page.root.shadowRoot
        .querySelector(".any-checkbox-label")
        .classList.contains("label-custom-style")
    ).toBe(true);
  });

  it("disables the native input when disabled", async () => {
    const page = await newSpecPage({
      components: [AnyCheckbox],
      html: `<any-checkbox disabled></any-checkbox>`,
    });

    expect(getInput(page).disabled).toBe(true);
  });

  it("renders the icon container element", async () => {
    const page = await newSpecPage({
      components: [AnyCheckbox],
      html: `<any-checkbox checkbox-icon="fa-solid:check"></any-checkbox>`,
    });

    expect(
      page.root.shadowRoot.querySelector(".any-checkbox-icon")
    ).toBeTruthy();
  });

  it("mirrors the checked state into value when binary", async () => {
    const page = await newSpecPage({
      components: [AnyCheckbox],
      html: `<any-checkbox binary></any-checkbox>`,
    });

    const input = getInput(page);
    input.checked = true;
    input.dispatchEvent(new Event("change"));
    await page.waitForChanges();

    expect(page.rootInstance.checked).toBe(true);
    expect(page.rootInstance.value).toBe(true);
  });
});
