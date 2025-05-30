import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    EMAIL_USER: process.env.EMAIL_USER,
  }
};

export default nextConfig;
