import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  reactCompiler: true,
  images: {
    qualities: [25, 50, 75, 100],
  },
};

export default nextConfig;
