/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@anywhere-ui/core';

import { AnyCheckbox as IAnyCheckbox } from '@anywhere-ui/core/dist/types/components/checkbox/checkbox';
export declare interface AnyCheckbox extends Components.AnyCheckbox {}
@ProxyCmp({
  inputs: ['anyStyle', 'binary', 'checkboxIcon', 'checked', 'disabled', 'inputId', 'label', 'labelStyleClass', 'name', 'readonly', 'styleClass', 'value'],
  methods: ['inputFocus']
})
@Component({
  selector: 'any-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['anyStyle', 'binary', 'checkboxIcon', 'checked', 'disabled', 'inputId', 'label', 'labelStyleClass', 'name', 'readonly', 'styleClass', 'value'],
  outputs: ['valueChange', 'aOnFocus', 'aOnBlur']
})
export class AnyCheckbox {
  /** Callback to invoke when value of dropdown changes. */
  valueChange!: IAnyCheckbox['valueChange'];
  /** Emitted when the toggle has focus. */
  aOnFocus!: IAnyCheckbox['aOnFocus'];
  /** Emitted when the toggle loses focus. */
  aOnBlur!: IAnyCheckbox['aOnBlur'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'aOnFocus', 'aOnBlur']);
  }
}

import { AnyDropdown as IAnyDropdown } from '@anywhere-ui/core/dist/types/components/dropdown/dropdown';
export declare interface AnyDropdown extends Components.AnyDropdown {}
@ProxyCmp({
  inputs: ['anyStyle', 'anyTabIndex', 'autoZIndex', 'baseZIndex', 'clearIcon', 'disabled', 'dropdownIcon', 'hideAnimation', 'inputId', 'name', 'optionLabel', 'optionValue', 'options', 'panelScrollHeight', 'placeholder', 'readonly', 'showAnimation', 'showClear', 'value', 'virtualScroll']
})
@Component({
  selector: 'any-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['anyStyle', 'anyTabIndex', 'autoZIndex', 'baseZIndex', 'clearIcon', 'disabled', 'dropdownIcon', 'hideAnimation', 'inputId', 'name', 'optionLabel', 'optionValue', 'options', 'panelScrollHeight', 'placeholder', 'readonly', 'showAnimation', 'showClear', 'value', 'virtualScroll'],
  outputs: ['valueChange', 'aOnShow', 'aOnShowStart', 'aOnHide', 'aOnHideStart', 'aOnFocus', 'aOnBlur', 'aOnClick']
})
export class AnyDropdown {
  /** Callback to invoke when value of dropdown changes */
  valueChange!: IAnyDropdown['valueChange'];
  /** Callback to invoke when dropdown overlay gets visible */
  aOnShow!: IAnyDropdown['aOnShow'];
  /** Callback to invoke when dropdown overlay before gets visible */
  aOnShowStart!: IAnyDropdown['aOnShowStart'];
  /** Callback to invoke when dropdown overlay gets hidden */
  aOnHide!: IAnyDropdown['aOnHide'];
  /** Callback to invoke when dropdown overlay before gets hidden */
  aOnHideStart!: IAnyDropdown['aOnHideStart'];
  /** Callback to invoke when dropdown gets focus */
  aOnFocus!: IAnyDropdown['aOnFocus'];
  /** Callback to invoke when dropdown loses focus */
  aOnBlur!: IAnyDropdown['aOnBlur'];
  /** Callback to invoke when component is clicked */
  aOnClick!: IAnyDropdown['aOnClick'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'aOnShow', 'aOnShowStart', 'aOnHide', 'aOnHideStart', 'aOnFocus', 'aOnBlur', 'aOnClick']);
  }
}

import { AnyInputText as IAnyInputText } from '@anywhere-ui/core/dist/types/components/input-text/input-text';
export declare interface AnyInputText extends Components.AnyInputText {}
@ProxyCmp({
  inputs: ['disabled', 'floatLabel', 'inputId', 'inputWrapperClass', 'label', 'leftIconClass', 'name', 'placeholder', 'readonly', 'rightIconClass', 'value'],
  methods: ['getInputRef']
})
@Component({
  selector: 'any-input-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'floatLabel', 'inputId', 'inputWrapperClass', 'label', 'leftIconClass', 'name', 'placeholder', 'readonly', 'rightIconClass', 'value'],
  outputs: ['valueChange']
})
export class AnyInputText {
  /** Callback to invoke when value of input text changes */
  valueChange!: IAnyInputText['valueChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}

import { AnyListbox as IAnyListbox } from '@anywhere-ui/core/dist/types/components/listbox/listbox';
export declare interface AnyListbox extends Components.AnyListbox {}
@ProxyCmp({
  inputs: ['anyStyle', 'disabled', 'inputId', 'listStyle', 'name', 'optionLabel', 'optionValue', 'options', 'readonly', 'scrollerHeight', 'value', 'virtualScroll']
})
@Component({
  selector: 'any-listbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['anyStyle', 'disabled', 'inputId', 'listStyle', 'name', 'optionLabel', 'optionValue', 'options', 'readonly', 'scrollerHeight', 'value', 'virtualScroll'],
  outputs: ['valueChange']
})
export class AnyListbox {
  /** Callback to invoke when value of listbox changes */
  valueChange!: IAnyListbox['valueChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}

import { AnyVirtualScroller as IAnyVirtualScroller } from '@anywhere-ui/core/dist/types/components/virtual-scroller/virtual-scroller';
export declare interface AnyVirtualScroller extends Components.AnyVirtualScroller {}
@ProxyCmp({
  inputs: ['anyStyle', 'contentElemClass', 'contentElemTag', 'delay', 'itemElemClass', 'itemSize', 'itemTag', 'items', 'lazy', 'noDataText', 'rowsPerPage', 'scrollElemClass', 'scrollerHeight', 'styleClass']
})
@Component({
  selector: 'any-virtual-scroller',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['anyStyle', 'contentElemClass', 'contentElemTag', 'delay', 'itemElemClass', 'itemSize', 'itemTag', 'items', 'lazy', 'noDataText', 'rowsPerPage', 'scrollElemClass', 'scrollerHeight', 'styleClass'],
  outputs: ['scrollingProgress', 'clusterChanged', 'clusterWillChange', 'aOnLazyLoad', 'aOnItemClick']
})
export class AnyVirtualScroller {
  /** Will be called on scrolling. Returns progress position */
  scrollingProgress!: IAnyVirtualScroller['scrollingProgress'];
  /** Will be called right after replacing previous cluster with new one */
  clusterChanged!: IAnyVirtualScroller['clusterChanged'];
  /** Will be called right before replacing previous cluster with new one */
  clusterWillChange!: IAnyVirtualScroller['clusterWillChange'];
  /** Callback to invoke in lazy mode to load new data */
  aOnLazyLoad!: IAnyVirtualScroller['aOnLazyLoad'];
  /** Callback when item is clicked */
  aOnItemClick!: IAnyVirtualScroller['aOnItemClick'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['scrollingProgress', 'clusterChanged', 'clusterWillChange', 'aOnLazyLoad', 'aOnItemClick']);
  }
}
