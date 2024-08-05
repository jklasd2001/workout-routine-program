import { Flex } from 'styled-system/jsx'

import { Tab } from '../tab'

const TAB_OPTIONS = [
  {
    href: '/',
    label: 'sokdosk',
  },
  {
    href: '/',
    label: 'sokdosk',
  },
  {
    href: '/',
    label: 'sokdosk',
  },
  {
    href: '/',
    label: 'sokdosk',
  },
]

export const Tabs = () => {
  return (
    <Flex css={{}}>
      {TAB_OPTIONS.map((tab) => (
        <Tab key={tab.href} href={tab.href} />
      ))}
    </Flex>
  )
}
