'use client'

import { useTranslations } from 'next-intl'

import { usePathname } from 'src/navigation'
import { styled } from 'styled-system/jsx'

import { Heading } from '../ui/heading'

export const ROUTE_CONFIG = {
  HOME: {
    key: 'home',
    path: '/',
  },
  HISTORY: {
    key: 'history',
    path: '/history',
  },
  STATISTICS: {
    key: 'statistics',
    path: '/statistics',
  },
  MENU: {
    key: 'menu',
    path: '/menu',
  },
  ROUTINE: {
    key: 'routine',
    path: '/routine/[id]',
  },
} as const

export const ROUTE_OPTIONS = Object.values(ROUTE_CONFIG).find((route) => route.path === '/')?.key

export const getPathnameKey = (pathname: string) => {
                                b  
}

export const Header = () => {
  const t = useTranslations()
  const pathname = usePathname()

  return (
    <styled.header css={{ p: 3 }}>
      <Heading size="xl" css={{ color: 'white' }}>
        {t('routines.add.dpoiskjd')}
      </Heading>
    </styled.header>
  )
}
