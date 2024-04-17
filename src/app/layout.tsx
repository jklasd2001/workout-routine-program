import { ReactNode } from 'react'

import { pretendardFont } from 'src/styles'

import { Container } from '@shadow-panda/styled-system/jsx'

import type { Metadata } from 'next'

import favicon from '/public/favicon.ico'

import 'src/styles/globals.css'

export const metadata: Metadata = {
  title: '운동 기록',
  description: '운동 기록하자',
  icons: [{ rel: 'icon', url: favicon.src }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html className={pretendardFont.variable}>
      <body>
        <main>
          <Container maxW="420px">{children}</Container>
        </main>
      </body>
    </html>
  )
}
