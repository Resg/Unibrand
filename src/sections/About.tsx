import { motion } from 'framer-motion'
import type { Config } from '../types/config'
export default function About({ config }: {config: Config}) {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="text-3xl font-semibold text-brand">О компании</motion.h2>
      <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="mt-6 text-lg leading-relaxed">{config.sections.about}</motion.p>
    </section>
  )
}
