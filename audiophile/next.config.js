/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Keep App Router (you need this)
  experimental: {
    appDir: true,
    turbo: false, // 👈 disable Turbopack explicitly
  },
};

module.exports = nextConfig;
