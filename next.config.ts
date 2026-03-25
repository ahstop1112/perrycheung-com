import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  /* config options here */
  reactCompiler: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};


export default nextConfig;
