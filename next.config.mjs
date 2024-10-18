/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dishub.pasuruankab.go.id",
        port: "",
      },
    ],
  },
};

export default nextConfig;
