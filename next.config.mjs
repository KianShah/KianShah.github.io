/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    },
    images: {
        unoptimized: true
    }
};

export default nextConfig;
