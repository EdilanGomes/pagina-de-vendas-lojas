import { ChevronDownIcon } from 'lucide-react';
import Title from './Title';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Faq() {
    const refs = useRef<(HTMLDetailsElement | null)[]>([]);

    const faqData = [
        {
            question: "Vocês trabalham com qualquer tipo de empresa?",
            answer: "Sim. Atendemos desde empresas que estão começando até negócios que já faturam e querem escalar. Adaptamos a estratégia de acordo com o momento da sua empresa."
        },
        {
            question: "Preciso já ter um site ou loja pronta?",
            answer: "Não. Podemos criar toda a estrutura para você, incluindo site, landing page ou loja virtual. Também trabalhamos com projetos já existentes, fazendo melhorias e otimizações."
        },
        {
            question: "Vocês fazem só tráfego pago ou cuidam de tudo?",
            answer: "Cuidamos de toda a estratégia digital: tráfego pago, redes sociais e desenvolvimento. Tudo integrado para gerar mais resultados e não ações isoladas."
        },
        {
            question: "Em quanto tempo começo a ver resultados?",
            answer: "Depende do projeto, mas campanhas de tráfego pago podem gerar resultados nas primeiras semanas. Já o crescimento estruturado acontece de forma contínua com otimizações ao longo do tempo."
        },
        {
            question: "Vocês também cuidam das redes sociais?",
            answer: "Sim. Criamos estratégia, conteúdo e gestão completa das redes sociais para fortalecer sua marca e gerar mais oportunidades de negócio."
        },
        {
            question: "Vocês criam ou só gerenciam lojas virtuais?",
            answer: "Fazemos os dois. Criamos lojas do zero, migramos plataformas e também ajudamos a otimizar e escalar lojas que já estão no ar."
        },
        {
            question: "Como funciona o processo de trabalho?",
            answer: "Começamos com um diagnóstico do seu negócio, depois definimos a estratégia e partimos para execução. Acompanhamos tudo de perto com otimizações constantes."
        },
        {
            question: "O atendimento é próximo ou automatizado?",
            answer: "Nosso atendimento é próximo e estratégico. Você terá suporte direto com nosso time para acompanhar resultados e evoluir seu projeto."
        }
    ];

    return (
        <section id="faq" className="py-20 2xl:py-32">
            <div className="max-w-3xl mx-auto px-4">

                <Title
                    title="FAQ"
                    heading="Dúvidas antes de começar?"
                    description="Respondemos as principais perguntas sobre como funciona nosso trabalho e como podemos ajudar sua empresa a crescer no digital."
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