// next.config.js
module.exports = {
  images: {
    domains: ['https://d3lbhvavid9616.cloudfront.net'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
        // for webpack 5 use
        // { and: [/\.(js|ts)x?$/] }
      },

      use: ['@svgr/webpack'],
    });

    return config;
  },
};
