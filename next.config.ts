import { withContentlayer } from "next-contentlayer";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
};

export default withContentlayer(nextConfig);