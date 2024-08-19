import createNextIntlPlugin from 'next-intl/plugin'
import nextPwa from 'next-pwa'

const withNextIntl = createNextIntlPlugin()

const withPWA = nextPwa({
  dest: 'public',
  // eslint-disable-next-line no-undef
  disable: process.env.NODE_ENV === 'development',
})

/** @type {import('next').NextConfig} */
const defaultConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'phinf.pstatic.net',
      },
    ],
  },
}

const config = withNextIntl(defaultConfig)

export default config
