/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "https:/media.graphassets.com",
      "media.graphassets.com",
    ],
  },
};

module.exports = nextConfig;
