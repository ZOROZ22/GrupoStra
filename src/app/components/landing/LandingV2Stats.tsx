import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, Headphones, Package } from "lucide-react";
import { BRANDS } from "../../data/catalog";

interface StatItem {
  prefix: string;
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    prefix: "+",
    value: 500,
    suffix: "",
    label: "Clientes Atendidos",
    icon: <Users className="w-6 h-6" />,
  },
  {
    prefix: "+",
    value: BRANDS.length,
    suffix: "",
    label: "Marcas Parceiras",
    icon: <Award className="w-6 h-6" />,
  },
  {
    prefix: "",
    value: 24,
    suffix: "h",
    label: "Suporte Técnico",
    icon: <Headphones className="w-6 h-6" />,
  },
  {
    prefix: "+",
    value: 1000,
    suffix: "",
    label: "Produtos Disponíveis",
    icon: <Package className="w-6 h-6" />,
  },
];

function AnimatedCounter({
  value,
  prefix,
  suffix,
  inView,
}: {
  value: number;
  prefix: string;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span
      style={{
        fontFamily: "'Inter Tight', sans-serif",
        fontSize: "clamp(2.5rem, 5vw, 4rem)",
        fontWeight: 800,
        lineHeight: 1,
        letterSpacing: "-0.03em",
      }}
    >
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function LandingV2Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0b8b6e 0%, #3ebdb1 40%, #2a9d8f 70%, #1d3557 100%)",
      }}
    >
      {/* Decorative overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-white"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Números que falam por nós
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            Compromisso com excelência desde 2009.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm text-white mb-4">
                {stat.icon}
              </div>
              <div className="text-white mb-2">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </div>
              <p className="text-white/70 font-medium text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
