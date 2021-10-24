<h1 align="center">Welcome to @anywhere-ui/core 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@anywhere-ui/core" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@anywhere-ui/core.svg">
  </a>
  <a href="https://github.com/adaleks/anywhere-ui#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/adaleks/anywhere-ui/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/adaleks/anywhere-ui/blob/main/LICENSE" target="_blank">
    <img alt="NPM" src="https://img.shields.io/npm/l/@anywhere-ui/core">
  </a>
</p>

> AnywhereUi is a library of rich WEB Components.

## Install

```sh
npm install @anywhere-ui/core
```

## Features

- Tiny, highly optimized components built with [Stencil](https://stenciljs.com/)
- No build or compiling required
- Simply add the static files to any project
- Lazy-loaded components without configuration
- Asynchronous rendering
- Theming through CSS Variables

## Usage

`JavaScript`

Integrating a anywhere-ui component to a project without a JavaScript framework is straight forward. If you're using a simple HTML page, you can add your component via a script tag. For example, if we published a component to npm, we could load the component through a CDN like this:

```html
<html>
  <head>
    <script src="https://unpkg.com/@anywhere-ui/core@latest/dist/anywhere-ui/anywhere-ui.js"></script>
    <link
      href="https://unpkg.com/@anywhere-ui/core@latest/dist/anywhere-ui/anywhere-ui.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <any-checkbox></any-checkbox>
  </body>
</html>
```

Alternatively, if you wanted to take advantage of ES Modules, you could include the components using an import statement. Note that type="module" only works in modern browsers (not available in IE11 or Edge 12-18).

```html
<html>
  <head>
    <script type="module">
      import { defineCustomElements } from "https://unpkg.com/@anywhere-ui/core@latest/loader";
      defineCustomElements();
    </script>
    <link
      href="https://unpkg.com/@anywhere-ui/core@latest/dist/anywhere-ui/anywhere-ui.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <any-checkbox></any-checkbox>
  </body>
</html>
```

## Framework Bindings

The `@anywhere-ui/core` package can by used in simple HTML, or by vanilla JavaScript without any framework at all. AnywhereUI also has packages that make it easier to integrate AnywhereUI into a framework's traditional ecosystem and patterns. (However, at the lowest-level framework bindings are still just using AnywhereUI Core and Web Components).

- [@anywhere-ui/angular](https://www.npmjs.com/package/@anywhere-ui/angular)
- [@anywhere-ui/vue](https://www.npmjs.com/package/@anywhere-ui/vue)
- [@anywhere-ui/react](https://www.npmjs.com/package/@anywhere-ui/react)

## Author

👤 **Goran Jovanovic**

- Github: [@gjovanovicst](https://github.com/gjovanovicst)
- LinkedIn: [@goran-jovanovic-11a51456](https://linkedin.com/in/goran-jovanovic-11a51456)

## Contribute

If you would like to contribute, you are welcome. Clone repository and open pull request.

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Adaleks Technology](https://github.com/adaleks).<br />
This project is [MIT](https://github.com/adaleks/anywhere-ui/blob/main/LICENSE) licensed.
