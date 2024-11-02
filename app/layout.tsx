import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Merriweather } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { cookies } from 'next/headers'
import { SITE_BASE_TITLE, THEME_MODE_KEY } from '@/lib/constants'
import { ThemeProvider } from '@/contexts/theme'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: SITE_BASE_TITLE,
  description:
    'A Software Engineer passionate about open-source and scalable web apps, with expertise in the React ecosystem and full-stack development.',
}

export const viewport: Viewport = {
  maximumScale: 1,
}

const codeFont = localFont({
  src: '../public/fonts/departure-mono/DepartureMono-Regular.woff2',
  variable: '--font-code',
})

const sansFont = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isDarkMode = (await cookies()).get(THEME_MODE_KEY)?.value === 'dark'

  return (
    <html
      lang="en"
      className={cn(
        codeFont.variable,
        sansFont.variable,
        codeFont.className,
        isDarkMode && 'dark'
      )}
    >
      <body className="flex items-center w-full flex-col p-8 min-h-screen font-code bg-white text-zinc-900 dark:bg-zinc-800 dark:text-white transition-colors">
        <div className="w-full max-w-3xl">
          <ThemeProvider value={isDarkMode}>
            <Header />
          </ThemeProvider>
          <div className="border-b w-full my-8 dark:border-zinc-700 transition-colors" />
          {/* <Nav /> */}
        </div>

        <main className="w-full max-w-3xl">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
