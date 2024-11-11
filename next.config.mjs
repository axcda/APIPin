/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'y.qq.com',
          pathname: '/music/photo_new/**',
        },
      ],
    },
  }
  
  module.exports = nextConfig 