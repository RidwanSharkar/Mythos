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
  trailingSlash: true,
};

export default nextConfig;
