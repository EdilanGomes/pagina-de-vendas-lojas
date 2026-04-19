import { ChevronDownIcon } from 'lucide-react';
import Title from './Title';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Faq() {
    const refs = useRef<(HTMLDetailsElement | null)[]>([]);

    const faqData = [
        {
            question: "Vocês trabalham com quais tipos de clínicas e escritórios?",
            answer: "Sim. Atendemos clínicas odontológicas, médicas, estéticas, psicológicas, terapêuticas, veterinárias e profissionais da saúde em geral. Também atendemos escritórios de advocacia, contabilidade, arquitetura, engenharia e negócios consultivos. O foco é entender seu momento e criar uma estratégia para gerar crescimento."
        },
        {
            question: "Preciso já ter site ou estrutura pronta para começar?",
            answer: "Não. Podemos desenvolver toda a estrutura necessária, desde site institucional até páginas focadas em conversão. Se você já possui algo pronto, analisamos e otimizamos para melhorar resultados."
        },
        {
            question: "Vocês fazem só tráfego pago ou cuidam de tudo?",
            answer: "Atuamos de forma estratégica e completa. Podemos cuidar da captação com anúncios, redes sociais, posicionamento digital, páginas, CRM, automações e melhoria da jornada comercial."
        },
        {
            question: "Em quanto tempo começo a ver resultado?",
            answer: "Isso depende do mercado, da estrutura atual e do objetivo. Em muitos casos, campanhas já começam a gerar contatos nas primeiras semanas. Já crescimento consistente vem com otimização contínua e estratégia bem aplicada."
        },
        {
            question: "Vocês também gerenciam redes sociais?",
            answer: "Sim. Trabalhamos social media com foco em autoridade, percepção de valor e geração de oportunidades. Não é apenas postar conteúdo, e sim posicionar sua marca para vender mais."
        },
        {
            question: "O que significa Growth e Neuro Marketing na prática?",
            answer: "Growth é crescimento orientado por dados, testes e melhoria contínua. Neuro Marketing aplica princípios de comportamento e tomada de decisão para aumentar atenção, confiança e conversão. Unimos os dois para gerar resultado real."
        },
        {
            question: "Vocês trabalham com automação e CRM?",
            answer: "Sim. Implementamos processos para organizar leads, acompanhar oportunidades, automatizar contatos e reduzir perdas comerciais. Isso ajuda sua empresa a vender melhor e com mais previsibilidade."
        },
        {
            question: "Como funciona o processo de trabalho?",
            answer: "Primeiro analisamos seu cenário atual. Depois identificamos gargalos e oportunidades. Em seguida, definimos plano estratégico, implementação e acompanhamento contínuo com foco em crescimento sustentável."
        },
        {
            question: "Como funciona a consultoria gratuita?",
            answer: "Você agenda um horário com nosso time. Avaliamos sua presença digital, captação, posicionamento e possíveis travas de crescimento. Ao final, mostramos oportunidades claras para sua clínica ou escritório evoluir."
        }
    ];

    return (
        <section id="faq" className="py-20 2xl:py-32">
            <div className="max-w-3xl mx-auto px-4">

                <Title
                    title="FAQ"
                    heading="Dúvidas antes de começar?"
                    description="Essas são as dúvidas mais comuns que recebemos de clínicas e escritórios interessados em crescer."
                />

                <div className="space-y-3">
                    {faqData.map((faq, i) => (
                        <motion.details
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
                                    card.classList.add("transition", "duration-300");
                                }
                            }}
                            className="group bg-white/6 rounded-xl select-none"
                        >
                            <summary className="flex items-center justify-between p-4 cursor-pointer">
                                <h4 className="font-medium">{faq.question}</h4>
                                <ChevronDownIcon className="w-5 h-5 text-gray-300 group-open:rotate-180 transition-transform" />
                            </summary>

                            <p className="p-4 pt-0 text-sm text-gray-300 leading-relaxed">
                                {faq.answer}
                            </p>
                        </motion.details>
                    ))}
                </div>

            </div>
        </section>
    );
}