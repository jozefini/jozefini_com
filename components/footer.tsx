import { Logo } from './icons/logo'

const css = {
  wrapper: 'w-full max-w-3xl mt-8',
  inner: 'text-center flex items-center justify-center flex-col mt-16 text-sm',
  brand: 'text-zinc-300 dark:text-zinc-600',
  logo: 'size-10',
  copyright: 'mt-4',
  separator: 'opacity-30',
}

export function Footer() {
  const startYear = 2024
  const currentYear = new Date().getFullYear()
  const years =
    startYear === currentYear ? startYear : `${startYear}-${currentYear}`

  return (
    <footer className={css.wrapper}>
      <div className={css.inner}>
        <div className={css.brand}>
          <Logo className={css.logo} />
        </div>
        <div className={css.copyright}>
          © <span className={css.separator}>/</span> {years}{' '}
          <span className={css.separator}>/</span> Jozefin Bashaj
        </div>
      </div>
    </footer>
  )
}
