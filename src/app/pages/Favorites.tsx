import { Link } from "react-router";
import { Heart } from "lucide-react";
import { useStore } from "../store";
import { PRODUCTS } from "../data/catalog";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/ui/button";

export default function Favorites() {
  const { favorites } = useStore();
  const items = PRODUCTS.filter((p) => favorites.includes(p.id));

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-10">
      <h1 className="text-stra-navy mb-2">Meus favoritos</h1>
      <p className="text-gray-500 mb-8">Produtos que você salvou para depois.</p>

      {items.length === 0 ? (
        <div className="py-20 text-center">
          <Heart className="size-16 mx-auto text-gray-300" />
          <p className="text-gray-500 mt-4">Você ainda não favoritou nenhum produto.</p>
          <Link to="/loja"><Button className="mt-6">Explorar catálogo</Button></Link>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
