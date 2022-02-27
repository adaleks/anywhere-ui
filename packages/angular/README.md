# AnywhereUI - Angular

Angular has a pretty good story for integration with web components but there are a few issues with the developer experience. If you want to know what the story is without the bindings go here: https://stenciljs.com/docs/angular.

With bindings the web components get wrapped in an Angular component and then immediately become available as Angular Components. Some of the advantages of doing this are that you get types for your components and you also get the ability to use ngmodel on inputs. Your developers then consuming your web components from Angular applications import an actual Angular Library and to them it feels as though they are interacting with Angular components.

## Build

Run:

```bash
ng build anywhere-ui
```

to build the project. The build artifacts will be stored in the `dist/` directory.

## How to release a new version

- Build the core package
- Run build on this package
- After building your library with `ng build anywhere-ui`, go to the dist folder `cd dist/anywhere-ui` and run `npm publish`.

## Running unit tests

Run `ng test anywhere-ui` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
