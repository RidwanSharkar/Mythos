import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Mythos' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Mythos/' : '',
};

export default nextConfig;
