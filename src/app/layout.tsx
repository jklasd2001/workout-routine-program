import { ReactNode } from 'react'

import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

import { pretendardFont } from 'src/styles'

import type { Metadata } from 'next'

import favicon from '/public/favicon.ico'

import 'src/styles/globals.css'

export const metadata: Metadata = {
  title: '운동 기록',
  description: '운동 기록하자',
  icons: [{ rel: 'icon', url: favicon.src }],
}

const Layout = async ({ children }: { children: ReactNode }) => {
  const locale = await getLocale()

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale} className={pretendardFont.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}

export default Layout
