import { Link } from "react-router";
import { MapPin, Phone, Mail, Clock, Instagram, ArrowUpRight } from "lucide-react";
import { COMPANY, SEGMENTS } from "../../data/catalog";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-stra-navy via-stra-navy to-[#0f2240] text-white mt-16 overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-stra-teal/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-4 py-16 grid gap-12 md:grid-cols-4 relative z-10">
        <div className="space-y-5">
          <img src="https://api.grupostra.com/storage/grupo/site/footer/logo-grupo-stra-horizontal-1782825327.png" alt="Grupo Stra" className="h-10 object-contain" />
          <p className="text-sm text-white/60 leading-relaxed">{COMPANY.tagline}</p>
          <p className="text-sm text-white/60 leading-relaxed">Segmentos: Hospitalar, Laboratorial, Veterinário e Farma. O único, este é o padrão Grupo Stra®.</p>
          <div className="flex gap-3 pt-2">
            <a 
              href={`https://instagram.com/${COMPANY.instagram?.replace('@','')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="size-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-stra-teal hover:border-stra-teal transition-all duration-300 group"
            >
              <Instagram className="size-4 text-white/60 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-white font-semibold text-sm uppercase tracking-wider">Segmentos</h4>
          <ul className="space-y-3 text-sm">
            {SEGMENTS.map((s) => (
              <li key={s.id}>
                <Link 
                  to={`/segmento/${s.id}`} 
                  className="text-white/60 hover:text-stra-teal flex items-center gap-2 group transition-colors duration-300"
                >
                  <span>{s.icon}</span>
                  <span>{s.name}</span>
                  <ArrowUpRight className="size-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-white font-semibold text-sm uppercase tracking-wider">Institucional</h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/sobre", label: "Sobre Nós" },
              { to: "/blog", label: "Novidades" },
              { to: "/contato", label: "Contato & SAC" },
              { to: "/loja", label: "Catálogo" },
              { to: "/entrar", label: "Área do Cliente" },
              { to: "/admin", label: "Área Administrativa" },
            ].map((link) => (
              <li key={link.to}>
                <Link 
                  to={link.to} 
                  className="text-white/60 hover:text-stra-teal flex items-center gap-2 group transition-colors duration-300"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="size-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-white font-semibold text-sm uppercase tracking-wider">Contato</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex gap-3 items-start group hover:text-white/80 transition-colors">
              <div className="size-8 rounded-lg bg-stra-teal/10 flex items-center justify-center shrink-0 group-hover:bg-stra-teal/20 transition-colors">
                <MapPin className="size-4 text-stra-teal" />
              </div>
              <span className="pt-1">{COMPANY.address} — CEP {COMPANY.cep}</span>
            </li>
            <li className="flex gap-3 items-center group hover:text-white/80 transition-colors">
              <div className="size-8 rounded-lg bg-stra-teal/10 flex items-center justify-center shrink-0 group-hover:bg-stra-teal/20 transition-colors">
                <Phone className="size-4 text-stra-teal" />
              </div>
              {COMPANY.phone}
            </li>
            <li className="flex gap-3 items-center group hover:text-white/80 transition-colors">
              <div className="size-8 rounded-lg bg-stra-teal/10 flex items-center justify-center shrink-0 group-hover:bg-stra-teal/20 transition-colors">
                <Mail className="size-4 text-stra-teal" />
              </div>
              {COMPANY.email}
            </li>
            <li className="flex gap-3 items-center group hover:text-white/80 transition-colors">
              <div className="size-8 rounded-lg bg-stra-teal/10 flex items-center justify-center shrink-0 group-hover:bg-stra-teal/20 transition-colors">
                <Clock className="size-4 text-stra-teal" />
              </div>
              {COMPANY.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 relative z-10">
        <div className="max-w-[1280px] mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <span>© {new Date().getFullYear()} Grupo Stra — Saúde e Bem Estar. Fundada em {COMPANY.founded}.</span>
          <span>Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
