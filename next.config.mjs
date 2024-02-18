/** @type {import('next').NextConfig} */
const nextConfig = {async redirects() {
    return [
      {
        source: '/',
        destination: '/apartments', // Redirect from root to /apartments
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
