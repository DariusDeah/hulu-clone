/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.papareact.com",
      "image.tmdb.org",
      "cdn-icons-png.flaticon.com",
      "images.unsplash.com",
      "cdn-icons.flaticon.com",
    ],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
