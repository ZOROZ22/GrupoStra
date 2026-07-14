import { Award, ShieldCheck, Target, Heart, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { COMPANY, MANAGERS } from "../data/catalog";
import { Button } from "../components/ui/button";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-stra-navy text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://cdn.shopify.com/s/files/1/0534/2812/5857/files/bg1.jpg?v=1720721290')] bg-cover bg-center" />
        <div className="max-w-[1280px] mx-auto px-4 relative z-10 text-center">
          <div className="size-20 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-8 backdrop-blur-sm border border-white/20">
            <img src={COMPANY.logoVertical} alt="" className="h-12 object-contain brightness-0 invert" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Saúde e Bem-Estar<br/>em Todo o Brasil</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Nascida em 2009, somos uma empresa de valores sólidos que cresce de forma agressiva e sustentável.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-24 max-w-[1000px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-stra-navy mb-6">Nossa História</h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>Desafio é o que nos move. Avançamos no tempo cumprindo nosso propósito de entregar saúde e bem estar em todo Brasil valorizando o capital humano.</p>
              <p>Com mais de 15 anos de mercado, o Grupo Stra desenvolve marcas e produtos inovadores, atuando nos segmentos hospitalar, laboratorial, veterinária e farma.</p>
              <p>Hoje, contamos com mais de 11 marcas próprias e distribuímos exclusividades das maiores fabricantes globais de tecnologia médica.</p>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-2xl font-bold text-stra-teal italic">"O único, este é o padrão Grupo Stra®"</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-stra-teal rounded-3xl translate-x-4 translate-y-4 opacity-20" />
            <img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/bg2.jpg?v=1720712138" alt="Grupo Stra" className="rounded-3xl shadow-xl relative z-10 object-cover aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-gray-50 py-24 border-y border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stra-navy">Nossos Pilares</h2>
            <p className="mt-4 text-lg text-gray-500">O que sustenta o nosso crescimento diário.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, t: "Foco no Cliente", d: "Atendimento especializado e soluções reais para os desafios clínicos." },
              { icon: Award, t: "Inovação", d: "Busca constante por tecnologias que salvam vidas e otimizam processos." },
              { icon: ShieldCheck, t: "Qualidade", d: "Certificação rigorosa e conformidade com todos os padrões ANVISA." },
              { icon: Heart, t: "Valorização Humana", d: "Cuidado genuíno com nossos colaboradores, parceiros e clientes." },
            ].map((v) => (
              <div key={v.t} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="size-14 rounded-2xl bg-stra-teal/10 flex items-center justify-center text-stra-teal mb-6">
                  <v.icon className="size-7" />
                </div>
                <h3 className="text-xl font-bold text-stra-navy mb-3">{v.t}</h3>
                <p className="text-gray-600 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liderança */}
      <section className="py-24 max-w-[1280px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stra-navy">Liderança</h2>
          <p className="mt-4 text-lg text-gray-500">Os profissionais por trás da nossa excelência.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MANAGERS.map((m) => (
            <div key={m.name} className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-square bg-gray-100 flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-stra-navy opacity-0 group-hover:opacity-10 transition-opacity" />
                <UserIcon className="size-24 text-gray-300 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-stra-navy">{m.name}</h3>
                <p className="text-sm font-bold text-stra-teal uppercase tracking-wide mt-1 mb-3">{m.role}</p>
                <p className="text-gray-600 text-sm">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stra-teal py-20 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Quer fazer parte da nossa rede?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Explore nosso catálogo ou entre em contato com um especialista comercial.</p>
        <div className="flex justify-center gap-4">
          <Link to="/loja">
            <Button size="lg" className="bg-white text-stra-teal hover:bg-gray-50 h-14 px-8 rounded-xl font-bold text-lg">
              Explorar Catálogo
            </Button>
          </Link>
          <Link to="/contato">
            <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10 h-14 px-8 rounded-xl font-bold text-lg">
              Fale Conosco
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

// Temporary user icon component since lucide user is heavily used
function UserIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
