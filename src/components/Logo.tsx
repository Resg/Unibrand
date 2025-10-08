import React from 'react'

interface Props {
  height?: number
  className?: string
  showText?: boolean
}

export default function Logo({ height = 28, className = '', showText = true }: Props) {
  const style: React.CSSProperties = { height }
  return (
    <div className={`inline-flex items-center gap-2 ${className}`} style={style} aria-label="ЮНИБРЕНД логотип">
      <img src="/images/logo-icon.png" alt="ЮНИБРЕНД" className="h-full w-auto" />
      {showText && (
        <div className="flex items-baseline text-[1.2em] leading-none select-none">
          <span className="font-normal text-[#7D7D7D]">ЮНИ</span>
          <span className="ml-[2px] font-semibold text-[#0AAFDC]">БРЕНД</span>
        </div>
      )}
    </div>
  )
}
