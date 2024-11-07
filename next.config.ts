import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // This disables Next.js's image optimization since it doesn’t work on GitHub Pages
  },
  assetPrefix: isProd ? "/portfolio" : "",
  basePath: isProd ? "/portfolio" : "",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
