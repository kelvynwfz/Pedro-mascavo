/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Scissors, 
  User, 
  MapPin, 
  Phone, 
  Instagram, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const COLORS = {
  charcoal: '#0B0B0B',
  graphite: '#1A1A1A',
  steel: '#2B2B2B',
  ice: '#F3F3F3',
  gold: '#B68A4C',
};

const SERVICES = [
  {
    name: "Corte Masculino",
    description: "Corte personalizado focado no visagismo e estilo individual.",
    icon: <Scissors className="w-6 h-6" />
  },
  {
    name: "Barba Premium",
    description: "Alinhamento, toalha quente e acabamento de alta precisão.",
    icon: <User className="w-6 h-6" />
  },
  {
    name: "Corte + Barba",
    description: "A experiência completa para renovar sua imagem e confiança.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    name: "Acabamento",
    description: "Manutenção do contorno e limpeza para manter o visual em dia.",
    icon: <CheckCircle2 className="w-6 h-6" />
  }
];

const DIFFERENTIALS = [
  {
    title: "Atendimento Personalizado",
    description: "Cada cliente é único. Analisamos seu perfil para o melhor resultado.",
    icon: <User className="text-gold" />
  },
  {
    title: "Precisão e Identidade",
    description: "Técnicas modernas de fade e alinhamento com assinatura própria.",
    icon: <Scissors className="text-gold" />
  },
  {
    title: "Ambiente Arena",
    description: "Estrutura completa na Arena Barbearia para seu total conforto.",
    icon: <MapPin className="text-gold" />
  },
  {
    title: "Horário Marcado",
    description: "Respeito ao seu tempo com agendamento organizado via WhatsApp.",
    icon: <Clock className="text-gold" />
  }
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1621605815841-aa88c82b022c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1599351431247-f5793384797d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1622286332618-f2802b9c74bc?auto=format&fit=crop&q=80&w=800",
];

const LOGO_URL = "https://instagram.fmcz3-1.fna.fbcdn.net/v/t51.2885-19/66267645_424525228395103_2008372092529016832_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby40MjEuYzIifQ&_nc_ht=instagram.fmcz3-1.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2gEqdjRuGK1o_8EMBTYc5A9Nux83pBoBSz15iAGHzSadTqAtnX77sMrKB7FNGeZWzCKEyclXHDlBCc95O0xwq7-Z&_nc_ohc=hri6WHtF100Q7kNvwH_cqYS&_nc_gid=9WaYKIuCTnZof-B9nvfUmw&edm=AEYEu-QBAAAA&ccb=7-5&oh=00_AfwH3HMlfbAbILQOHvCAlUr-ccNYAVp4-t6FFuk6OD1AXA&oe=69D1DA58&_nc_sid=ead929";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/5582987223080"; // Mascavo Barber
  const arenaWhatsappUrl = "https://wa.me/5582998314344"; // Arena

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-charcoal/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src={LOGO_URL} 
              alt="Pedro Mascavo Logo" 
              className="w-12 h-12 rounded-full border border-gold/30 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tighter text-gold font-display italic">Pedro Mascavo</span>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 -mt-1">Barber Specialist</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
            <a href="#servicos" className="hover:text-gold transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
            <a href="#local" className="hover:text-gold transition-colors">Localização</a>
          </div>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-charcoal px-5 py-2 rounded-full text-xs font-bold uppercase tracking-tighter hover:bg-white transition-all transform hover:scale-105"
          >
            Agendar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1920" 
            alt="Barber Shop Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/80 to-charcoal"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 border border-gold/30 rounded-full text-gold text-[10px] uppercase tracking-[0.3em] mb-6 bg-gold/5">
              Atendimento na Arena Barbearia
            </span>
            <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter font-display leading-tight">
              Seu visual fala <br />
              <span className="italic text-gold">antes de você.</span>
            </h1>
            <p className="text-lg md:text-xl text-ice/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Corte, barba e presença com assinatura profissional em Maceió. 
              Agende seu horário com Pedro Mascavo e eleve sua identidade.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gold text-charcoal px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 group"
              >
                Agendar no WhatsApp
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#local"
                className="w-full sm:w-auto border border-white/20 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Ver Localização
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
        >
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* Differentials */}
      <section className="py-24 bg-graphite border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {DIFFERENTIALS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-start"
              >
                <div className="mb-6 p-4 bg-charcoal rounded-2xl border border-white/5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{item.title}</h3>
                <p className="text-ice/50 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-32 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-gold text-[11px] uppercase tracking-[0.4em] font-bold mb-4 block">Nossos Serviços</span>
              <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">Especialista em <br /><span className="italic">imagem masculina.</span></h2>
            </div>
            <p className="text-ice/40 text-sm max-w-xs">
              Técnicas avançadas e atendimento personalizado para quem não abre mão da excelência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="group p-8 bg-graphite rounded-3xl border border-white/5 hover:border-gold/30 transition-all flex justify-between items-center"
              >
                <div>
                  <div className="text-gold mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-2 tracking-tight">{service.name}</h4>
                  <p className="text-ice/50 text-sm">{service.description}</p>
                </div>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:text-charcoal transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-32 bg-graphite relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800" 
                  alt="Pedro Mascavo Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-gold p-10 rounded-3xl hidden md:block">
                <span className="text-charcoal text-5xl font-bold font-display italic">Assinatura</span>
                <p className="text-charcoal/70 text-xs uppercase tracking-widest mt-2 font-bold">Pedro Mascavo</p>
              </div>
            </div>
            <div>
              <span className="text-gold text-[11px] uppercase tracking-[0.4em] font-bold mb-4 block">A Identidade</span>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 tracking-tight">Mais do que um corte, <br /><span className="italic text-gold">uma nova postura.</span></h2>
              <div className="space-y-6 text-ice/70 leading-relaxed">
                <p>
                  Pedro Mascavo é um barbeiro que entende que um bom corte vai além da aparência — ele influencia postura, presença e confiança. 
                </p>
                <p>
                  Com atendimento profissional e atenção minuciosa aos detalhes, seu foco é entregar uma experiência que valorize o estilo e a identidade de cada cliente.
                </p>
                <p className="italic font-display text-xl text-ice">
                  "Mais do que um corte, um atendimento com respeito, cuidado e identidade."
                </p>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-gold">3k+</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-50">Seguidores</span>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-gold">Maceió</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-50">Localização</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-[11px] uppercase tracking-[0.4em] font-bold mb-4 block">Portfólio</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">Resultados que <span className="italic">impressionam.</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="aspect-square rounded-2xl overflow-hidden border border-white/5"
              >
                <img 
                  src={img} 
                  alt={`Corte ${idx}`} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="local" className="py-32 bg-graphite border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-gold text-[11px] uppercase tracking-[0.4em] font-bold mb-4 block">Onde Estamos</span>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-10 tracking-tight">Arena Barbearia</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-charcoal rounded-xl text-gold">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Localização</h4>
                    <p className="text-ice/50">Maceió, Alagoas</p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-gold text-sm font-bold mt-2 inline-block hover:underline">Abrir no Google Maps</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-4 bg-charcoal rounded-xl text-gold">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Contatos</h4>
                    <div className="space-y-4 mt-4">
                      <a 
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-charcoal p-4 rounded-2xl border border-white/5 hover:border-gold/50 transition-all"
                      >
                        <MessageCircle className="w-5 h-5 text-gold" />
                        <div>
                          <p className="text-[10px] uppercase tracking-widest opacity-50">Mascavo Barber</p>
                          <p className="font-bold">(82) 98722-3080</p>
                        </div>
                      </a>
                      <a 
                        href={arenaWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-charcoal p-4 rounded-2xl border border-white/5 hover:border-gold/50 transition-all"
                      >
                        <MessageCircle className="w-5 h-5 text-gold" />
                        <div>
                          <p className="text-[10px] uppercase tracking-widest opacity-50">Arena Barbearia</p>
                          <p className="font-bold">(82) 99831-4344</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-charcoal rounded-3xl p-10 border border-white/5 flex flex-col justify-center text-center">
              <h3 className="text-3xl font-bold font-display mb-6">Pronto para elevar seu visual?</h3>
              <p className="text-ice/50 mb-10">Agende agora seu horário com Pedro Mascavo e garanta o melhor atendimento de Maceió.</p>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-charcoal py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-gold/10"
              >
                Agendar Agora
              </a>
              <div className="mt-8 flex justify-center gap-6 opacity-50">
                <a href="https://instagram.com/arenamaceio" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <span className="text-xs uppercase tracking-widest flex items-center">@arenamaceio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-charcoal border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center">
            <img 
              src={LOGO_URL} 
              alt="Pedro Mascavo Logo" 
              className="w-16 h-16 rounded-full border border-gold/30 object-cover mb-4"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-bold tracking-tighter text-gold font-display italic">Pedro Mascavo</span>
            <p className="text-[10px] uppercase tracking-[0.4em] opacity-30 mt-2">© 2026 • Todos os direitos reservados</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
