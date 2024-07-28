import { ReactNode } from 'react'

import { Container, styled } from 'styled-system/jsx'

import { Footer } from '../footer'
import { Header } from '../header'

interface PageLayoutProps {
  /**
   *
   */
  children?: ReactNode
}

/**
 *
 * @returns
 */
export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Container
      css={{
        maxW: '600px',
        minH: 'screen',
        bg: 'white',
        borderLeft: '1px solid token(colors.bg.disabled)',
        borderRight: '1px solid token(colors.bg.disabled)',
        position: 'relative',
      }}
    >
      <Header />

      <styled.main>{children}</styled.main>

      <Footer />
    </Container>
  )
}
