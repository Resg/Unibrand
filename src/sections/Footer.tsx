import { useConfig } from '../store/hooks'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-white text-slate-700 py-10">
            <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-8 items-start">

                {/* Навигация */}
                <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Навигация</h3>
                    <ul className="space-y-1 text-sm  list-disc leading-relaxed pl-5">
                        <li><a href="#about" className="hover:text-brand">О компании</a></li>
                        <li><a href="#directions" className="hover:text-brand">Направления</a></li>
                        <li><a href="#brands" className="hover:text-brand">Бренды</a></li>
                        <li><a href="#contacts" className="hover:text-brand">Контакты</a></li>
                    </ul>
                </div>

                {/* Контакты — шире, чтобы адрес меньше переносился */}
                <div className="min-w-[340px]">
                    <h3 className="font-semibold text-slate-900 mb-2">Контакты</h3>
                    <p className="text-sm leading-snug mt-1">Телефон: 8 (495) 363 03 50</p>
                    <p  className="text-sm leading-snug mt-1">Почта: <a href="mailto:info@unibrand.ru" className="text-brand hover:underline">info@unibrand.ru</a></p>
                    <p  className="text-sm leading-snug mt-1">Адрес: г. Москва, Муниципальный округ Можайский, территория Сколково инновационного центра, Большой бульвар, д. 40, этаж 5, ком. 128
                    </p>
                </div>

                {/* Юридическая информация */}
                <div className="text-sm leading-relaxed text-slate-600">
                    <h3 className="font-semibold text-slate-900 mb-2">ООО «ЮНИБРЕНД»</h3>
                    <p>© 2025 ООО «ЮНИБРЕНД».</p>
                    <p>Информация на сайте не является публичной офертой.</p>
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-6 mt-6 text-xs text-slate-400">
                Изображения на сайте частично сгенерированы с использованием ИИ.
            </div>
        </footer>
    )
}
