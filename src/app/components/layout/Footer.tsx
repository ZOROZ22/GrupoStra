import { Link } from "react-router";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { COMPANY, SEGMENTS } from "../../data/catalog";

export function Footer() {
  return (
    <footer className="bg-stra-navy text-white mt-16">
      <div className="max-w-[1280px] mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <img src={COMPANY.logo} alt="Grupo Stra" className="h-12 object-contain bg-white rounded-lg p-2" />
          <p className="text-sm text-white/70">{COMPANY.tagline}</p>
          <p className="text-sm text-white/70">Segmentos: Hospitalar, Laboratorial, Veterinário e Farma. O único, este é o padrão Grupo Stra®.</p>
        </div>

        <div>
          <h4 className="mb-4 text-white">Segmentos</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {SEGMENTS.map((s) => (
              <li key={s.id}><Link to={`/segmento/${s.id}`} className="hover:text-stra-teal-light">{s.icon} {s.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-white">Institucional</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/sobre" className="hover:text-stra-teal-light">Sobre Nós</Link></li>
            <li><Link to="/blog" className="hover:text-stra-teal-light">Novidades</Link></li>
            <li><Link to="/contato" className="hover:text-stra-teal-light">Contato & SAC</Link></li>
            <li><Link to="/loja" className="hover:text-stra-teal-light">Catálogo</Link></li>
            <li><Link to="/entrar" className="hover:text-stra-teal-light">Área do Cliente</Link></li>
            <li><Link to="/admin" className="hover:text-stra-teal-light">Área Administrativa</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-white">Contato</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><MapPin className="size-4 shrink-0 mt-0.5 text-stra-teal" />{COMPANY.address} — CEP {COMPANY.cep}</li>
            <li className="flex gap-2"><Phone className="size-4 shrink-0 text-stra-teal" />{COMPANY.phone}</li>
            <li className="flex gap-2"><Mail className="size-4 shrink-0 text-stra-teal" />{COMPANY.email}</li>
            <li className="flex gap-2"><Clock className="size-4 shrink-0 mt-0.5 text-stra-teal" />{COMPANY.hours}</li>
            <li className="flex gap-2"><Instagram className="size-4 shrink-0 text-stra-teal" />{COMPANY.instagram}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 py-5 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Grupo Stra — Saúde e Bem Estar. Fundada em {COMPANY.founded}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
