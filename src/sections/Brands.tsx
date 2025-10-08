import { motion } from 'framer-motion'
import type { Config } from '../types/config'

export default function Brands({ config }: {config: Config}) {
  return (
    <section id="brands" className="mx-auto max-w-6xl px-6 py-16">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="text-3xl font-semibold text-brand">Бренды</motion.h2>
      <p className="mt-2 text-sm text-slate-500"></p>
      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
        {config.sections.brands.map((b, i) => (
          <div key={i} className="flex items-center justify-center">
            <img src={b.logo} alt={b.name} className="h-16 object-contain" />
          </div>
        ))}
      </div>
    </section>
  )
}
