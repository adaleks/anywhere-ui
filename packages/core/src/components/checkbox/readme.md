# any-checkbox



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                                                                                                                                                                                                                                  | Type      | Default                     |
| ----------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | --------------------------- |
| `anyStyle`        | `any-style`         | Inline style of the component.                                                                                                                                                                                                                               | `any`     | `null`                      |
| `binary`          | `binary`            | Allows to select a boolean value instead of multiple values.                                                                                                                                                                                                 | `boolean` | `false`                     |
| `checkboxIcon`    | `checkbox-icon`     | Icon class of the checkbox icon.                                                                                                                                                                                                                             | `string`  | `"fa-solid:check"`          |
| `checked`         | `checked`           | If `true`, the checkbox is selected.                                                                                                                                                                                                                         | `boolean` | `false`                     |
| `disabled`        | `disabled`          | When present, it specifies that the element should be disabled.                                                                                                                                                                                              | `boolean` | `false`                     |
| `inputId`         | `input-id`          | Identifier of the focus input to match a label defined for the component.                                                                                                                                                                                    | `string`  | ``any-cb-${checkboxIds++}`` |
| `label`           | `label`             | Label of the checkbox.                                                                                                                                                                                                                                       | `string`  | `null`                      |
| `labelStyleClass` | `label-style-class` | Style class of the label.                                                                                                                                                                                                                                    | `string`  | `null`                      |
| `name`            | `name`              | Name of the checkbox group.                                                                                                                                                                                                                                  | `string`  | `this.inputId`              |
| `readonly`        | `readonly`          | When present, it specifies that the component cannot be edited.                                                                                                                                                                                              | `boolean` | `false`                     |
| `styleClass`      | `style-class`       | Style class of the component.                                                                                                                                                                                                                                | `any`     | `null`                      |
| `value`           | `value`             | The value of the checkbox does not mean if it's checked or not, use the `checked` property for that.  The value of a checkbox is analogous to the value of an `<input type="checkbox">`, it's only used when the checkbox participates in a native `<form>`. | `any`     | `"on"`                      |


## Events

| Event         | Description                                        | Type               |
| ------------- | -------------------------------------------------- | ------------------ |
| `aOnBlur`     | Emitted when the toggle loses focus.               | `CustomEvent<any>` |
| `aOnFocus`    | Emitted when the toggle has focus.                 | `CustomEvent<any>` |
| `valueChange` | Callback to invoke when value of dropdown changes. | `CustomEvent<any>` |


## Methods

### `inputFocus() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
