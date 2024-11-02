import { useMemo, type ReactNode } from 'react'
import { ExternalLink } from '../external-link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const css = {
  list: 'grid md:grid-cols-2 w-full gap-x-10 gap-y-5',
  link: 'relative block hover:-translate-y-0.5 transition-all hover:opacity-80',
  picture:
    'rounded-lg mb-3 inline-flex items-center justify-center size-[1.875rem]',
  pictureBg: 'bg-zinc-900',
  image: 'rounded-lg size-[1.875rem] text-white object-cover',
  textIcon: 'text-white font-bold uppercase',
  title:
    'text-md font-sans font-medium text-zinc-900 dark:text-zinc-200 tracking-tighter transition-colors',
  description:
    'mt-1 max-w-xs text-sm font-normal text-zinc-500 dark:text-zinc-400 tracking-tighter',
  tags: 'flex flex-wrap gap-2 mt-0.5',
  tag: 'text-xs font-normal text-zinc-400 dark:text-zinc-500 mb-1 -mt-0.5 transition-colors',
}

export function ProjectsGrid({ children }: { children: ReactNode }) {
  return <div className={css.list}>{children}</div>
}

export function ProjectItem({
  href,
  title,
  symbol,
  iconClassName,
  image,
  tags,
  children,
}: {
  href: string
  title: string
  symbol?: string
  iconClassName?: string
  image?: string
  tags?: string[]
  children?: ReactNode
}) {
  const textIcon = symbol ? symbol : title?.[0].toUpperCase() || 'P'
  const hasTags = tags && tags.length > 0

  return (
    <div>
      <ExternalLink href={href} className={css.link}>
        <div className={cn(css.picture, iconClassName || css.pictureBg)}>
          {image ? (
            <Image src={image} alt={title} className={css.image} />
          ) : (
            <div className={css.textIcon}>{textIcon}</div>
          )}
        </div>
        <div className={css.title}>{title}</div>
        {hasTags && (
          <div className={css.tags}>
            {tags.map((tag, i) => (
              <div className={css.tag} key={tag}>
                #{tag}
              </div>
            ))}
          </div>
        )}
        <div className={css.description}>{children}</div>
      </ExternalLink>
    </div>
  )
}
