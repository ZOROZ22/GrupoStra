import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { COMPANY } from "../../data/catalog";

const floatingShapes = [
  { size: 120, x: "10%", y: "20%", delay: 0, duration: 20 },
  { size: 80, x: "80%", y: "15%", delay: 2, duration: 25 },
  { size: 60, x: "70%", y: "70%", delay: 4, duration: 18 },
  { size: 100, x: "15%", y: "75%", delay: 1, duration: 22 },
  { size: 40, x: "50%", y: "30%", delay: 3, duration: 16 },
  { size: 50, x: "90%", y: "50%", delay: 5, duration: 24 },
];

const headlineWords = "Soluções que transformam a saúde".split(" ");

export default function LandingV2Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1d3557 0%, #0f2744 25%, #1a3a5c 50%, #0b8b6e 75%, #3ebdb1 100%)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 12s ease infinite",
        }}
      />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating geometric shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/10"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background:
              i % 2 === 0
                ? "radial-gradient(circle, rgba(62,189,177,0.08) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Small floating dots */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 rounded-full bg-white/20"
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${5 + Math.random() * 90}%`,
          }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
        {/* Tagline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#3ebdb1] animate-pulse" />
          {COMPANY.tagline}
        </motion.div>

        {/* Main headline — word by word reveal */}
        <h1 className="mb-6">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.6,
                delay: 0.5 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block mr-[0.3em] text-white"
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: "clamp(2.5rem, 7vw, 5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Desde {COMPANY.founded}, desenvolvemos marcas inovadoras e atuamos nos
          segmentos hospitalar, laboratorial, veterinário e farma em todo o
          Brasil.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <a
            href="/loja"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[#1d3557] font-semibold text-lg transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #3ebdb1 0%, #0b8b6e 100%)",
              boxShadow: "0 0 30px rgba(62,189,177,0.4), 0 4px 20px rgba(0,0,0,0.2)",
            }}
          >
            <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">Explorar Produtos</span>
          </a>

          {/* Secondary CTA */}
          <a
            href="/contato"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg border border-white/30 backdrop-blur-sm bg-white/5 transition-all duration-300 hover:bg-white/15 hover:border-white/50 hover:scale-105"
          >
            Fale Conosco
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* CSS keyframes */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
