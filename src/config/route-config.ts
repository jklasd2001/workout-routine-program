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
