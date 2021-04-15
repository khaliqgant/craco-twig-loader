module.exports = {
  overrideWebpackConfig: ({ webpackConfig, pluginOptions }) => {
    const {
      getLoader,
      loaderByName,
      throwUnexpectedConfigError
    } = require('@craco/craco');

    pluginOptions = pluginOptions || { test: /\.twig$/ };

    const throwError = (message, githubIssueQuery) =>
      throwUnexpectedConfigError({
        packageName: 'craco-twig-loader',
        githubRepo: "khaliqgant/craco-twig-loader",
        message,
        githubIssueQuery
      });
    const twigLoaderRule = {
      test: pluginOptions.test,
      use: [
        {
          loader: require.resolve('twig-loader')
        },
      ]
    };

    const oneOfRule = webpackConfig.module.rules.find(rule => rule.oneOf);
    if (!oneOfRule) {
      throwError(
        "Can't find a 'oneOf' rule under module.rules in the webpack config!",
        "webpack+rules+oneOf"
      );
    }
    oneOfRule.oneOf.push(twigLoaderRule);

    const { isFound, match: fileLoaderMatch } = getLoader(
      webpackConfig,
      loaderByName('file-loader')
    );
    if (!isFound) {
      throwError(
        "Can't find file-loader in the webpack config!",
        "webpack+file-loader"
      );
    }
    fileLoaderMatch.loader.exclude.push(pluginOptions.test);

    return webpackConfig;
  }
};

