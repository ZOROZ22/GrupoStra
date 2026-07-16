import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { PRODUCTS, formatBRL } from "../../data/catalog";

const featured = PRODUCTS.filter((p) => p.featured);

export default function LandingV2Products() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1d3557 0%, #0f2744 100%)" }}
    >
      {/* Background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#3ebdb1]/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#7C3AED]/6 rounded-full blur-[100px]" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#3ebdb1] text-sm font-medium mb-4">
              Destaques
            </span>
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
              Produtos em Destaque
            </h2>
            <p className="mt-3 text-white/50 text-lg max-w-lg">
              Tecnologia de ponta para cada necessidade da saúde.
            </p>
          </div>
          <Link
            to="/loja"
            className="inline-flex items-center gap-2 text-[#3ebdb1] font-medium hover:gap-3 transition-all duration-300 shrink-0"
          >
            Ver todos os produtos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Carousel */}
        <motion.div
          ref={carouselRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing overflow-x-auto pb-4 scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="flex-shrink-0 w-[300px] sm:w-[340px] scroll-snap-align-start"
              style={{ scrollSnapAlign: "start" }}
            >
              <Link
                to={`/produto/${product.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/25 transition-all duration-500 hover:-translate-y-2"
                style={{
                  boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
                }}
              >
                {/* Image area */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Badge */}
                  {product.badge && (
                    <span
                      className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
                        product.badge === "Novo"
                          ? "bg-[#7C3AED] text-white"
                          : product.badge === "Mais Vendido"
                          ? "bg-[#3ebdb1] text-[#1d3557]"
                          : "bg-white/20 text-white backdrop-blur-sm"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  {/* Brand badge */}
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/10 text-white/60 text-xs font-medium mb-2">
                    {product.brand}
                  </span>
                  <h3
                    className="text-white font-bold text-base leading-snug mb-2 line-clamp-2 group-hover:text-[#3ebdb1] transition-colors duration-300"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    {product.name.split("—")[0].trim()}
                  </h3>
                  <p className="text-white/40 text-sm line-clamp-2 mb-4">
                    {product.short}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-[#3ebdb1] font-bold text-lg">
                      {formatBRL(product.price)}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm text-white/50 group-hover:text-[#3ebdb1] transition-colors">
                      Ver Detalhes
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
