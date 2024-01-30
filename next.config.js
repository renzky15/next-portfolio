/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('@react-pdf/renderer');
    }
    config.resolve.alias.canvas = false;

    return config;
  },
}
const withTM = require("next-transpile-modules")([
  "@ionic/react",
  "@ionic/core",
  "@stencil/core",
  "ionicons",
]);

module.exports = withTM({
  ...nextConfig,

  reactStrictMode: false,
});
