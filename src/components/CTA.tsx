import { ArrowRightIcon } from 'lucide-react';
import { GhostButton } from './Buttons';
import { motion } from 'framer-motion';

const WHATSAPP_LINK =
  "https://wa.me/5547920014973?text=Olá! Quero entender como minha empresa pode atrair mais clientes e crescer com estratégia.";

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
              Sua empresa está pronta para crescer?
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
              Descubra os gargalos que travam suas vendas, atraia mais clientes e construa um crescimento previsível com estratégia certa.
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
                  Quero crescer minha empresa <ArrowRightIcon size={20} />
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
              Sem compromisso • Consultoria gratuita • Atendimento rápido
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  );
}