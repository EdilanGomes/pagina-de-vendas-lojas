import { ChevronDownIcon } from 'lucide-react';
import Title from './Title';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Faq() {
  const refs = useRef<(HTMLDetailsElement | null)[]>([]);

  const faqData = [
    {
      question: "Quais empresas vocês atendem?",
      answer: "Trabalhamos com clínicas, consultórios, escritórios e empresas de serviços em geral. O principal critério não é o segmento, e sim o potencial de crescimento e a busca por resultado."
    },
    {
      question: "Preciso ter site pronto para começar?",
      answer: "Não. Podemos criar sua estrutura do zero ou otimizar o que você já possui. Isso inclui site institucional, landing pages e canais focados em conversão."
    },
    {
      question: "Vocês cuidam só dos anúncios?",
      answer: "Não. Atuamos de forma estratégica no marketing como um todo: tráfego pago, posicionamento, redes sociais, páginas, CRM, automações e melhoria comercial."
    },
    {
      question: "Quando começam a aparecer resultados?",
      answer: "Em muitos casos, os primeiros contatos surgem nas primeiras semanas. Já crescimento consistente acontece com ajustes contínuos e execução estratégica."
    },
    {
      question: "Vocês também gerenciam redes sociais?",
      answer: "Sim. Criamos conteúdos com foco em autoridade, confiança e geração de demanda. O objetivo não é apenas postar, e sim fortalecer sua marca e gerar oportunidades."
    },
    {
      question: "Como vocês aumentam as vendas?",
      answer: "Analisamos todo o processo: oferta, comunicação, captação, atendimento e fechamento. Depois aplicamos melhorias para elevar conversão e faturamento."
    },
    {
      question: "Vocês trabalham com CRM e automação?",
      answer: "Sim. Estruturamos processos para organizar leads, automatizar contatos, acompanhar negociações e evitar perda de oportunidades."
    },
    {
      question: "Como funciona o trabalho de vocês?",
      answer: "Começamos com um diagnóstico completo. Depois montamos o plano de ação, executamos as estratégias e acompanhamos métricas para escalar resultados."
    },
    {
      question: "Como funciona a consultoria gratuita?",
      answer: "Você agenda uma conversa com nosso time. Avaliamos sua presença digital, vendas e principais gargalos. Ao final, mostramos oportunidades reais de crescimento."
    }
  ];

  return (
    <section id="faq" className="py-20 2xl:py-32">
      <div className="max-w-3xl mx-auto px-4">

        <Title
          title="FAQ"
          heading="Dúvidas antes de começar?"
          description="Respondemos as perguntas mais comuns de empresas que querem crescer com estratégia."
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
                delay: 0.1 + i * 0.08
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