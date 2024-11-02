import Link from 'next/link'
import { SocialsList } from './socials-list'
import { ThemeToggle } from './theme-toggle'
import Image from 'next/image'
import profilePic from '@/public/profile-pic.jpeg'

const css = {
  wrapper: 'w-full',
  logo: 'inline-flex rounded-full',
  logoImg: 'size-[3.125rem] rounded-full text-zinc-900 dark:text-zinc-100',
  name: 'font-medium text-zinc-900 dark:text-zinc-100 mt-2 text-xl font-sans transition-colors',
  role: 'text-zinc-500 dark:text-zinc-400 font-code transition-colors text-sm',
  socials: 'w-full flex flex-row justify-between items-center mt-3',
  socialsInner: 'flex flex-row items-center justify-between w-full',
}

export function Header() {
  return (
    <header className={css.wrapper}>
      <div>
        <Link href="/" className={css.logo}>
          <Image
            src={profilePic}
            alt="Jozefin Bashaj"
            className={css.logoImg}
          />
        </Link>

        <h1 className={css.name}>Jozefin Bashaj</h1>
        <div className={css.role}>Software Engineer</div>

        <div className={css.socials}>
          <div className={css.socialsInner}>
            <SocialsList />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
