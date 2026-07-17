/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/webp'],
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/terms', destination: '/terms-and-conditions', permanent: true },
      { source: '/gift-code', destination: '/game-gift-code', permanent: true },
      { source: '/contact', destination: '/contact-us', permanent: true },
    ];
  },
};

module.exports = nextConfig;
