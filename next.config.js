/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["png.pngtree.com"] },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
