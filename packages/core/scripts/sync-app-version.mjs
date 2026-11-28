#!/usr/bin/env node
/**
 * Keeps the showcase footer version in sync with packages/core/package.json.
 *
 * Runs from the `prestart` / `prebuild` hooks, so `npm start` and the production
 * build always display the version of the package that is being built instead
 * of a hardcoded string.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const coreDir = path.resolve(scriptDir, "..");
const pkg = JSON.parse(fs.readFileSync(path.join(coreDir, "package.json"), "utf8"));
const indexPath = path.join(coreDir, "src/index.html");
const html = fs.readFileSync(indexPath, "utf8");

const versionRe = /(<span id="any-ui-version">)([^<]*)(<\/span>)/;
if (!versionRe.test(html)) {
  console.error("sync-app-version: #any-ui-version span not found in src/index.html");
  process.exit(1);
}

const updated = html.replace(
  versionRe,
  (_match, open, _current, close) => `${open}${pkg.version}${close}`
);

if (updated !== html) {
  fs.writeFileSync(indexPath, updated);
  console.log(`sync-app-version: footer version -> ${pkg.version}`);
}
