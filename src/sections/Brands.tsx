import { useConfig } from '../store/hooks'

export default function Brands() {
  const config = useConfig()!
  const brands = config.sections.brands
  return (
    <section id="brands" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-brand">Бренды</h2>
        <p className="mt-6 text-lg leading-relaxed whitespace-pre-line">
          Мы предлагаем тщательно отобранный портфель товаров, которые ежедневно востребованы на
          рынке. Наши партнеры — это лидеры FMCG-рынка. Их продукция – гарант качества и доверия
          миллионов потребителей. Мы понимаем, что успех дистрибьюции строится на правильном выборе
          бренда, поэтому сотрудничаем только с производителями, чья репутация и динамика роста не
          вызывают сомнений.
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {brands.map(b => (
            <div
              key={b.logo}
              className="rounded-2xl overflow-hidden bg-white p-4 shadow w-40 h-28 md:w-44 md:h-32 lg:w-48 lg:h-36 flex items-center justify-center"
            >
              <img src={b.logo} alt={b.name} className="object-contain p-2 scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
