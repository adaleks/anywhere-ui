var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Host, Prop, h } from '@stencil/core';
let AnyListbox = /** @class */ (() => {
    let AnyListbox = class AnyListbox {
        componentWillLoad() {
            console.log('Component has been rendered', this.options);
        }
        render() {
            return (h(Host, null,
                h("slot", null, this.options.map((option) => h("div", null,
                    h("div", null, option.label))))));
        }
    };
    __decorate([
        Prop()
    ], AnyListbox.prototype, "options", void 0);
    AnyListbox = __decorate([
        Component({
            tag: 'any-listbox',
            styleUrl: 'any-listbox.scss',
            shadow: true,
        })
    ], AnyListbox);
    return AnyListbox;
})();
export { AnyListbox };
