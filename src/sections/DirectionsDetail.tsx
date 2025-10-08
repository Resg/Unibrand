import { useConfig } from '../store/hooks'
import type { DirectionDetail } from '../types/config'

export default function DirectionsDetail() {
  const config = useConfig()!
  const dd = config.sections.directionsDetail
  const items: DirectionDetail[] = [dd.trade, dd.logistics, dd.fulfillment]

  return (
    <section id="directions-detail" className="section-alt">
      <div className="mx-auto max-w-6xl px-6 py-16 space-y-16">
        {items.map((item, i) => (
          <div key={item.id} className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div className={i % 2 === 0 ? 'order-2 md:order-1' : 'order-2'}>
              <h2 className="text-3xl font-semibold text-brand">{item.title}</h2>
              {item.lead && <p className="mt-3 text-lg text-slate-700">{item.lead}</p>}
              <div className="prose prose-slate mt-4 max-w-none">
                {item.text.split('\n').map((p, idx) => <p key={idx}>{p}</p>)}
                {!!item.bullets?.length && (
                  <ul className="mt-4 list-disc pl-5">
                    {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                )}
              </div>
            </div>
            <div className={i % 2 === 0 ? 'order-1 md:order-2' : 'order-1'}>
              {item.image && <img src={item.image} alt={item.title} className="w-full rounded-2xl object-cover shadow" />}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
