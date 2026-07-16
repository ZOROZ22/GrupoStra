import { motion } from "framer-motion";
import { MessageCircle, FileText } from "lucide-react";
import { COMPANY } from "../../data/catalog";

export default function LandingV2CTA() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de falar com um especialista do Grupo Stra."
  )}`;

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #3ebdb1 0%, #2a9d8f 30%, #1d3557 70%, #0f2744 100%)",
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-white/10 opacity-30" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-white/10 opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/5 blur-[100px]" />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-[15%] w-4 h-4 rounded-full bg-white/10"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-[20%] w-3 h-3 rounded-full bg-[#3ebdb1]/30"
        animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-6">
            Vamos conversar
          </span>

          <h2
            className="text-white mb-6"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Pronto para elevar sua operação?
          </h2>

          <p className="text-white/60 text-lg sm:text-xl mb-10 max-w-lg mx-auto leading-relaxed">
            Solicite uma cotação personalizada ou converse com nossos
            especialistas. Atendimento ágil e dedicado.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <a
              href="/cotacao"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-[#1d3557] font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                boxShadow: "0 4px 30px rgba(255,255,255,0.2)",
              }}
            >
              <FileText className="w-5 h-5 transition-transform group-hover:-rotate-6" />
              Solicitar Cotação
            </a>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-bold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:scale-105 backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
              Falar com Especialista
            </a>
          </div>

          {/* Trust text */}
          <p className="mt-8 text-white/40 text-sm">
            {COMPANY.phone} · {COMPANY.email}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
