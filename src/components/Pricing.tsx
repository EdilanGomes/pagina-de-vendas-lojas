import { Check } from 'lucide-react';
import { GhostButton } from './Buttons';
import Title from './Title';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const WHATSAPP_LINK =
  "https://wa.me/5547920014973?text=Olá! Quero entender como minha empresa pode crescer com mais clientes e estratégia.";

export default function Pricing() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      name: "Tráfego pago | anúncios",
      desc: "Campanhas estratégicas para gerar demanda qualificada e aumentar oportunidades de venda.",
      features: [
        "Estratégia personalizada",
        "Anúncios no Google & Meta",
        "Otimizações semanais",
        "Escala conforme retorno",
        "Relatórios claros e acompanhamento"
      ]
    },
    {
      name: "Gestão de redes sociais",
      desc: "Fortalecemos sua marca com conteúdo estratégico que gera confiança e interesse.",
      features: [
        "Planejamento mensal de conteúdo",
        "Posts com foco em autoridade",
        "Perfil profissional e atrativo",
        "Comunicação voltada para conversão",
        "Presença digital forte e consistente"
      ]
    },
    {
      name: "Estrutura para converter",
      desc: "Organizamos processos e canais para transformar contatos em clientes reais.",
      features: [
        "Site ou páginas de alta conversão",
        "Integração com WhatsApp",
        "CRM comercial organizado",
        "Automação de follow-up",
        "Redução de perdas no atendimento"
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
          title="Soluções"
          heading="O que sua empresa precisa para crescer"
          description="Estratégia, execução e estrutura para atrair clientes, vender mais e escalar resultados."
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
                {service.features.map((feat, index) => (
                  <li
                    key={index}
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
                  Solicitar diagnóstico gratuito
                </GhostButton>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 max-w-xl mx-auto">
          <p className="text-sm text-gray-400 leading-relaxed">
            Seja para organizar sua operação ou escalar resultados, mostramos oportunidades reais para sua empresa crescer com previsibilidade.
          </p>
        </div>

      </div>

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