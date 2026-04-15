import { Check } from 'lucide-react';
import { GhostButton } from './Buttons';
import Title from './Title';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const WHATSAPP_LINK =
  "https://wa.me/5547920014973?text=Ol%C3%A1!%20Tenho%20uma%20cl%C3%ADnica%20e%20quero%20atrair%20mais%20pacientes%20e%20melhorar%20meus%20agendamentos.";

export default function Pricing() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      name: "Tráfego Pago",
      desc: "Atraímos pacientes todos os dias para sua clínica através de anúncios online.",
      features: [
        "Estratégia focada em gerar pacientes e agendamentos",
        "Campanhas no Google, Instagram e Facebook",
        "Otimizações constantes para reduzir custo por lead",
        "Escala dos anúncios conforme os resultados crescem",
        "Relatórios simples e acompanhamento próximo"
      ]
    },
    {
      name: "Social Media",
      desc: "Transformamos seu Instagram em uma máquina de gerar autoridade e novos pacientes.",
      features: [
        "Planejamento de conteúdo estratégico para clínicas",
        "Postagens que geram confiança e interesse",
        "Organização do perfil para transmitir profissionalismo",
        "Conteúdos que ajudam o paciente a decidir",
        "Crescimento e fortalecimento da sua marca"
      ]
    },
    {
      name: "Estrutura e Conversão",
      desc: "Criamos toda a estrutura para transformar interesse em agendamentos.",
      features: [
        "Criação de site ou página de captura rápida",
        "Integração com WhatsApp e ferramentas de atendimento",
        "Implementação e treinamento de CRM",
        "Automação de mensagens e follow-up de pacientes",
        "Organização do processo para não perder leads"
      ]
    }
  ];

  const trustedLogos = [
    "/softwares/nuvem.png",
    "/softwares/metaads.png",
    "/softwares/googleads.png",
    "/softwares/rd.png",
    "/softwares/edrone.png",
    "/softwares/melhorenvio.png",
    "/softwares/bling.png",
    "/softwares/hostgatir.png",
    "/softwares/tiktokads.png"
  ];

  return (
    <section id="pricing" className="py-20 bg-white/3 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-4">

        <Title
          title="Como podemos ajudar?"
          heading="Para crescer e lotar a sua agenda"
          description="Aqui você encontra estratégia, execução e suporte para atrair pacientes, aumentar agendamentos e estruturar seu crescimento."
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
                <p className="text-sm text-gray-300 leading-relaxed">{service.desc}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {services[i].features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed"
                  >
                    <Check className="w-4 h-4 text-indigo-400 mt-[3px]" />
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
                  Agendar diagnóstico gratuito
                </GhostButton>
              </a>

            </motion.div>
          ))}
        </div>

        {/* TEXTO FINAL */}
        <div className="text-center mt-12 max-w-xl mx-auto">
          <p className="text-sm text-gray-400 leading-relaxed">
            Não importa se você está começando ou quer escalar. Na consultoria gratuita,
            mostramos exatamente o que sua clínica precisa para atrair mais pacientes.
          </p>
        </div>

      </div>

      {/* LOGOS CARROSSEL */}
      <div className="border-y border-white/10 mt-16 py-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">

          <div
            className="flex gap-6 w-max"
            style={{
              animation: "scrollLogos 18s linear infinite"
            }}
          >

            {[...trustedLogos, ...trustedLogos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="software"
                className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition"
              />
            ))}

          </div>

        </div>

        <style>
          {`
          @keyframes scrollLogos {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          `}
        </style>
      </div>

    </section>
  );
}