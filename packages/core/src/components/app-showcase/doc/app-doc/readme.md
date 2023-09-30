# app-doc



<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute     | Description | Type       | Default     |
| -------------------------- | ------------- | ----------- | ---------- | ----------- |
| `apiDocs` _(required)_     | --            |             | `string[]` | `undefined` |
| `description` _(required)_ | `description` |             | `string`   | `undefined` |
| `docTitle`                 | `doc-title`   |             | `string`   | `undefined` |
| `docs` _(required)_        | --            |             | `any[]`    | `undefined` |
| `githubPage` _(required)_  | `github-page` |             | `string`   | `undefined` |
| `header` _(required)_      | `header`      |             | `string`   | `undefined` |


## Dependencies

### Depends on

- [any-button](../../../button)
- [app-docsection](../app-docsection)
- [app-docsection-nav](../app-docsection-nav)
- [app-docapisection](../app-docapisection)

### Graph
```mermaid
graph TD;
  app-doc --> any-button
  app-doc --> app-docsection
  app-doc --> app-docsection-nav
  app-doc --> app-docapisection
  any-button --> any-badge
  any-button --> any-ripple-effect
  app-docapisection --> app-docsection
  app-docapisection --> app-docsection-nav
  style app-doc fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love by **AdaleksTech!***
