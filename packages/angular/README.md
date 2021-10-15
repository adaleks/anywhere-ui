# Angular

Angular has a pretty good story for integration with web components but there are a few issues with the developer experience. If you want to know what the story is without the bindings go here: https://stenciljs.com/docs/angular.

With bindings the web components get wrapped in an Angular component and then immediately become available as Angular Components. Some of the advantages of doing this are that you get types for your components and you also get the ability to use ngmodel on inputs. Your developers then consuming your web components from Angular applications import an actual Angular Library and to them it feels as though they are interacting with Angular components.

## Install

```bash
npm install @anywhere-ui/angular
```

## Style

The css dependencies should be added in `angular.json` file

```json
{
  ...

  "build": {
    ...

    "options": {
      "styles": [
          "./node_modules/@anywhere-ui/core/dist/anywhere-ui/anywhere-ui.css"
      ],
    }
  },
  ...

  "test": {
    "styles": [
        "./node_modules/@anywhere-ui/core/dist/anywhere-ui/anywhere-ui.css"
    ],
  }

  ...

}
```

## Usage

```ts
import { AnywhereUiModule } from '@anywhere-ui/angular';

@NgModule({
  ...
  imports: [
    AnywhereUiModule
  ],
  ...
})
export class AppModule { }
```

## Build

```bash
ng build --configuration=production
```

## How to release a new version

- Build the core package
- Run build on this package
- Publish
