/** @type {import('next').NextConfig} */
const nextConfig = {
  output: undefined,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

export default nextConfig;
