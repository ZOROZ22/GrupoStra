import { useState, useMemo } from "react";
import { useSearchParams } from "react-router";
import { Search, Filter, SlidersHorizontal, PackageSearch } from "lucide-react";
import { PRODUCTS, SEGMENTS, BRANDS } from "../data/catalog";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/ui/button";

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  const q = params.get("q") || "";
  const segmentFilt = params.get("segment")?.split(",").filter(Boolean) || [];
  const brandFilt = params.get("brand")?.split(",").filter(Boolean) || [];

  const updateFilt = (key: "segment" | "brand", val: string, isChecked: boolean) => {
    const current = params.get(key)?.split(",").filter(Boolean) || [];
    const next = isChecked ? [...current, val] : current.filter((v) => v !== val);
    if (next.length > 0) params.set(key, next.join(","));
    else params.delete(key);
    setParams(params);
  };

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.brand.toLowerCase().includes(q.toLowerCase()) ||
        p.short.toLowerCase().includes(q.toLowerCase());

      const matchSeg = segmentFilt.length === 0 || segmentFilt.includes(p.segment);
      const matchBrand = brandFilt.length === 0 || brandFilt.includes(p.brand);

      return matchQ && matchSeg && matchBrand;
    });
  }, [q, segmentFilt, brandFilt]);

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header da Loja */}
      <div className="bg-stra-navy text-white pt-12 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://cdn.shopify.com/s/files/1/0534/2812/5857/files/bg1.jpg?v=1720721290')] opacity-10 bg-cover bg-center" />
        <div className="max-w-[1280px] mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Catálogo de Produtos</h1>
          
          {/* Barra de Busca Grande */}
          <div className="bg-white rounded-2xl shadow-xl p-2 flex items-center max-w-3xl focus-within:ring-4 focus-within:ring-stra-teal/30 transition-all">
            <Search className="size-6 text-gray-400 ml-4 mr-2" />
            <input
              value={q}
              onChange={(e) => {
                if (e.target.value) params.set("q", e.target.value);
                else params.delete("q");
                setParams(params);
              }}
              placeholder="Buscar por nome, marca, SKU ou descrição..."
              className="flex-1 px-2 py-4 outline-none text-gray-800 text-lg bg-transparent"
            />
            {q && (
              <button 
                onClick={() => { params.delete("q"); setParams(params); }}
                className="text-gray-400 hover:text-stra-navy px-4 font-medium"
              >
                Limpar
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 -mt-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className={`lg:w-72 shrink-0 space-y-6 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-fit ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <Filter className="size-5 text-stra-teal" />
              <h2 className="font-bold text-stra-navy text-lg">Filtros</h2>
            </div>
            
            <div>
              <h3 className="font-semibold text-stra-navy mb-4">Segmentos</h3>
              <div className="space-y-3">
                {SEGMENTS.map((s) => (
                  <label key={s.name} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={segmentFilt.includes(s.name)}
                        onChange={(e) => updateFilt("segment", s.name, e.target.checked)}
                        className="peer sr-only"
                      />
                      <div className="size-5 rounded-md border-2 border-gray-300 peer-checked:border-stra-teal peer-checked:bg-stra-teal transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 peer-checked:opacity-100 transition-opacity">
                        <svg className="size-3.5" viewBox="0 0 14 14" fill="none">
                          <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-gray-600 group-hover:text-stra-navy transition-colors">{s.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h3 className="font-semibold text-stra-navy mb-4">Marcas</h3>
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
                {BRANDS.map((b) => (
                  <label key={b} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={brandFilt.includes(b)}
                        onChange={(e) => updateFilt("brand", b, e.target.checked)}
                        className="peer sr-only"
                      />
                      <div className="size-5 rounded-md border-2 border-gray-300 peer-checked:border-stra-navy peer-checked:bg-stra-navy transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 peer-checked:opacity-100 transition-opacity">
                        <svg className="size-3.5" viewBox="0 0 14 14" fill="none">
                          <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-gray-600 group-hover:text-stra-navy transition-colors">{b}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {(segmentFilt.length > 0 || brandFilt.length > 0) && (
              <Button 
                variant="outline" 
                className="w-full mt-4 border-gray-200 text-gray-600 hover:text-stra-navy"
                onClick={() => { params.delete("segment"); params.delete("brand"); setParams(params); }}
              >
                Limpar filtros
              </Button>
            )}
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 text-gray-600 font-medium">
                <PackageSearch className="size-5 text-stra-teal" />
                <span className="text-stra-navy font-bold">{filtered.length}</span> produtos encontrados
              </div>
              
              <Button 
                variant="outline" 
                className="lg:hidden gap-2 border-gray-200"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="size-4" /> Filtros
              </Button>
            </div>

            {filtered.length > 0 ? (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-16 text-center shadow-sm border border-gray-100">
                <div className="size-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <Search className="size-8 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-stra-navy mb-2">Nenhum produto encontrado</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Não encontramos resultados para sua busca atual. Tente remover alguns filtros ou buscar por termos mais genéricos.
                </p>
                <Button 
                  className="mt-8 bg-stra-teal hover:bg-stra-teal-dark px-8"
                  onClick={() => { setParams(new URLSearchParams()); }}
                >
                  Limpar busca e filtros
                </Button>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
