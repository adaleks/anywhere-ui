# any-input-text



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                                                                | Type      | Default                          |
| ------------------- | --------------------- | ------------------------------------------------------------------------------------------ | --------- | -------------------------------- |
| `aTitle`            | `a-title`             | Title text of the input text.                                                              | `string`  | `undefined`                      |
| `anyAriaRequired`   | `any-aria-required`   | Used to indicate that user input is required on an element before a form can be submitted. | `boolean` | `undefined`                      |
| `anyTabIndex`       | `any-tab-index`       | Specifies tab order of the element.                                                        | `string`  | `undefined`                      |
| `autocomplete`      | `autocomplete`        | Used to define a string that autocomplete attribute the current element.                   | `string`  | `undefined`                      |
| `disabled`          | `disabled`            | When present, it specifies that the element should be disabled                             | `boolean` | `false`                          |
| `floatLabel`        | `float-label`         | When enabled, the label will have floating effect on input text focus                      | `boolean` | `false`                          |
| `inputClass`        | `input-class`         | Inline style of the element                                                                | `string`  | `null`                           |
| `inputHolderClass`  | `input-holder-class`  | The class of input holder element                                                          | `string`  | `null`                           |
| `inputId`           | `input-id`            | Identifier of the focus input to match a label defined for the component.                  | `string`  | ``any-input-text-${inputIds++}`` |
| `inputStyle`        | `input-style`         | Inline style of the element                                                                | `any`     | `null`                           |
| `inputWrapperClass` | `input-wrapper-class` | The class of input wrapper element                                                         | `string`  | `null`                           |
| `label`             | `label`               | Label of the input text                                                                    | `string`  | `null`                           |
| `leftIconClass`     | `left-icon-class`     | The class of left icon wrapper element                                                     | `string`  | `null`                           |
| `maxlength`         | `maxlength`           | Maximum number of character allows in the input field.                                     | `number`  | `undefined`                      |
| `name`              | `name`                | Name of the input text.                                                                    | `string`  | `this.inputId`                   |
| `placeholder`       | `placeholder`         | Default text to display when no value in input text                                        | `string`  | `null`                           |
| `readonly`          | `readonly`            | When present, it specifies that the element value cannot be changed                        | `boolean` | `false`                          |
| `required`          | `required`            | When present, it specifies that an input field is required.                                | `boolean` | `undefined`                      |
| `rightIconClass`    | `right-icon-class`    | The class of right icon wrapper element                                                    | `string`  | `null`                           |
| `size`              | `size`                | Size of the input field.                                                                   | `number`  | `undefined`                      |
| `value`             | `value`               | Value of the input text                                                                    | `string`  | `null`                           |


## Events

| Event         | Description                                         | Type               |
| ------------- | --------------------------------------------------- | ------------------ |
| `valueChange` | Callback to invoke when value of input text changes | `CustomEvent<any>` |


## Methods

### `getInputRef() => Promise<HTMLInputElement>`



#### Returns

Type: `Promise<HTMLInputElement>`




## Shadow Parts

| Part              | Description |
| ----------------- | ----------- |
| `"any-inputtext"` |             |


## Dependencies

### Used by

 - [any-input-number](../input-number)

### Graph
```mermaid
graph TD;
  any-input-number --> any-input-text
  style any-input-text fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love by **AdaleksTech!***
