import { ComponentProps } from 'react'

import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export type LinkProps = ComponentProps<typeof Link>

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: ['ko'] /* ... */,
})
