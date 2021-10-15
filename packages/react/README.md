# React

React has a difficult story with web components. Their documentation shows the simplest possible example but more than likely you will want to pass more than strings to your component. If you want to know what the story is without the bindings go here: https://stenciljs.com/docs/react.

With bindings the web components get wrapped in a React component and then immediately become available as React Components. Some of the advantages of doing this are that you get types for your components. One of the main issues with React is that react does not propertly pass properties to web components. Out of the box React can only pass strings and numbers to components and it cannot listen to custom events. With the bindings the components appear as though they are React components and all properties get passed correctly including functions, objects, and arrays. The bindings also account for custom events by creating a prop called ‘on’. These allow React developers to interact with the web components as though they are React components.

## AnywhereUI components for React

These are AnyehereUI Web Components specifically build for React.

## Usage

Add this package to your project:

```shell
npm install @anywhere-ui/react
```

Or:

```shell
yarn add @anywhere-ui/react
```

Import the component(s) you want to use:

```js
import { AnyCheckbox } from "@anywhere-ui/react";
```

Use it in your JSX as any React component:

```html
<AnyCheckbox checked="true" label="React"></AnyCheckbox>
```

## Build

```bash
npm run build
```

## How to release a new version

- Build the core package
- Run build on this package
- Publish
