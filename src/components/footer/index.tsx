import { styled } from 'styled-system/jsx'

import { Tabs } from './components/tabs'

export const Footer = () => {
  return (
    <styled.footer css={{ borderTop: '1px solid black' }}>
      <Tabs />
    </styled.footer>
  )
}
