import React from 'react'
import { useConfig } from '../store/hooks'

export default function Footer() {
  const config = useConfig()!
  const c = config.sections.contacts

  return (
    <footer className="border-t border-slate-200 bg-white py-10 text-sm text-slate-600">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 gap-8 md:grid-cols-[0.5fr,_1fr,_1fr]">


        {/* Navigation */}
        <nav className="flex flex-col space-y-2">
          <div className="text-slate-900 font-semibold">Навигация</div>
          <a href="#about" className="hover:text-brand">О компании</a>
          <a href="#directions" className="hover:text-brand">Направления</a>
          <a href="#trade" className="hover:text-brand">Оптовая торговля</a>
          <a href="#logistics" className="hover:text-brand">Складская логистика</a>
          <a href="#fulfillment" className="hover:text-brand">Фулфилмент</a>
          <a href="#brands" className="hover:text-brand">Бренды</a>
          <a href="#contacts" className="hover:text-brand">Контакты</a>
        </nav>

        {/* Contacts in two columns with black icons */}
        <div>
          <div className="text-slate-900 font-semibold mb-3">Контакты</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0">
            {/* Phone */}
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-800 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.77 19.77 0 0 1 3.15 9.81 19.77 19.77 0 0 1 .08 1.18 2 2 0 0 1 2.06 0h3a2 2 0 0 1 2 1.72c.12.9.3 1.78.54 2.63a2 2 0 0 1-.45 1.95L6 7a16 16 0 0 0 7 7l.7-.15a2 2 0 0 1 1.95.45c.85.24 1.73.42 2.63.54A2 2 0 0 1 22 16.92z" />
              </svg>
              <div>
                <div className="text-slate-700 font-medium">Телефон</div>
                <div>{c.phone}</div>
              </div>
            </div>
            {/* Hours */}
            <div className="flex items-start gap-3 col-[1]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-800 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <div>
                <div className="text-slate-700 font-medium">Режим работы</div>
                <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">{c.hours}</pre>
              </div>
            </div>
            {/* Address */}
            <div className="flex items-start gap-3 col-[2] row-start-1 row-end-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-800 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <div className="text-slate-700 font-medium">Адрес</div>
                <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">{c.address}</pre>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start gap-3 col-[1]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-800 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              <div>
                <div className="text-slate-700 font-medium">Почта</div>
                <a href={`mailto:${c.email}`} className="text-brand hover:underline">{c.email}</a>
              </div>
            </div>
          </div>
        </div>
          {/* Company info */}
          <div className="flex justify-center flex-col">
              <div className="text-slate-900 font-semibold text-end">{config.companyName}</div>
              <div className="mt-2 text-end">
                  © {new Date().getFullYear()} {config.companyName}.<br />
                  Информация на сайте не является публичной офертой.
              </div>
          </div>
      </div>
    </footer>
  )
}
