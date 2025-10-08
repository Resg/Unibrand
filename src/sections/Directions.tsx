import { motion } from 'framer-motion'
import type { Config, DirectionDetail } from '../types/config'

export default function Directions({ config }: { config: Config }) {
    const dd = config.sections.directionsDetail
    const items: DirectionDetail[] = [dd.trade, dd.logistics, dd.fulfillment]

    return (
        <section id="directions-detail" className="section-alt">
            <div className="mx-auto max-w-6xl px-6 py-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-semibold text-brand"
                >
                    Направления бизнеса
                </motion.h2>

                <div className="mt-10 space-y-16">
                    {items.map((item: DirectionDetail, i: number) => (
                        <div
                            key={item.id}
                            className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center"
                        >
                            <div className={i % 2 === 0 ? 'order-2 md:order-1' : 'order-2'}>
                                <h3 className="text-2xl font-semibold text-slate-900">
                                    {item.title}
                                </h3>
                                {item.lead && (
                                    <p className="mt-3 text-lg text-slate-700">{item.lead}</p>
                                )}
                                <div className="prose prose-slate mt-4 max-w-none">
                                    {item.text.split('\n').map((p: string, idx: number) => (
                                        <p key={idx}>{p}</p>
                                    ))}
                                    {item.bullets && item.bullets.length > 0 && (
                                        <ul className="mt-4 list-disc pl-5">
                                            {item.bullets.map((b: string, j: number) => (
                                                <li key={j}>{b}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div className={i % 2 === 0 ? 'order-1 md:order-2' : 'order-1'}>
                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full rounded-2xl object-cover shadow"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
