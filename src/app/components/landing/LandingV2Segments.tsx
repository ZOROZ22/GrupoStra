import { motion } from "framer-motion";
import { Link } from "react-router";
import { Building, Microscope, PawPrint, Pill } from "lucide-react";
import { SEGMENTS } from "../../data/catalog";

const segmentAccents: Record<string, { gradient: string; glow: string; iconBg: string }> = {
  hospitalar: {
    gradient: "from-[#3ebdb1]/20 to-[#3ebdb1]/5",
    glow: "rgba(62,189,177,0.4)",
    iconBg: "bg-[#3ebdb1]/20",
  },
  laboratorial: {
    gradient: "from-[#2563EB]/20 to-[#2563EB]/5",
    glow: "rgba(37,99,235,0.4)",
    iconBg: "bg-[#2563EB]/20",
  },
  veterinario: {
    gradient: "from-[#7C3AED]/20 to-[#7C3AED]/5",
    glow: "rgba(124,58,237,0.4)",
    iconBg: "bg-[#7C3AED]/20",
  },
  farma: {
    gradient: "from-[#0b8b6e]/20 to-[#0b8b6e]/5",
    glow: "rgba(11,139,110,0.4)",
    iconBg: "bg-[#0b8b6e]/20",
  },
};

const segmentIcons: Record<string, React.ReactNode> = {
  hospitalar: <Building className="w-7 h-7" />,
  laboratorial: <Microscope className="w-7 h-7" />,
  veterinario: <PawPrint className="w-7 h-7" />,
  farma: <Pill className="w-7 h-7" />,
};

const iconColors: Record<string, string> = {
  hospitalar: "text-[#3ebdb1]",
  laboratorial: "text-[#2563EB]",
  veterinario: "text-[#7C3AED]",
  farma: "text-[#0b8b6e]",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function LandingV2Segments() {
  return (
    <section className="py-24 sm:py-32 bg-[#f8fafc] relative overflow-hidden">
      {/* Subtle background decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3ebdb1]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2563EB]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

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
            Segmentos de Atuação
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
            Atendemos toda a cadeia da saúde
          </h2>
          <p className="mt-4 text-lg text-[#64748b] max-w-2xl mx-auto">
            Soluções especializadas para cada segmento, com tecnologia de ponta e
            suporte dedicado.
          </p>
        </motion.div>

        {/* Segment cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {SEGMENTS.map((segment) => {
            const accent = segmentAccents[segment.id] || segmentAccents.hospitalar;
            const icon = segmentIcons[segment.id];
            const iconColor = iconColors[segment.id];

            return (
              <motion.div key={segment.id} variants={cardVariants}>
                <Link
                  to={`/segmento/${segment.id}`}
                  className="group relative block rounded-2xl p-6 sm:p-8 transition-all duration-500 bg-white/70 backdrop-blur-md border border-white/60 hover:border-white/80 overflow-hidden"
                  style={{
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.02)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${accent.glow}, 0 2px 10px rgba(0,0,0,0.06)`;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px) scale(1.01)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.02)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 flex items-start gap-5">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-xl ${accent.iconBg} flex items-center justify-center ${iconColor} transition-transform duration-300 group-hover:scale-110`}
                    >
                      {icon}
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-xl font-bold text-[#1d3557] mb-2 group-hover:text-[#1d3557]/90 transition-colors"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      >
                        {segment.name}
                      </h3>
                      <p className="text-[#64748b] text-sm leading-relaxed">
                        {segment.description}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#3ebdb1] group-hover:gap-2 transition-all duration-300">
                        Conhecer mais
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Segment image (background) */}
                  <div className="absolute right-0 bottom-0 w-32 h-32 opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-500">
                    <img
                      src={segment.image}
                      alt=""
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
