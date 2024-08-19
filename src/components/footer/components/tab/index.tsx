'use client'

import { ForwardRefExoticComponent, RefAttributes } from 'react'

import { LucideProps } from 'lucide-react'

import { Link, LinkProps, usePathname } from 'src/navigation'
import { css } from 'styled-system/css'

interface TabProps extends Pick<LinkProps, 'href'> {
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
  label: string
}

export const Tab = ({ icon: Icon, label, href }: TabProps) => {
  const pathname = usePathname()

  const isRouteMatched = pathname === href

  return (
    <Link
      href={href}
      className={css({
        flex: 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDir: 'column',
        color: isRouteMatched ? 'red' : 'currentcolor',
        py: 2,
        gap: 1,
      })}
    >
      <Icon size={24} />

      {label}
    </Link>
  )
}
