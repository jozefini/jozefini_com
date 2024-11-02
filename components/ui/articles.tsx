import { cn } from '@/lib/utils'
import Link from 'next/link'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

const css = {
  link: 'flex flex-col space-y-1 mb-4 py-2 hover:-translate-y-1 transition-all hover:opacity-80',
  item: 'w-full flex flex-col',
  meta: 'flex items-center gap-2 justify-between',
  title:
    'text-zinc-900 dark:text-zinc-100 text-lg font-heading tracking-tight font-sans',
  date: 'text-zinc-500 dark:text-zinc-400 text-sm tracking-tight mt-1',
  moreBtn: 'hover:underline text-sm',
}

export function ArticlesList({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}

export function ArticlesItem({
  href,
  title,
  date,
}: { href: string; title: string; date: string }) {
  return (
    <Link href={href} className={css.link}>
      <div className={css.item}>
        <div className={css.meta}>
          <div className={css.title}>{title}</div>
          <div className={css.date}>{date}</div>
        </div>
      </div>
    </Link>
  )
}

export function ArticlesMore({
  className,
  ...props
}: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>) {
  return (
    <button type="button" className={cn(css.moreBtn, className)} {...props} />
  )
}
