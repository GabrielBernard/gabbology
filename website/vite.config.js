/** @type {import('vite').UserConfig} */
export default {
  publicDir: "assets",
  build: {
    rollupOptions: {
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
