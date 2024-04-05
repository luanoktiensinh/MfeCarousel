const NextFederationPlugin = require('@module-federation/nextjs-mf');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
});
const path = require('path');
const nextConfig = withBundleAnalyzer({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    config.optimization.chunkIds='named';
    config.plugins.push(
      new NextFederationPlugin({
        name: 'HOME',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Banner': './src/components/Banner',
          './HeroCarousel': './src/components/HeroCarousel',
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
        extraOptions:{
          exposePages: true
        }
      }),
    );
    return config;
  }
});

module.exports = nextConfig;
