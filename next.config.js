/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    runtime: 'edge',
  },
};

module.exports = nextConfig;
