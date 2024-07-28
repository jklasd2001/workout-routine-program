import { Center, styled } from 'styled-system/jsx'

export const Footer = () => {
  return (
    <styled.footer
      css={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        h: '60px',
        borderTop: '1px solid black',
      }}
    >
      <Center></Center>
    </styled.footer>
  )
}
