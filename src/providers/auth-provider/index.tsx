'use client'

import { ReactNode } from 'react'

import { useSession } from 'next-auth/react'

import { Box } from 'styled-system/jsx'

export const AuthProvider = ({ children }: { children?: ReactNode }) => {
  const { status } = useSession()

  if (status === 'authenticated') {
    return children
  }

  return <Box>No Login</Box>
}
