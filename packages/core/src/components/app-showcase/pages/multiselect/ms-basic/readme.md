# ms-basic



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
| `textId`    | `text-id`    |             | `string` | `undefined` |
| `textTitle` | `text-title` |             | `string` | `undefined` |


## Dependencies

### Depends on

- [app-docsectiontext](../../../doc/app-docsectiontext)
- [any-multiselect](../../../../multiselect)
- [app-code](../../../doc/app-code)

### Graph
```mermaid
graph TD;
  ms-basic --> app-docsectiontext
  ms-basic --> any-multiselect
  ms-basic --> app-code
  any-multiselect --> any-overlay
  any-multiselect --> any-listbox
  any-listbox --> any-checkbox
  any-listbox --> any-ripple-effect
  any-listbox --> any-input-text
  any-listbox --> any-virtual-scroller
  app-code --> any-button
  any-button --> any-badge
  any-button --> any-ripple-effect
  style ms-basic fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love by **AdaleksTech!***
