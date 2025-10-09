import { useConfig } from '../store/hooks'

export default function Brands() {
  const config = useConfig()!
  const brands = config.sections.brands
  return (
    <section id="brands" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-brand">Бренды</h2>
        <div className="mt-8 flex gap-6 overflow-x-auto no-scrollbar py-2">
          {brands.map((b) => (
            <div key={b.logo} className="flex-shrink-0 flex items-center justify-center rounded-xl bg-white p-4 shadow-sm w-30 h-20">
              <img src={b.logo} alt={b.name} className="max-h-12 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
