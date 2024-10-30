import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // This disables Next.js's image optimization since it doesn’t work on GitHub Pages
  },
  basePath: "/portfolio",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
