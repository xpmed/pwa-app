const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({
  dest: 'public',
  register: false,
  skipWaiting: true,
  runtimeCaching,

  buildExcludes: [/app-build-manifest\.json$/],

  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
  eslint:     { ignoreDuringBuilds: true },
});
