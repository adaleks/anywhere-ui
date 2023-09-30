# any-input-switch



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description                                                                                                     | Type      | Default                         |
| --------------- | ----------------- | --------------------------------------------------------------------------------------------------------------- | --------- | ------------------------------- |
| `anyStyle`      | `any-style`       | Inline style of the component.                                                                                  | `any`     | `null`                          |
| `anyTabIndex`   | `any-tab-index`   | Index of the element in tabbing order                                                                           | `number`  | `0`                             |
| `ariaLabeledBy` | `aria-labeled-by` | Establishes relationships between the component and label(s) where its value should be one or more element IDs. | `string`  | `null`                          |
| `checked`       | `checked`         | If `true`, the input-switch is selected.                                                                        | `boolean` | `false`                         |
| `disabled`      | `disabled`        | When present, it specifies that the element should be disabled.                                                 | `boolean` | `false`                         |
| `falseValue`    | `false-value`     | Value in unchecked state.                                                                                       | `any`     | `false`                         |
| `inputId`       | `input-id`        | Identifier of the focus input to match a label defined for the component.                                       | `string`  | ``any-isw-${inputSwitchIds++}`` |
| `name`          | `name`            | Name of the checkbox group.                                                                                     | `string`  | `this.inputId`                  |
| `readonly`      | `readonly`        | When present, it specifies that the component cannot be edited.                                                 | `boolean` | `false`                         |
| `styleClass`    | `style-class`     | Style class of the component.                                                                                   | `any`     | `null`                          |
| `trueValue`     | `true-value`      | Value in checked state.                                                                                         | `any`     | `true`                          |


## Events

| Event         | Description                                        | Type               |
| ------------- | -------------------------------------------------- | ------------------ |
| `aOnBlur`     | Emitted when the toggle loses focus.               | `CustomEvent<any>` |
| `aOnFocus`    | Emitted when the toggle has focus.                 | `CustomEvent<any>` |
| `valueChange` | Callback to invoke when value of dropdown changes. | `CustomEvent<any>` |


## Dependencies

### Used by

 - [app-config](../app-showcase/config/app-config)

### Graph
```mermaid
graph TD;
  app-config --> any-input-switch
  style any-input-switch fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love by **AdaleksTech!***
