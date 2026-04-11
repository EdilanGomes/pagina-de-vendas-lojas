import { ChevronDownIcon } from 'lucide-react';
import Title from './Title';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Faq() {
    const refs = useRef<(HTMLDetailsElement | null)[]>([]);

    const faqData = [
        {
            question: "Vocês trabalham com qualquer tipo de empresa?",
            answer: "Sim — mas o mais importante não é o segmento, e sim o momento da sua empresa. Já ajudamos negócios que estavam começando do zero e outros que precisavam destravar crescimento. Na conversa, conseguimos entender exatamente onde você está e o que faz mais sentido aplicar."
        },
        {
            question: "Preciso já ter um site ou loja pronta?",
            answer: "Não precisa. A gente pode construir toda a estrutura do zero ou pegar algo que você já tem e melhorar. Inclusive, muitos clientes chegam com algo pronto, mas que não converte — e é aí que entra o ajuste estratégico."
        },
        {
            question: "Vocês fazem só tráfego pago ou cuidam de tudo?",
            answer: "A gente não acredita em marketing isolado. Tráfego sem estrutura não converte, e estrutura sem tráfego não cresce. Por isso, trabalhamos integrando tudo — aquisição, conteúdo e tecnologia — para realmente gerar resultado."
        },
        {
            question: "Em quanto tempo começo a ver resultado?",
            answer: "Algumas ações, como tráfego pago, já começam a gerar movimento nas primeiras semanas. Mas o crescimento consistente vem com ajustes e otimizações ao longo do tempo. Na consultoria, conseguimos te dar uma visão mais realista baseada no seu cenário."
        },
        {
            question: "Vocês também cuidam das redes sociais?",
            answer: "Sim, mas não só postar por postar. A gente trabalha posicionamento, conteúdo e estratégia para que suas redes realmente ajudem no crescimento do negócio — não só na estética."
        },
        {
            question: "Vocês criam ou só gerenciam lojas virtuais?",
            answer: "Fazemos os dois. Criamos lojas do zero, migramos de plataforma e também ajudamos lojas que já existem a vender mais. Muitas vezes, o problema não é a loja — é a forma como ela está estruturada para vender."
        },
        {
            question: "Como funciona o processo de trabalho?",
            answer: "Primeiro entendemos seu negócio e onde estão os gargalos. Depois desenhamos a estratégia e partimos para execução. O diferencial está no acompanhamento constante — ajustando o que for necessário para melhorar os resultados."
        },
        {
            question: "O atendimento é próximo ou automatizado?",
            answer: "Totalmente próximo. Você fala com pessoas, não com robôs. A ideia é ter um parceiro acompanhando seu crescimento e não só alguém executando tarefas."
        },
        {
            question: "Como funciona a consultoria gratuita?",
            answer: "Você agenda um horário e conversa direto com um especialista. Nessa conversa, analisamos seu cenário, apontamos oportunidades e te mostramos caminhos claros para evoluir. Mesmo que você não feche com a gente, já sai com uma visão muito mais estratégica do seu negócio."
        }
    ];

    return (
        <section id="faq" className="py-20 2xl:py-32">
            <div className="max-w-3xl mx-auto px-4">

                <Title
                    title="FAQ"
                    heading="Dúvidas antes de começar?"
                    description="Se você ainda está avaliando, essas respostas vão te ajudar a entender melhor como podemos apoiar o crescimento da sua empresa."
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