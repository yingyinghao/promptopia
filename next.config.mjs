/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enables the new app directory structure
    appDir: true,

    // Allows server components to use external packages
    serverComponentsExternalPackages: ["mongoose"],
  },

  images: {
    // Specifies the domains from which images can be loaded
    domains: ["lh3.googleusercontent.com"],
  },

  webpack(config) {
    // Enables the top-level await feature in Webpack
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
