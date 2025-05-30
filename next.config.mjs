/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: isGithubPages ? '/cofee-brand-website' : '',
  assetPrefix: isGithubPages ? '/cofee-brand-website/' : '',
};

module.exports = nextConfig;
