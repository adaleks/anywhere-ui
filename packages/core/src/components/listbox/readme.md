# any-listbox



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description                                                                                                                                                                                                                                                       | Type      | Default                    |
| --------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------------------------- |
| `anyStyle`            | `any-style`             | Inline style of the element                                                                                                                                                                                                                                       | `any`     | `null`                     |
| `checkbox`            | `checkbox`              | When specified, allows selecting items with checkboxes                                                                                                                                                                                                            | `boolean` | `false`                    |
| `dataKey`             | `data-key`              | A property to uniquely identify a value in options                                                                                                                                                                                                                | `string`  | `null`                     |
| `disabled`            | `disabled`              | When present, it specifies that the element should be disabled                                                                                                                                                                                                    | `boolean` | `false`                    |
| `emptyFilterMessage`  | `empty-filter-message`  | Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.                                                                                                                                           | `string`  | `undefined`                |
| `emptyMessage`        | `empty-message`         | Text to display when there is no data. Defaults to global value in i18n translation configuration.                                                                                                                                                                | `string`  | `undefined`                |
| `filter`              | `filter`                | When specified, displays a filter input at header                                                                                                                                                                                                                 | `boolean` | `false`                    |
| `filterBy`            | `filter-by`             | When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.                                                                                                                                                            | `string`  | `null`                     |
| `filterLocale`        | `filter-locale`         | Locale to use in filtering. The default locale is the host environment's current locale                                                                                                                                                                           | `string`  | `undefined`                |
| `filterMatchMode`     | `filter-match-mode`     | Defines how the items are filtered, valid values are "contains" (default) "startsWith", "endsWith", "equals", "notEquals", "in", "lt", "lte", "gt" and "gte".                                                                                                     | `string`  | `"contains"`               |
| `filterValue`         | `filter-value`          | When specified, filter displays with this value.                                                                                                                                                                                                                  | `string`  | `null`                     |
| `group`               | `group`                 | Whether to display options as grouped when nested options are provided                                                                                                                                                                                            | `boolean` | `false`                    |
| `inputId`             | `input-id`              | Identifier of the focus input to match a label defined for the component.                                                                                                                                                                                         | `string`  | ``any-lb-${listboxIds++}`` |
| `listStyle`           | `list-style`            | Inline style of the list element                                                                                                                                                                                                                                  | `any`     | `null`                     |
| `metaKeySelection`    | `meta-key-selection`    | Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically. | `boolean` | `true`                     |
| `multiple`            | `multiple`              | When specified, allows selecting multiple values.                                                                                                                                                                                                                 | `boolean` | `false`                    |
| `name`                | `name`                  | Name of the dropdown input.                                                                                                                                                                                                                                       | `string`  | `this.inputId`             |
| `optionDisabled`      | `option-disabled`       | Name of the disabled field of an option                                                                                                                                                                                                                           | `string`  | `undefined`                |
| `optionGroupChildren` | `option-group-children` | Name of the options field of an option group                                                                                                                                                                                                                      | `string`  | `"items"`                  |
| `optionLabel`         | `option-label`          | Name of the label field of an option                                                                                                                                                                                                                              | `string`  | `"label"`                  |
| `optionValue`         | `option-value`          | Name of the value field of an option                                                                                                                                                                                                                              | `string`  | `"value"`                  |
| `options`             | --                      | An array of objects to display as the available options.                                                                                                                                                                                                          | `any[]`   | `null`                     |
| `readonly`            | `readonly`              | When present, it specifies that the element value cannot be changed                                                                                                                                                                                               | `boolean` | `false`                    |
| `scrollerHeight`      | `scroller-height`       | Max height of the content area in inline mode                                                                                                                                                                                                                     | `string`  | `"200px"`                  |
| `searchIcon`          | `search-icon`           | Icon class of the filter search input icon                                                                                                                                                                                                                        | `string`  | `"fa-solid:search"`        |
| `showToggleAll`       | `show-toggle-all`       | Whether header checkbox is shown in multiple mode                                                                                                                                                                                                                 | `boolean` | `true`                     |
| `value`               | `value`                 | Value of the listbox                                                                                                                                                                                                                                              | `any`     | `null`                     |
| `virtualScroll`       | `virtual-scroll`        | When present, list virtual scroller is enabled                                                                                                                                                                                                                    | `boolean` | `false`                    |


## Events

| Event         | Description                                      | Type                                        |
| ------------- | ------------------------------------------------ | ------------------------------------------- |
| `valueChange` | Callback to invoke when value of listbox changes | `CustomEvent<SelectChangeEventDetail<any>>` |


## Methods

### `setFilterInputFocus() => Promise<void>`

Sets focus on the native `textarea` in `ion-textarea`. Use this method instead of the global
`textarea.focus()`.

#### Returns

Type: `Promise<void>`




## Shadow Parts

| Part      | Description |
| --------- | ----------- |
| `"items"` |             |


## Dependencies

### Used by

 - [any-dropdown](../dropdown)
 - [any-multiselect](../multiselect)

### Depends on

- [any-checkbox](../checkbox)
- [any-input-text](../input-text)
- [any-ripple-effect](../ripple-effect)
- [any-virtual-scroller](../virtual-scroller)

### Graph
```mermaid
graph TD;
  any-listbox --> any-checkbox
  any-listbox --> any-input-text
  any-listbox --> any-ripple-effect
  any-listbox --> any-virtual-scroller
  any-dropdown --> any-listbox
  any-multiselect --> any-listbox
  style any-listbox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love by **AdaleksTech!***
