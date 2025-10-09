import { useConfig } from '../store/hooks'
import React from 'react'

export default function Contacts() {
  const config = useConfig()!
  const c = config.sections.contacts
  return (
    <section id="contacts" className="relative bg-cover bg-center py-20 text-white" style={{ backgroundImage: `url('/images/bg-map-skolkovo.jpg')` }}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-brand">Контакты</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white/95 p-6 text-slate-800 shadow-lg backdrop-blur">
            <ul className="divide-y divide-slate-200">
              <li className="flex items-start gap-4 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="none" stroke="#0AAFDC" strokeWidth="1.8">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.77 19.77 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 9.81 19.77 19.77 0 0 1 .08 1.18 2 2 0 0 1 2.06 0h3a2 2 0 0 1 2 1.72c.12.9.3 1.78.54 2.63a2 2 0 0 1-.45 1.95L6 7a16 16 0 0 0 7 7l.7-.15a2 2 0 0 1 1.95.45c.85.24 1.73.42 2.63.54A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div>
                  <div className="text-slate-500 text-sm">Телефон</div>
                  <div className="mt-1 text-lg font-medium">{c.phone}</div>
                </div>
              </li>
              <li className="flex items-start gap-4 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="none" stroke="#0AAFDC" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <div>
                  <div className="text-slate-500 text-sm">Режим работы</div>
                  <pre className="mt-1 whitespace-pre-wrap font-sans text-base leading-relaxed">{c.hours}</pre>
                </div>
              </li>
              <li className="flex items-start gap-4 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="none" stroke="#0AAFDC" strokeWidth="1.8">
                  <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <div className="text-slate-500 text-sm">Адрес</div>
                  <pre className="mt-1 whitespace-pre-wrap font-sans text-base leading-relaxed">{c.address}</pre>
                </div>
              </li>
              <li className="flex items-start gap-4 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="none" stroke="#0AAFDC" strokeWidth="1.8">
                  <path d="M4 4h16v16H4z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
                <div>
                  <div className="text-slate-500 text-sm">Почта</div>
                  <div className="mt-1 text-base">{c.email}</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/95 p-6 text-slate-800 shadow-lg backdrop-blur">
            <h3 className="text-xl font-semibold text-slate-900">Обратная связь</h3>
            <form className="mt-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm text-slate-600">Имя</label>
                <input className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand" placeholder="Ваше имя" />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm text-slate-600">Телефон</label>
                  <input className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="block text-sm text-slate-600">E‑mail</label>
                  <input type="email" className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand" placeholder="you@company.ru" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-600">Сообщение</label>
                <textarea className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand" rows={4} placeholder="Кратко опишите запрос"></textarea>
              </div>
              <button className="w-full rounded-xl bg-brand px-5 py-3 font-medium text-white hover:opacity-90 transition">Отправить</button>
              <p className="text-xs text-slate-500">Нажимая на кнопку «Отправить», вы даете свое согласие на обработку и использование ваших персональных данных.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
