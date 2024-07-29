import { ArrowLeft } from 'lucide-react'

import { styled } from 'styled-system/jsx'

import { IconButton } from '../ui'

export const Header = () => {
  return (
    <styled.header css={{ py: 2 }}>
      <IconButton aria-label="Back press" variant="outline" size="2xl">
        <ArrowLeft />
      </IconButton>
    </styled.header>
  )
}
