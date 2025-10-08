import { motion, useScroll, useTransform } from 'framer-motion'
import Logo from '../components/Logo'
import { useConfig } from '../store/hooks'

export default function Hero() {
  const config = useConfig()!
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 200], [0, 40])
  const opacity = useTransform(scrollY, [0, 200], [1, 0.85])

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center text-white">
      <div className="absolute inset-0">
        <img src="/images/hero-bg.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 h-full w-full object-cover" poster="/images/hero-bg.jpg">
          <source src="/videos/promo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35" />
      </div>
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-3xl text-center px-6">
        <div className="flex items-center justify-center"><Logo height={40} /></div>
        <h1 className="mt-5 text-4xl md:text-5xl font-semibold drop-shadow-sm">{config.tagline}</h1>
        <p className="mt-4 text-lg text-white/90">{config.aboutShort}</p>
      </motion.div>
    </section>
  )
}
