import type { InputHTMLAttributes } from 'react'
export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand ${props.className ?? ''}`}
    />
  )
}
