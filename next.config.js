/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  nextConfig,
  assetPrefix: isProd ? '/felipearosr.github.io/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}
