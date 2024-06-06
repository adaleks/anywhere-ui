import { newSpecPage } from "@stencil/core/testing";
import { AnyCheckbox } from "../checkbox";

describe("AnyCheckbox", () => {
  it("renders checkbox element", async () => {
    const page = await newSpecPage({
      components: [AnyCheckbox],
      html: `<any-checkbox></any-checkbox>`,
    });

    expect(
      page.root.shadowRoot.querySelector('input[type="checkbox"]')
    ).toBeTruthy();
  });

  it("handles click event and toggles checked state", async () => {
    const page = await newSpecPage({
      components: [AnyCheckbox],
      html: `<any-checkbox></any-checkbox>`,
    });

    const checkbox = page.root.shadowRoot.querySelector(
      ".any-checkbox"
    ) as HTMLDivElement;

    expect(page.rootInstance.checked).toBe(false);

    checkbox.click();

    await page.waitForChanges();

    expect(page.rootInstance.checked).toBe(true);

    checkbox.click();

    await page.waitForChanges();

    expect(page.rootInstance.checked).toBe(false);
  });

  it("emits valueChange event when checked state changes", async () => {
    const page = await newSpecPage({
      components: [AnyCheckbox],
      html: `<any-checkbox></any-checkbox>`,
    });

    const checkbox = page.root.shadowRoot.querySelector(
      ".any-checkbox"
    ) as HTMLDivElement;

    const eventSpy = jest.fn();
    page.root.addEventListener("valueChange", eventSpy);

    checkbox.click();

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledWith({
      checked: true,
      value: "on", // Adjust based on your use case
    });
  });

  it("focuses on the checkbox element when inputFocus method is called", async () => {
    const page = await newSpecPage({
      components: [AnyCheckbox],
      html: `<any-checkbox></any-checkbox>`,
    });

    const inputFocusSpy = jest.spyOn(page.rootInstance, "inputFocus");
    const checkbox = page.root.shadowRoot.querySelector(
      ".any-checkbox"
    ) as HTMLDivElement;

    checkbox.click();

    await page.waitForChanges();

    expect(inputFocusSpy).toHaveBeenCalled();
  });

  it("renders with label when label prop is provided", async () => {
    const page = await newSpecPage({
      components: [AnyCheckbox],
      html: `<any-checkbox label="Test Label"></any-checkbox>`,
    });

    expect(
      page.root.shadowRoot.querySelector(".any-checkbox-label").textContent
    ).toBe("Test Label");
  });

  it("applies styleClass and labelStyleClass correctly", async () => {
    const page = await newSpecPage({
      components: [AnyCheckbox],
      html: `<any-checkbox style-class="custom-style" label-style-class="label-custom-style"></any-checkbox>`,
    });

    const checkbox = page.root.shadowRoot.querySelector(
      ".any-checkbox"
    ) as HTMLDivElement;
    const label = page.root.shadowRoot.querySelector(".any-checkbox-label");

    expect(checkbox.classList.contains("custom-style")).toBe(true);
    expect(label.classList.contains("label-custom-style")).toBe(true);
  });

  it("disables the checkbox when disabled prop is true", async () => {
    const page = await newSpecPage({
      components: [AnyCheckbox],
      html: `<any-checkbox disabled></any-checkbox>`,
    });

    const checkbox = page.root.shadowRoot.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement;
    expect(checkbox.disabled).toBe(true);
  });

  it("updates the checkbox icon when checkboxIcon prop changes", async () => {
    const page = await newSpecPage({
      components: [AnyCheckbox],
      html: `<any-checkbox checkbox-icon="fa-solid:check"></any-checkbox>`,
    });

    const checkboxIcon =
      page.root.shadowRoot.querySelector(".any-checkbox-icon");
    const initialIconContent = checkboxIcon.innerHTML;

    page.rootInstance.checkboxIcon = "fa-solid:times";

    await page.waitForChanges();

    expect(checkboxIcon.innerHTML).not.toBe(initialIconContent);
  });

  it("handles binary prop correctly and updates value", async () => {
    const page = await newSpecPage({
      components: [AnyCheckbox],
      html: `<any-checkbox binary></any-checkbox>`,
    });

    const checkbox = page.root.shadowRoot.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement;
    checkbox.click();

    await page.waitForChanges();

    expect(page.rootInstance.checked).toBe(true);
    expect(page.rootInstance.value).toBe(true);
  });
});
