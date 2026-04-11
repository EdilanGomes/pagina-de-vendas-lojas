import { Check } from 'lucide-react';
import { GhostButton } from './Buttons';
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
      desc: "Colocamos sua empresa na frente de quem realmente está pronto para comprar.",
      features: [
        "Análise do seu mercado e definição da melhor estratégia",
        "Criação e gestão de campanhas no Google e redes sociais",
        "Ajustes frequentes para reduzir custo e aumentar resultados",
        "Escala das campanhas conforme os resultados aparecem",
        "Relatórios simples para você entender o que está funcionando"
      ]
    },
    {
      name: "Social Media",
      desc: "Transformamos suas redes sociais em um canal real de atração e autoridade.",
      features: [
        "Planejamento do que postar e como se posicionar",
        "Criação de conteúdos alinhados com seu público",
        "Organização do perfil para transmitir profissionalismo",
        "Postagens com foco em gerar interesse e oportunidades",
        "Acompanhamento do crescimento e evolução da marca"
      ]
    },
    {
      name: "Desenvolvimento",
      desc: "Criamos estruturas digitais que passam confiança e ajudam a converter clientes.",
      features: [
        "Criação de sites e páginas com visual profissional",
        "Lojas virtuais prontas para vender desde o início",
        "Melhorias em sites já existentes que não convertem",
        "Organização da estrutura pensando na jornada do cliente",
        "Integrações com ferramentas de marketing e vendas"
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
          heading="O que você pode esperar ao trabalhar com a gente"
          description="Aqui você não contrata apenas um serviço. Você conta com profissionais focados em entender seu negócio e gerar resultados de verdade."
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
                {service.features.map((feat, i) => (
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
                  Falar com especialista
                </GhostButton>
              </a>

            </motion.div>
          ))}
        </div>

        {/* TEXTO FINAL */}
        <div className="text-center mt-12 max-w-xl mx-auto">
          <p className="text-sm text-gray-400 leading-relaxed">
            Cada projeto é único. Na consultoria gratuita, analisamos seu cenário,
            tiramos suas dúvidas e mostramos exatamente o que faz sentido para o seu momento.
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