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
      title: "Tráfego pago para gerar clientes",
      desc: "Criamos campanhas estratégicas no Google, Instagram e Facebook para atrair pessoas prontas para comprar."
    },
    {
      icon: <ShoppingCart className="size-5 text-indigo-400" />,
      title: "Consultoria comercial e estratégica",
      desc: "Ajustamos vendas, atendimento e oferta comercial para aumentar conversão e faturamento."
    },
    {
      icon: <Instagram className="size-5 text-indigo-400" />,
      title: "Social media que gera autoridade",
      desc: "Conteúdo estratégico para fortalecer sua marca, gerar confiança e aumentar demanda."
    }
  ];

  return (
    <section id="features" className="py-20 2xl:py-32">
      <div className="max-w-6xl mx-auto px-4">

        <Title
          title="Serviços"
          heading="Para sua empresa crescer em até 60 dias"
          description="Unimos marketing, vendas e posicionamento para atrair clientes, vender mais e gerar crescimento previsível."
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

        <div className="mt-16 md:mt-20">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-sm text-indigo-400 font-medium uppercase tracking-wider">
              Case de Sucesso
            </span>

            <h3 className="text-2xl md:text-3xl font-bold mt-3 mb-4">
              Confira um dos nossos resultados reais
            </h3>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Reestruturamos marketing e comercial de empresas para gerar mais oportunidades, aumentar vendas e escalar resultados.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
            <img
              src="/metabatida.png"
              alt="Case de sucesso"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}