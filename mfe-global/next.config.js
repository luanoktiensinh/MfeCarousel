const NextFederationPlugin = require('@module-federation/nextjs-mf');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
});
/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  webpack(config, options) {
    config.optimization.chunkIds='named';
    config.plugins.push(
      new NextFederationPlugin({
        name: 'LOCAL_GLOBAL',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './HeaderBanner': './src/components/Header/HeaderBanner',
        },
        shared: {
          moment: {
            singleton: true,
            requiredVersion: false,
          },
          lodash: {
            singleton: false,
            requiredVersion: false,
          },
        },
      }),
    );
    return config;
  },
});

module.exports = nextConfig;
