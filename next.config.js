/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.papareact.com",
      "image.tmdb.org",
      "cdn-icons-png.flaticon.com",
    ],
  },
};

module.exports = nextConfig;
