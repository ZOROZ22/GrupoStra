import { motion } from "framer-motion";
import { BRANDS } from "../../data/catalog";

const allBrands = [...BRANDS, ...BRANDS]; // Duplicate for seamless loop

export default function LandingV2Brands() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#3ebdb1]/10 text-[#3ebdb1] text-sm font-medium mb-4">
            Parceiros
          </span>
          <h2
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#1d3557",
            }}
          >
            Marcas Parceiras
          </h2>
          <p className="mt-4 text-lg text-[#64748b] max-w-xl mx-auto">
            Trabalhamos com as melhores marcas do setor de saúde no Brasil e no
            mundo.
          </p>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Edge fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Ticker row 1 */}
        <div className="flex overflow-hidden mb-6">
          <div className="ticker-track flex gap-8 items-center">
            {allBrands.map((brand, i) => (
              <div
                key={`row1-${i}`}
                className="flex-shrink-0 px-8 py-5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#3ebdb1]/40 hover:bg-[#3ebdb1]/5 transition-all duration-300 cursor-default"
              >
                <span
                  className="text-[#1d3557] font-bold text-lg whitespace-nowrap"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ticker row 2 (reverse) */}
        <div className="flex overflow-hidden">
          <div className="ticker-track-reverse flex gap-8 items-center">
            {[...allBrands].reverse().map((brand, i) => (
              <div
                key={`row2-${i}`}
                className="flex-shrink-0 px-8 py-5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#3ebdb1]/40 hover:bg-[#3ebdb1]/5 transition-all duration-300 cursor-default"
              >
                <span
                  className="text-[#1d3557] font-bold text-lg whitespace-nowrap"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .ticker-track {
          animation: tickerScroll 30s linear infinite;
        }
        .ticker-track-reverse {
          animation: tickerScrollReverse 35s linear infinite;
        }
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes tickerScrollReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .ticker-track:hover,
        .ticker-track-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
