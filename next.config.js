/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: "/apollgraphql-server-a-complete-tutorial-8e49e44f3b52",
        destination: "/blog/apollgraphql-server-a-complete-tutorial-8e49e44f3b52",
        permanent: true,
      },
      {
        source: "/simple-task-schedular",
        destination: "/blog/simple-task-schedular",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
