'use client'

import { CalendarIcon, ChartArea, HomeIcon, MenuIcon } from 'lucide-react'

import { ROUTE_CONFIG } from 'src/config'
import { Flex } from 'styled-system/jsx'

import { Tab } from '../tab'

const { HOME, HISTORY, STATISTICS, MENU } = ROUTE_CONFIG

const TAB_OPTIONS = [
  {
    href: HOME.path,
    icon: HomeIcon,
    label: '홈',
  },
  {
    href: HISTORY.path,
    icon: CalendarIcon,
    label: '기록',
  },
  {
    href: STATISTICS.path,
    icon: ChartArea,
    label: '통계',
  },
  {
    href: MENU.path,
    icon: MenuIcon,
    label: '메뉴',
  },
]

export const Tabs = () => {
  return (
    <Flex>
      {TAB_OPTIONS.map((tab) => (
        <Tab key={tab.href} icon={tab.icon} label={tab.label} href={tab.href} />
      ))}
    </Flex>
  )
}
