import { useConfig } from '../store/hooks'

export default function Brands() {
  const config = useConfig()!
  const brands = config.sections.brands
  return (
    <section id="brands" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-brand">Наши бренды</h2>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {brands.map((b) => (
            <div key={b.logo} className="flex items-center justify-center rounded-xl bg-white p-4 shadow-sm">
              <img src={b.logo} alt={b.name} className="max-h-12 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
