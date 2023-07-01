import { CommonModule, DOCUMENT } from '@angular/common';
import {
  ModuleWithProviders,
  APP_INITIALIZER,
  NgModule,
  NgZone,
  InjectionToken,
} from '@angular/core';
import { AnywhereUIConfig } from '@anywhere-ui/core';
import { appInitialize } from './app-initialize';
import { ConfigToken } from './providers/config';

import { BooleanValueAccessor } from './directives/boolean-value-accessor';
import { NumericValueAccessor } from './directives/number-value-accessor';
import { RadioValueAccessor } from './directives/radio-value-accessor';
import { SelectValueAccessor } from './directives/select-value-accessor';
import { TextValueAccessor } from './directives/text-value-accessor';

import {
  AnyDropdown,
  AnyListbox,
  AnyVirtualScroller,
  AnyCheckbox,
  AnyInputText,
  AnyButton,
  AnyTabView,
  AnyTabPanel,
  AnyBadge,
  AnyBadgeOverlay,
  AnyRippleEffect,
  AnyInputSwitch,
  AnyRadioButton,
  AnyRadioGroup,
  AnyInputNumber,
  AnyInputTextarea,
  AnyMultiselect,
  AnyOverlay,
} from './directives/proxies';

// defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  AnyDropdown,
  AnyListbox,
  AnyVirtualScroller,
  AnyCheckbox,
  AnyInputText,
  AnyButton,
  AnyTabView,
  AnyTabPanel,
  AnyBadge,
  AnyBadgeOverlay,
  AnyRippleEffect,
  AnyInputSwitch,
  AnyRadioButton,
  AnyRadioGroup,
  AnyInputNumber,
  AnyInputTextarea,
  AnyMultiselect,
  AnyOverlay,

  // Value Accessors
  BooleanValueAccessor,
  NumericValueAccessor,
  RadioValueAccessor,
  SelectValueAccessor,
  TextValueAccessor,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [CommonModule],
})
export class AnywhereUiModule {
  static forRoot(
    config?: AnywhereUIConfig
  ): ModuleWithProviders<AnywhereUiModule> {
    return {
      ngModule: AnywhereUiModule,
      providers: [
        {
          provide: ConfigToken,
          useValue: config,
        },
        // {
        //   provide: ConfigToken,
        //   useValue: config,
        // },
        {
          provide: APP_INITIALIZER,
          useFactory: appInitialize,
          multi: true,
          deps: [ConfigToken, DOCUMENT, NgZone],
        },
      ],
    };
  }
}
