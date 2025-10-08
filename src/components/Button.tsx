import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
export default function Button({ className = '', ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return <button {...props} className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium bg-brand text-white hover:opacity-90 transition ${className}`} />
}
