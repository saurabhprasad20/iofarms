// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Modify devServer here if needed
      return webpackConfig;
    },
  },
};
