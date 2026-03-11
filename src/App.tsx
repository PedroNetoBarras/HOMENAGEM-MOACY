/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Heart, 
  MapPin, 
  Shield, 
  History, 
  Quote, 
  Anchor, 
  Wind,
  Instagram
} from "lucide-react";

const cities = [
  "Bertolínia", "Uruçuí", "Rio Grande Do Piauí", 
  "São Pedro Do Piauí", "Campo Maior", "Piracuruca", "Barras"
];

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-amber-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://picsum.photos/seed/nature-pi/1920/1080?blur=4" 
            alt="Natureza Piauí" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-amber-200/80 uppercase tracking-[0.3em] text-xs mb-6 block font-medium">
            Em Memória de
          </span>
          <h1 className="serif text-5xl md:text-8xl text-white font-light tracking-tight mb-4">
            Moacy Pinto de Melo
          </h1>
          <p className="text-amber-100/60 serif italic text-xl md:text-2xl tracking-wide">
            25/04/1938 — 18/01/2022
          </p>
          <div className="mt-12 flex items-center justify-center gap-4 text-white/40">
            <div className="h-px w-12 bg-white/20" />
            <Quote className="w-5 h-5" />
            <div className="h-px w-12 bg-white/20" />
          </div>
          <p className="mt-6 text-white/80 serif italic text-lg max-w-md mx-auto">
            "Uma vida de amor e legado"
          </p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Biography Section */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-columns-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-3 mb-6 text-amber-800">
              <History className="w-5 h-5" />
              <span className="uppercase tracking-widest text-xs font-bold">Sua Vida e Legado</span>
            </div>
            <h2 className="serif text-4xl md:text-5xl mb-8 leading-tight">
              Um homem de vida simples, honesto e profissional.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Moacy Pinto de Melo nasceu em 25 de abril de 1938 em Teresina-PI. 
                Foi um servidor público exemplar, dedicando 42 anos, 1 mês e 13 dias à Polícia Militar do Piauí (PM-PI).
              </p>
              <p>
                Sua carreira foi marcada pelo compromisso com a verdade e a lealdade. 
                Além de sua atuação militar, contribuiu para a educação como professor militar na Escola Industrial de Teresina por quase 4 anos.
              </p>
              <p>
                Como Delegado de Polícia, serviu com honra em diversos municípios, culminando sua jornada em Barras, 
                cidade pela qual se apaixonou e onde escolheu construir sua família ao lado de Iracema da Silva Melo.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            {...fadeIn}
            className="relative aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://picsum.photos/seed/legacy/800/1000" 
              alt="Legado" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 ring-1 ring-black/5 rounded-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="bg-stone-50 py-24 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <MapPin className="w-6 h-6 mx-auto mb-4 text-amber-800" />
            <h3 className="serif text-3xl md:text-4xl">Cidades Onde Serviu</h3>
            <p className="text-gray-500 mt-2">Um rastro de serviço e dedicação pelo Piauí</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cities.map((city, idx) => (
              <motion.div 
                key={city}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow"
              >
                <span className="text-amber-800/20 text-4xl serif font-bold mb-2">0{idx + 1}</span>
                <span className="font-medium text-gray-700">{city}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Legacy */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <motion.div {...fadeIn}>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 text-amber-800 mb-8">
            <Shield className="w-8 h-8" />
          </div>
          <h3 className="serif text-3xl md:text-4xl mb-8">Um Exemplo de Vida Militar</h3>
          <p className="text-xl text-gray-600 leading-relaxed mb-12 italic">
            "Viver com mais leveza" e "ter uma vida de honestidade"
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-8 bg-white rounded-2xl border border-stone-100 shadow-sm">
              <Anchor className="w-6 h-6 text-amber-800 mb-4" />
              <h4 className="font-bold mb-2">Amante da Natureza</h4>
              <p className="text-gray-600">
                Encontrava na pescaria e na natureza sua paz e inspiração. Um homem que valorizava as belezas naturais de Barras.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-stone-100 shadow-sm">
              <Wind className="w-6 h-6 text-amber-800 mb-4" />
              <h4 className="font-bold mb-2">Homenagem Eterna</h4>
              <p className="text-gray-600">
                Seu nome permanece vivo na cidade através da Rua Capitão Moacy Pinto de Melo, um tributo ao seu serviço.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Message Section */}
      <section className="relative py-32 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img 
            src="https://picsum.photos/seed/family/1920/1080" 
            alt="Fundo" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Heart className="w-8 h-8 mx-auto mb-8 text-red-400 fill-red-400" />
          <motion.div {...fadeIn}>
            <blockquote className="serif text-2xl md:text-3xl italic leading-relaxed mb-12 text-stone-200">
              "Falar do meu pai é falar de saudade... Sinto muito sua falta, não sei explicar. 
              Sinto falta de sua voz, seu cheiro, seu abraço, sua companhia, aquele sorriso radiante... 
              Hoje sinto um vazio no peito, mas encontro consolo nas lembranças dos nossos momentos especiais."
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-12 h-px bg-amber-400/40 mb-4" />
              <cite className="not-italic font-medium tracking-widest uppercase text-xs text-amber-400">
                Valdênia Melo
              </cite>
              <span className="text-stone-500 text-xs mt-1">Sua Filha</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="serif text-xl font-bold">Moacy Pinto de Melo</h4>
            <p className="text-sm text-gray-500 mt-1">© 2025 — Em Memória</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/pntech.barras" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-gray-500 hover:text-amber-800 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>Criado por <span className="font-bold group-hover:underline">PNTECH</span></span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
