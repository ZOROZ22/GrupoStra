import { Link, useNavigate, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Search, ShoppingCart, User, Menu, FileText, X, Heart, MapPin, Phone, ArrowRight } from "lucide-react";
import { COMPANY, SEGMENTS, PRODUCTS } from "../../data/catalog";
import { useStore } from "../../store";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function Header() {
  const { cart, quote, user, favorites } = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const results = q.length > 1 ? PRODUCTS.filter((p) => (p.name + p.brand).toLowerCase().includes(q.toLowerCase())).slice(0, 5) : [];

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/70 backdrop-blur-2xl shadow-[0_8px_32px_rgb(0,0,0,0.04)] border-b border-gray-200/30' : 'bg-white border-b border-gray-100'}`}>
      {/* Top utility bar - Hidden on scroll for a cleaner look */}
      <div className={`bg-stra-navy text-white text-[13px] transition-all duration-300 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-9 opacity-100'}`}>
        <div className="max-w-[1280px] mx-auto px-4 h-full flex items-center justify-between">
          <span className="hidden sm:flex items-center gap-1.5 opacity-80"><MapPin className="size-3.5" /> {COMPANY.address}</span>
          <div className="flex items-center gap-6 ml-auto">
            <span className="flex items-center gap-1.5 opacity-80"><Phone className="size-3.5" /> {COMPANY.phone}</span>
            <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" className="font-medium text-stra-teal-light hover:text-white transition-colors flex items-center gap-1.5">
              Falar com especialista <ArrowRight className="size-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 h-20 flex items-center gap-4 lg:gap-8">
        <Link to="/" className="shrink-0 flex items-center">
          <img src={COMPANY.logo} alt="Grupo Stra" className="h-10 object-contain" />
        </Link>

        {/* Global Search */}
        <div className="relative flex-1 max-w-2xl hidden md:block group">
          <div className="flex items-center bg-gray-50/50 border border-gray-200/80 rounded-2xl px-4 h-12 focus-within:border-stra-teal focus-within:bg-white focus-within:ring-4 focus-within:ring-stra-teal/10 transition-all">
            <Search className="size-4.5 text-gray-400 group-focus-within:text-stra-teal" />
            <input
              value={q}
              onChange={(e) => { setQ(e.target.value); setOpen(true); }}
              onKeyDown={(e) => { if (e.key === "Enter") { navigate(`/loja?q=${q}`); setOpen(false); } }}
              placeholder="Pesquisar equipamentos, marcas, reagentes..."
              className="flex-1 bg-transparent outline-none px-3 text-sm text-gray-700 placeholder:text-gray-400 font-medium"
            />
          </div>
          
          {/* Search Dropdown */}
          {open && results.length > 0 && (
            <>
              <div className="fixed inset-0 z-40 bg-black/5" onClick={() => setOpen(false)} />
              <div className="absolute top-14 left-0 right-0 z-50 bg-white border border-gray-100 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-2">
                  <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Produtos Sugeridos</div>
                  {results.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => { navigate(`/produto/${p.slug}`); setOpen(false); setQ(""); }}
                      className="w-full flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl text-left group/item transition-colors"
                    >
                      <div className="size-12 rounded-lg bg-white border border-gray-100 p-1 shrink-0 flex items-center justify-center">
                        <img src={p.images[0]} alt="" className="max-w-full max-h-full object-contain" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold uppercase tracking-wider text-stra-teal mb-0.5">{p.brand}</p>
                        <p className="text-sm font-semibold text-stra-navy truncate group-hover/item:text-stra-teal transition-colors">{p.name}</p>
                      </div>
                    </button>
                  ))}
                  <button 
                    onClick={() => { navigate(`/loja?q=${q}`); setOpen(false); }}
                    className="w-full mt-2 p-3 text-sm font-bold text-stra-navy bg-gray-50 hover:bg-stra-teal/5 hover:text-stra-teal rounded-xl transition-colors text-center"
                  >
                    Ver todos os resultados
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5 ml-auto">
          <Link to="/cotacao" className="hidden lg:block">
            <Button variant="ghost" className="relative gap-2 font-medium text-gray-600 hover:text-stra-navy hover:bg-gray-100/50 rounded-xl h-11 px-4">
              <FileText className="size-5" />
              <span>Cotações</span>
              {quote.length > 0 && <Badge className="absolute top-1.5 right-1.5 size-5 p-0 flex items-center justify-center bg-stra-orange border-2 border-white">{quote.length}</Badge>}
            </Button>
          </Link>
          
          <Link to="/favoritos" className="hidden sm:block">
            <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-stra-navy hover:bg-gray-100/50 rounded-xl size-11">
              <Heart className="size-5" />
              {favorites.length > 0 && <Badge className="absolute top-1.5 right-1.5 size-4 p-0 flex items-center justify-center bg-stra-red border-2 border-white text-[10px]">{favorites.length}</Badge>}
            </Button>
          </Link>
          
          <Link to={user ? "/painel" : "/entrar"}>
            <Button variant="ghost" className="gap-2 font-medium text-gray-600 hover:text-stra-navy hover:bg-gray-100/50 rounded-xl h-11 px-3 sm:px-4">
              <div className="size-7 rounded-full bg-gray-100 flex items-center justify-center text-stra-navy shrink-0">
                <User className="size-4" />
              </div>
              <span className="hidden lg:inline">{user ? user.name.split(" ")[0] : "Entrar / Cadastrar"}</span>
            </Button>
          </Link>
          
          <Link to="/carrinho" className="ml-1">
            <Button className="relative gap-2 bg-stra-navy hover:bg-stra-navy/90 text-white rounded-xl h-11 px-4 shadow-sm shadow-stra-navy/10">
              <ShoppingCart className="size-5" />
              <span className="hidden sm:inline font-bold">Carrinho</span>
              {cartCount > 0 && <Badge className="absolute -top-1.5 -right-1.5 size-5 p-0 flex items-center justify-center bg-stra-teal border-2 border-white text-white">{cartCount}</Badge>}
            </Button>
          </Link>

          <Button variant="ghost" size="icon" className="md:hidden ml-1 text-gray-600 rounded-xl size-11 hover:bg-gray-100/50" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
      </div>

      {/* Main Navigation - Desktop */}
      <nav className="hidden md:block border-t border-gray-100/50">
        <div className="max-w-[1280px] mx-auto px-4 h-12 flex items-center gap-8 text-sm font-semibold text-gray-600">
          <Link to="/loja" className="hover:text-stra-teal transition-colors">Catálogo Completo</Link>
          <div className="w-px h-4 bg-gray-200" />
          {SEGMENTS.map((s) => (
            <Link key={s.id} to={`/segmento/${s.id}`} className="hover:text-stra-teal transition-colors flex items-center gap-2">
              <span className="text-[16px]">{s.icon}</span> {s.name}
            </Link>
          ))}
          <div className="flex-1" />
          <Link to="/sobre" className="hover:text-stra-teal transition-colors">O Grupo</Link>
          <Link to="/blog" className="hover:text-stra-teal transition-colors">Stra Academy</Link>
          <Link to="/contato" className="hover:text-stra-teal transition-colors">Contato</Link>
          {user?.role === "admin" && (
            <Link to="/admin" className="ml-4 text-stra-teal hover:text-stra-teal-dark bg-stra-teal/10 px-3 py-1.5 rounded-lg transition-colors">Painel Admin</Link>
          )}
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl overflow-y-auto max-h-[calc(100vh-80px)] animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-4 space-y-2 font-medium">
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 h-12 focus-within:border-stra-teal focus-within:bg-white mb-6">
              <Search className="size-4.5 text-gray-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { navigate(`/loja?q=${q}`); setMobileOpen(false); } }}
                placeholder="Buscar produtos..."
                className="flex-1 bg-transparent outline-none px-3 text-sm"
              />
            </div>
            
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4 px-2">Departamentos</p>
            <Link to="/loja" className="block py-3 px-2 text-stra-navy hover:bg-gray-50 rounded-xl">Catálogo Completo</Link>
            {SEGMENTS.map((s) => (
              <Link key={s.id} to={`/segmento/${s.id}`} className="flex items-center gap-3 py-3 px-2 text-gray-600 hover:bg-gray-50 hover:text-stra-teal rounded-xl">
                <span className="text-xl">{s.icon}</span> {s.name}
              </Link>
            ))}
            
            <div className="h-px bg-gray-100 my-4" />
            
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Institucional</p>
            <Link to="/sobre" className="block py-3 px-2 text-gray-600 hover:bg-gray-50 rounded-xl">O Grupo Stra</Link>
            <Link to="/blog" className="block py-3 px-2 text-gray-600 hover:bg-gray-50 rounded-xl">Stra Academy & Blog</Link>
            <Link to="/contato" className="block py-3 px-2 text-gray-600 hover:bg-gray-50 rounded-xl">Fale Conosco</Link>
            
            <div className="h-px bg-gray-100 my-4" />
            
            <Link to="/favoritos" className="flex items-center gap-3 py-3 px-2 text-gray-600 hover:bg-gray-50 rounded-xl">
              <Heart className="size-5" /> Meus Favoritos
            </Link>
            <Link to="/cotacao" className="flex items-center gap-3 py-3 px-2 text-gray-600 hover:bg-gray-50 rounded-xl">
              <FileText className="size-5" /> Cotações Salvas
            </Link>
            
            {user?.role === "admin" && (
              <Link to="/admin" className="block mt-4 py-3 px-4 bg-stra-teal/10 text-stra-teal text-center rounded-xl font-bold">
                Acessar Painel Administrativo
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
