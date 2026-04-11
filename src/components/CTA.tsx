import { ArrowRightIcon } from 'lucide-react';
import { GhostButton } from './Buttons';
import { motion } from 'framer-motion';

const WHATSAPP_LINK =
  "https://wa.me/554796648695?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20entender%20como%20posso%20crescer%20no%20digital.";

export default function CTA() {
  return (
    <section className="py-20 2xl:pb-32 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-3xl bg-linear-to-b from-violet-900/20 to-violet-900/5 border border-violet-500/20 p-10 md:p-16 text-center relative overflow-hidden">

          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />

          <div className="relative z-10">

            <motion.h2
              className="text-2xl sm:text-4xl font-semibold mb-6 leading-tight"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 250, damping: 70 }}
            >
              Descubra o que está travando o crescimento do seu negócio
            </motion.h2>

            <motion.p
              className="text-sm sm:text-base text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                delay: 0.2,
              }}
            >
              Agende uma conversa gratuita com um especialista, tire suas dúvidas, entenda onde estão as oportunidades e receba direcionamentos claros para crescer.
            </motion.p>

            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                delay: 0.3,
              }}
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <GhostButton className="px-8 py-3 gap-2 text-base">
                  Quero entender meu cenário <ArrowRightIcon size={20} />
                </GhostButton>
              </a>
            </motion.div>

            <motion.p
              className="text-xs text-gray-500 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Sem compromisso • 100% gratuito • Resposta rápida
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  );
}