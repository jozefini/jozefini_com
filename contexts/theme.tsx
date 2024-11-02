'use client'

import { THEME_MODE_KEY } from '@/lib/constants'
import { createContext, use, useState } from 'react'

const setCookie = (isDark: boolean) => {
  const key = THEME_MODE_KEY
  document.cookie = `${key}=${isDark ? 'dark' : 'light'}; path=/`
}

const ThemeContext = createContext<{
  isDark: boolean
  setDarkMode: (isDark: boolean) => void
  toggleDarkMode: () => void
}>({
  isDark: false,
  setDarkMode: () => {},
  toggleDarkMode: () => {},
})

export const ThemeProvider = ({
  children,
  value,
}: { children: React.ReactNode; value: boolean }) => {
  const [isDark, setDarkMode] = useState(value)
  const toggleDarkMode = () => {
    setDarkMode(!isDark)
    setCookie(!isDark)
    document?.documentElement.classList.toggle('dark', !isDark)
  }

  return (
    <ThemeContext value={{ isDark, setDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext>
  )
}

export const useThemeContext = () => {
  return use(ThemeContext)
}
