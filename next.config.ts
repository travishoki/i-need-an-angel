import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        hostname: 'static.wikia.nocookie.net',
        pathname: '/despicableme/**',
        port: '',
        protocol: 'https',
      },
      {
        hostname: 'i.pinimg.com',
        pathname: '/564x/**',
        port: '',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
