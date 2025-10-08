import type { Config } from '../types/config'

export default function Footer({ config }: {config: Config}) {
  const c = config.sections.contacts
  return (
    <footer className="border-t border-slate-200 bg-white py-10 text-sm text-slate-600">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div>
          <div className="text-slate-900 font-semibold">{config.companyName}</div>
          <div className="mt-2">© 2025 {config.companyName}. Информация на сайте не является публичной офертой.</div>
        </div>
        <div>
          <div className="text-slate-900 font-semibold">Контакты</div>
          <ul className="mt-2 space-y-1">
            <li>Телефон: {c.phone}</li>
            <li>E-mail: {c.email}</li>
            {c.address && <li>Адрес: {c.address}</li>}
            {c.hours && <li>Режим работы: {c.hours}</li>}
          </ul>
        </div>
        <div>
          <div className="text-slate-900 font-semibold">Навигация</div>
          <ul className="mt-2 space-y-1">
            <li><a href="#about" className="hover:text-brand">О компании</a></li>
            <li><a href="#directions" className="hover:text-brand">Направления</a></li>
            <li><a href="#brands" className="hover:text-brand">Бренды</a></li>
            <li><a href="#contacts" className="hover:text-brand">Контакты</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
