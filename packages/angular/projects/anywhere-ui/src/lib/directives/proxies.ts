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
  inputs: ['anyStyle', 'anyTabIndex', 'autoZIndex', 'baseZIndex', 'clearIcon', 'disabled', 'dropdownIcon', 'filter', 'hideAnimation', 'inputId', 'name', 'optionLabel', 'optionValue', 'options', 'panelScrollHeight', 'placeholder', 'readonly', 'showAnimation', 'showClear', 'value', 'virtualScroll']
})
@Component({
  selector: 'any-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['anyStyle', 'anyTabIndex', 'autoZIndex', 'baseZIndex', 'clearIcon', 'disabled', 'dropdownIcon', 'filter', 'hideAnimation', 'inputId', 'name', 'optionLabel', 'optionValue', 'options', 'panelScrollHeight', 'placeholder', 'readonly', 'showAnimation', 'showClear', 'value', 'virtualScroll'],
})
export class AnyDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'aOnPanelShow', 'aOnPanelShowStart', 'aOnPanelHide', 'aOnPanelHideStart', 'aOnFocus', 'aOnBlur', 'aOnClick']);
  }
}


export declare interface AnyDropdown extends Components.AnyDropdown {
  /**
   * Callback to invoke when value of dropdown changes.
   */
  valueChange: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay gets visible.
   */
  aOnPanelShow: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay before gets visible.
   */
  aOnPanelShowStart: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay gets hidden.
   */
  aOnPanelHide: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay before gets hidden.
   */
  aOnPanelHideStart: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when dropdown gets focus.
   */
  aOnFocus: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when dropdown loses focus.
   */
  aOnBlur: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when component is clicked.
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
  inputs: ['anyStyle', 'checkbox', 'dataKey', 'disabled', 'emptyFilterMessage', 'emptyMessage', 'filter', 'filterBy', 'filterLocale', 'filterMatchMode', 'filterValue', 'group', 'inputId', 'listStyle', 'metaKeySelection', 'multiple', 'name', 'optionDisabled', 'optionGroupChildren', 'optionLabel', 'optionValue', 'options', 'readonly', 'scrollerHeight', 'searchIcon', 'showToggleAll', 'value', 'virtualScroll'],
  methods: ['setFilterInputFocus']
})
@Component({
  selector: 'any-listbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['anyStyle', 'checkbox', 'dataKey', 'disabled', 'emptyFilterMessage', 'emptyMessage', 'filter', 'filterBy', 'filterLocale', 'filterMatchMode', 'filterValue', 'group', 'inputId', 'listStyle', 'metaKeySelection', 'multiple', 'name', 'optionDisabled', 'optionGroupChildren', 'optionLabel', 'optionValue', 'options', 'readonly', 'scrollerHeight', 'searchIcon', 'showToggleAll', 'value', 'virtualScroll'],
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
  inputs: ['anyStyle', 'anyTabIndex', 'checkbox', 'clearIcon', 'dataKey', 'defaultLabel', 'disabled', 'dropdownIcon', 'filter', 'group', 'hideAnimation', 'inputId', 'name', 'optionGroupChildren', 'optionLabel', 'optionValue', 'options', 'panelScrollHeight', 'placeholder', 'readonly', 'showAnimation', 'showClear', 'showToggleAll', 'value', 'virtualScroll']
})
@Component({
  selector: 'any-multiselect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['anyStyle', 'anyTabIndex', 'checkbox', 'clearIcon', 'dataKey', 'defaultLabel', 'disabled', 'dropdownIcon', 'filter', 'group', 'hideAnimation', 'inputId', 'name', 'optionGroupChildren', 'optionLabel', 'optionValue', 'options', 'panelScrollHeight', 'placeholder', 'readonly', 'showAnimation', 'showClear', 'showToggleAll', 'value', 'virtualScroll'],
})
export class AnyMultiselect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'aOnPanelShow', 'aOnPanelShowStart', 'aOnPanelHide', 'aOnPanelHideStart', 'aOnFocus', 'aOnBlur', 'aOnClick']);
  }
}


export declare interface AnyMultiselect extends Components.AnyMultiselect {
  /**
   * Callback to invoke when value of dropdown changes
   */
  valueChange: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay gets visible
   */
  aOnPanelShow: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay before gets visible
   */
  aOnPanelShowStart: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay gets hidden
   */
  aOnPanelHide: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay before gets hidden
   */
  aOnPanelHideStart: EventEmitter<CustomEvent<any>>;
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
  inputs: ['autoZIndex', 'baseZIndex', 'hideAnimation', 'showAnimation', 'target', 'visible']
})
@Component({
  selector: 'any-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoZIndex', 'baseZIndex', 'hideAnimation', 'showAnimation', 'target', 'visible'],
})
export class AnyOverlay {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aOnShow', 'aOnShowStart', 'aOnHide', 'aOnHideStart']);
  }
}


export declare interface AnyOverlay extends Components.AnyOverlay {
  /**
   * Callback to invoke when the dropdown overlay becomes visible.
   */
  aOnShow: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when the dropdown overlay is about to become visible.
   */
  aOnShowStart: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when the dropdown overlay becomes hidden.
   */
  aOnHide: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when the dropdown overlay is about to become hidden.
   */
  aOnHideStart: EventEmitter<CustomEvent<any>>;
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
  inputs: ['anyStyle', 'type']
})
@Component({
  selector: 'any-ripple-effect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['anyStyle', 'type'],
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


@ProxyCmp({
  inputs: ['code', 'extFiles', 'hideCodeSandbox', 'hideStackBlitz', 'hideToggleCode', 'routeFiles', 'selector', 'service']
})
@Component({
  selector: 'app-code',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['code', 'extFiles', 'hideCodeSandbox', 'hideStackBlitz', 'hideToggleCode', 'routeFiles', 'selector', 'service'],
})
export class AppCode {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AppCode extends Components.AppCode {}


@ProxyCmp({
})
@Component({
  selector: 'app-config',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class AppConfig {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AppConfig extends Components.AppConfig {}


@ProxyCmp({
  inputs: ['apiDocs', 'description', 'docTitle', 'docs', 'githubPage', 'header']
})
@Component({
  selector: 'app-doc',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['apiDocs', 'description', 'docTitle', 'docs', 'githubPage', 'header'],
})
export class AppDoc {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AppDoc extends Components.AppDoc {}


@ProxyCmp({
  inputs: ['docs', 'header']
})
@Component({
  selector: 'app-docapisection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['docs', 'header'],
})
export class AppDocapisection {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AppDocapisection extends Components.AppDocapisection {}


@ProxyCmp({
  inputs: ['anyId', 'data', 'description', 'isInterface', 'label', 'level', 'parentDescription', 'parentId', 'parentTitle', 'relatedProp']
})
@Component({
  selector: 'app-docapitable',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['anyId', 'data', 'description', 'isInterface', 'label', 'level', 'parentDescription', 'parentId', 'parentTitle', 'relatedProp'],
})
export class AppDocapitable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AppDocapitable extends Components.AppDocapitable {}


@ProxyCmp({
  inputs: ['apiDocs', 'docs']
})
@Component({
  selector: 'app-docsection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['apiDocs', 'docs'],
})
export class AppDocsection {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AppDocsection extends Components.AppDocsection {}


@ProxyCmp({
  inputs: ['docs']
})
@Component({
  selector: 'app-docsection-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['docs'],
})
export class AppDocsectionNav {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AppDocsectionNav extends Components.AppDocsectionNav {}


@ProxyCmp({
  inputs: ['label', 'level', 'parentDescription', 'parentId', 'parentTitle', 'textId', 'textTitle']
})
@Component({
  selector: 'app-docsectiontext',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'level', 'parentDescription', 'parentId', 'parentTitle', 'textId', 'textTitle'],
})
export class AppDocsectiontext {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AppDocsectiontext extends Components.AppDocsectiontext {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'checkbox-basic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
})
export class CheckboxBasic {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface CheckboxBasic extends Components.CheckboxBasic {

  valueChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'checkbox-disabled',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
})
export class CheckboxDisabled {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface CheckboxDisabled extends Components.CheckboxDisabled {

  valueChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'checkbox-dynamic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
})
export class CheckboxDynamic {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface CheckboxDynamic extends Components.CheckboxDynamic {

  valueChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'checkbox-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
})
export class CheckboxGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface CheckboxGroup extends Components.CheckboxGroup {

  valueChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'checkbox-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
})
export class CheckboxLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface CheckboxLabel extends Components.CheckboxLabel {

  valueChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'checkbox-readonly',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
})
export class CheckboxReadonly {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface CheckboxReadonly extends Components.CheckboxReadonly {

  valueChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'dropdown-basic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
})
export class DropdownBasic {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DropdownBasic extends Components.DropdownBasic {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'dropdown-disabled',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
})
export class DropdownDisabled {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DropdownDisabled extends Components.DropdownDisabled {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'dropdown-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
})
export class DropdownFilter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DropdownFilter extends Components.DropdownFilter {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'dropdown-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
})
export class DropdownTemplate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DropdownTemplate extends Components.DropdownTemplate {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'dropdown-virtual-scroll',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
})
export class DropdownVirtualScroll {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DropdownVirtualScroll extends Components.DropdownVirtualScroll {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'input-switch-basic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
})
export class InputSwitchBasic {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputSwitchBasic extends Components.InputSwitchBasic {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'input-switch-disabled',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
})
export class InputSwitchDisabled {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputSwitchDisabled extends Components.InputSwitchDisabled {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'input-switch-preselection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
})
export class InputSwitchPreselection {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputSwitchPreselection extends Components.InputSwitchPreselection {}


