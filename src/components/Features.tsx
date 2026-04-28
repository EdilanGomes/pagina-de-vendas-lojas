import { useRef, useState } from 'react';
import Title from './Title';
import { motion } from 'framer-motion';
import {
  Megaphone,
  ShoppingCart,
  Instagram,
  ChevronLeft,
  ChevronRight,
  Play
} from "lucide-react";

export default function Features() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const features = [
    {
      icon: <Megaphone className="size-5 text-indigo-400" />,
      title: "Tráfego pago para gerar clientes",
      desc: "Criamos campanhas estratégicas no Google, Instagram e Facebook para atrair pessoas prontas para comprar ou contratar."
    },
    {
      icon: <ShoppingCart className="size-5 text-indigo-400" />,
      title: "Consultoria comercial e estratégica",
      desc: "Ajustamos vendas, atendimento e oferta comercial para aumentar conversão, faturamento e recorrência."
    },
    {
      icon: <Instagram className="size-5 text-indigo-400" />,
      title: "Social media que gera autoridade",
      desc: "Conteúdo estratégico para fortalecer sua marca, gerar confiança e aumentar demanda."
    }
  ];

 const videos = [
  "/videosite1.mp4",
  "/videosite2.mp4"
];

  function scrollLeft() {
    sliderRef.current?.scrollBy({
      left: -340,
      behavior: "smooth"
    });
  }

  function scrollRight() {
    sliderRef.current?.scrollBy({
      left: 340,
      behavior: "smooth"
    });
  }

  return (
    <section id="features" className="py-20 2xl:py-32">
      <div className="max-w-6xl mx-auto px-4">

        <Title
          title="Serviços"
          heading="Para sua empresa crescer"
          description="Unimos marketing, vendas e posicionamento para atrair clientes, vender mais e gerar crescimento previsível."
        />

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
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

        {/* CARROSSEL DE VÍDEOS */}
        <div className="mt-16 md:mt-20">

          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-sm text-indigo-400 font-medium uppercase tracking-wider">
              Resultados em Vídeo
            </span>

            <h3 className="text-2xl md:text-3xl font-bold mt-3 mb-4">
              Veja alguns reels e conteúdos reais
            </h3>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Clique para assistir. Os vídeos não iniciam automaticamente.
            </p>
          </div>

          <div className="relative">

            {/* BOTÃO ESQUERDA */}
            <button
              onClick={scrollLeft}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 border border-white/10 items-center justify-center hover:bg-black/80"
            >
              <ChevronLeft size={20} />
            </button>

            {/* BOTÃO DIREITA */}
            <button
              onClick={scrollRight}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 border border-white/10 items-center justify-center hover:bg-black/80"
            >
              <ChevronRight size={20} />
            </button>

            {/* LISTA */}
            <div
              ref={sliderRef}
              className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 no-scrollbar"
            >
              {videos.map((video, i) => (
                <div
                  key={i}
                  className="min-w-[85%] sm:min-w-[48%] lg:min-w-[31%] snap-start rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative"
                >

                  {/* PLAY OVERLAY */}
                  {playingIndex !== i && (
                    <button
                      onClick={() => setPlayingIndex(i)}
                      className="absolute inset-0 z-10 flex items-center justify-center bg-black/35"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/90 text-black flex items-center justify-center">
                        <Play fill="black" size={22} />
                      </div>
                    </button>
                  )}

                  {/* VIDEO */}
                  <video
                    controls={playingIndex === i}
                    playsInline
                    preload="metadata"
                    className="w-full h-[520px] object-cover"
                    onPlay={() => setPlayingIndex(i)}
                  >
                    <source src={video} type="video/mp4" />
                  </video>

                </div>
              ))}
            </div>

          </div>
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
              De comercial zerado a 768 clientes em potencial em 28 dias com marketing estratégico e estrutura comercial, gerando mais oportunidades, organização e vendas.
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