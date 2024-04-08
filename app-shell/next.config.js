const NextFederationPlugin = require('@module-federation/nextjs-mf');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
});
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    HOME: `HOME@${process.env.MFE_HOME_URL}/_next/static/${location}/remoteEntry.js`,
    GLOBAL: `LOCAL_GLOBAL@${process.env.MFE_GLOBAL_URL}/_next/static/${location}/remoteEntry.js`,
    T1BASKET: `BASKET@https://t1-mfe-qa-b.eluxcdn.com/mfe/basket/latest/_next/static/${location}/remoteEntry.js`,
  };
};
module.exports = withBundleAnalyzer({
  webpack(config, options) {
    config.optimization.chunkIds='named';
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shell',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {},
        remotes: remotes(options.isServer),
        shared: {
          lodash: {
            singleton: true,
            eager: true,
            requiredVersion: false,
          },
          "@reduxjs/toolkit" : {
            singleton: true,
            eager: false,
          },
          "react-redux" : {
            singleton: true,
            eager: true,
          }
        },
        extraOptions:{
          
          exposePages: true
        }
      }),
    );

    return config;
  },
  async rewrites() {
    return [
      {
        // Matches any request that starts with /_next/static/media
        source: '/_next/static/media/:path*',
        // Rewrite them to the MFE server (adjust the port as necessary)
        destination: 'https://mfe-carousel.vercel.app/_next/static/media/:path*',
      },
    ]
  },
});
