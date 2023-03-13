/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@anywhere-ui/core';


@ProxyCmp({
  inputs: ['anyStyle', 'severity', 'size', 'styleClass', 'value']
})
@Component({
  selector: 'any-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['anyStyle', 'severity', 'size', 'styleClass', 'value'],
})
export class AnyBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AnyBadge extends Components.AnyBadge {}


@ProxyCmp({
  inputs: ['styleClass']
})
@Component({
  selector: 'any-badge-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['styleClass'],
})
export class AnyBadgeOverlay {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AnyBadgeOverlay extends Components.AnyBadgeOverlay {}


@ProxyCmp({
  inputs: ['anyStyle', 'badge', 'badgeClass', 'disabled', 'icon', 'iconHeight', 'iconPos', 'iconWidth', 'label', 'loading', 'loadingIcon', 'loadingIconStyleClass', 'styleClass', 'type'],
  methods: ['getButtonRef']
})
@Component({
  selector: 'any-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['anyStyle', 'badge', 'badgeClass', 'disabled', 'icon', 'iconHeight', 'iconPos', 'iconWidth', 'label', 'loading', 'loadingIcon', 'loadingIconStyleClass', 'styleClass', 'type'],
})
export class AnyButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aOnClick', 'aOnFocus', 'aOnBlur']);
  }
}


export declare interface AnyButton extends Components.AnyButton {
  /**
   * Callback to execute when button is clicked.
   */
  aOnClick: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to execute when button is focused.
   */
  aOnFocus: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to execute when button loses focus.
   */
  aOnBlur: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['anyStyle', 'anyTabIndex', 'binary', 'checkboxIcon', 'checked', 'disabled', 'inputId', 'label', 'labelStyleClass', 'name', 'readonly', 'styleClass', 'value'],
  methods: ['inputFocus']
})
@Component({
  selector: 'any-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['anyStyle', 'anyTabIndex', 'binary', 'checkboxIcon', 'checked', 'disabled', 'inputId', 'label', 'labelStyleClass', 'name', 'readonly', 'styleClass', 'value'],
})
export class AnyCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'aOnFocus', 'aOnBlur']);
  }
}


export declare interface AnyCheckbox extends Components.AnyCheckbox {
  /**
   * Callback to invoke when value of dropdown changes.
   */
  valueChange: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the toggle has focus.
   */
  aOnFocus: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the toggle loses focus.
   */
  aOnBlur: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['anyStyle', 'anyTabIndex', 'autoZIndex', 'baseZIndex', 'clearIcon', 'disabled', 'dropdownIcon', 'hideAnimation', 'inputId', 'name', 'optionLabel', 'optionValue', 'options', 'panelScrollHeight', 'placeholder', 'readonly', 'showAnimation', 'showClear', 'value', 'virtualScroll']
})
@Component({
  selector: 'any-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['anyStyle', 'anyTabIndex', 'autoZIndex', 'baseZIndex', 'clearIcon', 'disabled', 'dropdownIcon', 'hideAnimation', 'inputId', 'name', 'optionLabel', 'optionValue', 'options', 'panelScrollHeight', 'placeholder', 'readonly', 'showAnimation', 'showClear', 'value', 'virtualScroll'],
})
export class AnyDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'aOnShow', 'aOnShowStart', 'aOnHide', 'aOnHideStart', 'aOnFocus', 'aOnBlur', 'aOnClick']);
  }
}


export declare interface AnyDropdown extends Components.AnyDropdown {
  /**
   * Callback to invoke when value of dropdown changes
   */
  valueChange: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay gets visible
   */
  aOnShow: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay before gets visible
   */
  aOnShowStart: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay gets hidden
   */
  aOnHide: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay before gets hidden
   */
  aOnHideStart: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when dropdown gets focus
   */
  aOnFocus: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when dropdown loses focus
   */
  aOnBlur: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when component is clicked
   */
  aOnClick: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['aPrefix', 'aSuffix', 'aTitle', 'allowEmpty', 'anyAriaRequired', 'anyStyle', 'anyTabIndex', 'autocomplete', 'buttonLayout', 'currency', 'currencyDisplay', 'decrementButtonClass', 'decrementButtonIcon', 'disabled', 'format', 'incrementButtonClass', 'incrementButtonIcon', 'inputId', 'inputStyle', 'inputStyleClass', 'inputWrapperClass', 'label', 'locale', 'localeMatcher', 'max', 'maxFractionDigits', 'maxlength', 'min', 'minFractionDigits', 'mode', 'name', 'placeholder', 'readonly', 'required', 'showButtons', 'size', 'step', 'styleClass', 'useGrouping', 'value']
})
@Component({
  selector: 'any-input-number',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['aPrefix', 'aSuffix', 'aTitle', 'allowEmpty', 'anyAriaRequired', 'anyStyle', 'anyTabIndex', 'autocomplete', 'buttonLayout', 'currency', 'currencyDisplay', 'decrementButtonClass', 'decrementButtonIcon', 'disabled', 'format', 'incrementButtonClass', 'incrementButtonIcon', 'inputId', 'inputStyle', 'inputStyleClass', 'inputWrapperClass', 'label', 'locale', 'localeMatcher', 'max', 'maxFractionDigits', 'maxlength', 'min', 'minFractionDigits', 'mode', 'name', 'placeholder', 'readonly', 'required', 'showButtons', 'size', 'step', 'styleClass', 'useGrouping', 'value'],
})
export class AnyInputNumber {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aOnInput', 'aOnFocus', 'aOnBlur', 'aOnKeyDown', 'valueChange']);
  }
}


export declare interface AnyInputNumber extends Components.AnyInputNumber {
  /**
   * Callback to invoke when the value is entered.
   */
  aOnInput: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when input receives focus.
   */
  aOnFocus: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when input loses focus.
   */
  aOnBlur: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when keyboard key is down.
   */
  aOnKeyDown: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when value of componnt changes
   */
  valueChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['anyStyle', 'anyTabIndex', 'ariaLabeledBy', 'checked', 'disabled', 'falseValue', 'inputId', 'name', 'readonly', 'styleClass', 'trueValue']
})
@Component({
  selector: 'any-input-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['anyStyle', 'anyTabIndex', 'ariaLabeledBy', 'checked', 'disabled', 'falseValue', 'inputId', 'name', 'readonly', 'styleClass', 'trueValue'],
})
export class AnyInputSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'aOnFocus', 'aOnBlur']);
  }
}


export declare interface AnyInputSwitch extends Components.AnyInputSwitch {
  /**
   * Callback to invoke when value of dropdown changes.
   */
  valueChange: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the toggle has focus.
   */
  aOnFocus: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the toggle loses focus.
   */
  aOnBlur: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['aTitle', 'anyAriaRequired', 'anyTabIndex', 'autocomplete', 'disabled', 'floatLabel', 'inputClass', 'inputHolderClass', 'inputId', 'inputStyle', 'inputWrapperClass', 'label', 'leftIconClass', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'rightIconClass', 'size', 'value'],
  methods: ['getInputRef']
})
@Component({
  selector: 'any-input-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['aTitle', 'anyAriaRequired', 'anyTabIndex', 'autocomplete', 'disabled', 'floatLabel', 'inputClass', 'inputHolderClass', 'inputId', 'inputStyle', 'inputWrapperClass', 'label', 'leftIconClass', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'rightIconClass', 'size', 'value'],
})
export class AnyInputText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface AnyInputText extends Components.AnyInputText {
  /**
   * Callback to invoke when value of input text changes
   */
  valueChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['autoResize', 'autocapitalize', 'cols', 'disabled', 'floatLabel', 'inputId', 'inputWrapperClass', 'label', 'name', 'placeholder', 'readonly', 'rows', 'spellcheck', 'value', 'wrap'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'any-input-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoResize', 'autocapitalize', 'cols', 'disabled', 'floatLabel', 'inputId', 'inputWrapperClass', 'label', 'name', 'placeholder', 'readonly', 'rows', 'spellcheck', 'value', 'wrap'],
})
export class AnyInputTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aOnBlur', 'aOnFocus', 'aOnResize', 'aOnInput', 'valueChange']);
  }
}


import type { TextareaChangeEventDetail as IAnyInputTextareaTextareaChangeEventDetail } from '@anywhere-ui/core';

export declare interface AnyInputTextarea extends Components.AnyInputTextarea {
  /**
   * Emitted when the input loses focus.
   */
  aOnBlur: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Emitted when the input has focus.
   */
  aOnFocus: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Emitted when the input has resized.
   */
  aOnResize: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when a keyboard input occurred.
   */
  aOnInput: EventEmitter<CustomEvent<InputEvent>>;
  /**
   * Emitted when the input value has changed.
   */
  valueChange: EventEmitter<CustomEvent<IAnyInputTextareaTextareaChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['anyStyle', 'disabled', 'inputId', 'listStyle', 'name', 'optionLabel', 'optionValue', 'options', 'readonly', 'scrollerHeight', 'value', 'virtualScroll']
})
@Component({
  selector: 'any-listbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['anyStyle', 'disabled', 'inputId', 'listStyle', 'name', 'optionLabel', 'optionValue', 'options', 'readonly', 'scrollerHeight', 'value', 'virtualScroll'],
})
export class AnyListbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


import type { SelectChangeEventDetail as IAnyListboxSelectChangeEventDetail } from '@anywhere-ui/core';

export declare interface AnyListbox extends Components.AnyListbox {
  /**
   * Callback to invoke when value of listbox changes
   */
  valueChange: EventEmitter<CustomEvent<IAnyListboxSelectChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['anyStyle', 'anyTabIndex', 'disabled', 'inputId', 'label', 'labelStyleClass', 'name', 'styleClass', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'any-radio-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['anyStyle', 'anyTabIndex', 'disabled', 'inputId', 'label', 'labelStyleClass', 'name', 'styleClass', 'value'],
})
export class AnyRadioButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aOnSelect', 'aOnFocus', 'aOnBlur']);
  }
}


export declare interface AnyRadioButton extends Components.AnyRadioButton {
  /**
   * Callback to invoke on radio button select.
   */
  aOnSelect: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when the radio button receives focus.
   */
  aOnFocus: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when the radio button loses focus.
   */
  aOnBlur: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['allowEmptySelection', 'name', 'value']
})
@Component({
  selector: 'any-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['allowEmptySelection', 'name', 'value'],
})
export class AnyRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


import type { RadioGroupChangeEventDetail as IAnyRadioGroupRadioGroupChangeEventDetail } from '@anywhere-ui/core';

export declare interface AnyRadioGroup extends Components.AnyRadioGroup {
  /**
   * Emitted when the value has changed.
   */
  valueChange: EventEmitter<CustomEvent<IAnyRadioGroupRadioGroupChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['type']
})
@Component({
  selector: 'any-ripple-effect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['type'],
})
export class AnyRippleEffect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AnyRippleEffect extends Components.AnyRippleEffect {}


@ProxyCmp({
  inputs: ['disabled', 'header', 'selected']
})
@Component({
  selector: 'any-tab-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'header', 'selected'],
})
export class AnyTabPanel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AnyTabPanel extends Components.AnyTabPanel {}


@ProxyCmp({
  inputs: ['activeIndex', 'anyStyle', 'styleClass']
})
@Component({
  selector: 'any-tab-view',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeIndex', 'anyStyle', 'styleClass'],
})
export class AnyTabView {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AnyTabView extends Components.AnyTabView {}


@ProxyCmp({
  inputs: ['anyStyle', 'contentElemClass', 'contentElemTag', 'delay', 'itemElemClass', 'itemSize', 'itemTag', 'items', 'lazy', 'noDataText', 'rowsPerPage', 'scrollElemClass', 'scrollerHeight', 'styleClass']
})
@Component({
  selector: 'any-virtual-scroller',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['anyStyle', 'contentElemClass', 'contentElemTag', 'delay', 'itemElemClass', 'itemSize', 'itemTag', 'items', 'lazy', 'noDataText', 'rowsPerPage', 'scrollElemClass', 'scrollerHeight', 'styleClass'],
})
export class AnyVirtualScroller {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['scrollingProgress', 'clusterChanged', 'clusterWillChange', 'aOnLazyLoad', 'aOnItemClick']);
  }
}


export declare interface AnyVirtualScroller extends Components.AnyVirtualScroller {
  /**
   * Will be called on scrolling. Returns progress position
   */
  scrollingProgress: EventEmitter<CustomEvent<any>>;
  /**
   * Will be called right after replacing previous cluster with new one
   */
  clusterChanged: EventEmitter<CustomEvent<any>>;
  /**
   * Will be called right before replacing previous cluster with new one
   */
  clusterWillChange: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke in lazy mode to load new data
   */
  aOnLazyLoad: EventEmitter<CustomEvent<any>>;
  /**
   * Callback when item is clicked
   */
  aOnItemClick: EventEmitter<CustomEvent<any>>;
}


