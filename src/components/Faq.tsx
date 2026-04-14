import { ChevronDownIcon } from 'lucide-react';
import Title from './Title';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Faq() {
    const refs = useRef<(HTMLDetailsElement | null)[]>([]);

    const faqData = [
        {
            question: "Vocês trabalham com qualquer tipo de clínica?",
            answer: "Sim — atendemos clínicas estéticas, odontológicas, médicas, terapias, veterinárias e profissionais da saúde em geral. O mais importante é entender o momento da sua clínica e criar uma estratégia focada em atrair pacientes e aumentar os agendamentos."
        },
        {
            question: "Preciso já ter um site ou página pronta?",
            answer: "Não. Criamos toda a estrutura para você, desde o site até páginas de captura focadas em conversão. Se você já tiver algo, analisamos e otimizamos para gerar mais agendamentos."
        },
        {
            question: "Vocês fazem só tráfego pago ou cuidam de tudo?",
            answer: "Cuidamos de todo o processo. Desde os anúncios online (Google, Instagram e Facebook), até a estrutura de captação, páginas, CRM e automações para garantir que os pacientes avancem até o agendamento."
        },
        {
            question: "Em quanto tempo começo a ver resultado?",
            answer: "Os anúncios começam a gerar contatos já nas primeiras semanas. Mas o crescimento consistente vem com otimização, estrutura e acompanhamento. Na consultoria, mostramos uma previsão mais realista para sua clínica."
        },
        {
            question: "Vocês também cuidam das redes sociais?",
            answer: "Sim, com foco estratégico. Criamos conteúdos que geram autoridade, confiança e ajudam na decisão do paciente, conectando redes sociais com os anúncios e o processo de agendamento."
        },
        {
            question: "Como funciona o CRM e os agendamentos?",
            answer: "Implementamos e treinamos o uso de CRM para organizar seus leads, automatizar contatos e aumentar a taxa de agendamento. Assim, nenhum paciente interessado se perde no processo."
        },
        {
            question: "Vocês trabalham com automação de WhatsApp e e-mail?",
            answer: "Sim. Criamos automações para nutrir leads, reativar pacientes e acompanhar contatos automaticamente, aumentando as chances de conversão e preenchendo sua agenda."
        },
        {
            question: "Como funciona o processo de trabalho?",
            answer: "Primeiro analisamos sua clínica e identificamos oportunidades. Depois estruturamos anúncios, páginas, CRM e automações. Acompanhamos tudo de perto, otimizando continuamente para aumentar os agendamentos."
        },
        {
            question: "Como funciona a consultoria gratuita?",
            answer: "Você agenda um horário e fala com um especialista. Analisamos sua clínica, mostramos onde estão os gargalos e apresentamos um plano claro para atrair mais pacientes e maximizar seus agendamentos."
        }
    ];

    return (
        <section id="faq" className="py-20 2xl:py-32">
            <div className="max-w-3xl mx-auto px-4">

                <Title
                    title="FAQ"
                    heading="Dúvidas antes de começar?"
                    description="Entenda como ajudamos clínicas a atrair pacientes, automatizar processos e aumentar o número de agendamentos."
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