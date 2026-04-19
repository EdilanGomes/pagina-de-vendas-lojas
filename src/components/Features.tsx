import { useRef } from 'react';
import Title from './Title';
import { motion } from 'framer-motion';
import { Megaphone, ShoppingCart, Instagram } from "lucide-react";

export default function Features() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    const features = [
        {
            icon: <Megaphone className="size-5 text-indigo-400" />,
            title: "Anúncios | Growth Performance",
            desc: "Criamos campanhas no Google, Meta e outras plataformas com foco em crescimento previsível, geração de leads qualificados e aumento real."
        },
        {
            icon: <ShoppingCart className="size-5 text-indigo-400" />,
            title: "Consultoria em Marketing/Comercial",
            desc: "Diagnosticamos gargalos comerciais e aplicamos estratégias de posicionamento, oferta e tomada de decisão para acelerar resultados."
        },
        {
            icon: <Instagram className="size-5 text-indigo-400" />,
            title: "Social Media Estratégico",
            desc: "Transformamos suas redes sociais em autoridade digital, usando conteúdo persuasivo, gatilhos mentais e percepção de valor."
        }
    ];

    return (
        <section id="features" className="py-20 2xl:py-32">
            <div className="max-w-6xl mx-auto px-4">

                <Title
                    title="Serviços"
                    heading="Marketing para Clínicas e Escritórios"
                    description="Estratégia, aquisição e posicionamento trabalhando juntos para gerar crescimento previsível, autoridade e mais clientes."
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