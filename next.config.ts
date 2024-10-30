import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/portfolio",
  images: { unoptimized: true },
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
