import { useParams, Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { PRODUCTS, BRANDS } from "../data/catalog";
import { ProductCard } from "../components/ProductCard";
import NotFound from "./NotFound";

export default function BrandPage() {
  const { brand } = useParams();
  const name = brand ? decodeURIComponent(brand) : "";
  if (!BRANDS.includes(name)) return <NotFound />;

  const products = PRODUCTS.filter((p) => p.brand === name);
  const hero = products[0];
  const segments = [...new Set(products.map((p) => p.segment))];

  return (
    <div>
      <section className="bg-stra-teal-light">
        <div className="max-w-[1280px] mx-auto px-4 py-14">
          <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-stra-teal">Home</Link><ChevronRight className="size-3" />
            <Link to="/loja" className="hover:text-stra-teal">Marcas</Link><ChevronRight className="size-3" />
            <span className="text-gray-900">{name}</span>
          </nav>
          <div className="flex items-center gap-8">
            {hero && <img src={hero.images[0]} alt={name} className="size-32 object-contain bg-white rounded-2xl p-3 shadow-sm hidden sm:block" />}
            <div>
              <h1 className="text-stra-navy" style={{ fontSize: 40, fontWeight: 800 }}>{name}</h1>
              <p className="text-gray-600 mt-2">Marca do portfólio Grupo Stra · {segments.join(", ")}</p>
              <p className="text-sm text-gray-500 mt-1">{products.length} produto(s) disponível(is)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 py-12">
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 pb-16">
        <h2 className="text-stra-navy mb-6">Outras marcas</h2>
        <div className="flex flex-wrap gap-3">
          {BRANDS.filter((b) => b !== name).map((b) => (
            <Link key={b} to={`/marca/${encodeURIComponent(b)}`} className="px-4 py-2 rounded-full border border-gray-200 hover:border-stra-teal hover:text-stra-teal transition-colors text-sm">{b}</Link>
          ))}
        </div>
      </section>
    </div>
  );
}
