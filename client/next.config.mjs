/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "localhost" },
      { hostname: "v3v.dzencode.net" },
      { hostname: "loremflickr.com" },
    ],
  },
}

export default nextConfig
