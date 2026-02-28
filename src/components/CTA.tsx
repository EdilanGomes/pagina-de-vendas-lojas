import { ArrowRightIcon } from 'lucide-react';
import { GhostButton } from './Buttons';
import { motion } from 'framer-motion';

const WHATSAPP_LINK =
  "https://wa.me/5547920014973?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

export default function CTA() {
  return (
    <section className="py-20 2xl:pb-32 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-3xl bg-linear-to-b from-violet-900/20 to-violet-900/5 border border-violet-500/20 p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />
          <div className="relative z-10">
            <motion.h2
              className="text-2xl sm:text-4xl font-semibold mb-6"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
              Não tem produtos? Sem problema.
            </motion.h2>

            <motion.p
              className="max-sm:text-sm text-slate-400 mb-10 max-w-xl mx-auto"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.2,
              }}
            >
              Comece agora com dropshipping: você vende sem estoque e sem complicação. O fornecedor envia o produto direto ao seu cliente, enquanto você apenas divulga.
            </motion.p>

            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.3,
              }}
            >
              <a
                href="https://wa.me/5547920014973?text=Ol%C3%A1!%20Quero%20falar%20de%20Dropshipping"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <GhostButton className="px-8 py-3 gap-2">
                  Vender sem estoque <ArrowRightIcon size={20} />
                </GhostButton>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
