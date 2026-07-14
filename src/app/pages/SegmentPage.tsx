import { useParams, Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { SEGMENTS, PRODUCTS, BRANDS } from "../data/catalog";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/ui/button";
import NotFound from "./NotFound";

export default function SegmentPage() {
  const { id } = useParams();
  const segment = SEGMENTS.find((s) => s.id === id);
  if (!segment) return <NotFound />;

  const products = PRODUCTS.filter((p) => p.segment === segment.name);
  const brands = [...new Set(products.map((p) => p.brand))];

  return (
    <div>
      <section className="relative bg-stra-navy text-white overflow-hidden">
        <img src={segment.image} alt={segment.name} className="absolute inset-0 size-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-stra-navy/95 to-stra-navy/50" />
        <div className="relative max-w-[1280px] mx-auto px-4 py-20">
          <div className="text-5xl mb-3">{segment.icon}</div>
          <h1 className="text-white" style={{ fontSize: 44, fontWeight: 800 }}>Segmento {segment.name}</h1>
          <p className="mt-4 text-lg text-white/85 max-w-2xl">{segment.description}</p>
          <Link to={`/loja?segmento=${segment.name}`} className="inline-block mt-6">
            <Button size="lg" className="gap-2">Ver todos os produtos <ArrowRight className="size-4" /></Button>
          </Link>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 py-12">
        <h2 className="text-stra-navy mb-6">Marcas neste segmento</h2>
        <div className="flex flex-wrap gap-3">
          {brands.map((b) => (
            <Link key={b} to={`/marca/${encodeURIComponent(b)}`} className="px-5 py-2 rounded-full bg-stra-teal-light text-stra-green-dark hover:bg-stra-teal hover:text-white transition-colors">{b}</Link>
          ))}
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 pb-16">
        <h2 className="text-stra-navy mb-6">Produtos {segment.name}</h2>
        {products.length === 0 ? (
          <p className="text-gray-500">Em breve novos produtos neste segmento.</p>
        ) : (
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
            {products.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </section>

      <section className="max-w-[1280px] mx-auto px-4 pb-16">
        <h2 className="text-stra-navy mb-6">Outros segmentos</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {SEGMENTS.filter((s) => s.id !== segment.id).map((s) => (
            <Link key={s.id} to={`/segmento/${s.id}`} className="group relative rounded-xl overflow-hidden aspect-[16/9] shadow-sm">
              <img src={s.image} alt={s.name} className="absolute inset-0 size-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-stra-navy/90 to-transparent" />
              <div className="absolute bottom-0 p-5 text-white"><div className="text-2xl">{s.icon}</div><h3 className="text-white">{s.name}</h3></div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
