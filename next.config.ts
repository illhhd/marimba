import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/marimba" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/marimba/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
