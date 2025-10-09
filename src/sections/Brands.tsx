import { useConfig } from '../store/hooks'

export default function Brands() {
  const config = useConfig()!
  const brands = config.sections.brands
  return (
    <section id="brands" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-brand">Бренды</h2>
          <p className="mt-6 text-lg leading-relaxed whitespace-pre-line">Мы предлагаем тщательно отобранный портфель товаров, которые ежедневно
              востребованы на рынке. Наши партнеры — это лидеры FMCG-рынка. Их продукция – гарант качества и  доверия миллионов потребителей. Мы понимаем, что успех дистрибьюции строится на правильном выборе бренда, поэтому сотрудничаем только с производителями, чья репутация и динамика роста не вызывают сомнений.
          </p>
        <div className="mt-8 flex gap-6 overflow-x-auto justify-around no-scrollbar py-2">
          {brands.map((b) => (
            <div key={b.logo} className="flex-shrink-0 flex items-center justify-center rounded-xl bg-white p-4 shadow w-24 h-20 lg:max-w-[calc(10%-1.5rem)] ">
              <img src={b.logo} alt={b.name} className=" object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
