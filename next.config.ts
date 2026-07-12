import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "pub-a04264e3824f4e5abf5c1deed24d01b2.r2.dev"
      },
      {
        protocol: "https",
        hostname: "media.versatileinterior.com.bd"
      }
    ]
  }
};

export default nextConfig;
