/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverExternalPackages: ["mongoose"],
      },
    images:{
        domains: ['occ-0-3933-116.1.nflxso.net']
    },
};

export default nextConfig;
