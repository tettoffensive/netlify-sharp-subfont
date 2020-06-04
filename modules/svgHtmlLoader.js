const DEFAULT_SVG_LOADER_OPTIONS = {
  minimize: true,
  attributes: {
    list: [
      {
        tag: 'div',
        attribute: 'v-html',
        type: 'src',
      },
    ],
  },
};

const setupSvgImageLoader = userOptions => (config) => {
  // Find the existing webpack loader responsible for svgs (and other images)
  const existingImageLoader = config.module.rules.find(
    rule => rule.test.test('.svg'),
  );

  /* If the image loader rule has been removed or edited then we cannot continue.
   ** It is not clear how to update the webpack rules.
   ** The user should define a custom webpack configuration.
   */
  if (!existingImageLoader) {
    throw new Error(
      [
        'svgHtmlLoader: Could not find the existing image loader rule.',
        ' The webpack config has been edited, perhaps by another Nuxt module.',
        ' To resolve this error try placing this module first in your Nuxt modules array',
        ' or use a custom webpack configuration instead.',
      ].join(''),
    );
  }

  /* Update the loader so it's no longer respo∏nsible for svg files */
  if (existingImageLoader) {
    existingImageLoader.test = /\.(gif)$/i;
  }

  /* Add the new loader rule */
  config.module.rules.push({
    test: /\.(svg)$/,
    loader: 'html-loader',
    options: userOptions || DEFAULT_SVG_LOADER_OPTIONS,
  });
};

export default function svgHtmlLoader() {
  const { svgHtmlLoader: userOptions } = this.options;
  this.extendBuild(setupSvgImageLoader(userOptions));
}
// REQUIRED if publishing the module as npm package
// module.exports.meta = require('./package.json')
