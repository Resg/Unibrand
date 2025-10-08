import type { PropsWithChildren } from 'react'
export function Card({ children, className='' }: PropsWithChildren<{className?: string}>) { return <div className={`rounded-2xl bg-white shadow-md ${className}`}>{children}</div> }
export function CardHeader({ children, className='' }: PropsWithChildren<{className?: string}>) { return <div className={`px-6 pt-6 ${className}`}>{children}</div> }
export function CardContent({ children, className='' }: PropsWithChildren<{className?: string}>) { return <div className={`px-6 pb-6 text-sm leading-relaxed text-slate-700 ${className}`}>{children}</div> }
export function CardTitle({ children, className='' }: PropsWithChildren<{className?: string}>) { return <h3 className={`text-xl font-semibold text-brand ${className}`}>{children}</h3> }
