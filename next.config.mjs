/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'brandfetch.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
