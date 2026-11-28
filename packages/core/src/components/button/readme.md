# any-button



<!-- Auto Generated Below -->


## Overview

Button is an extension to the standard button element with icons and theming.

## Properties

| Property                | Attribute                  | Description                                                       | Type                                     | Default              |
| ----------------------- | -------------------------- | ----------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| `anyStyle`              | `any-style`                | Inline style of the element.                                      | `any`                                    | `null`               |
| `badge`                 | `badge`                    | Value of the badge.                                               | `string`                                 | `null`               |
| `badgeClass`            | `badge-class`              | Style class of the badge.                                         | `string`                                 | `null`               |
| `disabled`              | `disabled`                 | When present, it specifies that the component should be disabled. | `boolean`                                | `false`              |
| `icon`                  | `icon`                     | Name of the icon.                                                 | `string`                                 | `null`               |
| `iconHeight`            | `icon-height`              | Height of the icon                                                | `number`                                 | `null`               |
| `iconPos`               | `icon-pos`                 | Position of the icon, valid values are "left" and "right".        | `"bottom" \| "left" \| "right" \| "top"` | `"left"`             |
| `iconWidth`             | `icon-width`               | Width of the icon                                                 | `number`                                 | `null`               |
| `label`                 | `label`                    | Text of the button.                                               | `string`                                 | `null`               |
| `loading`               | `loading`                  | Whether the button is in loading state.                           | `boolean`                                | `false`              |
| `loadingIcon`           | `loading-icon`             | Icon to display in loading state.                                 | `string`                                 | `"fa-solid:spinner"` |
| `loadingIconStyleClass` | `loading-icon-style-class` | Style class of the icon element                                   | `string`                                 | `"any-spin"`         |
| `styleClass`            | `style-class`              | Style class of the element.                                       | `string`                                 | `null`               |
| `type`                  | `type`                     | Type of the button.                                               | `"button" \| "reset" \| "submit"`        | `"button"`           |


## Events

| Event      | Description                                  | Type               |
| ---------- | -------------------------------------------- | ------------------ |
| `aOnBlur`  | Callback to execute when button loses focus. | `CustomEvent<any>` |
| `aOnClick` | Callback to execute when button is clicked.  | `CustomEvent<any>` |
| `aOnFocus` | Callback to execute when button is focused.  | `CustomEvent<any>` |


## Methods

### `getButtonRef() => Promise<HTMLButtonElement>`



#### Returns

Type: `Promise<HTMLButtonElement>`




## Slots

| Slot        | Description                                |
| ----------- | ------------------------------------------ |
| `"content"` | Custom content rendered inside the button. |


## Shadow Parts

| Part                 | Description                |
| -------------------- | -------------------------- |
| `"any-button"`       | The native button element. |
| `"any-button-label"` | The label element.         |


## Dependencies

### Used by

 - [any-input-number](../input-number)
 - [app-code](../app-showcase/doc/app-code)
 - [app-doc](../app-showcase/doc/app-doc)
 - [badge-inline](../app-showcase/pages/badge/badge-inline)
 - [button-badges](../app-showcase/pages/button/button-badges)
 - [button-basic](../app-showcase/pages/button/button-basic)
 - [button-icon-styles](../app-showcase/pages/button/button-icon-styles)
 - [button-severities](../app-showcase/pages/button/button-severities)
 - [button-sizes](../app-showcase/pages/button/button-sizes)
 - [button-styles](../app-showcase/pages/button/button-styles)
 - [button-templating](../app-showcase/pages/button/button-templating)
 - [tab-view-programmatic](../app-showcase/pages/tab-view/tab-view-programmatic)

### Depends on

- [any-badge](../badge)
- [any-ripple-effect](../ripple-effect)

### Graph
```mermaid
graph TD;
  any-button --> any-badge
  any-button --> any-ripple-effect
  any-input-number --> any-button
  app-code --> any-button
  app-doc --> any-button
  badge-inline --> any-button
  button-badges --> any-button
  button-basic --> any-button
  button-icon-styles --> any-button
  button-severities --> any-button
  button-sizes --> any-button
  button-styles --> any-button
  button-templating --> any-button
  tab-view-programmatic --> any-button
  style any-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love by **AdaleksTech!***
