import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["example.com", "media.licdn.com", "a.storyblok.com"], // Add allowed image domains here
  },
};

export default nextConfig;
