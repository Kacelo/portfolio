import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "my-protfolio-website",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
