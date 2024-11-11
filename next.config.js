/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
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