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
    T1GLOBAL: `GLOBAL@https://t1-mfe-qa-b.eluxcdn.com/mfe/global/latest/_next/static/${location}/remoteEntry.js`,
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
        },
        extraOptions:{
          
          exposePages: true
        }
      }),
    );

    return config;
  },
});
