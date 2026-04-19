import { useRef } from 'react';
import Title from './Title';
import { motion } from 'framer-motion';
import { Megaphone, ShoppingCart, Instagram } from "lucide-react";

export default function Features() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    const features = [
        {
            icon: <Megaphone className="size-5 text-indigo-400" />,
            title: "Anúncios On-line para Clínicas e Escritórios",
            desc: "Planejamos, executamos e otimizamos campanhas no Google, Meta e TikTok para atrair clientes qualificados, aumentar agendamentos e gerar novas oportunidades."
        },
        {
            icon: <ShoppingCart className="size-5 text-indigo-400" />,
            title: "Consultoria Estratégica",
            desc: "Estruturamos clínicas e escritórios com estratégias de marketing, posicionamento e captação para gerar crescimento previsível e consistente."
        },
        {
            icon: <Instagram className="size-5 text-indigo-400" />,
            title: "Social Media para Clínicas e Escritórios",
            desc: "Gerenciamos suas redes sociais com conteúdo estratégico para gerar autoridade, confiança e novos contatos todos os meses."
        }
    ];

    return (
        <section id="features" className="py-20 2xl:py-32">
            <div className="max-w-6xl mx-auto px-4">

                <Title
                    title="Serviços"
                    heading="Clínicas e escritórios precisam para crescer"
                    description="Tráfego, conteúdo e estratégia trabalhando juntos para atrair clientes, fortalecer sua autoridade e aumentar seu faturamento."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            ref={(el) => {
                                refs.current[i] = el;
                            }}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 250,
                                damping: 70,
                                mass: 1,
                                delay: 0.1 + i * 0.1
                            }}
                            key={i}
                            onAnimationComplete={() => {
                                const card = refs.current[i];
                                if (card) {
                                    card.classList.add(
                                        "transition",
                                        "duration-300",
                                        "hover:border-white/15",
                                        "hover:-translate-y-1"
                                    );
                                }
                            }}
                            className="rounded-2xl p-6 bg-white/3 border border-white/6"
                        >
                            <div className="w-12 h-12 rounded-lg bg-violet-900/20 flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>

                            <h3 className="text-lg font-semibold mb-2">
                                {feature.title}
                            </h3>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}