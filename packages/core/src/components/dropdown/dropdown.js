var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop, State, Listen, Element, h, } from '@stencil/core';
let AnyDropdown = /** @class */ (() => {
    let AnyDropdown = class AnyDropdown {
        constructor() {
            this.open = false;
            this.openTO = null;
            this.closeTO = null;
            this.isOpened = false;
            this.options = null;
            this.placeholder = null;
            this.dropdownIcon = "fa-solid:caret-down";
            this.baseZIndex = "0";
            this.showTransitionOptions = "225ms ease-out";
            this.hideTransitionOptions = "195ms ease-in";
            this.anyTabIndex = null;
        }
        handleClick(e) {
            if (this.dropdownWrapper.contains(e.target)) {
                this.dropdownWrapper.classList.add("any-state-focus");
                this.open = !this.open;
                if (this.open) {
                    this.animatePanelAppearance("open");
                }
                else {
                    this.animatePanelAppearance("close");
                }
                return;
            }
            this.handleClickOutside();
        }
        componentDidLoad() {
            this.dropdownWrapper = this.element.querySelector(".any-dropdown");
        }
        handleClickOutside() {
            this.dropdownWrapper.classList.remove("any-state-focus");
            this.open = false;
            this.animatePanelAppearance("close");
        }
        animatePanelAppearance(action) {
            const dropdownPanel = this.element.querySelector(".any-dropdown-panel");
            const showTransitionOptions = this.getTransitionOptions(this.showTransitionOptions);
            const hideTransitionOptions = this.getTransitionOptions(this.hideTransitionOptions);
            if (action === "open") {
                this.isOpened = true;
                if (!dropdownPanel) {
                    window.requestAnimationFrame(() => this.animatePanelAppearance("open"));
                }
                else {
                    dropdownPanel.style.zIndex = this.baseZIndex;
                    dropdownPanel.style.top = this.dropdownWrapper.offsetHeight + "px";
                    dropdownPanel.style.left = "0px";
                    dropdownPanel.style.transform = "translateY(5px)";
                    dropdownPanel.style.opacity = "0";
                    if (this.openTO)
                        clearTimeout(this.openTO);
                    this.openTO = setTimeout(() => {
                        dropdownPanel.style.opacity = "1";
                        dropdownPanel.style.transform = "translateY(0px)";
                        dropdownPanel.style.transitionProperty = "opacity, transform";
                        dropdownPanel.style.transitionTimingFunction = showTransitionOptions.timingFunction;
                        dropdownPanel.style.transitionDuration = showTransitionOptions.duration;
                    }, 100);
                }
            }
            else {
                if (dropdownPanel) {
                    dropdownPanel.style.transform = "translateY(5px)";
                    dropdownPanel.style.opacity = "0";
                    dropdownPanel.style.transitionProperty = "opacity, transform";
                    dropdownPanel.style.transitionTimingFunction = hideTransitionOptions.timingFunction;
                    dropdownPanel.style.transitionDuration = hideTransitionOptions.duration;
                    if (this.closeTO)
                        clearTimeout(this.closeTO);
                    this.closeTO = setTimeout(() => {
                        this.isOpened = false;
                    }, 195);
                }
            }
        }
        getTransitionOptions(transition) {
            const splitTransitionString = transition.split(" ");
            const options = {
                duration: splitTransitionString[0],
                timingFunction: splitTransitionString[1]
            };
            return options;
        }
        render() {
            return h("div", { class: "any-widget any-dropdown any-corner-all", tabindex: this.anyTabIndex },
                h("div", { class: "any-dropdown-label-container" },
                    h("label", { class: "any-dropdown-label any-inputtext any-corner-all any-placeholder" }, this.placeholder)),
                h("div", { class: "any-dropdown-trigger any-state-default any-corner-right", "aria-expanded": this.open },
                    h("span", { class: "any-dropdown-trigger-icon" },
                        h("i", { class: "iconify", "data-icon": this.dropdownIcon, "data-inline": "true" }))),
                this.isOpened &&
                    h("div", { class: "any-widget-content any-widget any-corner-all any-shadow any-dropdown-panel" },
                        h("any-listbox", { options: this.options })));
        }
    };
    __decorate([
        Element()
    ], AnyDropdown.prototype, "element", void 0);
    __decorate([
        State()
    ], AnyDropdown.prototype, "isOpened", void 0);
    __decorate([
        Prop()
    ], AnyDropdown.prototype, "options", void 0);
    __decorate([
        Prop()
    ], AnyDropdown.prototype, "placeholder", void 0);
    __decorate([
        Prop()
    ], AnyDropdown.prototype, "dropdownIcon", void 0);
    __decorate([
        Prop()
    ], AnyDropdown.prototype, "baseZIndex", void 0);
    __decorate([
        Prop()
    ], AnyDropdown.prototype, "showTransitionOptions", void 0);
    __decorate([
        Prop()
    ], AnyDropdown.prototype, "hideTransitionOptions", void 0);
    __decorate([
        Prop()
    ], AnyDropdown.prototype, "anyTabIndex", void 0);
    __decorate([
        Listen('click', { target: "document" })
    ], AnyDropdown.prototype, "handleClick", null);
    AnyDropdown = __decorate([
        Component({
            tag: 'any-dropdown',
            styleUrl: 'any-dropdown.scss',
            shadow: false
        })
    ], AnyDropdown);
    return AnyDropdown;
})();
export { AnyDropdown };
