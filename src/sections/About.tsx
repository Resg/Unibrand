import { useConfig } from '../store/hooks'

export default function About() {
  const config = useConfig()!

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-3xl font-semibold text-brand">О компании</h2>
      <p className="mt-6 text-lg leading-relaxed whitespace-pre-line">
        {config.about}
      </p>
    </section>
  )
}
