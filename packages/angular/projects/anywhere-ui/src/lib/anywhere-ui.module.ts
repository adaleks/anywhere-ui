import { NgModule } from '@angular/core';
import { defineCustomElements } from '@anywhere-ui/core/loader';

import { BooleanValueAccessor } from './directives/boolean-value-accessor';
// import { NumericValueAccessor } from './directives/number-value-accessor';
// import { RadioValueAccessor } from './directives/radio-value-accessor';
import { SelectValueAccessor } from './directives/select-value-accessor';
import { TextValueAccessor } from './directives/text-value-accessor';

import {
  AnyDropdown,
  AnyListbox,
  AnyVirtualScroller,
  AnyCheckbox,
  AnyInputText,
} from './directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  AnyDropdown,
  AnyListbox,
  AnyVirtualScroller,
  AnyCheckbox,
  AnyInputText,

  // Value Accessors
  BooleanValueAccessor,
  // NumericValueAccessor,
  // RadioValueAccessor,
  SelectValueAccessor,
  TextValueAccessor,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
})
export class AnywhereUiModule {}
