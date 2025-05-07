const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'user-images.trustpilot.com',
        port: '',
      },
      // {
      //   protocol: 'https',
      //   hostname: 'avatars.githubusercontent.com',
      //   port: '',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'pub-b7fd9c30cdbf439183b75041f5f71b92.r2.dev',
      //   port: '',
      // },
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
        port: '',
      },
    ],
    domains: ['images.prismic.io'],
  },
  async headers() {
    return [
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
        ],
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
