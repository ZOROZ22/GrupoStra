import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { COMPANY } from "../data/catalog";

import LandingV2Hero from "../components/landing/LandingV2Hero";
import LandingV2Segments from "../components/landing/LandingV2Segments";
import LandingV2Products from "../components/landing/LandingV2Products";
import LandingV2Stats from "../components/landing/LandingV2Stats";
import LandingV2Brands from "../components/landing/LandingV2Brands";
import LandingV2CTA from "../components/landing/LandingV2CTA";
import { Footer } from "../components/layout/Footer";

const navLinks = [
  { label: "Segmentos", href: "#segmentos" },
  { label: "Produtos", href: "/loja" },
  { label: "Sobre", href: "/sobre" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

function V2Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(29, 53, 87, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.15)" : "none",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/v2" className="flex items-center gap-3">
              <img
                src={COMPANY.logo}
                alt={COMPANY.name}
                className="h-8 sm:h-10 object-contain"
                style={{
                  filter: scrolled ? "none" : "brightness(0) invert(1)",
                  transition: "filter 0.3s ease",
                }}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-4">
              <Link
                to="/cotacao"
                className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-[#1d3557] transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #3ebdb1 0%, #2a9d8f 100%)",
                  boxShadow: "0 2px 10px rgba(62,189,177,0.3)",
                }}
              >
                Solicitar Cotação
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed inset-0 z-40 bg-[#1d3557]/98 backdrop-blur-xl pt-20"
        >
          <nav className="flex flex-col items-center gap-6 p-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-bold text-white/80 hover:text-white transition-colors"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/cotacao"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center px-8 py-3 rounded-xl text-lg font-bold text-[#1d3557]"
              style={{
                background: "linear-gradient(135deg, #3ebdb1 0%, #2a9d8f 100%)",
              }}
            >
              Solicitar Cotação
            </Link>
          </nav>
        </motion.div>
      )}
    </>
  );
}

export default function LandingV2() {
  // Lock scroll when mobile menu is open (handled above in state)
  // Prevent the parent SiteLayout from interfering
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <V2Navbar />
      <LandingV2Hero />
      <div id="segmentos">
        <LandingV2Segments />
      </div>
      <LandingV2Products />
      <LandingV2Stats />
      <LandingV2Brands />
      <LandingV2CTA />
      <Footer />
    </div>
  );
}
