import nextPwa from 'next-pwa'

const withPWA = nextPwa({
  dest: 'public',
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  eslint: {
    ignoreDuringBuilds: true,
  },
})

export default nextConfig
