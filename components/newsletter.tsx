'use client'

import { useMemo, useState } from 'react'
import { Headline } from './ui/headline'
import { LoaderCircle } from 'lucide-react'

const css = {
  description: 'text-zinc-500 dark:text-zinc-400 mt-4 tracking-tighter',
  form: 'relative mt-4',
  input:
    'border bg-white dark:bg-zinc-700 dark:border-zinc-900 w-full px-2 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent',
  subscribe:
    'bg-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-800 inline-flex items-center top-2 text-xs right-1 text-white px-2 py-2 rounded-md absolute disabled:opacity-50 disabled:pointer-events-none',
  loader: 'size-4 animate-spin ms-1.5',
}

const Form = () => {
  const [email, setEmail] = useState('')
  const [isSending, setIsSending] = useState(false)

  const isValidEmail = useMemo(() => {
    return email.includes('@')
  }, [email])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSending(true)
    setTimeout(() => {
      setIsSending(false)
    }, 2000)
    // console.log(email)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        type="email"
        className={css.input}
        onChange={handleChange}
        value={email}
      />
      <button
        type="submit"
        className={css.subscribe}
        disabled={!isValidEmail || isSending}
      >
        Subscribe
        {isSending && <LoaderCircle className={css.loader} />}
      </button>
    </form>
  )
}

export function Newsletter() {
  return (
    <div>
      <Headline>My Newsletter</Headline>
      <div className={css.description}>
        Get insights on React ecosystem, web development best practices, and
        discover new open-source tools that can enhance your development
        workflow.
      </div>
      <Form />
    </div>
  )
}
