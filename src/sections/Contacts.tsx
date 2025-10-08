import { motion } from 'framer-motion'
import type { Config } from '../types/config'
import Input from '../components/Input'
import Button from '../components/Button'

export default function Contacts({ config }: {config: Config}) {
  return (
    <section id="contacts" className="relative bg-cover bg-center py-20 text-white" style={{ backgroundImage: `url('/images/photo_2025-10-01_13-55-02.jpg')` }}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="text-3xl font-semibold text-brand">Контакты</motion.h2>
        <p className="mt-4 text-white/90">{config.sections.contactsText}</p>
        <form className="mt-8 mx-auto flex max-w-md flex-col gap-3">
          <Input placeholder="Ваше имя" />
          <Input placeholder="Ваш телефон" />
          <Input placeholder="Ваше сообщение" />
          <Button>Отправить</Button>
          <p className="mt-2 text-xs text-white/70">Нажимая «Отправить», вы соглашаетесь с политикой обработки данных.</p>
        </form>
        <div className="mt-8 flex flex-col items-center gap-2 text-white/90">
          <p>{config.sections.contacts.email}</p>
          <p>{config.sections.contacts.phone}</p>
        </div>
      </div>
    </section>
  )
}
