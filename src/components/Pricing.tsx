import { Check } from 'lucide-react';
import { PrimaryButton, GhostButton } from './Buttons';
import Title from './Title';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const WHATSAPP_LINK =
  "https://wa.me/554796648695?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20entender%20como%20posso%20crescer%20no%20digital.";

export default function Pricing() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      name: "Tráfego Pago",
      desc: "Para atrair clientes qualificados e gerar vendas de forma previsível.",
      features: [
        "Planejamento estratégico de campanhas",
        "Gestão de anúncios no Google e Meta",
        "Otimizações contínuas para melhorar resultados",
        "Escala de campanhas com foco em ROI",
        "Relatórios claros e acompanhamento"
      ]
    },
    {
      name: "Social Media",
      desc: "Para fortalecer sua marca e gerar presença digital consistente.",
      features: [
        "Planejamento de conteúdo estratégico",
        "Gestão completa das redes sociais",
        "Posicionamento e identidade da marca",
        "Criação de conteúdo com foco em resultado",
        "Acompanhamento de crescimento e engajamento"
      ]
    },
    {
      name: "Desenvolvimento",
      desc: "Para estruturar sua presença digital e converter visitantes em clientes.",
      features: [
        "Criação de sites e landing pages",
        "Lojas virtuais prontas para vender",
        "Migração e otimização de plataformas",
        "Estrutura pensada para conversão",
        "Integrações com ferramentas de marketing"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white/3 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-4">

        <Title
          title="Como podemos ajudar"
          heading="O que você pode esperar ao trabalhar com a gente"
          description="Mais do que serviços isolados, entregamos estratégia, execução e crescimento contínuo."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                delay: 0.1 + i * 0.1,
              }}
              onAnimationComplete={() => {
                const card = refs.current[i];
                if (card) {
                  card.classList.add("transition", "duration-500", "hover:scale-[1.02]");
                }
              }}
              className="relative p-6 rounded-xl border border-white/8 bg-indigo-950/30 backdrop-blur"
            >

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p className="text-sm text-gray-300">{service.desc}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {service.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <Check className="w-4 h-4 text-indigo-400 mt-[2px]" />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <GhostButton className="w-full justify-center">
                  Quero entender mais
                </GhostButton>
              </a>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}