/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: "http://localhost:1337/graphql",
  },
};

module.exports = nextConfig;
