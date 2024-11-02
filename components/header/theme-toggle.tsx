'use client'

import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useThemeContext } from '@/contexts/theme'

const css = {
  button:
    'p-2 rounded-lg bg-white border border-[#e5e7eb] dark:border-[#404040] dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors',
  icon: 'size-4',
  lightIcon: 'hidden dark:block',
  darkIcon: 'block dark:hidden',
}

export function ThemeToggle() {
  const { toggleDarkMode } = useThemeContext()

  return (
    <button
      type="button"
      className={css.button}
      tabIndex={0}
      onClick={toggleDarkMode}
    >
      <Sun className={cn(css.icon, css.lightIcon)} />
      <Moon className={cn(css.icon, css.darkIcon)} />
    </button>
  )
}
