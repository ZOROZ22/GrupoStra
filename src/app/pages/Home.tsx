import { Link, useNavigate } from "react-router";
import { ArrowRight, Search, ShieldCheck, Truck, Headphones, Award, ChevronLeft, ChevronRight, Play, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { COMPANY, VIDEOS, SEGMENTS, PRODUCTS, BLOG_POSTS } from "../data/catalog";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/ui/button";

const HERO_SLIDES = [
  {
    id: "iponatic",
    badge: "Resultado em até 45 minutos",
    title: "iPonatic III PCR Portátil",
    subtitle: "no point-of-care",
    text: "Diagnóstico molecular rápido e preciso. Simples, portátil e com amplo menu de testes.",
    link: "/produto/sansure-iponatic-ii",
    segmentLink: "/segmento/laboratorial",
    image: "https://grupostra.com.br/cdn/shop/files/grupostra_Sansure_iPonaticII_01_1024x.webp?v=1719583447"
  },
  {
    id: "t6",
    badge: "UTI • Transporte • Emergência",
    title: "Ventilador Pulmonar T6",
    subtitle: "Amoul® — Inovamos para salvar vidas",
    text: "Ventilação pulmonar avançada para unidades críticas. Versátil, seguro e confiável.",
    link: "/produto/amoul-t6-ventilador",
    segmentLink: "/segmento/hospitalar",
    image: "https://cdn.shopify.com/s/files/1/0534/2812/5857/files/AmoulT62.png?v=1702057067"
  },
  {
    id: "gp100",
    badge: "Automação em Citologia",
    title: "GP-100 Processador",
    subtitle: "Precisão em meio líquido",
    text: "Padronização e automação no preparo de lâminas de citologia com camada fina.",
    link: "/produto/gynoprep-gp-100",
    segmentLink: "/marca/GynoPrep",
    image: "https://grupostra.com.br/cdn/shop/products/conjunto_comRosa_01_1_1024x.png?v=1671721279"
  },
  {
    id: "deai3",
    badge: "Salvando vidas a cada parada",
    title: "Desfibrilador DEA i3",
    subtitle: "Amoul® — Conformidade AHA e ERC",
    text: "Desfibrilação rápida e segura com orientações por voz. Fácil de usar por qualquer pessoa.",
    link: "/produto/amoul-dea-i3",
    segmentLink: "/contato",
    image: "https://grupostra.com.br/cdn/shop/files/AmoulDEAi3-ajustado_1024x.jpg?v=1698266019"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  // Auto-play slider
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // Slower for premium feel
    return () => clearInterval(timer);
  }, [isHovered]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div className="bg-white">
      {/* Premium Vercel/Linear Style Hero Slider - LIGHT THEME for perfect image blending */}
      <section 
        className="relative bg-gray-50 text-stra-navy h-[650px] md:h-[800px] overflow-hidden group border-b border-gray-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Abstract Background Elements (Light Mode) */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-stra-teal/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/4 translate-x-1/4 pointer-events-none" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center z-10"
          >
            <div className="max-w-[1280px] w-full mx-auto px-4 grid md:grid-cols-2 gap-8 lg:gap-16 items-center h-full pt-20 md:pt-0">
              
              <div className="max-w-xl relative z-20">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <span className="inline-flex items-center gap-2 bg-white border border-gray-200 text-stra-navy px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
                    <span className="size-2 rounded-full bg-stra-teal animate-pulse" />
                    {slide.badge}
                  </span>
                </motion.div>
                
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-6xl lg:text-[72px] font-bold text-stra-navy mb-4 leading-[1.1] tracking-tight"
                >
                  {slide.title}
                </motion.h1>
                
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-2xl md:text-3xl text-stra-teal-dark font-medium mb-6"
                >
                  {slide.subtitle}
                </motion.h2>
                
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed font-medium max-w-lg"
                >
                  {slide.text}
                </motion.p>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link to={slide.link}>
                    <Button size="lg" className="bg-stra-teal hover:bg-stra-teal-dark text-white gap-2 font-bold px-8 h-14 rounded-2xl shadow-lg shadow-stra-teal/20 transition-all text-lg">
                      Ver equipamento <ArrowRight className="size-5" />
                    </Button>
                  </Link>
                  <Link to={slide.segmentLink}>
                    <Button size="lg" variant="outline" className="border-gray-200 text-stra-navy bg-white hover:bg-gray-50 h-14 px-8 rounded-2xl font-bold transition-all text-lg">
                      Conhecer linha
                    </Button>
                  </Link>
                </motion.div>
              </div>
              
              <div className="hidden md:flex justify-center items-center h-full relative z-10">
                {/* Product Showcase Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-stra-teal/10 to-transparent blur-3xl rounded-full opacity-60" />
                <motion.img 
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  src={slide.image} 
                  alt={slide.title}
                  /* Mix-blend-multiply cleanly removes white background on light surface */
                  className="max-h-[550px] w-auto object-contain mix-blend-multiply drop-shadow-xl relative z-20"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Premium Controls */}
        <div className="absolute z-30 bottom-10 left-0 right-0">
          <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between">
            <div className="flex gap-3">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className="group relative flex h-2 items-center justify-center cursor-pointer"
                >
                  <div className={`absolute h-[3px] rounded-full transition-all duration-500 ease-out ${
                    idx === currentSlide ? "w-12 bg-stra-teal" : "w-6 bg-gray-300 group-hover:bg-gray-400"
                  }`} />
                </button>
              ))}
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                className="size-12 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-stra-navy hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button 
                onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                className="size-12 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-stra-navy hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Busca inteligente (Floating over the fold) */}
      <section className="relative z-40 -mt-8 px-4">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-2xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-2 flex items-center focus-within:ring-4 focus-within:ring-stra-teal/20 transition-all">
          <Search className="size-5 text-gray-400 ml-5 mr-3" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && navigate(`/loja?q=${q}`)}
            placeholder="Buscar por nome, marca ou descrição..."
            className="flex-1 px-2 py-4 outline-none text-stra-navy text-lg font-medium bg-transparent placeholder:text-gray-400"
          />
          <Button 
            onClick={() => navigate(`/loja?q=${q}`)}
            className="bg-stra-navy hover:bg-stra-navy/90 text-white rounded-2xl px-8 h-12 font-bold shadow-md shadow-stra-navy/10"
          >
            Buscar
          </Button>
        </div>
      </section>

      {/* Segmentos Premium */}
      <section className="max-w-[1280px] mx-auto px-4 py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-stra-teal font-bold text-sm tracking-widest uppercase mb-2 block">Áreas de Atuação</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stra-navy mb-6 tracking-tight">Soluções para toda a cadeia da saúde</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SEGMENTS.map((s) => (
            <Link 
              key={s.id} 
              to={`/segmento/${s.id}`} 
              className="group relative rounded-[32px] overflow-hidden aspect-[4/5] bg-gray-900 flex flex-col justify-end shadow-lg"
            >
              <img 
                src={s.image} 
                alt={s.name} 
                className="absolute inset-0 size-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/60 to-transparent" />
              
              <div className="relative p-8 z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="size-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-3xl mb-6 shadow-xl group-hover:bg-stra-teal transition-colors duration-500">
                  {s.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">{s.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500">
                  {s.description}
                </p>
                <div className="inline-flex items-center text-white font-bold bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 group-hover:bg-white group-hover:text-stra-navy transition-all duration-300">
                  Explorar <ArrowRight className="size-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Bar Premium */}
      <section className="bg-gray-50 border-y border-gray-100 py-16">
        <div className="max-w-[1280px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: ShieldCheck, t: "Registro ANVISA", s: "Qualidade atestada" },
            { icon: Truck, t: "Envio Nacional", s: "Logística ágil e segura" },
            { icon: Award, t: "11+ Marcas", s: "Inovação exclusiva Stra" },
            { icon: Headphones, t: "Suporte Técnico", s: "Atendimento especializado" },
          ].map((f) => (
            <div key={f.t} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-gray-100 hover:border-stra-teal/30 transition-colors">
              <div className="size-12 rounded-xl bg-stra-teal/10 flex items-center justify-center shrink-0">
                <f.icon className="size-6 text-stra-teal" />
              </div>
              <div>
                <p className="text-stra-navy font-bold">{f.t}</p>
                <p className="text-sm text-gray-500 font-medium">{f.s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Produtos em destaque */}
      <section className="max-w-[1280px] mx-auto px-4 py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-stra-teal font-bold text-sm tracking-widest uppercase mb-2 block">Destaques</span>
            <h2 className="text-4xl font-bold text-stra-navy tracking-tight">Equipamentos e insumos mais procurados</h2>
          </div>
          <Link to="/loja">
            <Button variant="outline" className="border-gray-200 text-stra-navy font-bold hover:bg-gray-50 rounded-2xl h-12 px-6">
              Ver catálogo completo <ArrowRight className="size-4 ml-2" />
            </Button>
          </Link>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((p) => <ProductCard key={p.id} product={p} hidePrice />)}
        </div>
      </section>

      {/* Destaque com vídeo - Design Moderno */}
      <section className="bg-[#0A0F1C] text-white py-32 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-stra-teal/10 to-transparent pointer-events-none" />
        <div className="absolute left-0 bottom-0 size-96 bg-stra-blue/20 blur-[100px] pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-4 grid md:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-8 shadow-lg">
              <Play className="size-3.5" fill="currentColor" /> Biologia Molecular
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
              Sansure® <span className="text-transparent bg-clip-text bg-gradient-to-r from-stra-teal to-stra-teal-light">iPonatic II</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
              Plataforma molecular portátil e integrada. Extração, amplificação e detecção de ácidos nucleicos de forma totalmente automatizada no point-of-care.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                "Resultado em até 45 min",
                "Amplo menu de testes",
                "Design ultra portátil",
                "Certificação Sansure"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="size-6 rounded-full bg-stra-teal/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="size-4 text-stra-teal" />
                  </div>
                  <span className="font-medium text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            
            <Link to="/produto/sansure-iponatic-ii" className="inline-block">
              <Button size="lg" className="bg-white text-stra-navy hover:bg-gray-100 rounded-2xl px-8 h-14 font-bold text-lg shadow-xl shadow-white/10">
                Conhecer o sistema
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-stra-teal/30 to-stra-blue/30 rounded-[40px] blur-2xl opacity-50" />
            <div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl relative z-10 bg-black border border-white/10">
              <iframe 
                src={`${VIDEOS.youtubeSansure}?autoplay=0&mute=0`}
                title="Sansure iPonatic II" 
                className="absolute inset-0 size-full" 
                allowFullScreen 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Institucional (Vercel Style Card) */}
      <section className="bg-white py-32 px-4">
        <div className="max-w-[1000px] mx-auto bg-gray-50 rounded-[40px] p-12 md:p-20 text-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
          {/* Subtle grid bg inside card */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="size-20 mx-auto mb-10 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-100">
              <Award className="size-10 text-stra-teal" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-stra-navy mb-8 tracking-tight">O único, este é o padrão Grupo Stra®</h2>
            <p className="text-xl leading-relaxed text-gray-500 font-medium max-w-2xl mx-auto mb-12">
              Nascida em 2009, somos uma empresa de valores sólidos que cresce de forma
              agressiva e sustentável nos segmentos hospitalar, laboratorial, veterinária e farma.
            </p>
            <Link to="/sobre">
              <Button size="lg" className="bg-stra-navy text-white hover:bg-stra-navy/90 rounded-2xl px-10 h-14 font-bold text-lg shadow-xl shadow-stra-navy/10">
                Conheça nossa história
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
