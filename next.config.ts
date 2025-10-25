import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Add remote patterns to allow external image domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com', // Allow images from Pinterest
        port: '',
        pathname: '/**', // Allow any path under this hostname
      },
      {
        protocol: 'https',
        hostname: 'placehold.co', // Also allow the placeholder domain
        port: '',
        pathname: '/**',
      },
      // Add other domains here if needed in the future
    ],
  },
};

export default nextConfig;
