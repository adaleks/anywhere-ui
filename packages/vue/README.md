# AnywhereUI Web Components for Vue 3

These are AnywhereUI Web Components specifically build for Vue 3.

## Usage

Add this package to your project:

```shell
npm install @anywhere-ui/vue
```

Or:

```shell
yarn add @anywhere-ui/vue
```

Edit the `main.js` file like this:

```js
import { createApp } from "vue";
import App from "./App.vue";
import { applyPolyfills, defineCustomElements } from "@anywhere-ui/core/loader";

const app = createApp(App);

applyPolyfills().then(() => {
  defineCustomElements().then(() => {
    app.mount("#app");
  });
});
```

_This is needed because `defineCustomElements` is async. Otherwise the Vue 3 mount is ran before the custom elements are fully defined, resulting in Vue 3 not correctly binding object/array values on load._

Import the component(s) you want to use:

```js
import { AnyCheckbox } from "@anywhere-ui/vue";
```

Use it in your template as any Vue component:

```jsx
<AnyCheckbox checked="true" label="Vue"></AnyCheckbox>
```

## Build

```bash
npm run build
```

## How to release a new version

- Build the core package
- Run build on this package
- Publish
