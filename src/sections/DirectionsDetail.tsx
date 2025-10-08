import { motion } from 'framer-motion'
import type { Config, DirectionDetail } from '../types/config'

function Block({ d }: { d: DirectionDetail }) {
  return (
    <section id={d.id} className="section-alt"><div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="text-3xl font-semibold text-brand">
            {d.title}
          </motion.h2>
          {d.lead && <p className="mt-4 text-lg text-slate-700">{d.lead}</p>}
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="prose prose-slate mt-6 max-w-none">
            {d.text.split('\n').map((p, idx) => <p key={idx}>{p}</p>)}
            {d.bullets && d.bullets.length > 0 && (
              <ul className="mt-4 list-disc pl-5">
                {d.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            )}
          </motion.div>
        </div>
        <div className="order-1 md:order-2">
          {d.image && <img src={d.image} alt={d.title} className="w-full rounded-2xl object-cover shadow" />}
        </div>
      </div>
    </div></section>
  )
}

export default function DirectionsDetail({ config }: {config: Config}) {
  const dd = config.sections.directionsDetail
  return (
    <>
      <Block d={dd.trade} />
      <Block d={dd.logistics} />
      <Block d={dd.fulfillment} />
    </>
  )
}
