import type { ReactNode } from 'react'

const css = {
  headline:
    'font-bold text-zinc-900 dark:text-zinc-100 tracking-widest mb-5 text-sm transition-colors font-code uppercase',
}

export function Headline({ children }: { children: ReactNode }) {
  return <h1 className={css.headline}>{children}</h1>
}
