import { useConfig } from '../store/hooks'
import type { DirectionDetail } from '../types/config'

export default function DirectionsDetail() {
  const config = useConfig()!
  const dd = config.sections.directionsDetail
  const items: DirectionDetail[] = [dd.trade, dd.logistics, dd.fulfillment]

  return (
    <section id="directions-detail" className="bg-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-0 space-y-0 snap-y">
        {items.map((item, i) => (
          <div key={item.id} className="h-[90vh] snap-start grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center py-16">
            <div className={i % 2 === 0 ? 'order-2 md:order-1' : 'order-2'}>
              <h2 className="text-3xl font-semibold text-brand">{item.title}</h2>
              {item.lead && <p className="mt-3 text-lg text-slate-200">{item.lead}</p>}
              <div className="prose prose-invert mt-4 max-w-none">
                {item.text.split('\n').map((p, idx) => <p key={idx}>{p}</p>)}
                {!!item.bullets?.length && (
                  <ul className="mt-4 list-disc pl-5">
                    {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                )}
              </div>
            </div>
            <div className={i % 2 === 0 ? 'order-1 md:order-2' : 'order-1'}>
              {item.image && <img src={item.image} alt={item.title} className="max-h-[80vh] rounded-2xl shadow" />}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
