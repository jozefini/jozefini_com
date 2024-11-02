'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

const css = {
  wrapper: 'flex items-center flex-wrap gap-2 mb-8',
  link: 'text-sm transition-colors px-2 py-1 rounded-md relative',
  linkActive: 'bg-zinc-900 dark:bg-zinc-900 text-white',
  linkInactive: 'bg-transparent text-zinc-500',
}

const NavLink = ({
  children,
  href,
}: { children: React.ReactNode; href: string }) => {
  const pathname = usePathname()
  const isActive = useMemo(() => {
    return pathname === href
  }, [pathname, href])

  return (
    <Link
      href={href}
      className={cn(css.link, isActive ? css.linkActive : css.linkInactive)}
    >
      {children}
    </Link>
  )
}

export function Nav() {
  return (
    <nav className={css.wrapper}>
      <NavLink href="/">About</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </nav>
  )
}
