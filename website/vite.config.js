import { fileURLToPath } from "node:url";
import { globSync } from "glob";
import path from "node:path";

const src = Object.fromEntries(
  globSync("src/**/*.ts").map((file) => [
    // This remove `src/` as well as the file extension from each
    // file, so e.g. src/nested/foo.js becomes nested/foo
    path.relative(
      "src",
      file.slice(0, file.length - path.extname(file).length),
    ),
    // This expands the relative paths to absolute paths, so e.g.
    // src/nested/foo becomes /project/src/nested/foo.js
    fileURLToPath(new URL(file, import.meta.url)),
  ]),
);

const templates = Object.fromEntries(
  globSync("templates/**/*.html").map((file) => [
    // This remove `tempates/` as well as the file extension from each
    // file, so e.g. templates/nested/foo.html becomes nested/foo
    path.relative(
      "templates",
      file.slice(0, file.length - path.extname(file).length),
    ),
    // This expands the relative paths to absolute paths, so e.g.
    // templates/nested/foo becomes /project/templates/nested/foo.js
    fileURLToPath(new URL(file, import.meta.url)),
  ]),
);

/** @type {import('vite').UserConfig} */
export default {
  publicDir: "assets",
  build: {
    rollupOptions: {
      input: { ...src, ...templates },
      // Suppress the warning:
      //
      // ```
      // node_modules/htmx.org/dist/htmx.esm.js (854:13):
      // Use of eval in "node_modules/htmx.org/dist/htmx.esm.js" is strongly discouraged
      // as it poses security risks and may cause issues with minification.
      // ```
      //
      // See https://github.com/bigskysoftware/htmx/pull/1988#issuecomment-1806290317
      // for an explanation on why this is not an issue.
      onwarn: (entry, next) => {
        if (
          entry.loc?.file &&
          /htmx\.esm\.js$/.test(entry.loc.file) &&
          /Use of eval in/.test(entry.message)
        )
          return;
        return next(entry);
      },
    },
  },
};
