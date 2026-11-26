# AGENTS.md — AnywhereUI

Guidance for AI coding agents working in this repository.

## What this repo is

AnywhereUI is a suite of rich **Web Components** built with [Stencil](https://stenciljs.com/),
plus framework bindings and a documentation/showcase single-page app.

| Package            | Path                | npm name               | Notes                                                          |
| ------------------ | ------------------- | ---------------------- | -------------------------------------------------------------- |
| Core (components)  | `packages/core`     | `@anywhere-ui/core`    | Stencil library, namespace `anywhere-ui`, tags `any-*`          |
| Angular bindings   | `packages/angular`  | `@anywhere-ui/angular` | Angular 22 library in `projects/anywhere-ui`                    |
| React bindings     | `packages/react`    | `@anywhere-ui/react`   | React 19 wrappers, proxied from core                            |
| Vue bindings       | `packages/vue`      | `@anywhere-ui/vue`     | Vue 3 wrappers, proxied from core                               |

The showcase site (docs, demos, API tables) is built from `packages/core` and published to GitHub Pages.

## Layout (core)

- `packages/core/src/components/<name>/` — one folder per component: `<name>.tsx`, `<name>.scss`,
  `readme.md` (generated), `test/<name>.spec.tsx`, optional `test/<name>.e2e.ts`.
- `packages/core/src/components/app-showcase/` — components used by the docs pages
  (`app-code`, `app-doc`, `app-docapisection`, `app-docapitable`, `app-docsection*`, `app-config`,
  and `pages/<component>/<variant>/` demo wrappers).
- `packages/core/src/app/` — the showcase SPA: `App.js` (hand-written hash router),
  `views/<Page>/<Page>.html|js`, `data/`, `services/`, `scss/` (compiled to `css/app.css`).
- `packages/core/src/doc/docs.json` — generated API metadata consumed by the docs pages.
- `packages/core/stencil.config.ts` — components, bundles, plugins, output targets, dev server.
- `packages/core/src/themes/` — SCSS themes; `src/global/` — global script.
- `packages/core/www/` — build output of the showcase (git-ignored).

## Toolchain

- Node **26.0.0** (`.nvmrc`), npm **11** workspaces. `engines.node >= 22.22.3`.
  Angular 22 and lerna 10 require Node `^22.22.3 || ^24.15 || >=26`, so use Node 26.
- **Stencil 4.45**, `@stencil/sass` 3.3, Sass 1.108, TypeScript **6.0**.
- **Angular 22.3** (all `@angular/*`, ng-packagr 22), React **19.3**, Vue **3.5** (+ vue-router 5).
- Test runner: Stencil's integrated Jest runner with **jest 29** pinned (Stencil 4.45 requires it).

## Commands (repository root)

| Command                            | What it does                                                                 |
| ---------------------------------- | ---------------------------------------------------------------------------- |
| `npm install`                      | Install all workspaces                                                        |
| `npm start`                        | `npm -w @anywhere-ui/core run start`: Stencil dev watch+serve on **http://localhost:3333** + `sass --watch` for the showcase CSS |
| `npm run build`                    | `build.core` then `build.framework-bindings` (sequential per package)         |
| `npm run build.core`               | `stencil build --docs` (production build; regenerates proxies, docs, readmes)  |
| `npm run build.framework-bindings` | Builds `@anywhere-ui/angular`, then `react`, then `vue`                        |
| `npm run build.watch`              | Stencil dev watch+serve only                                                  |
| `npm run build-doc-json`           | Regenerates `src/doc/docs.json`                                               |
| `npm test`                         | Spec tests via `stencil test --spec` (Jest)                                   |
| `npm run generate`                 | Scaffold a component (bash script, needs bash)                                |

Root scripts intentionally use **npm workspaces**, not `lerna run`: `lerna run start` starts the
Stencil dev server but it never accepts connections (reproduced with lerna 10.1.3). Lerna 10 is kept
only for version/publish workflows (`lerna.json`, `nx.json`).

## Generated files — do not edit by hand

`stencil build` rewrites all of these:

- `packages/core/src/components.d.ts`
- `packages/core/src/doc/docs.json` (contains build timestamp + compiler versions, so every build dirties it)
- `packages/core/src/components/**/readme.md`
- `packages/angular/projects/anywhere-ui/src/lib/directives/proxies.ts` + `directives/index.ts` (`DIRECTIVES`)
- `packages/react/src/components.ts`
- `packages/vue/src/proxies.ts`

Change the component sources or `stencil.config.ts` and rebuild instead.

## Component conventions

- Tag `any-<name>`, `shadow: true`, `styleUrl: "<name>.scss"`, class `Any<Name>`, root wrapper
  `any-element` + `any-component`, CSS classes prefixed `any-`, exposed CSS shadow parts named `any-*`.
- Props are documented with JSDoc comments — these become the generated readmes and `docs.json`.
- Events use `@Event()` (`valueChange`, `aOnFocus`, …); Vue `v-model` mappings live in
  `vueComponentModels` in `stencil.config.ts` and must match the emitted event name (`valueChange`)
  and target prop (`value` / `checked`).
- Tests: `test/<name>.spec.tsx` using `newSpecPage` from `@stencil/core/testing`; e2e via Puppeteer
  (`*.e2e.ts`) — Puppeteer browsers are not downloaded by default here.
- Adding a showcase page touches: a demo component under `app-showcase/pages/`, a view under
  `src/app/views/`, a route in `src/app/App.js`, and a sidebar link in `src/index.html`.
- The showcase stylesheet hides `<html>` (`visibility: hidden`) to avoid a flash of unstyled content;
  `src/app/App.js` reveals it after boot. Keep that in mind when the page renders blank.

## Binding packages and output-target versions

The generated wrapper APIs depend on the installed output-target versions, so keep
`stencil.config.ts` and `packages/core/package.json` in sync:

- `@stencil/react-output-target@1.x` → `reactOutputTarget({ outDir })`, requires the
  `dist-custom-elements` output target with `generateTypeDeclarations: true`. Generated wrappers import
  `@stencil/react-output-target/runtime`, so that package must be a dependency of `packages/react`, and
  the React tsconfig needs `"moduleResolution": "bundler"`.
- `@stencil/vue-output-target@0.15` → `vueOutputTarget({ componentCorePackage, proxiesFile, componentModels })`.
  Generated proxies import `@stencil/vue-output-target/runtime` and `vue-router` types, so both are
  dependencies of `packages/vue` (vue-router is a peer of the output target).
- `@stencil/angular-output-target@1.6` → `angularOutputTarget({ componentCorePackage, directivesProxyFile,
  directivesArrayFile, valueAccessorConfigs, outputType: "component" })`. `outputType` defaults to
  `"standalone"` now, which does not match the NgModule-based library, so it is set explicitly.
- The Angular library uses the modern `@angular/build:library` builder; its `package.json` must expose
  `"exports": { ".": "./src/public-api.ts" }` and list `@anywhere-ui/*` as `peerDependencies`.

## Environment notes for this Windows machine

- **Node 26** is installed via nvm-windows (`nvm use 26.0.0`). If `ci`/`cargo` style errors appear about
  Node engines, the shell is still on the old Node 20.
- **npm cache**: keep it inside the workspace (`npm install --cache ./.npm-cache`) — the agent sandbox
  cannot write to `%LOCALAPPDATA%\npm-cache` (`EPERM`).
- **Lifecycle scripts / child processes**: when process spawning is restricted, install with
  `npm install --ignore-scripts` and set `PUPPETEER_SKIP_DOWNLOAD=1`. Use a normal terminal for a full
  install when native or Puppeteer dependencies are needed.
- **Stencil / Sass / ng-packagr workers**: they fork helper processes. If forking is blocked
  (`spawn EPERM`), add `--maxWorkers=0` to Stencil commands.
- **Headless browsers**: Chromium/Edge cannot run under the restricted sandbox; use full process
  permissions to take screenshots.
- **Line endings**: the history mixes CRLF and LF; whole-file diffs are often only EOL churn. Use
  `git diff --ignore-all-space` before assuming a real change.
- `src/app/css/app.css` is **tracked** although it is compiled from `src/app/scss/app.scss`;
  `npm start` watches and rewrites it.

## Testing notes

- `npm test` is green: 60/60 spec suites, 68 tests. The suite is mostly smoke coverage — most
  `it("renders")` specs only instantiate the component (their snapshot assertion is commented out).
  `checkbox.spec.tsx` is the one behavioural spec; use it as the template when writing real tests.
- Components are written to tolerate missing props/browser APIs in the spec environment (guards for
  `ResizeObserver`, `IntersectionObserver`, missing `target`, missing nested component refs), and
  intervals/observers are cleaned up in `disconnectedCallback`.
- Stencil 4.45's integrated Jest runner is deprecated; the long-term path is `@stencil/vitest`
  (requires Node 22.12+). Jest stays pinned to 29 until that migration.

## Known pre-existing issues

- Sass 1.108 warns that `@import` is deprecated and will be removed in Dart Sass 3. The theme files still
  use `@import`; the deprecation warnings are silenced in `stencil.config.ts` and the `sass` scripts.
- `src/index.html` loads Iconify, Prism and DocSearch from CDNs, so the showcase needs network access.
- `npm test` prints a "worker process has failed to exit gracefully" warning from a leftover open handle
  in the spec environment; it does not affect the (green) result.

## Skills worth loading

- `context7-mcp` — up-to-date Stencil / Angular / Vue / React API answers (resolve library first).
- `diagnose-windows-sandbox-acl` — when file access is unexpectedly denied on Windows.
- The `office*` skills are irrelevant to this repository.
