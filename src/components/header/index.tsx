import { styled } from 'styled-system/jsx'

import { Heading } from '../ui/heading'

export const Header = () => {
  return (
    <styled.header css={{ py: 2 }}>
      <Heading size="xl">홈</Heading>
    </styled.header>
  )
}
