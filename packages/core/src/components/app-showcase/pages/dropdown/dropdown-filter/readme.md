# dropdown-filter



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
| `textId`    | `text-id`    |             | `string` | `undefined` |
| `textTitle` | `text-title` |             | `string` | `undefined` |


## Dependencies

### Depends on

- [app-docsectiontext](../../../doc/app-docsectiontext)
- [any-dropdown](../../../../dropdown)
- [app-code](../../../doc/app-code)

### Graph
```mermaid
graph TD;
  dropdown-filter --> app-docsectiontext
  dropdown-filter --> any-dropdown
  dropdown-filter --> app-code
  any-dropdown --> any-overlay
  any-dropdown --> any-listbox
  any-listbox --> any-checkbox
  any-listbox --> any-input-text
  any-listbox --> any-ripple-effect
  any-listbox --> any-virtual-scroller
  app-code --> any-button
  any-button --> any-badge
  any-button --> any-ripple-effect
  style dropdown-filter fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love by **AdaleksTech!***
