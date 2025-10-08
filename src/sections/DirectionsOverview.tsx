import { useConfig } from '../store/hooks'
import { motion } from 'framer-motion'

export default function DirectionsOverview() {
  const config = useConfig()!
  const items = config.sections.directionsOverview.items
  return (
    <section id="directions" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="text-3xl font-semibold text-brand">Ключевые направления бизнеса</motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((it) => (
            <a key={it.id} href={`#${it.id}`} className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
              <div className="relative aspect-[5/3] w-full overflow-hidden hover-zoom">
                <img src={it.image} alt={it.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="hover-dim absolute inset-0" />
              </div>
              <div className="p-5">
                <div className="text-lg font-semibold text-slate-900">{it.title}</div>
                {it.lead && <p className="mt-1 text-sm text-slate-600">{it.lead}</p>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
