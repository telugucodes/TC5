import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      // 👇 optional but helps Next know your project root (to silence the warning)
      root: ".",
    },
  },
};

export default nextConfig;
