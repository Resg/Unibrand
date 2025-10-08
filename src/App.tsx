import { useEffect, useState } from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import DirectionsOverview from './sections/DirectionsOverview'
import DirectionsDetail from './sections/DirectionsDetail'
import Brands from './sections/Brands'
import Contacts from './sections/Contacts'
import Footer from './sections/Footer'
import type { Config } from './types/config'

export default function App() {
  const [config, setConfig] = useState<Config | null>(null)

  useEffect(() => {
    fetch('/config.json')
      .then((res) => res.json())
      .then((data) => setConfig(data))
      .catch((err) => console.error('Config load error', err))
  }, [])

  if (!config) return <div className="p-10 text-center text-slate-400">Загрузка...</div>

  return (
    <main className="min-h-screen">
      <Header />
      <Hero config={config} />
      <About config={config} />
      <DirectionsOverview config={config} />
      <DirectionsDetail config={config} />
      <Brands config={config} />
      <Contacts config={config} />
      <Footer config={config} />
    </main>
  )
}
