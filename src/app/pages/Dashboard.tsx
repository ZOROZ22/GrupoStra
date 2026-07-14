import { useNavigate, useParams, Link } from "react-router";
import { Package, FileText, Heart, User as UserIcon, MapPin, LogOut, CheckCircle2, Clock, XCircle, PlaySquare, RotateCcw, Truck } from "lucide-react";
import { useStore } from "../store";
import { ORDERS, QUOTES } from "../data/crm";
import { PRODUCTS, VIDEOS, formatBRL } from "../data/catalog";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ProductCard } from "../components/ProductCard";

const TABS = [
  { id: "visao", label: "Visão geral", icon: Package },
  { id: "pedidos", label: "Meus pedidos", icon: Package },
  { id: "recorrentes", label: "Pedidos Recorrentes", icon: RotateCcw },
  { id: "cotacoes", label: "Cotações", icon: FileText },
  { id: "favoritos", label: "Favoritos", icon: Heart },
  { id: "academy", label: "Stra Academy", icon: PlaySquare },
  { id: "perfil", label: "Perfil", icon: UserIcon },
  { id: "enderecos", label: "Endereços", icon: MapPin },
];

const statusColor: Record<string, string> = {
  Entregue: "bg-stra-green text-white", Enviado: "bg-stra-teal text-white",
  "Em separação": "bg-stra-gold text-white", "Aguardando pagamento": "bg-stra-orange text-white", Cancelado: "bg-stra-red text-white",
};

export default function Dashboard() {
  const { user, logout, favorites } = useStore();
  const navigate = useNavigate();
  const { tab: tabParam } = useParams();
  const tab = TABS.some((t) => t.id === tabParam) ? tabParam! : "visao";
  const setTab = (id: string) => navigate(`/painel/${id}`);

  if (!user) {
    return (
      <div className="max-w-[600px] mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-stra-navy mb-4">Acesse seu painel</h1>
        <p className="text-gray-600 mb-8">Faça login para ver preços, pedidos e acessar a plataforma Stra Academy.</p>
        <Button size="lg" className="bg-stra-teal hover:bg-stra-teal-dark px-8 h-12" onClick={() => navigate("/entrar")}>Entrar na minha conta</Button>
      </div>
    );
  }

  const crmBadge = () => {
    if (user.crmStatus === "aprovado") return <span className="flex items-center gap-1.5 text-stra-green font-medium"><CheckCircle2 className="size-4" /> CRM Aprovado</span>;
    if (user.crmStatus === "pendente") return <span className="flex items-center gap-1.5 text-stra-orange font-medium"><Clock className="size-4" /> Em Análise</span>;
    if (user.crmStatus === "rejeitado") return <span className="flex items-center gap-1.5 text-stra-red font-medium"><XCircle className="size-4" /> Rejeitado</span>;
    return null;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4 py-10 grid lg:grid-cols-[260px_1fr] gap-8">
        
        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm flex flex-col items-center text-center">
            <div className="size-16 rounded-full bg-stra-teal text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-md shadow-stra-teal/20">
              {user.name[0].toUpperCase()}
            </div>
            <p className="text-stra-navy font-bold text-lg">{user.name}</p>
            <p className="text-sm text-gray-500 mb-3">{user.accountType}</p>
            <div className="text-sm bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{crmBadge()}</div>
          </div>
          
          <nav className="space-y-1 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm">
            {TABS.map((t) => (
              <button 
                key={t.id} 
                onClick={() => setTab(t.id)} 
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  tab === t.id ? "bg-stra-teal text-white shadow-md shadow-stra-teal/20" : "hover:bg-gray-50 text-gray-600 hover:text-stra-navy"
                }`}
              >
                <t.icon className={`size-4.5 ${tab === t.id ? "text-white" : "text-gray-400"}`} /> {t.label}
              </button>
            ))}
            <div className="pt-3 mt-3 border-t border-gray-100">
              <button 
                onClick={() => { logout(); navigate("/"); }} 
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-stra-red hover:bg-red-50 transition-colors"
              >
                <LogOut className="size-4.5" /> Sair da conta
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="pb-20">
          {tab === "visao" && (
            <div className="space-y-8">
              <div className="flex items-end justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-stra-navy">Bem-vindo(a), {user.name.split(" ")[0]}!</h1>
                  <p className="text-gray-500 mt-1">Aqui está o resumo da sua conta.</p>
                </div>
              </div>
              
              <div className="grid sm:grid-cols-4 gap-4">
                {[
                  { l: "Pedidos", v: ORDERS.length, icon: Package }, 
                  { l: "Cotações", v: QUOTES.length, icon: FileText }, 
                  { l: "Favoritos", v: favorites.length, icon: Heart },
                  { l: "Treinos", v: 4, icon: PlaySquare }
                ].map((item) => (
                  <div key={item.l} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm flex flex-col">
                    <div className="flex items-center gap-3 text-gray-500 mb-2">
                      <item.icon className="size-5" />
                      <span className="text-sm font-medium">{item.l}</span>
                    </div>
                    <p className="text-stra-navy text-3xl font-bold">{item.v}</p>
                  </div>
                ))}
              </div>

              {/* Recomendados */}
              <div>
                <h3 className="text-xl font-bold text-stra-navy mb-4">Recomendados para você</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {PRODUCTS.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stra-navy mb-4">Últimos pedidos</h3>
                <div className="rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-sm">
                  {ORDERS.slice(0, 3).map((o) => (
                    <div key={o.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-b border-gray-50 last:border-0 gap-4">
                      <div>
                        <p className="text-stra-navy font-bold">{o.id}</p>
                        <p className="text-sm text-gray-500">{o.date}</p>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-6 flex-1">
                        <Badge className={`${statusColor[o.status]} px-3 py-1`}>{o.status}</Badge>
                        <span className="text-stra-navy font-bold text-lg">{formatBRL(o.total)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === "pedidos" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-stra-navy">Meus pedidos</h1>
              <div className="space-y-4">
                {ORDERS.map((o) => (
                  <div key={o.id} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-gray-100">
                      <div>
                        <p className="text-stra-navy font-bold text-lg">{o.id}</p>
                        <p className="text-sm text-gray-500">{o.date}</p>
                      </div>
                      <Badge className={`${statusColor[o.status]} px-3 py-1 text-sm`}>{o.status}</Badge>
                    </div>
                    <div className="space-y-2 mb-4">
                      {o.items.map((it) => (
                        <div key={it.name} className="flex justify-between text-sm text-gray-600">
                          <span>{it.qty}× {it.name}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      {o.tracking ? 
                        <span className="text-sm font-medium text-stra-teal flex items-center gap-1.5"><Truck className="size-4" /> Rastreio: {o.tracking}</span> : 
                        <span className="text-sm text-gray-400">Sem rastreio disponível</span>
                      }
                      <span className="text-stra-navy font-bold text-xl">{formatBRL(o.total)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "recorrentes" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stra-navy">Pedidos Recorrentes</h1>
                <Button className="bg-stra-teal hover:bg-stra-teal-dark">Nova Recorrência</Button>
              </div>
              <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm flex items-start gap-4">
                <div className="size-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <RotateCcw className="size-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-bold text-stra-navy">Kit GynoPrep Coleta 20mL × 50un</p>
                      <p className="text-sm text-gray-500">Frequência: Mensal</p>
                    </div>
                    <Badge variant="outline" className="text-stra-teal border-stra-teal">Ativo</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Próxima entrega: 20/07 — R$ 325,00</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Pausar</Button>
                    <Button variant="outline" size="sm">Editar</Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === "cotacoes" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-stra-navy">Minhas cotações</h1>
              <div className="rounded-2xl border border-gray-100 overflow-hidden bg-white shadow-sm">
                {QUOTES.map((q) => (
                  <div key={q.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-gray-50 last:border-0 gap-4">
                    <div>
                      <p className="text-stra-navy font-bold">{q.product}</p>
                      <p className="text-sm text-gray-500 mt-1">Ref: {q.id} · {q.date} · {q.qty} un.</p>
                    </div>
                    <Badge variant="outline" className="px-3 py-1 font-medium">{q.status}</Badge>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "favoritos" && <FavoritesTab />}

          {tab === "academy" && (
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-stra-navy flex items-center gap-3">
                  <PlaySquare className="size-8 text-stra-purple" /> Stra Academy
                </h1>
                <p className="text-gray-500 mt-2">Aprenda a utilizar nossos equipamentos com especialistas.</p>
              </div>

              <div className="bg-stra-navy rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-stra-purple/20 blur-3xl rounded-full" />
                <div className="relative z-10 flex-1">
                  <Badge className="bg-stra-purple hover:bg-stra-purple mb-4">Em Destaque</Badge>
                  <h2 className="text-3xl font-bold mb-3">Dominando o iPonatic II PoCT</h2>
                  <p className="text-white/80 mb-6">Aprenda a configurar e processar amostras na plataforma molecular portátil da Sansure.</p>
                  <Button className="bg-white text-stra-navy hover:bg-gray-100 h-12 px-8 rounded-xl font-bold">Assistir Agora</Button>
                </div>
                <div className="relative z-10 w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                  <iframe src={`${VIDEOS.youtubeSansure}?rel=0`} title="StraAcademy Video" className="size-full" allowFullScreen />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-stra-navy mb-6">Trilhas de Conhecimento</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { t: "Intubação e Vias Aéreas", m: "Scope Medical", d: "4 vídeos" },
                    { t: "Citologia em Meio Líquido", m: "GynoPrep", d: "3 vídeos" },
                    { t: "Diagnóstico Molecular", m: "Sansure", d: "6 vídeos" },
                  ].map(v => (
                    <div key={v.t} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm cursor-pointer hover:border-stra-teal transition-colors">
                      <div className="size-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4">
                        <PlaySquare className="size-6 text-gray-400" />
                      </div>
                      <h4 className="font-bold text-stra-navy">{v.t}</h4>
                      <p className="text-sm text-gray-500 mt-1">{v.m} · {v.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === "perfil" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-stra-navy">Meu perfil</h1>
              <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm space-y-4 max-w-2xl">
                <div className="grid sm:grid-cols-2 gap-4 pb-4 border-b border-gray-50">
                  <div><span className="text-sm text-gray-500 block mb-1">Nome</span><span className="font-medium text-stra-navy">{user.name}</span></div>
                  <div><span className="text-sm text-gray-500 block mb-1">E-mail</span><span className="font-medium text-stra-navy">{user.email}</span></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 pb-4 border-b border-gray-50">
                  <div><span className="text-sm text-gray-500 block mb-1">Tipo de Conta</span><span className="font-medium text-stra-navy">{user.accountType}</span></div>
                  {user.council && <div><span className="text-sm text-gray-500 block mb-1">Conselho</span><span className="font-medium text-stra-navy">{user.council}</span></div>}
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm text-gray-500">Status validação</span>
                  <div className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{crmBadge()}</div>
                </div>
                <div className="pt-4 flex">
                  <Button variant="outline" className="border-gray-200">Editar dados</Button>
                </div>
              </div>
            </div>
          )}

          {tab === "enderecos" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-stra-navy">Endereços</h1>
              <div className="p-6 rounded-2xl border border-stra-teal bg-stra-teal/5 max-w-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold text-stra-navy flex items-center gap-2"><MapPin className="size-4" /> Endereço Principal</p>
                  <Badge className="bg-stra-teal hover:bg-stra-teal text-white">Padrão</Badge>
                </div>
                <p className="text-gray-600 mt-2 leading-relaxed">Rua Dom Sebastião 617, Bairro Vila Real<br />Balneário Camboriú, SC<br />CEP: 88337-110</p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" className="bg-white">Editar</Button>
                </div>
              </div>
              <Button variant="outline" className="border-dashed border-2 border-gray-300 text-gray-500 hover:border-stra-teal hover:text-stra-teal h-14 rounded-xl max-w-lg w-full">
                + Adicionar novo endereço
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function FavoritesTab() {
  const { favorites } = useStore();
  const items = PRODUCTS.filter((p) => favorites.includes(p.id));
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-stra-navy">Meus Favoritos</h1>
      {items.length === 0 ? (
        <div className="py-20 text-center bg-white rounded-3xl border border-gray-100 shadow-sm">
          <div className="size-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="size-8 text-gray-300" />
          </div>
          <h3 className="text-xl font-bold text-stra-navy mb-2">Nenhum favorito ainda</h3>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">Você ainda não salvou nenhum produto. Explore o catálogo para encontrar os produtos ideais para você.</p>
          <Link to="/loja"><Button size="lg" className="bg-stra-teal hover:bg-stra-teal-dark rounded-xl">Explorar catálogo</Button></Link>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => <ProductCard key={p.id} product={p} hidePrice={false} />)}
        </div>
      )}
    </div>
  );
}
