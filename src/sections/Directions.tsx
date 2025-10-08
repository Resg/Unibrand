import { motion } from 'framer-motion'
import type { Config } from '../types/config'
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card'

export default function Directions({ config }: {config: Config}) {
  return (
    <section id="directions" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="text-3xl font-semibold text-brand">Ключевые направления бизнеса</motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {config.sections.directions.map((item, i) => (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.5}}>
              <Card>
                {item.image && <img src={item.image} alt={item.title} className="h-36 w-full rounded-t-2xl object-cover" />}
                <CardHeader><CardTitle>{item.title}</CardTitle></CardHeader>
                <CardContent>
                  <p>{item.text}</p>
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="mt-3 list-disc space-y-1 pl-5">
                      {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}</div>
      </div>
    </section>
  )
}
