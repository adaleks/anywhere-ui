/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

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
  standalone: false
})
export class AnyBadge {
  protected el: HTMLAnyBadgeElement;
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
  standalone: false
})
export class AnyBadgeOverlay {
  protected el: HTMLAnyBadgeOverlayElement;
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
  outputs: ['aOnClick', 'aOnFocus', 'aOnBlur'],
  standalone: false
})
export class AnyButton {
  protected el: HTMLAnyButtonElement;
  @Output() aOnClick = new EventEmitter<AnyButtonCustomEvent<any>>();
  @Output() aOnFocus = new EventEmitter<AnyButtonCustomEvent<any>>();
  @Output() aOnBlur = new EventEmitter<AnyButtonCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { AnyButtonCustomEvent } from '@anywhere-ui/core';

export declare interface AnyButton extends Components.AnyButton {
  /**
   * Callback to execute when button is clicked.
   */
  aOnClick: EventEmitter<AnyButtonCustomEvent<any>>;
  /**
   * Callback to execute when button is focused.
   */
  aOnFocus: EventEmitter<AnyButtonCustomEvent<any>>;
  /**
   * Callback to execute when button loses focus.
   */
  aOnBlur: EventEmitter<AnyButtonCustomEvent<any>>;
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
  outputs: ['valueChange', 'aOnFocus', 'aOnBlur'],
  standalone: false
})
export class AnyCheckbox {
  protected el: HTMLAnyCheckboxElement;
  @Output() valueChange = new EventEmitter<AnyCheckboxCustomEvent<any>>();
  @Output() aOnFocus = new EventEmitter<AnyCheckboxCustomEvent<any>>();
  @Output() aOnBlur = new EventEmitter<AnyCheckboxCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { AnyCheckboxCustomEvent } from '@anywhere-ui/core';

export declare interface AnyCheckbox extends Components.AnyCheckbox {
  /**
   * Callback to invoke when value of dropdown changes.
   */
  valueChange: EventEmitter<AnyCheckboxCustomEvent<any>>;
  /**
   * Emitted when the toggle has focus.
   */
  aOnFocus: EventEmitter<AnyCheckboxCustomEvent<any>>;
  /**
   * Emitted when the toggle loses focus.
   */
  aOnBlur: EventEmitter<AnyCheckboxCustomEvent<any>>;
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
  outputs: ['valueChange', 'aOnPanelShow', 'aOnPanelShowStart', 'aOnPanelHide', 'aOnPanelHideStart', 'aOnFocus', 'aOnBlur', 'aOnClick'],
  standalone: false
})
export class AnyDropdown {
  protected el: HTMLAnyDropdownElement;
  @Output() valueChange = new EventEmitter<AnyDropdownCustomEvent<any>>();
  @Output() aOnPanelShow = new EventEmitter<AnyDropdownCustomEvent<any>>();
  @Output() aOnPanelShowStart = new EventEmitter<AnyDropdownCustomEvent<any>>();
  @Output() aOnPanelHide = new EventEmitter<AnyDropdownCustomEvent<any>>();
  @Output() aOnPanelHideStart = new EventEmitter<AnyDropdownCustomEvent<any>>();
  @Output() aOnFocus = new EventEmitter<AnyDropdownCustomEvent<any>>();
  @Output() aOnBlur = new EventEmitter<AnyDropdownCustomEvent<any>>();
  @Output() aOnClick = new EventEmitter<AnyDropdownCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { AnyDropdownCustomEvent } from '@anywhere-ui/core';

export declare interface AnyDropdown extends Components.AnyDropdown {
  /**
   * Callback to invoke when value of dropdown changes.
   */
  valueChange: EventEmitter<AnyDropdownCustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay gets visible.
   */
  aOnPanelShow: EventEmitter<AnyDropdownCustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay before gets visible.
   */
  aOnPanelShowStart: EventEmitter<AnyDropdownCustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay gets hidden.
   */
  aOnPanelHide: EventEmitter<AnyDropdownCustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay before gets hidden.
   */
  aOnPanelHideStart: EventEmitter<AnyDropdownCustomEvent<any>>;
  /**
   * Callback to invoke when dropdown gets focus.
   */
  aOnFocus: EventEmitter<AnyDropdownCustomEvent<any>>;
  /**
   * Callback to invoke when dropdown loses focus.
   */
  aOnBlur: EventEmitter<AnyDropdownCustomEvent<any>>;
  /**
   * Callback to invoke when component is clicked.
   */
  aOnClick: EventEmitter<AnyDropdownCustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['aPrefix', 'aSuffix', 'aTitle', 'allowEmpty', 'anyAriaRequired', 'anyStyle', 'anyTabIndex', 'autocomplete', 'buttonLayout', 'currency', 'currencyDisplay', 'decrementButtonClass', 'decrementButtonIcon', 'disabled', 'floatLabel', 'format', 'incrementButtonClass', 'incrementButtonIcon', 'inputId', 'inputStyle', 'inputStyleClass', 'inputWrapperClass', 'label', 'locale', 'localeMatcher', 'max', 'maxFractionDigits', 'maxlength', 'min', 'minFractionDigits', 'mode', 'name', 'placeholder', 'readonly', 'required', 'showButtons', 'size', 'step', 'styleClass', 'useGrouping', 'value']
})
@Component({
  selector: 'any-input-number',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['aPrefix', 'aSuffix', 'aTitle', 'allowEmpty', 'anyAriaRequired', 'anyStyle', 'anyTabIndex', 'autocomplete', 'buttonLayout', 'currency', 'currencyDisplay', 'decrementButtonClass', 'decrementButtonIcon', 'disabled', 'floatLabel', 'format', 'incrementButtonClass', 'incrementButtonIcon', 'inputId', 'inputStyle', 'inputStyleClass', 'inputWrapperClass', 'label', 'locale', 'localeMatcher', 'max', 'maxFractionDigits', 'maxlength', 'min', 'minFractionDigits', 'mode', 'name', 'placeholder', 'readonly', 'required', 'showButtons', 'size', 'step', 'styleClass', 'useGrouping', 'value'],
  outputs: ['aOnInput', 'aOnFocus', 'aOnBlur', 'aOnKeyDown', 'valueChange'],
  standalone: false
})
export class AnyInputNumber {
  protected el: HTMLAnyInputNumberElement;
  @Output() aOnInput = new EventEmitter<AnyInputNumberCustomEvent<any>>();
  @Output() aOnFocus = new EventEmitter<AnyInputNumberCustomEvent<any>>();
  @Output() aOnBlur = new EventEmitter<AnyInputNumberCustomEvent<any>>();
  @Output() aOnKeyDown = new EventEmitter<AnyInputNumberCustomEvent<any>>();
  @Output() valueChange = new EventEmitter<AnyInputNumberCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { AnyInputNumberCustomEvent } from '@anywhere-ui/core';

export declare interface AnyInputNumber extends Components.AnyInputNumber {
  /**
   * Callback to invoke when the value is entered.
   */
  aOnInput: EventEmitter<AnyInputNumberCustomEvent<any>>;
  /**
   * Callback to invoke when input receives focus.
   */
  aOnFocus: EventEmitter<AnyInputNumberCustomEvent<any>>;
  /**
   * Callback to invoke when input loses focus.
   */
  aOnBlur: EventEmitter<AnyInputNumberCustomEvent<any>>;
  /**
   * Callback to invoke when keyboard key is down.
   */
  aOnKeyDown: EventEmitter<AnyInputNumberCustomEvent<any>>;
  /**
   * Callback to invoke when value of componnt changes
   */
  valueChange: EventEmitter<AnyInputNumberCustomEvent<any>>;
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
  outputs: ['valueChange', 'aOnFocus', 'aOnBlur'],
  standalone: false
})
export class AnyInputSwitch {
  protected el: HTMLAnyInputSwitchElement;
  @Output() valueChange = new EventEmitter<AnyInputSwitchCustomEvent<any>>();
  @Output() aOnFocus = new EventEmitter<AnyInputSwitchCustomEvent<any>>();
  @Output() aOnBlur = new EventEmitter<AnyInputSwitchCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { AnyInputSwitchCustomEvent } from '@anywhere-ui/core';

export declare interface AnyInputSwitch extends Components.AnyInputSwitch {
  /**
   * Callback to invoke when value of dropdown changes.
   */
  valueChange: EventEmitter<AnyInputSwitchCustomEvent<any>>;
  /**
   * Emitted when the toggle has focus.
   */
  aOnFocus: EventEmitter<AnyInputSwitchCustomEvent<any>>;
  /**
   * Emitted when the toggle loses focus.
   */
  aOnBlur: EventEmitter<AnyInputSwitchCustomEvent<any>>;
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
  outputs: ['valueChange'],
  standalone: false
})
export class AnyInputText {
  protected el: HTMLAnyInputTextElement;
  @Output() valueChange = new EventEmitter<AnyInputTextCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { AnyInputTextCustomEvent } from '@anywhere-ui/core';

export declare interface AnyInputText extends Components.AnyInputText {
  /**
   * Callback to invoke when value of input text changes
   */
  valueChange: EventEmitter<AnyInputTextCustomEvent<any>>;
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
  outputs: ['aOnBlur', 'aOnFocus', 'aOnResize', 'aOnInput', 'valueChange'],
  standalone: false
})
export class AnyInputTextarea {
  protected el: HTMLAnyInputTextareaElement;
  @Output() aOnBlur = new EventEmitter<AnyInputTextareaCustomEvent<FocusEvent>>();
  @Output() aOnFocus = new EventEmitter<AnyInputTextareaCustomEvent<FocusEvent>>();
  @Output() aOnResize = new EventEmitter<AnyInputTextareaCustomEvent<any>>();
  @Output() aOnInput = new EventEmitter<AnyInputTextareaCustomEvent<InputEvent>>();
  @Output() valueChange = new EventEmitter<AnyInputTextareaCustomEvent<IAnyInputTextareaTextareaChangeEventDetail>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { AnyInputTextareaCustomEvent } from '@anywhere-ui/core';
import type { TextareaChangeEventDetail as IAnyInputTextareaTextareaChangeEventDetail } from '@anywhere-ui/core';

export declare interface AnyInputTextarea extends Components.AnyInputTextarea {
  /**
   * Emitted when the input loses focus.
   */
  aOnBlur: EventEmitter<AnyInputTextareaCustomEvent<FocusEvent>>;
  /**
   * Emitted when the input has focus.
   */
  aOnFocus: EventEmitter<AnyInputTextareaCustomEvent<FocusEvent>>;
  /**
   * Emitted when the input has resized.
   */
  aOnResize: EventEmitter<AnyInputTextareaCustomEvent<any>>;
  /**
   * Emitted when a keyboard input occurred.
   */
  aOnInput: EventEmitter<AnyInputTextareaCustomEvent<InputEvent>>;
  /**
   * Emitted when the input value has changed.
   */
  valueChange: EventEmitter<AnyInputTextareaCustomEvent<IAnyInputTextareaTextareaChangeEventDetail>>;
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
  outputs: ['valueChange'],
  standalone: false
})
export class AnyListbox {
  protected el: HTMLAnyListboxElement;
  @Output() valueChange = new EventEmitter<AnyListboxCustomEvent<IAnyListboxSelectChangeEventDetail>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { AnyListboxCustomEvent } from '@anywhere-ui/core';
import type { SelectChangeEventDetail as IAnyListboxSelectChangeEventDetail } from '@anywhere-ui/core';

export declare interface AnyListbox extends Components.AnyListbox {
  /**
   * Callback to invoke when value of listbox changes
   */
  valueChange: EventEmitter<AnyListboxCustomEvent<IAnyListboxSelectChangeEventDetail>>;
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
  outputs: ['valueChange', 'aOnPanelShow', 'aOnPanelShowStart', 'aOnPanelHide', 'aOnPanelHideStart', 'aOnFocus', 'aOnBlur', 'aOnClick'],
  standalone: false
})
export class AnyMultiselect {
  protected el: HTMLAnyMultiselectElement;
  @Output() valueChange = new EventEmitter<AnyMultiselectCustomEvent<any>>();
  @Output() aOnPanelShow = new EventEmitter<AnyMultiselectCustomEvent<any>>();
  @Output() aOnPanelShowStart = new EventEmitter<AnyMultiselectCustomEvent<any>>();
  @Output() aOnPanelHide = new EventEmitter<AnyMultiselectCustomEvent<any>>();
  @Output() aOnPanelHideStart = new EventEmitter<AnyMultiselectCustomEvent<any>>();
  @Output() aOnFocus = new EventEmitter<AnyMultiselectCustomEvent<any>>();
  @Output() aOnBlur = new EventEmitter<AnyMultiselectCustomEvent<any>>();
  @Output() aOnClick = new EventEmitter<AnyMultiselectCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { AnyMultiselectCustomEvent } from '@anywhere-ui/core';

export declare interface AnyMultiselect extends Components.AnyMultiselect {
  /**
   * Callback to invoke when value of dropdown changes
   */
  valueChange: EventEmitter<AnyMultiselectCustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay gets visible
   */
  aOnPanelShow: EventEmitter<AnyMultiselectCustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay before gets visible
   */
  aOnPanelShowStart: EventEmitter<AnyMultiselectCustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay gets hidden
   */
  aOnPanelHide: EventEmitter<AnyMultiselectCustomEvent<any>>;
  /**
   * Callback to invoke when dropdown overlay before gets hidden
   */
  aOnPanelHideStart: EventEmitter<AnyMultiselectCustomEvent<any>>;
  /**
   * Callback to invoke when dropdown gets focus
   */
  aOnFocus: EventEmitter<AnyMultiselectCustomEvent<any>>;
  /**
   * Callback to invoke when dropdown loses focus
   */
  aOnBlur: EventEmitter<AnyMultiselectCustomEvent<any>>;
  /**
   * Callback to invoke when component is clicked
   */
  aOnClick: EventEmitter<AnyMultiselectCustomEvent<any>>;
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
  outputs: ['aOnShow', 'aOnShowStart', 'aOnHide', 'aOnHideStart'],
  standalone: false
})
export class AnyOverlay {
  protected el: HTMLAnyOverlayElement;
  @Output() aOnShow = new EventEmitter<AnyOverlayCustomEvent<any>>();
  @Output() aOnShowStart = new EventEmitter<AnyOverlayCustomEvent<any>>();
  @Output() aOnHide = new EventEmitter<AnyOverlayCustomEvent<any>>();
  @Output() aOnHideStart = new EventEmitter<AnyOverlayCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { AnyOverlayCustomEvent } from '@anywhere-ui/core';

export declare interface AnyOverlay extends Components.AnyOverlay {
  /**
   * Callback to invoke when the dropdown overlay becomes visible.
   */
  aOnShow: EventEmitter<AnyOverlayCustomEvent<any>>;
  /**
   * Callback to invoke when the dropdown overlay is about to become visible.
   */
  aOnShowStart: EventEmitter<AnyOverlayCustomEvent<any>>;
  /**
   * Callback to invoke when the dropdown overlay becomes hidden.
   */
  aOnHide: EventEmitter<AnyOverlayCustomEvent<any>>;
  /**
   * Callback to invoke when the dropdown overlay is about to become hidden.
   */
  aOnHideStart: EventEmitter<AnyOverlayCustomEvent<any>>;
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
  outputs: ['aOnSelect', 'aOnFocus', 'aOnBlur'],
  standalone: false
})
export class AnyRadioButton {
  protected el: HTMLAnyRadioButtonElement;
  @Output() aOnSelect = new EventEmitter<AnyRadioButtonCustomEvent<any>>();
  @Output() aOnFocus = new EventEmitter<AnyRadioButtonCustomEvent<any>>();
  @Output() aOnBlur = new EventEmitter<AnyRadioButtonCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { AnyRadioButtonCustomEvent } from '@anywhere-ui/core';

export declare interface AnyRadioButton extends Components.AnyRadioButton {
  /**
   * Callback to invoke on radio button select.
   */
  aOnSelect: EventEmitter<AnyRadioButtonCustomEvent<any>>;
  /**
   * Callback to invoke when the radio button receives focus.
   */
  aOnFocus: EventEmitter<AnyRadioButtonCustomEvent<any>>;
  /**
   * Callback to invoke when the radio button loses focus.
   */
  aOnBlur: EventEmitter<AnyRadioButtonCustomEvent<any>>;
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
  outputs: ['valueChange'],
  standalone: false
})
export class AnyRadioGroup {
  protected el: HTMLAnyRadioGroupElement;
  @Output() valueChange = new EventEmitter<AnyRadioGroupCustomEvent<IAnyRadioGroupRadioGroupChangeEventDetail>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { AnyRadioGroupCustomEvent } from '@anywhere-ui/core';
import type { RadioGroupChangeEventDetail as IAnyRadioGroupRadioGroupChangeEventDetail } from '@anywhere-ui/core';

export declare interface AnyRadioGroup extends Components.AnyRadioGroup {
  /**
   * Emitted when the value has changed.
   */
  valueChange: EventEmitter<AnyRadioGroupCustomEvent<IAnyRadioGroupRadioGroupChangeEventDetail>>;
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
  standalone: false
})
export class AnyRippleEffect {
  protected el: HTMLAnyRippleEffectElement;
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
  standalone: false
})
export class AnyTabPanel {
  protected el: HTMLAnyTabPanelElement;
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
  standalone: false
})
export class AnyTabView {
  protected el: HTMLAnyTabViewElement;
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
  outputs: ['scrollingProgress', 'clusterChanged', 'clusterWillChange', 'aOnLazyLoad', 'aOnItemClick'],
  standalone: false
})
export class AnyVirtualScroller {
  protected el: HTMLAnyVirtualScrollerElement;
  @Output() scrollingProgress = new EventEmitter<AnyVirtualScrollerCustomEvent<any>>();
  @Output() clusterChanged = new EventEmitter<AnyVirtualScrollerCustomEvent<any>>();
  @Output() clusterWillChange = new EventEmitter<AnyVirtualScrollerCustomEvent<any>>();
  @Output() aOnLazyLoad = new EventEmitter<AnyVirtualScrollerCustomEvent<any>>();
  @Output() aOnItemClick = new EventEmitter<AnyVirtualScrollerCustomEvent<any>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { AnyVirtualScrollerCustomEvent } from '@anywhere-ui/core';

export declare interface AnyVirtualScroller extends Components.AnyVirtualScroller {
  /**
   * Will be called on scrolling. Returns progress position
   */
  scrollingProgress: EventEmitter<AnyVirtualScrollerCustomEvent<any>>;
  /**
   * Will be called right after replacing previous cluster with new one
   */
  clusterChanged: EventEmitter<AnyVirtualScrollerCustomEvent<any>>;
  /**
   * Will be called right before replacing previous cluster with new one
   */
  clusterWillChange: EventEmitter<AnyVirtualScrollerCustomEvent<any>>;
  /**
   * Callback to invoke in lazy mode to load new data
   */
  aOnLazyLoad: EventEmitter<AnyVirtualScrollerCustomEvent<any>>;
  /**
   * Callback when item is clicked
   */
  aOnItemClick: EventEmitter<AnyVirtualScrollerCustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['code', 'extFiles', 'hideCodeSandbox', 'hideStackBlitz', 'hideToggleCode', 'routeFiles', 'selector', 'service']
})
@Component({
  selector: 'app-code',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [{ name: 'code', required: true }, 'extFiles', 'hideCodeSandbox', 'hideStackBlitz', 'hideToggleCode', 'routeFiles', { name: 'selector', required: true }, 'service'],
  standalone: false
})
export class AppCode {
  protected el: HTMLAppCodeElement;
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
  standalone: false
})
export class AppConfig {
  protected el: HTMLAppConfigElement;
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
  inputs: [{ name: 'apiDocs', required: true }, { name: 'description', required: true }, 'docTitle', { name: 'docs', required: true }, { name: 'githubPage', required: true }, { name: 'header', required: true }],
  standalone: false
})
export class AppDoc {
  protected el: HTMLAppDocElement;
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
  standalone: false
})
export class AppDocapisection {
  protected el: HTMLAppDocapisectionElement;
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
  standalone: false
})
export class AppDocapitable {
  protected el: HTMLAppDocapitableElement;
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
  standalone: false
})
export class AppDocsection {
  protected el: HTMLAppDocsectionElement;
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
  inputs: [{ name: 'docs', required: true }],
  standalone: false
})
export class AppDocsectionNav {
  protected el: HTMLAppDocsectionNavElement;
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
  standalone: false
})
export class AppDocsectiontext {
  protected el: HTMLAppDocsectiontextElement;
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
  selector: 'badge-inline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class BadgeInline {
  protected el: HTMLBadgeInlineElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BadgeInline extends Components.BadgeInline {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'badge-numbers',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class BadgeNumbers {
  protected el: HTMLBadgeNumbersElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BadgeNumbers extends Components.BadgeNumbers {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'badge-positioned',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class BadgePositioned {
  protected el: HTMLBadgePositionedElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BadgePositioned extends Components.BadgePositioned {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'badge-sizes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class BadgeSizes {
  protected el: HTMLBadgeSizesElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BadgeSizes extends Components.BadgeSizes {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'button-badges',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class ButtonBadges {
  protected el: HTMLButtonBadgesElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ButtonBadges extends Components.ButtonBadges {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'button-basic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class ButtonBasic {
  protected el: HTMLButtonBasicElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ButtonBasic extends Components.ButtonBasic {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'button-icon-styles',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class ButtonIconStyles {
  protected el: HTMLButtonIconStylesElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ButtonIconStyles extends Components.ButtonIconStyles {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'button-severities',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class ButtonSeverities {
  protected el: HTMLButtonSeveritiesElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ButtonSeverities extends Components.ButtonSeverities {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'button-sizes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class ButtonSizes {
  protected el: HTMLButtonSizesElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ButtonSizes extends Components.ButtonSizes {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'button-styles',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class ButtonStyles {
  protected el: HTMLButtonStylesElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ButtonStyles extends Components.ButtonStyles {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'button-templating',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class ButtonTemplating {
  protected el: HTMLButtonTemplatingElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ButtonTemplating extends Components.ButtonTemplating {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'checkbox-basic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  outputs: ['valueChange'],
  standalone: false
})
export class CheckboxBasic {
  protected el: HTMLCheckboxBasicElement;
  @Output() valueChange = new EventEmitter<CheckboxBasicCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { CheckboxBasicCustomEvent } from '@anywhere-ui/core';

export declare interface CheckboxBasic extends Components.CheckboxBasic {

  valueChange: EventEmitter<CheckboxBasicCustomEvent<boolean>>;
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
  outputs: ['valueChange'],
  standalone: false
})
export class CheckboxDisabled {
  protected el: HTMLCheckboxDisabledElement;
  @Output() valueChange = new EventEmitter<CheckboxDisabledCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { CheckboxDisabledCustomEvent } from '@anywhere-ui/core';

export declare interface CheckboxDisabled extends Components.CheckboxDisabled {

  valueChange: EventEmitter<CheckboxDisabledCustomEvent<boolean>>;
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
  outputs: ['valueChange'],
  standalone: false
})
export class CheckboxDynamic {
  protected el: HTMLCheckboxDynamicElement;
  @Output() valueChange = new EventEmitter<CheckboxDynamicCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { CheckboxDynamicCustomEvent } from '@anywhere-ui/core';

export declare interface CheckboxDynamic extends Components.CheckboxDynamic {

  valueChange: EventEmitter<CheckboxDynamicCustomEvent<boolean>>;
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
  outputs: ['valueChange'],
  standalone: false
})
export class CheckboxGroup {
  protected el: HTMLCheckboxGroupElement;
  @Output() valueChange = new EventEmitter<CheckboxGroupCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { CheckboxGroupCustomEvent } from '@anywhere-ui/core';

export declare interface CheckboxGroup extends Components.CheckboxGroup {

  valueChange: EventEmitter<CheckboxGroupCustomEvent<boolean>>;
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
  outputs: ['valueChange'],
  standalone: false
})
export class CheckboxLabel {
  protected el: HTMLCheckboxLabelElement;
  @Output() valueChange = new EventEmitter<CheckboxLabelCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { CheckboxLabelCustomEvent } from '@anywhere-ui/core';

export declare interface CheckboxLabel extends Components.CheckboxLabel {

  valueChange: EventEmitter<CheckboxLabelCustomEvent<boolean>>;
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
  outputs: ['valueChange'],
  standalone: false
})
export class CheckboxReadonly {
  protected el: HTMLCheckboxReadonlyElement;
  @Output() valueChange = new EventEmitter<CheckboxReadonlyCustomEvent<boolean>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


import type { CheckboxReadonlyCustomEvent } from '@anywhere-ui/core';

export declare interface CheckboxReadonly extends Components.CheckboxReadonly {

  valueChange: EventEmitter<CheckboxReadonlyCustomEvent<boolean>>;
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
  standalone: false
})
export class DropdownBasic {
  protected el: HTMLDropdownBasicElement;
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
  standalone: false
})
export class DropdownDisabled {
  protected el: HTMLDropdownDisabledElement;
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
  standalone: false
})
export class DropdownFilter {
  protected el: HTMLDropdownFilterElement;
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
  standalone: false
})
export class DropdownTemplate {
  protected el: HTMLDropdownTemplateElement;
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
  standalone: false
})
export class DropdownVirtualScroll {
  protected el: HTMLDropdownVirtualScrollElement;
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
  selector: 'input-number-buttons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class InputNumberButtons {
  protected el: HTMLInputNumberButtonsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputNumberButtons extends Components.InputNumberButtons {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'input-number-currency',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class InputNumberCurrency {
  protected el: HTMLInputNumberCurrencyElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputNumberCurrency extends Components.InputNumberCurrency {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'input-number-disabled',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class InputNumberDisabled {
  protected el: HTMLInputNumberDisabledElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputNumberDisabled extends Components.InputNumberDisabled {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'input-number-float-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class InputNumberFloatLabel {
  protected el: HTMLInputNumberFloatLabelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputNumberFloatLabel extends Components.InputNumberFloatLabel {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'input-number-locale',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class InputNumberLocale {
  protected el: HTMLInputNumberLocaleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputNumberLocale extends Components.InputNumberLocale {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'input-number-numeral',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class InputNumberNumeral {
  protected el: HTMLInputNumberNumeralElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputNumberNumeral extends Components.InputNumberNumeral {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'input-number-prefix-and-suffix',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class InputNumberPrefixAndSuffix {
  protected el: HTMLInputNumberPrefixAndSuffixElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputNumberPrefixAndSuffix extends Components.InputNumberPrefixAndSuffix {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'input-number-vertical',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class InputNumberVertical {
  protected el: HTMLInputNumberVerticalElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputNumberVertical extends Components.InputNumberVertical {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'input-switch-basic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class InputSwitchBasic {
  protected el: HTMLInputSwitchBasicElement;
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
  standalone: false
})
export class InputSwitchDisabled {
  protected el: HTMLInputSwitchDisabledElement;
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
  standalone: false
})
export class InputSwitchPreselection {
  protected el: HTMLInputSwitchPreselectionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputSwitchPreselection extends Components.InputSwitchPreselection {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'input-text-basic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class InputTextBasic {
  protected el: HTMLInputTextBasicElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputTextBasic extends Components.InputTextBasic {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'input-text-disabled',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class InputTextDisabled {
  protected el: HTMLInputTextDisabledElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputTextDisabled extends Components.InputTextDisabled {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'input-text-float-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class InputTextFloatLabel {
  protected el: HTMLInputTextFloatLabelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputTextFloatLabel extends Components.InputTextFloatLabel {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'input-text-icons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class InputTextIcons {
  protected el: HTMLInputTextIconsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputTextIcons extends Components.InputTextIcons {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'input-textarea-auto-resize',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class InputTextareaAutoResize {
  protected el: HTMLInputTextareaAutoResizeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputTextareaAutoResize extends Components.InputTextareaAutoResize {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'input-textarea-basic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class InputTextareaBasic {
  protected el: HTMLInputTextareaBasicElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputTextareaBasic extends Components.InputTextareaBasic {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'input-textarea-disabled',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class InputTextareaDisabled {
  protected el: HTMLInputTextareaDisabledElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputTextareaDisabled extends Components.InputTextareaDisabled {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'input-textarea-float-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class InputTextareaFloatLabel {
  protected el: HTMLInputTextareaFloatLabelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InputTextareaFloatLabel extends Components.InputTextareaFloatLabel {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'listbox-basic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class ListboxBasic {
  protected el: HTMLListboxBasicElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ListboxBasic extends Components.ListboxBasic {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'listbox-disabled',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class ListboxDisabled {
  protected el: HTMLListboxDisabledElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ListboxDisabled extends Components.ListboxDisabled {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'listbox-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class ListboxFilter {
  protected el: HTMLListboxFilterElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ListboxFilter extends Components.ListboxFilter {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'listbox-grouping',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class ListboxGrouping {
  protected el: HTMLListboxGroupingElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ListboxGrouping extends Components.ListboxGrouping {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'listbox-multiple',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class ListboxMultiple {
  protected el: HTMLListboxMultipleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ListboxMultiple extends Components.ListboxMultiple {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'listbox-template',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class ListboxTemplate {
  protected el: HTMLListboxTemplateElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ListboxTemplate extends Components.ListboxTemplate {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'listbox-virtual-scroll',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class ListboxVirtualScroll {
  protected el: HTMLListboxVirtualScrollElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ListboxVirtualScroll extends Components.ListboxVirtualScroll {}


@ProxyCmp({
  inputs: ['textId', 'textTitle']
})
@Component({
  selector: 'ripple-effect-basic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['textId', 'textTitle'],
  standalone: false
})
export class RippleEffectBasic {
  protected el: HTMLRippleEffectBasicElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RippleEffectBasic extends Components.RippleEffectBasic {}


