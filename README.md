# Sveltekit-RPT2-Typia

Reproduction steps:
```sh
npm install
# Works
npm run build
# TypeError: Cannot read properties of undefined (reading 'add')
npm run dev
```

Full error:
```txt
SvelteTypia/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:28100
                transformedFiles.add(id); // note: this does not need normalization as we only compare Rollup <-> Rollup, and not Rollup <-> TS
                                 ^

TypeError: Cannot read properties of undefined (reading 'add')
    at TransformContext.<anonymous> (/SvelteTypia/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:28100:34)
    at Generator.next (<anonymous>)
    at /SvelteTypia/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:63:69
    at new Promise (<anonymous>)
    at __awaiter (/SvelteTypia/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:59:10)
    at TransformContext.transform (/SvelteTypia/node_modules/rollup-plugin-typescript2/dist/rollup-plugin-typescript2.cjs.js:28099:20)
    at Object.transform (file:///SvelteTypia/node_modules/vite/dist/node/chunks/dep-DkOS1hkm.js:51133:62)
    at async loadAndTransform (file:///SvelteTypia/node_modules/vite/dist/node/chunks/dep-DkOS1hkm.js:53888:29)
    at async instantiateModule (file:///SvelteTypia/node_modules/vite/dist/node/chunks/dep-DkOS1hkm.js:54932:10) {
  plugin: 'rpt2',
  id: '/SvelteTypia/node_modules/@sveltejs/kit/src/runtime/control.js',
  pluginCode: 'export class HttpError {\n' +
    '\t/**\n' +
    '\t * @param {number} status\n' +
    '\t * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body\n' +
    '\t */\n' +
    '\tconstructor(status, body) {\n' +
    '\t\tthis.status = status;\n' +
    "\t\tif (typeof body === 'string') {\n" +
    '\t\t\tthis.body = { message: body };\n' +
    '\t\t} else if (body) {\n' +
    '\t\t\tthis.body = body;\n' +
    '\t\t} else {\n' +
    '\t\t\tthis.body = { message: `Error: ${status}` };\n' +
    '\t\t}\n' +
    '\t}\n' +
    '\n' +
    '\ttoString() {\n' +
    '\t\treturn JSON.stringify(this.body);\n' +
    '\t}\n' +
    '}\n' +
    '\n' +
    'export class Redirect {\n' +
    '\t/**\n' +
    '\t * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status\n' +
    '\t * @param {string} location\n' +
    '\t */\n' +
    '\tconstructor(status, location) {\n' +
    '\t\tthis.status = status;\n' +
    '\t\tthis.location = location;\n' +
    '\t}\n' +
    '}\n' +
    '\n' +
    '/**\n' +
    " * An error that was thrown from within the SvelteKit runtime that is not fatal and doesn't result in a 500, such as a 404.\n" +
    ' * `SvelteKitError` goes through `handleError`.\n' +
    ' * @extends Error\n' +
    ' */\n' +
    'export class SvelteKitError extends Error {\n' +
    '\t/**\n' +
    '\t * @param {number} status\n' +
    '\t * @param {string} text\n' +
    '\t * @param {string} message\n' +
    '\t */\n' +
    '\tconstructor(status, text, message) {\n' +
    '\t\tsuper(message);\n' +
    '\t\tthis.status = status;\n' +
    '\t\tthis.text = text;\n' +
    '\t}\n' +
    '}\n' +
    '\n' +
    '/**\n' +
    ' * @template {Record<string, unknown> | undefined} [T=undefined]\n' +
    ' */\n' +
    'export class ActionFailure {\n' +
    '\t/**\n' +
    '\t * @param {number} status\n' +
    '\t * @param {T} data\n' +
    '\t */\n' +
    '\tconstructor(status, data) {\n' +
    '\t\tthis.status = status;\n' +
    '\t\tthis.data = data;\n' +
    '\t}\n' +
    '}\n' +
    '\n' +
    '/**\n' +
    ' * This is a grotesque hack that, in dev, allows us to replace the implementations\n' +
    " * of these classes that you'd get by importing them from `@sveltejs/kit` with the\n" +
    ' * ones that are imported via Vite and loaded internally, so that instanceof\n' +
    ' * checks work even though SvelteKit imports this module via Vite and consumers\n' +
    ' * import it via Node\n' +
    ' * @param {{\n' +
    ' *   ActionFailure: typeof ActionFailure;\n' +
    ' *   HttpError: typeof HttpError;\n' +
    ' *   Redirect: typeof Redirect;\n' +
    ' *   SvelteKitError: typeof SvelteKitError;\n' +
    ' * }} implementations\n' +
    ' */\n' +
    'export function replace_implementations(implementations) {\n' +
    '\t// @ts-expect-error\n' +
    '\tActionFailure = implementations.ActionFailure; // eslint-disable-line no-class-assign\n' +
    '\t// @ts-expect-error\n' +
    '\tHttpError = implementations.HttpError; // eslint-disable-line no-class-assign\n' +
    '\t// @ts-expect-error\n' +
    '\tRedirect = implementations.Redirect; // eslint-disable-line no-class-assign\n' +
    '\t// @ts-expect-error\n' +
    '\tSvelteKitError = implementations.SvelteKitError; // eslint-disable-line no-class-assign\n' +
    '}\n'
}

Node.js v20.12.2
```