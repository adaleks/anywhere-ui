# vs-prepopulated



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
| `textId`    | `text-id`    |             | `string` | `undefined` |
| `textTitle` | `text-title` |             | `string` | `undefined` |


## Dependencies

### Depends on

- [app-docsectiontext](../../../doc/app-docsectiontext)
- [any-virtual-scroller](../../../../virtual-scroller)
- [any-dropdown](../../../../dropdown)
- [app-code](../../../doc/app-code)

### Graph
```mermaid
graph TD;
  vs-prepopulated --> app-docsectiontext
  vs-prepopulated --> any-virtual-scroller
  vs-prepopulated --> any-dropdown
  vs-prepopulated --> app-code
  any-dropdown --> any-overlay
  any-dropdown --> any-listbox
  any-listbox --> any-checkbox
  any-listbox --> any-ripple-effect
  any-listbox --> any-input-text
  any-listbox --> any-virtual-scroller
  app-code --> any-button
  any-button --> any-badge
  any-button --> any-ripple-effect
  style vs-prepopulated fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love by **AdaleksTech!***
