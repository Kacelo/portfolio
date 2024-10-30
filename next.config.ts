import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // This disables Next.js's image optimization since it doesn’t work on GitHub Pages
  },
  basePath: "/portfolio",
<<<<<<< HEAD
  output: "export", // <=== enables static exports
=======
  images: { unoptimized: true },
  output: "export",  // <=== enables static exports
>>>>>>> f7d0471df51a2321cac4ef823a53d9159d8d4998
  reactStrictMode: true,
};

export default nextConfig;
