import { useRef } from 'react';
import Title from './Title';
import { motion } from 'framer-motion';
import {
  Megaphone,
  ShoppingCart,
  Instagram
} from "lucide-react";

export default function Features() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      icon: <Megaphone className="size-5 text-indigo-400" />,
      title: "Tráfego Pago para Gerar Clientes",
      desc: "Criamos e gerenciamos anúncios no Google Ads, Instagram e Facebook Ads para atrair pessoas interessadas no seu serviço ou produto."
    },
    {
      icon: <ShoppingCart className="size-5 text-indigo-400" />,
      title: "Consultoria Comercial e Estratégica",
      desc: "Analisamos seu processo de vendas, atendimento e oferta comercial para identificar gargalos, aumentar conversões e ticket médio."
    },
    {
      icon: <Instagram className="size-5 text-indigo-400" />,
      title: "Social Media que Gera Autoridade",
      desc: "Planejamos conteúdos estratégicos para Instagram e redes sociais, fortalecendo sua marca e aumentando confiança."
    }
  ];

  return (
    <section id="features" className="py-20 2xl:py-32">
      <div className="max-w-6xl mx-auto px-4">

        <Title
          title="Serviços"
          heading="O que fazemos para gerar crescimento"
          description="Unimos marketing, vendas e posicionamento para atrair clientes, aumentar conversões e fortalecer sua marca no digital."
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

        {/* CASE DE SUCESSO */}
        <div className="mt-16 md:mt-20">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-sm text-indigo-400 font-medium uppercase tracking-wider">
              Case de Sucesso
            </span>

            <h3 className="text-2xl md:text-3xl font-bold mt-3 mb-4">
              Confira um dos nossos resultados reais
            </h3>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Atuamos no ramo farmacêutico B2B reorganizando o comercial,
              melhorando processos de vendas, re-vendas e acelerando a geração
              de oportunidades com estratégia e execução.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
            <img
              src="/metabatida.png"
              alt="Case de sucesso no segmento farmacêutico B2B"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}