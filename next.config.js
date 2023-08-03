/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    path: "/",
    domains: ['www.salamat.gr', 'cdn.shopify.com', 'www.doorsteporganics.com.au'],
  },
};

module.exports = nextConfig;
