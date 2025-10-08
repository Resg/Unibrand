import Logo from '../components/Logo'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2"><Logo height={28} /></a>
        <nav className="hidden gap-6 md:flex text-sm">
          <a href="#about" className="hover:text-brand">О компании</a>
          <a href="#directions" className="hover:text-brand">Направления</a>
          <a href="#trade" className="hover:text-brand">Оптовая торговля</a>
          <a href="#logistics" className="hover:text-brand">Складская логистика</a>
          <a href="#fulfillment" className="hover:text-brand">Фулфилмент</a>
          <a href="#brands" className="hover:text-brand">Бренды</a>
          <a href="#contacts" className="hover:text-brand">Контакты</a>
        </nav>
      </div>
    </header>
  )
}
