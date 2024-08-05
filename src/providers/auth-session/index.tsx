'use client'

import { ReactNode } from 'react'

import { SessionProvider } from 'next-auth/react'

export const AuthSession = ({ children }: { children?: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>
}
