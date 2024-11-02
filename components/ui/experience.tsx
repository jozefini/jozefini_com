import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

const css = {
  list: 'relative border-s border-zinc-200 dark:border-zinc-700 transition-colors',
  item: 'mb-10 ms-4',
  bullet:
    'absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border transition-colors',
  activeBullet:
    'bg-zinc-300 border-zinc-300 dark:bg-zinc-400 dark:border-zinc-400',
  inactiveBullet:
    'bg-white border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700',
  titleBox: 'flex flex-row items-center gap-2',
  badge:
    'inline-block text-xs rounded-full px-1.5 py-0.5 border border-zinc-300 text-zinc-500 dark:text-zinc-400 dark:border-zinc-400 transition-colors',
  title:
    'text-md font-sans font-medium text-zinc-900 dark:text-zinc-200 tracking-tighter transition-colors',
  subtitle:
    'mb-4 text-sm font-normal text-zinc-500 dark:text-zinc-400 transition-colors',
  years:
    'text-xs font-normal text-zinc-400 dark:text-zinc-500 mb-1 -mt-0.5 transition-colors',
}

export function ExperienceList({ children }: { children: ReactNode }) {
  return <ol className={css.list}>{children}</ol>
}

export function ExperienceItem({
  title,
  years,
  children,
  isPresent,
}: {
  title: string
  children?: ReactNode
  years?: string
  isPresent?: boolean
}) {
  return (
    <li className={css.item}>
      <div
        className={cn(
          css.bullet,
          isPresent ? css.activeBullet : css.inactiveBullet
        )}
      />
      <div className={css.titleBox}>
        <div className={css.title}>{title}</div>
        {isPresent && <div className={css.badge}>Present</div>}
      </div>
      {years && <div className={css.years}>{years}</div>}
      <div className={css.subtitle}>{children}</div>
    </li>
  )
}
