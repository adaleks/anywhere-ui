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
- Tests: **Vitest** via `@stencil/vitest` (`stencil-test`, `vitest.config.mts`, jsdom env).

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
| `npm test`                         | Spec tests via `stencil-test` (Stencil dev build + Vitest)                     |
| `npm run generate`                 | Scaffold a component (bash script, needs bash)                                |

Root scripts intentionally use **npm workspaces**, not `lerna run`: `lerna run start` starts the
Stencil dev server but it never accepts connections (reproduced with lerna 10.1.3). Lerna 10 is kept
only for version/publish workflows (`lerna.json`, `nx.json`).

## Remotes and workflow

| Remote | URL | Purpose |
| ------ | --- | ------- |
| `origin` | `git@github.com:adaleks/anywhere-ui.git` | main repository — push branches here |
| `fork`   | `git@github.com:gjovanovicst/anywhere-ui.git` | archive/backup only, not part of the workflow |

Both remotes use SSH (the maintainer's key is registered), so no PAT/credential helper is needed for
`git push`. `gh`/`gh pr` still authenticate with their own token.

`main` is protected (changes must arrive through a pull request): create a branch, push it to `origin`
and open a PR against `main` (`gh pr create --base main`). Do not push directly to `main`.

## Changelog and releases

- The changelog is generated from **issues**, grouped by label. `scripts/changelog-unreleased.mjs`
  reads `.grenrc.json` (`groupBy`, `ignoreIssuesWith`) and takes the closed, non-PR issues of the
  **open (next) milestone**. Pull requests are ignored, so every release-note-worthy change needs an
  issue in that milestone.
- Preview while a release is in progress:

  ```bash
  GITHUB_TOKEN=$(gh auth token) npm run changelog:unreleased
  ```

  It rewrites only the `## [Unreleased]` section of `CHANGELOG.md` (idempotent); `--dry-run` prints the
  section without touching the file. A token is read from `GITHUB_TOKEN`/`GREN_GITHUB_TOKEN` or
  `gh auth token`.
- Release: `GITHUB_TOKEN=$(gh auth token) npm run generate-changelog` renders the dated
  `## [vX.Y.Z](…/tree/vX.Y.Z)` section from the same issues and replaces `Unreleased`. Then tag, push
  the tag, commit `CHANGELOG.md` and `gh release create`.
- `0.4.0` is still in progress — do not publish a release until the milestone is done.
- Do **not** re-add `github-release-notes` (gren): it depends on `npm@6`, which lands in
  `node_modules/npm` and shadows the workflow's npm on GitHub Actions, breaking `npm -w …`.

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
- Tests: `test/<name>.spec.tsx` using `render()` from `@stencil/vitest` (see Testing notes); the legacy
  Puppeteer `*.e2e.ts` specs are not executed.
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

- `npm test` runs **Vitest** through `stencil-test` (`@stencil/vitest` + `stencilVitestPlugin`), then
  `vitest.config.mts` defines a single `spec` project with the `jsdom` DOM environment.
- 60 spec files, 68 tests, all green. Write a spec as:

  ```tsx
  import { describe, it, expect, render } from "@stencil/vitest";
  import "../my-component"; // side-effect import: registers the element

  describe("my-component", () => {
    it("renders", async () => {
      const { root, setProps, waitForChanges } = await render("<my-component></my-component>");
      await setProps({ label: "Hi" });
      expect(root.shadowRoot.querySelector(".label").textContent).toBe("Hi");
    });
  });
  ```

- Render with an HTML **string**, not JSX: `render(<my-component />)` produced
  `Invalid vNode child undefined` with this Stencil/Vite combination. Attributes that map to props are
  set with `setProps()` (attribute-at-construction triggers a `$instanceValues$` error in the jsdom env).
- Spec and e2e files are excluded from the library build (`packages/core/tsconfig.json`), so the Stencil
  build does not type-check them.
- Components tolerate missing props/browser APIs in the spec environment (guards for `ResizeObserver`,
  `IntersectionObserver`, missing `target`, missing nested component refs, unavailable `localStorage`,
  `getAssetPath` without a loader base), and intervals/observers are cleaned up in `disconnectedCallback`.
- `*.e2e.ts` files are legacy Stencil/Puppeteer specs. They are not run; migrating them to
  `@stencil/playwright` is the remaining test follow-up.

## Known pre-existing issues

- Sass 1.108 warns that `@import` is deprecated and will be removed in Dart Sass 3. The theme files still
  use `@import`; the deprecation warnings are silenced in `stencil.config.ts` and the `sass` scripts.
- `src/index.html` loads Iconify, Prism and DocSearch from CDNs, so the showcase needs network access.
- The showcase `app/` folder keeps its browser-ready `.js` files (views, `Cities.js`, `CacheService.js`);
  the duplicate compiled `.js` files next to `.ts` sources elsewhere were removed because Vite resolves
  `.js` before `.ts` and shadowed the TypeScript modules in tests.

## Skills worth loading

- `context7-mcp` — up-to-date Stencil / Angular / Vue / React API answers (resolve library first).
- `diagnose-windows-sandbox-acl` — when file access is unexpectedly denied on Windows.
- The `office*` skills are irrelevant to this repository.
