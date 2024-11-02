import type { SVGProps } from 'react'

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26.46 26.46"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        d="m7 3.45 4.75-2.37 4.75 2.37v7.13l4.75 2.37v7.13l-4.75 2.37v-7.12l-4.75-2.38V5.83z"
      />
      <path
        fill="currentColor"
        d="m5.31 4.38 4.75 2.37V21l4.75 2.38-4.75 2.37-4.75-2.38z"
      />
    </svg>
  )
}
