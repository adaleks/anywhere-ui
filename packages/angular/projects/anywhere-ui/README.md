# @anywhere-ui/angular

AnywhereUI integration for Angular apps.

@anywhere-ui/angular combines the core AnywhereUI experience with the tooling and APIs that are tailored to Angular Developers.

## Angular

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
    AnywhereUiModule.forRoot(),
  ],
  ...
})
export class AppModule { }
```

## Config

AnywhereUI Config provides a way to change the properties of components globally across an app. It can set the ripple effect, app mode, animations, and more.

### Global Config

To override the initial AnywhereUI config for the app, provide a config in `AnywhereUiModule.forRoot` in the `app.module.ts` file.

```ts
import { AnywhereUiModule } from '@anywhere-ui/angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    AnywhereUiModule.forRoot({
      rippleEffect: false,
    }),
    AppRoutingModule
  ],
  ...
})
```

## Config Options

Below is a list of config options that AnywhereUI uses.

| Config       | Type    | Default | Description                                     |
| ------------ | ------- | ------- | ----------------------------------------------- |
| rippleEffect | boolean | true    | If `true` adds ripple effect to the components. |
