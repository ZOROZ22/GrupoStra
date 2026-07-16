import { Link, useNavigate } from "react-router";
import { ShoppingCart, Heart, ArrowRight } from "lucide-react";
import { Product, formatBRL } from "../data/catalog";
import { useStore } from "../store";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { toast } from "sonner";

const badgeColor: Record<string, string> = {
  "Mais Vendido": "bg-stra-gold text-white border-transparent",
  Novo: "bg-stra-teal text-white border-transparent",
  "Sob Consulta": "bg-stra-navy text-white border-transparent",
};

export function ProductCard({ product, hidePrice: forceHidePrice }: { product: Product, hidePrice?: boolean }) {
  const { addToCart, addToQuote, toggleFavorite, isFavorite, user } = useStore();
  const navigate = useNavigate();
  const fav = isFavorite(product.id);
  
  const showPrice = !forceHidePrice && user;

  return (
    <div className="group flex flex-col bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden relative">
      
      {/* Imagem Area */}
      <Link to={`/produto/${product.slug}`} className="relative block aspect-[4/3] bg-gray-50/30 p-6 overflow-hidden">
        {/* Subtle glow behind product */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-1/2 bg-stra-teal/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {product.badge && (
          <Badge className={`absolute top-5 left-5 z-10 font-bold tracking-widest text-[10px] uppercase shadow-sm px-3 py-1 ${badgeColor[product.badge]}`}>
            {product.badge}
          </Badge>
        )}
        
        <button
          onClick={(e) => { 
            e.preventDefault(); 
            toggleFavorite(product.id); 
            toast.success(fav ? "Removido dos favoritos" : "Adicionado aos favoritos"); 
          }}
          className="absolute top-5 right-5 z-10 size-10 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-gray-100 flex items-center justify-center hover:scale-110 transition-all duration-300"
          aria-label="Favoritar"
        >
          <Heart className={`size-4.5 transition-colors ${fav ? "fill-stra-red text-stra-red" : "text-gray-400 hover:text-stra-red"}`} />
        </button>
        
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="size-full object-contain group-hover:scale-105 transition-transform duration-700 relative z-0" 
        />
      </Link>

      {/* Conteúdo Area */}
      <div className="p-6 flex flex-col flex-1 relative bg-white border-t border-gray-50">
        <p className="text-[11px] font-bold tracking-wider uppercase text-stra-teal mb-2.5">
          {product.brand} <span className="text-gray-300 mx-1.5">•</span> {product.segment}
        </p>
        
        <Link 
          to={`/produto/${product.slug}`} 
          className="text-lg font-bold text-stra-navy leading-tight line-clamp-2 hover:text-stra-teal transition-colors mb-4"
        >
          {product.name}
        </Link>
        
        <div className="mt-auto pt-4 flex flex-col gap-4">
          {showPrice ? (
            <>
              <div>
                <p className="text-stra-navy font-bold text-2xl tracking-tight">{formatBRL(product.price)}</p>
                {product.price !== null && product.price > 1000 && (
                  <p className="text-xs font-semibold text-gray-400 mt-1">em até 12x de {formatBRL(product.price / 12)}</p>
                )}
              </div>
              <div className="flex gap-2 w-full mt-2">
                {product.price === null ? (
                  <Button className="flex-1 bg-stra-navy hover:bg-stra-navy/90 rounded-xl h-12 shadow-md shadow-stra-navy/10 font-bold" onClick={() => { addToQuote(product); toast.success("Adicionado à cotação"); }}>
                    Cotação
                  </Button>
                ) : (
                  <Button className="flex-1 bg-stra-teal hover:bg-stra-teal-dark rounded-xl h-12 shadow-md shadow-stra-teal/20 gap-2 font-bold" onClick={() => { addToCart(product); toast.success("Adicionado ao carrinho"); }}>
                    <ShoppingCart className="size-4.5" /> Comprar
                  </Button>
                )}
              </div>
            </>
          ) : (
            <Button 
              variant="outline"
              className="w-full border-gray-200 text-stra-navy hover:border-stra-teal hover:bg-stra-teal/5 hover:text-stra-teal rounded-xl h-12 font-bold transition-all group/btn" 
              onClick={() => navigate(`/produto/${product.slug}`)}
            >
              Ver Detalhes <ArrowRight className="size-4.5 ml-2 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
