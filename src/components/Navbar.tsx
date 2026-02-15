import { MenuIcon, XIcon } from 'lucide-react';
import { PrimaryButton } from './Buttons';
import { useState } from 'react';
import { motion } from 'framer-motion';

const WHATSAPP_LINK =
  "https://wa.me/554796648695?text=Ol%C3%A1!%20Sou%20lojista%20e%20quero%20criar%20uma%20loja%20de%20alta%20convers%C3%A3o.%20Quero%20saber%20como%20funciona.";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/#' },
    { name: 'Serviços', href: '/#features' },
    { name: 'Valores', href: '/#pricing' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <motion.nav
      className="fixed top-5 left-0 right-0 z-50 px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-black/50 backdrop-blur-md border border-white/4 rounded-2xl p-3">
        
        {/* Logo */}
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <img src="/logo.png" alt="logo" className="h-20 cursor-pointer" />
        </a>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.name}
              className="hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Botões desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-300 hover:text-white transition max-sm:hidden"
          >
            Sou cliente
          </a>

          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <PrimaryButton className="max-sm:text-xs hidden sm:inline-block">
              Falar com especialista
            </PrimaryButton>
          </a>
        </div>

        {/* Menu mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <MenuIcon className="size-6" />
        </button>
      </div>

      {/* Menu fullscreen mobile */}
      <div
        className={`flex flex-col items-center justify-center gap-6 text-lg font-medium fixed inset-0 bg-black/40 backdrop-blur-md z-50 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="font-medium text-gray-300 hover:text-white transition"
        >
          Sou cliente
        </a>

        <PrimaryButton
          onClick={() => {
            setIsOpen(false);
            window.open(WHATSAPP_LINK, "_blank");
          }}
        >
          Falar com especialista
        </PrimaryButton>

        <button
          onClick={() => setIsOpen(false)}
          className="rounded-md bg-white p-2 text-gray-800 ring-white active:ring-2"
        >
          <XIcon />
        </button>
      </div>
    </motion.nav>
  );
}
