// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/rest-countries',
  images: {
    unoptimized: true, // Add this line
    domains: ['flagcdn.com', 'upload.wikimedia.org'],
  },
}

export default nextConfig

// next.config.js

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   basePath: '/rest-countries',
//   images: {
//     domains: ['flagcdn.com', 'upload.wikimedia.org'],
//   },
// }

// module.exports = nextConfig
