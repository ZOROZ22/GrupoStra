import { Link, useNavigate } from "react-router";
import { ShoppingCart, Heart, ArrowUpRight } from "lucide-react";
import { Product, formatBRL } from "../data/catalog";
import { useStore } from "../store";
import { Button } from "./ui/button";
import { toast } from "sonner";

export function ProductCard({ product, hidePrice: forceHidePrice }: { product: Product, hidePrice?: boolean }) {
  const { addToCart, addToQuote, toggleFavorite, isFavorite, user } = useStore();
  const navigate = useNavigate();
  const fav = isFavorite(product.id);
  
  const showPrice = !forceHidePrice && user;

  return (
    <article className="group relative bg-white rounded-2xl overflow-hidden h-full flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_25px_80px_-20px_rgba(62,189,177,0.18)] transition-all duration-500">
      
      {/* Subtle Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-stra-teal/40 group-hover:via-stra-blue/30 group-hover:to-stra-teal/40 transition-all duration-700 z-0 pointer-events-none">
        <div className="w-full h-full rounded-[15px] bg-white"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Imagem Area */}
        <div className="relative h-64 overflow-hidden bg-white">
          <Link to={`/produto/${product.slug}`} className="absolute inset-0 z-10">
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </div>
          </Link>

          {product.badge && (
            <div className="absolute top-4 left-4 z-20">
              <span className="inline-block bg-stra-teal text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                {product.badge}
              </span>
            </div>
          )}
          
          <button
            onClick={(e) => { 
              e.preventDefault(); 
              toggleFavorite(product.id); 
              toast.success(fav ? "Removido dos favoritos" : "Adicionado aos favoritos"); 
            }}
            className="absolute top-4 right-4 z-20 size-9 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-gray-100 flex items-center justify-center hover:scale-110 transition-all duration-300"
            aria-label="Favoritar"
          >
            <Heart className={`size-4 transition-colors ${fav ? "fill-stra-red text-stra-red" : "text-gray-400 hover:text-stra-red"}`} />
          </button>
          
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700" 
          />
          
          {/* Bottom fade for seamless transition */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Conteúdo Area */}
        <div className="p-7 pt-2 flex flex-col flex-1 bg-white relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-stra-teal">{product.brand}</span>
            <span className="size-1 rounded-full bg-gray-200"></span>
            <span className="text-[11px] text-gray-400 uppercase tracking-widest">{product.segment}</span>
          </div>
          
          <Link 
            to={`/produto/${product.slug}`} 
            className="text-lg font-bold text-stra-navy mb-4 group-hover:text-stra-teal transition-colors duration-300 line-clamp-2"
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
                    <Button className="flex-1 bg-stra-navy hover:bg-stra-navy/90 rounded-xl h-11 font-bold shadow-md shadow-stra-navy/10" onClick={() => { addToQuote(product); toast.success("Adicionado à cotação"); }}>
                      Cotação
                    </Button>
                  ) : (
                    <Button className="flex-1 bg-stra-teal hover:bg-stra-teal-dark rounded-xl h-11 font-bold shadow-md shadow-stra-teal/20 gap-2" onClick={() => { addToCart(product); toast.success("Adicionado ao carrinho"); }}>
                      <ShoppingCart className="size-4" /> Comprar
                    </Button>
                  )}
                </div>
              </>
            ) : (
              <div 
                className="flex items-center justify-between cursor-pointer pt-2 mt-2 border-t border-gray-50"
                onClick={() => navigate(`/produto/${product.slug}`)}
              >
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-stra-navy transition-colors">
                  Ver Detalhes
                </span>
                <div className="size-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-stra-teal group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-stra-teal/20">
                  <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
