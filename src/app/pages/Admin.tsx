import { useState } from "react";
import { Users, Package, FileText, LayoutDashboard, Settings, Video, Search, Filter, MoreVertical, Plus, Edit2, CheckCircle, ShieldCheck } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";

const TABS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "clientes", label: "CRM & Clientes", icon: Users },
  { id: "pedidos", label: "Pedidos", icon: Package },
  { id: "produtos", label: "Produtos", icon: Package },
  { id: "cotacoes", label: "Cotações", icon: FileText },
  { id: "academy", label: "Stra Academy", icon: Video },
  { id: "configs", label: "Configurações", icon: Settings },
];

// Mock data para o CRM
const LEADS = [
  { id: "1", nome: "Dr. João Silva", email: "joao.silva@email.com", tipo: "Médico(a) Anestesiologista", conselho: "CRM-SP 112418", score: "Quente", faturamento: "R$ 500k - 1M", status: "Novo" },
  { id: "2", nome: "Hospital São Lucas", email: "compras@saolucas.com.br", tipo: "Hospital Privado", conselho: "CNPJ", score: "Quente", faturamento: "Acima 1M", status: "Em Contato" },
  { id: "3", nome: "Dra. Marina Alves", email: "marina.alves@email.com", tipo: "Médico(a) Ginecologista", conselho: "CRM-RJ 99887", score: "Médio", faturamento: "R$ 200k - 500k", status: "Novo" },
  { id: "4", nome: "Lab Análises Cito", email: "contato@citolab.com", tipo: "Laboratório", conselho: "CRBM", score: "Médio", faturamento: "R$ 50k - 200k", status: "Cotação" },
  { id: "5", nome: "Carlos Eduardo", email: "carlos@estudante.edu.br", tipo: "Estudante", conselho: "N/A", score: "Frio", faturamento: "Até 50k", status: "Aprovado" },
];

export default function Admin() {
  const [tab, setTab] = useState("dashboard");

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar Admin */}
      <aside className="w-64 bg-stra-navy text-white flex flex-col shrink-0 sticky top-0 h-screen overflow-y-auto hidden md:flex">
        <div className="p-6 border-b border-white/10">
          <img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Logo_GrupoStra_36a9bddc-fa61-46c6-bcab-d414f144d4a1.png?v=1783781064" alt="Grupo Stra" className="h-8 object-contain brightness-0 invert" />
          <div className="mt-4 flex items-center gap-2">
            <ShieldCheck className="size-4 text-stra-teal" />
            <span className="text-sm font-medium text-white/80">Painel Administrativo</span>
          </div>
        </div>
        <nav className="flex-1 py-4 px-3 space-y-1">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                tab === t.id ? "bg-stra-teal text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <t.icon className={`size-5 ${tab === t.id ? "text-white" : "text-white/50"}`} /> {t.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Admin Content */}
      <main className="flex-1 p-8 overflow-x-hidden">
        {tab === "dashboard" && <AdminDashboard />}
        {tab === "clientes" && <AdminCRM />}
        {(tab !== "dashboard" && tab !== "clientes") && (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <div className="size-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <Settings className="size-10 text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold text-stra-navy mb-2">Módulo em Desenvolvimento</h2>
            <p className="text-gray-500 max-w-md">As funcionalidades de gestão de {TABS.find(t=>t.id===tab)?.label.toLowerCase()} estarão disponíveis na próxima atualização.</p>
          </div>
        )}
      </main>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-stra-navy">Visão Geral</h1>
          <p className="text-gray-500 text-sm mt-1">Acompanhe os principais indicadores da plataforma.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-white">Exportar Relatório</Button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Vendas do Mês", value: "R$ 458.200", trend: "+12%", color: "text-stra-teal" },
          { label: "Novos Cadastros", value: "124", trend: "+5%", color: "text-stra-navy" },
          { label: "Leads Quentes", value: "32", trend: "+18%", color: "text-stra-orange" },
          { label: "Acessos Academy", value: "840", trend: "+24%", color: "text-stra-green" }
        ].map(k => (
          <div key={k.label} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-sm font-medium text-gray-500 mb-1">{k.label}</p>
            <div className="flex items-end justify-between">
              <p className={`text-2xl font-bold ${k.color}`}>{k.value}</p>
              <span className="text-xs font-bold text-stra-green bg-stra-green/10 px-2 py-1 rounded-md">{k.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Atividades Recentes */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-stra-navy mb-4">Pedidos Recentes</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                    <Package className="size-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="font-bold text-stra-navy text-sm">Pedido #{1000 + i}</p>
                    <p className="text-xs text-gray-500">Hospital São Lucas · 3 itens</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-stra-navy text-sm">R$ {(i * 4500).toLocaleString('pt-BR')}</p>
                  <Badge variant="outline" className="text-xs mt-1 bg-stra-orange/10 text-stra-orange border-transparent">Aguardando Pagamento</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status de CRM */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-stra-navy mb-4">Aprovações Pendentes</h3>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex flex-col gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-stra-navy text-sm">Dr. Médico {i}</p>
                    <p className="text-xs text-gray-500">CRM-SP 12345</p>
                  </div>
                  <Badge className="bg-stra-teal hover:bg-stra-teal">Verificar</Badge>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-2 text-stra-navy">Ver todas</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminCRM() {
  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-stra-navy">Gestão de Clientes (CRM)</h1>
          <p className="text-gray-500 text-sm mt-1">Qualificação e acompanhamento de leads e contas.</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-stra-teal hover:bg-stra-teal-dark gap-2"><Plus className="size-4" /> Novo Cliente</Button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2 flex-1 min-w-[200px]">
          <Search className="size-5 text-gray-400" />
          <Input placeholder="Buscar por nome, CRM, email..." className="border-0 shadow-none focus-visible:ring-0 p-0 h-auto" />
        </div>
        <div className="h-8 w-px bg-gray-200 hidden sm:block" />
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2 text-gray-600"><Filter className="size-4" /> Segmento</Button>
          <Button variant="outline" size="sm" className="gap-2 text-gray-600">Score</Button>
          <Button variant="outline" size="sm" className="gap-2 text-gray-600">Status</Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-bold">
                <th className="p-4">Cliente / Profissão</th>
                <th className="p-4">Conselho</th>
                <th className="p-4">Potencial (Faturamento)</th>
                <th className="p-4">Score</th>
                <th className="p-4">Status Comercial</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {LEADS.map(lead => (
                <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-4">
                    <p className="font-bold text-stra-navy">{lead.nome}</p>
                    <p className="text-xs text-gray-500">{lead.tipo}</p>
                    <p className="text-xs text-gray-400">{lead.email}</p>
                  </td>
                  <td className="p-4 text-sm font-medium text-gray-700">{lead.conselho}</td>
                  <td className="p-4 text-sm font-medium text-gray-700">{lead.faturamento}</td>
                  <td className="p-4">
                    <Badge className={
                      lead.score === 'Quente' ? 'bg-stra-green hover:bg-stra-green' : 
                      lead.score === 'Médio' ? 'bg-stra-orange hover:bg-stra-orange text-white' : 
                      'bg-gray-200 hover:bg-gray-200 text-gray-600'
                    }>{lead.score}</Badge>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-stra-navy bg-gray-100 px-2.5 py-1 rounded-md">
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-stra-teal"><Edit2 className="size-4" /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
          <span>Mostrando 5 de 124 leads</span>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" disabled>Anterior</Button>
            <Button variant="outline" size="sm">Próxima</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
