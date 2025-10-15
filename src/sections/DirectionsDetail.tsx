import { useConfig } from '../store/hooks'
import type { RichItem } from '../types/config'

export default function DirectionsDetail() {
  const config = useConfig()!
  const dd = config.sections.directionsDetail
  console.log(dd)
  return (
    <section id="directions-detail" className="bg-sky-100 text-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-0 space-y-0 snap-y">
        {/* Оптовая торговля — текст и оформление один в один с презентацией, с поправленными абзацами и жирным */}

        <div
          id="distribution"
          className="md:h-[90vh] snap-start grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center py-48"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-brand">{dd.distribution.title}</h2>
            <div className="prose prose-invert mt-4 max-w-none">
              {dd.distribution.text && (
                <p dangerouslySetInnerHTML={{ __html: dd.distribution.text }} />
              )}
              {dd.distribution.rich &&
                dd.distribution.rich.map((it: RichItem, i: number) =>
                  it.type === 'p_bold' ? (
                    <p key={i} className="mt-1">
                      <b>{it.text}</b>
                    </p>
                  ) : it.type === 'p' ? (
                    <p key={i} dangerouslySetInnerHTML={{ __html: it.text }} />
                  ) : it.type === 'ul' ? (
                    <ul key={i} className="mt-4 list-disc pl-5">
                      {it.items.map((li: string, j: number) => (
                        <li key={j} dangerouslySetInnerHTML={{ __html: li }} />
                      ))}
                    </ul>
                  ) : null,
                )}
            </div>
          </div>
          <div className="order-1 md:order-2">
            {dd.distribution && dd.distribution.image && (
              <img
                src={dd.distribution.image}
                alt={dd.distribution.title || ''}
                className="max-h-[80vh] rounded-2xl shadow"
              />
            )}
          </div>
        </div>

        <div
          id="logistics"
          className="md:h-[90vh] snap-start grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center py-16"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-brand">{dd.logistics.title}</h2>
            <div className="prose prose-invert mt-4 max-w-none">
              {dd.logistics.text && <p dangerouslySetInnerHTML={{ __html: dd.logistics.text }} />}
              {dd.logistics.rich &&
                dd.logistics.rich.map((it: RichItem, i: number) =>
                  it.type === 'p_bold' ? (
                    <p key={i} className="mt-1">
                      <b>{it.text}</b>
                    </p>
                  ) : it.type === 'p' ? (
                    <p key={i} dangerouslySetInnerHTML={{ __html: it.text }} />
                  ) : it.type === 'ul' ? (
                    <ul key={i} className="mt-4 list-disc pl-5">
                      {it.items.map((li: string, j: number) => (
                        <li key={j} dangerouslySetInnerHTML={{ __html: li }} />
                      ))}
                    </ul>
                  ) : null,
                )}
            </div>
          </div>
          <div className="order-1 md:order-2">
            {dd.logistics && dd.logistics.image && (
              <img
                src={dd.logistics.image}
                alt={dd.logistics.title || ''}
                className="max-h-[80vh] rounded-2xl shadow"
              />
            )}
          </div>
        </div>

        <div
          id="transport"
          className="md:h-[90vh] snap-start grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center py-16"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-brand">{dd.transport.title}</h2>
            <div className="prose prose-invert mt-4 max-w-none">
              {dd.transport.text && <p dangerouslySetInnerHTML={{ __html: dd.transport.text }} />}
              {dd.transport.rich &&
                dd.transport.rich.map((it: RichItem, i: number) =>
                  it.type === 'p_bold' ? (
                    <p key={i} className="mt-1">
                      <b>{it.text}</b>
                    </p>
                  ) : it.type === 'p' ? (
                    <p key={i} dangerouslySetInnerHTML={{ __html: it.text }} />
                  ) : it.type === 'ul' ? (
                    <ul key={i} className="mt-4 list-disc pl-5">
                      {it.items.map((li: string, j: number) => (
                        <li key={j} dangerouslySetInnerHTML={{ __html: li }} />
                      ))}
                    </ul>
                  ) : null,
                )}
            </div>
          </div>
          <div className="order-1 md:order-2">
            {dd.transport && dd.transport.image && (
              <img
                src={dd.transport.image}
                alt={dd.transport.title || ''}
                className="max-h-[80vh] rounded-2xl shadow"
              />
            )}
          </div>
        </div>

        <div
          id="fulfillment"
          className="md:h-[90vh] snap-start grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center py-16"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-brand">{dd.fulfillment.title}</h2>
            <div className="prose prose-invert mt-4 max-w-none">
              {dd.fulfillment.text && (
                <p dangerouslySetInnerHTML={{ __html: dd.fulfillment.text }} />
              )}
              {dd.fulfillment.rich &&
                dd.fulfillment.rich.map((it: RichItem, i: number) =>
                  it.type === 'p_bold' ? (
                    <p key={i} className="mt-1">
                      <b>{it.text}</b>
                    </p>
                  ) : it.type === 'p' ? (
                    <p key={i} dangerouslySetInnerHTML={{ __html: it.text }} />
                  ) : it.type === 'ul' ? (
                    <ul key={i} className="mt-4 list-disc pl-5">
                      {it.items.map((li: string, j: number) => (
                        <li key={j} dangerouslySetInnerHTML={{ __html: li }} />
                      ))}
                    </ul>
                  ) : null,
                )}
            </div>
          </div>
          <div className="order-1 md:order-2">
            {dd.fulfillment && dd.fulfillment.image && (
              <img
                src={dd.fulfillment.image}
                alt={dd.fulfillment.title || ''}
                className="max-h-[80vh] rounded-2xl shadow"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
