import { useParams, Link, useNavigate } from "react-router";
import { useState } from "react";
import { ShieldCheck, Truck, Award, Check, FileDown, ChevronRight, Star, AlertCircle, ArrowRight } from "lucide-react";
import { getProduct, PRODUCTS, formatBRL, volumeDiscount, COMPANY } from "../data/catalog";
import { useStore } from "../store";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { toast } from "sonner";

export default function ProductPage() {
  const { slug } = useParams();
  const product = getProduct(slug || "");
  const { addToCart, addToQuote, user } = useStore();
  const navigate = useNavigate();
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="max-w-[1280px] mx-auto px-4 py-24 text-center">
        <h1 className="text-stra-navy text-3xl font-bold">Produto não encontrado</h1>
        <Link to="/loja">
          <Button className="mt-6 bg-stra-teal hover:bg-stra-teal-dark px-8 h-12 rounded-xl text-white">Voltar ao catálogo</Button>
        </Link>
      </div>
    );
  }

  const related = PRODUCTS.filter((p) => p.id !== product.id && p.segment === product.segment).slice(0, 4);
  const isConsult = product.price === null || product.landingType === "A";
  const isConsumivel = product.landingType === "C";
  const discount = isConsumivel ? volumeDiscount(qty) : 0;
  const unitPrice = product.price ?? 0;
  const finalPrice = unitPrice * qty * (1 - discount);
  const showPrice = user !== null; // Só mostra preço se estiver logado

  const testimonials = [
    { name: "Dra. Marina Alves", role: "Ginecologia", text: "Excelente qualidade e suporte impecável do Grupo Stra." },
    { name: "Lab. CitoDiagnóstico", role: "Laboratório", text: "Padronização e resultados consistentes na nossa rotina." },
  ];

  return (
    <div className="pb-24 bg-white">
      {/* breadcrumb */}
      <div className="max-w-[1280px] mx-auto px-4 pt-6">
        <nav className="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <Link to="/" className="hover:text-stra-teal transition-colors">Home</Link><ChevronRight className="size-3.5" />
          <Link to={`/marca/${encodeURIComponent(product.brand)}`} className="hover:text-stra-teal transition-colors">{product.brand}</Link><ChevronRight className="size-3.5" />
          <span className="text-stra-navy truncate">{product.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-4 py-10 grid md:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <div className="aspect-[4/3] bg-gray-50 rounded-3xl p-8 border border-gray-100 flex items-center justify-center relative overflow-hidden group">
            {product.badge && (
              <Badge className="absolute top-6 left-6 z-10 font-medium bg-stra-gold text-white text-sm px-3 py-1">
                {product.badge}
              </Badge>
            )}
            <img 
              src={product.images[activeImg]} 
              alt={product.name} 
              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-4 mt-6 overflow-x-auto pb-2 scrollbar-hide">
              {product.images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImg(i)} 
                  className={`relative shrink-0 size-24 rounded-2xl bg-gray-50 border-2 p-2 transition-all ${
                    i === activeImg ? "border-stra-teal shadow-md" : "border-transparent hover:border-gray-200"
                  }`}
                >
                  <img src={img} alt="" className="size-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <div className="flex gap-2 mb-4">
            <Badge variant="outline" className="bg-gray-50 text-gray-600 border-gray-200 font-medium px-3 py-1">
              {product.segment}
            </Badge>
            <Badge variant="outline" className="bg-stra-teal-light text-stra-teal border-transparent font-medium px-3 py-1">
              {product.brand}
            </Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stra-navy leading-tight tracking-tight mb-4">
            {product.name}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {product.short}
          </p>

          <div className="mt-auto p-6 md:p-8 bg-gray-50 rounded-3xl border border-gray-100">
            {showPrice ? (
              // Usuário Logado -> Mostra preço, opções de compra/cotação
              <>
                {isConsult ? (
                  <p className="text-stra-navy font-bold text-3xl mb-6">Preço sob consulta</p>
                ) : (
                  <div className="mb-6">
                    <p className="text-stra-navy font-bold text-4xl">{formatBRL(finalPrice)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      {unitPrice > 1000 && <p className="text-sm font-medium text-gray-500">em até 12x de {formatBRL(finalPrice / 12)}</p>}
                      {discount > 0 && <Badge className="bg-stra-green/10 text-stra-green border-transparent hover:bg-stra-green/20">-{discount * 100}% aplicado</Badge>}
                    </div>
                  </div>
                )}

                {isConsumivel && (
                  <div className="mb-6 text-sm">
                    <p className="text-gray-500 font-medium mb-3 uppercase tracking-wider text-xs">Descontos por volume</p>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      {[["1-9", "cheio"], ["10-49", "-5%"], ["50-99", "-10%"], ["100+", "-15%"]].map(([r, d]) => (
                        <div key={r} className="bg-white rounded-xl border border-gray-100 py-3 shadow-sm">
                          <p className="text-xs text-gray-500 font-medium">{r} un</p>
                          <p className="text-stra-green font-bold">{d}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center bg-white border border-gray-200 rounded-xl shadow-sm">
                    <button className="px-4 py-3 text-gray-500 hover:text-stra-navy transition-colors" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
                    <input type="number" value={qty} onChange={(e) => setQty(Math.max(1, +e.target.value))} className="w-12 text-center outline-none font-semibold text-stra-navy" />
                    <button className="px-4 py-3 text-gray-500 hover:text-stra-navy transition-colors" onClick={() => setQty((q) => q + 1)}>+</button>
                  </div>
                  <span className="text-sm font-medium text-stra-green flex items-center gap-1.5 bg-stra-green/10 px-3 py-1.5 rounded-lg">
                    <Check className="size-4" /> Em estoque
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {!isConsult && (
                    <Button size="lg" className="flex-1 bg-stra-teal hover:bg-stra-teal-dark h-14 rounded-xl text-lg font-semibold shadow-lg shadow-stra-teal/20" onClick={() => { addToCart(product, qty); toast.success("Adicionado ao carrinho"); }}>
                      Adicionar ao carrinho
                    </Button>
                  )}
                  <Button size="lg" variant={isConsult ? "default" : "outline"} className={`flex-1 h-14 rounded-xl text-lg font-semibold ${isConsult ? 'bg-stra-navy hover:bg-stra-navy/90 text-white' : 'border-gray-200 text-gray-700 hover:bg-gray-100'}`} onClick={() => { addToQuote(product, qty); toast.success("Adicionado à cotação"); }}>
                    Solicitar cotação
                  </Button>
                </div>
              </>
            ) : (
              // Usuário Não Logado -> CTA para Onboarding
              <div className="flex flex-col items-center text-center">
                <div className="size-16 bg-stra-teal/10 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="size-8 text-stra-teal" />
                </div>
                <h3 className="text-2xl font-bold text-stra-navy mb-3">Interessado neste produto?</h3>
                <p className="text-gray-600 mb-8 max-w-md">
                  Faça seu cadastro médico ou corporativo para ver preços, cotações exclusivas e acessar nossa plataforma completa.
                </p>
                <div className="w-full flex flex-col gap-3">
                  <Button 
                    size="lg" 
                    className="w-full bg-stra-teal hover:bg-stra-teal-dark h-14 rounded-xl text-lg font-bold shadow-lg shadow-stra-teal/30 gap-2 text-white" 
                    onClick={() => navigate('/cadastro')}
                  >
                    TENHO INTERESSE <ArrowRight className="size-5" />
                  </Button>
                  <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" className="w-full">
                    <Button variant="outline" size="lg" className="w-full border-gray-200 text-gray-700 hover:bg-gray-100 h-14 rounded-xl font-medium gap-2">
                      Falar com especialista
                    </Button>
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-gray-500">
            <span className="flex items-center gap-2"><ShieldCheck className="size-5 text-stra-teal" /> Registro ANVISA</span>
            <span className="flex items-center gap-2"><Award className="size-5 text-stra-teal" /> Garantia de 12 meses</span>
            <span className="flex items-center gap-2"><Truck className="size-5 text-stra-teal" /> Envio para todo o Brasil</span>
          </div>
        </div>
      </section>

      {/* Problema / Solução */}
      <section className="bg-stra-navy text-white mt-10">
        <div className="max-w-[1280px] mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 lg:gap-24">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12">
            <div className="inline-flex items-center gap-2 text-stra-orange font-bold text-sm uppercase tracking-wider mb-6">
              <AlertCircle className="size-5" /> O desafio
            </div>
            <h2 className="text-3xl font-bold mb-6">A necessidade clínica</h2>
            <p className="text-lg text-white/70 leading-relaxed">{product.problem}</p>
          </div>
          <div className="bg-stra-teal/10 border border-stra-teal/20 rounded-3xl p-8 lg:p-12">
            <div className="inline-flex items-center gap-2 text-stra-teal-light font-bold text-sm uppercase tracking-wider mb-6">
              <ShieldCheck className="size-5" /> A solução
            </div>
            <h2 className="text-3xl font-bold mb-6">Como resolvemos</h2>
            <p className="text-lg text-white/90 leading-relaxed">{product.solution}</p>
          </div>
        </div>
      </section>

      {/* Vídeo */}
      {product.videoUrl && (
        <section className="max-w-[1000px] mx-auto px-4 py-24">
          <div className="text-center mb-12">
            <span className="text-stra-teal font-semibold text-sm tracking-wider uppercase">Stra Academy</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stra-navy mt-2">Veja em ação</h2>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] bg-black group">
            <div className="absolute inset-0 bg-stra-teal/20 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none z-10" />
            <iframe src={`${product.videoUrl}?rel=0`} title="Demonstração" className="absolute inset-0 size-full z-0" allowFullScreen />
          </div>
        </section>
      )}

      {/* Benefícios */}
      <section className="bg-gray-50 border-y border-gray-100 py-24">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stra-navy">Principais benefícios</h2>
            <p className="mt-4 text-lg text-gray-500">O que torna este produto a escolha certa para você.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.benefits.map((b) => (
              <div key={b.title} className="p-8 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="size-14 rounded-2xl bg-stra-teal/10 flex items-center justify-center text-3xl mb-6">
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold text-stra-navy mb-3">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resto do layout...  */}
      {/* Especificações + Como funciona */}
      <section className="max-w-[1280px] mx-auto px-4 py-24 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-stra-navy mb-8">Especificações técnicas</h2>
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            {product.specs.map((s, i) => (
              <div key={s.label} className={`flex flex-col sm:flex-row sm:justify-between px-6 py-4 ${i % 2 ? "bg-white" : "bg-gray-50"}`}>
                <span className="text-gray-500 font-medium mb-1 sm:mb-0">{s.label}</span>
                <span className="text-stra-navy font-bold text-right">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-stra-navy mb-8">Como funciona</h2>
          <div className="space-y-6">
            {product.steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="shrink-0 size-12 rounded-2xl bg-stra-navy text-white font-bold text-xl flex items-center justify-center shadow-md">
                  {i + 1}
                </span>
                <div className="pt-2 text-lg text-gray-700 font-medium">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relacionados */}
      {related.length > 0 && (
        <section className="bg-gray-50 border-t border-gray-100 py-24">
          <div className="max-w-[1280px] mx-auto px-4">
            <h2 className="text-3xl font-bold text-stra-navy mb-10 text-center">Produtos relacionados</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => <ProductCard key={p.id} product={p} hidePrice={!showPrice} />)}
            </div>
          </div>
        </section>
      )}

      {/* sticky buy bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] translate-y-0 transition-transform">
        <div className="max-w-[1280px] mx-auto px-4 py-4 flex items-center gap-4">
          <img src={product.images[0]} alt="" className="size-14 object-contain hidden sm:block bg-gray-50 rounded-lg p-1" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-500">{product.brand}</p>
            <p className="truncate font-bold text-stra-navy">{product.name}</p>
          </div>
          {showPrice ? (
            <div className="flex items-center gap-4">
              <p className="text-stra-navy text-xl hidden md:block" style={{ fontWeight: 800 }}>{isConsult ? "Sob consulta" : formatBRL(finalPrice)}</p>
              {!isConsult ? (
                <Button size="lg" className="bg-stra-teal hover:bg-stra-teal-dark font-bold px-8 h-12 rounded-xl" onClick={() => { addToCart(product, qty); toast.success("Adicionado ao carrinho"); }}>Comprar</Button>
              ) : (
                <Button size="lg" className="bg-stra-navy hover:bg-stra-navy/90 font-bold px-8 h-12 rounded-xl text-white" onClick={() => { addToQuote(product, qty); toast.success("Adicionado à cotação"); }}>Solicitar cotação</Button>
              )}
            </div>
          ) : (
            <Button 
              size="lg" 
              className="bg-stra-teal hover:bg-stra-teal-dark font-bold px-8 h-12 rounded-xl gap-2 text-white shadow-md shadow-stra-teal/20" 
              onClick={() => navigate('/cadastro')}
            >
              TENHO INTERESSE <ArrowRight className="size-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
