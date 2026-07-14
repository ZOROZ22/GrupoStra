import { Link } from "react-router";
import { Search } from "lucide-react";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="size-24 mx-auto rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6">
          <Search className="size-10 text-stra-teal" />
        </div>
        <h1 className="text-6xl font-bold text-stra-navy mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Página não encontrada</h2>
        <p className="text-gray-500 mb-8">A página que você está procurando pode ter sido removida, mudado de nome ou está temporariamente indisponível.</p>
        <Link to="/">
          <Button size="lg" className="bg-stra-teal hover:bg-stra-teal-dark font-bold px-8 h-12 rounded-xl text-white">
            Voltar para a página inicial
          </Button>
        </Link>
      </div>
    </div>
  );
}
