/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["png.pngtree.com", "avatars.githubusercontent.com"],
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      {
        protocol: "https",
        hostname: "recipe-book-selinasein.s3.ca-central-1.amazonaws.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
