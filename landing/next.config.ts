import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["tailark.com"], // Add allowed hostnames here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
