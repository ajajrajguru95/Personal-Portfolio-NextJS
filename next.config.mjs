/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: process.env.HOSTNAME || "localhost",
          port: "",
          pathname: "/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  