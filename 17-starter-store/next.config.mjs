/** @type {import('next').NextConfig} */
const https = "https";
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: https,
        hostname: "images.pexels.com",
      },
      {
        protocol: https,
        hostname: "mxkwwrexxkbmpgatwzee.supabase.co",
      },
      {
        protocol: https,
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
