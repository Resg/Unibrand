import Header from './sections/Header'
import Hero from './sections/Hero'
import DirectionsOverview from './sections/DirectionsOverview'
import DirectionsDetail from './sections/DirectionsDetail'
import Brands from './sections/Brands'
import Contacts from './sections/Contacts'
import Footer from './sections/Footer'
import About from './sections/About'
import { useConfig, useConfigStatus } from './store/hooks'

export default function App() {
  const status = useConfigStatus()
  const config = useConfig()

  if (status === 'loading' || !config) {
    return <div className="min-h-screen flex items-center justify-center text-slate-500">Загрузка…</div>
  }
  if (status === 'failed') {
    return <div className="min-h-screen flex items-center justify-center text-red-600">Ошибка загрузки конфигурации</div>
  }

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <DirectionsOverview />
      <DirectionsDetail />
      <Brands />
      <Contacts />
      <Footer />
    </main>
  )
}
