import nextPwa from 'next-pwa'

const withPWA = nextPwa({
  dest: 'public',
  // eslint-disable-next-line no-undef
  disable: process.env.NODE_ENV === 'development',
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  eslint: {
    ignoreDuringBuilds: true,
  },
})

export default nextConfig
