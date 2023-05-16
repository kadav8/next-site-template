const { withContentlayer } = require('next-contentlayer');
const path = require('path');


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/hu',
        permanent: true,
      },
    ]
  },
  /* async rewrites() {
    return [
      {
        source: '/:lang/:column/:slug*',
        destination: '/:lang/article/:column/:slug*',
      },
    ]
  }, */
}

module.exports = withContentlayer(nextConfig)
