# Craco Twig-Loader Plugin

This is a [craco](https://github.com/sharegate/craco) plugin that adds [twig-loader](https://github.com/zimmo-be/twig-loader) to [create-react-app](https://facebook.github.io/create-react-app/) version >= 2.

## Installation

First, follow the [`craco` Installation Instructions](https://github.com/sharegate/craco/blob/master/packages/craco/README.md##installation) to install the `craco` package, create a `craco.config.js` file, and modify the scripts in your `package.json`.

Then install `craco-twig-loader`:

```bash
$ yarn add craco-twig-loader

# OR

$ npm i -S craco-twig-loader
```

## Usage

Here is a complete `craco.config.js` configuration file that adds raw-loader to `create-react-app`:

```js
const CracoTwigLoaderPlugin = require("craco-twig-loader");

module.exports = {
  plugins: [{ plugin: CracoTwigLoaderPlugin }]
};
```
## Inspiration

This is heavily borrowed from [@baristalabs/craco-raw-loader](https://github.com/BaristaLabs/craco-raw-loader)

## License

[MIT](./LICENSE)
