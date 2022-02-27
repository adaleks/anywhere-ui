# @anywhere-ui/vue

AnywhereUI integration for Vue 3 apps.

@anywhere-ui/vue combines the core AnywhereUI experience with the tooling and APIs that are tailored to Vue 3 Developers.

## AnywhereUI Web Components for Vue 3

These are AnywhereUI Web Components specifically build for Vue 3.

## Style

The css dependencies should be imported in `main.js` or if use typescript `main.ts` file

```ts
import "@anywhere-ui/core/dist/anywhere-ui/anywhere-ui.css";
```

## Usage

Add this package to your project:

```shell
npm install @anywhere-ui/vue
```

Or:

```shell
yarn add @anywhere-ui/vue
```

Edit the `main.js` or if use typescript `main.ts` file like this:

```ts
import { createApp } from "vue";
import App from "./App.vue";
import { AnywhereUIVue } from "@anywhere-ui/vue";

const app = createApp(rootComponent)
  .use(AnywhereUIVue as any)
  .use(router);

router.isReady().then(() => {
  app.mount("#app");
});
```

Import the component(s) you want to use:

```ts
import { AnyCheckbox } from "@anywhere-ui/vue";
```

Use it in your template as any Vue component:

```tsx
<AnyCheckbox checked="true" label="Vue"></AnyCheckbox>
```

## Config

AnywhereUI Config provides a way to change the properties of components globally across an app. It can set the ripple effect, app mode, animations, and more.

### Global Config

To override the initial AnywhereUI config for the app, provide your config object as an additional parameter when installing the `AnywhereUIVue` plugin:

```ts
import { AnywhereUIVue } from "@anywhere-ui/vue";

createApp(App).use(AnywhereUIVueVue as any, {
  rippleEffect: false,
});
```

## Config Options

Below is a list of config options that AnywhereUI uses.

| Config       | Type    | Default | Description                                     |
| ------------ | ------- | ------- | ----------------------------------------------- |
| rippleEffect | boolean | true    | If `true` adds ripple effect to the components. |

## Build

```bash
npm run build
```

## How to release a new version

- Build the core package
- Run build on this package
- Publish
