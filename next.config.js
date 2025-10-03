/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: true, // Turbopack dev server
    serverActions: true,
  },
};

module.exports = nextConfig;
