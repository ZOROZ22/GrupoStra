import { Link } from "react-router";
import { useState } from "react";
import { FileText, Trash2, Check, ArrowRight, ShieldCheck, Building2, Send } from "lucide-react";
import { useStore } from "../store";
import { formatBRL } from "../data/catalog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function Quote() {
  const { quote, removeFromQuote, user } = useStore();
  const [sent, setSent] = useState(false);
  const [obs, setObs] = useState("");

  if (sent) {
    return (
      <div className="bg-gray-50 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center py-20 px-4">
        <div className="max-w-[600px] w-full bg-white rounded-3xl p-10 border border-gray-100 shadow-xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-stra-teal" />
          
          <div className="size-24 mx-auto rounded-full bg-stra-teal/10 flex items-center justify-center mb-6">
            <Check className="size-12 text-stra-teal" />
          </div>
          
          <h1 className="text-3xl font-bold text-stra-navy mb-4">Cotação Enviada!</h1>
          
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left border border-gray-100">
            <p className="text-gray-600 mb-2">Número da solicitação:</p>
            <p className="text-2xl font-bold text-stra-navy tracking-wider">REQ-{Math.floor(1000 + Math.random() * 9000)}</p>
            <p className="mt-4 text-sm text-gray-500">
              Nossa equipe comercial está analisando sua solicitação e responderá com as melhores condições e tabela de preços corporativa em até <strong>24h úteis</strong>.
            </p>
          </div>
          
          <Link to="/loja">
            <Button size="lg" className="w-full bg-stra-navy hover:bg-stra-navy/90 h-14 rounded-xl text-lg font-bold text-white shadow-md">
              Continuar navegando
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (quote.length === 0) {
    return (
      <div className="bg-gray-50 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center py-20 px-4">
        <div className="size-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
          <FileText className="size-10 text-gray-300" />
        </div>
        <h1 className="text-3xl font-bold text-stra-navy mb-4">Nenhum item na cotação</h1>
        <p className="text-gray-500 mb-8 max-w-md text-center">Adicione produtos do catálogo para solicitar preços especiais e condições B2B.</p>
        <Link to="/loja">
          <Button size="lg" className="bg-stra-teal hover:bg-stra-teal-dark px-8 h-14 rounded-xl text-lg font-bold shadow-md shadow-stra-teal/20 text-white gap-2">
            Explorar produtos <ArrowRight className="size-5" />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-80px)] py-12">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-stra-navy">Solicitação de Cotação</h1>
            <p className="text-gray-500 mt-2">Monte sua lista e receba propostas comerciais exclusivas para sua instituição.</p>
          </div>
          <div className="flex items-center gap-2 text-stra-teal font-medium bg-stra-teal/10 px-4 py-2 rounded-lg w-fit">
            <Building2 className="size-4" /> Venda Corporativa
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Lista de itens */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-stra-navy mb-6 pb-4 border-b border-gray-100">Itens Selecionados ({quote.length})</h3>
              
              <div className="space-y-6">
                {quote.map((item) => (
                  <div key={item.product.id} className="flex gap-6 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                    <Link to={`/produto/${item.product.slug}`} className="shrink-0 bg-gray-50 rounded-xl p-3 w-28 h-28 flex items-center justify-center border border-gray-100 hover:border-stra-teal transition-colors">
                      <img src={item.product.images[0]} alt={item.product.name} className="max-w-full max-h-full object-contain" />
                    </Link>
                    
                    <div className="flex-1 flex flex-col min-w-0">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-stra-teal mb-1">{item.product.brand}</p>
                          <Link to={`/produto/${item.product.slug}`} className="text-lg font-bold text-stra-navy hover:text-stra-teal transition-colors line-clamp-2">
                            {item.product.name}
                          </Link>
                        </div>
                        <button 
                          onClick={() => removeFromQuote(item.product.id)} 
                          className="text-gray-400 hover:text-stra-red p-2 bg-gray-50 hover:bg-red-50 rounded-lg transition-colors shrink-0"
                        >
                          <Trash2 className="size-5" />
                        </button>
                      </div>

                      <div className="mt-auto">
                        <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
                          <span className="text-sm text-gray-500 mr-2">Quantidade desejada:</span>
                          <span className="font-bold text-stra-navy">{item.qty} un</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Link to="/loja" className="inline-block">
              <Button variant="outline" className="border-gray-200 text-gray-600 hover:bg-white bg-transparent">
                + Adicionar mais produtos
              </Button>
            </Link>
          </div>

          {/* Formulário de Envio */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm sticky top-28">
              <h3 className="text-xl font-bold text-stra-navy mb-6 pb-4 border-b border-gray-100">Dados da Instituição</h3>
              
              <div className="space-y-5">
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-2 block">Nome / Instituição</Label>
                  <Input defaultValue={user?.name} className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white transition-colors" placeholder="Nome da clínica ou comprador" />
                </div>
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-2 block">E-mail corporativo</Label>
                  <Input defaultValue={user?.email} className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white transition-colors" type="email" placeholder="compras@empresa.com" />
                </div>
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-2 block">Telefone/WhatsApp</Label>
                  <Input className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white transition-colors" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-2 block">Observações (Opcional)</Label>
                  <textarea 
                    value={obs}
                    onChange={(e) => setObs(e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white outline-none min-h-[100px] resize-y text-sm"
                    placeholder="Especifique prazo de entrega desejado, necessidade de instalação, etc..."
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-stra-navy hover:bg-stra-navy/90 h-14 rounded-xl text-lg font-bold text-white shadow-md gap-2 mt-4"
                  onClick={() => setSent(true)}
                >
                  Solicitar Proposta <Send className="size-5" />
                </Button>

                <div className="flex items-start gap-3 mt-6 pt-6 border-t border-gray-100 text-xs text-gray-500 font-medium">
                  <ShieldCheck className="size-5 text-stra-teal shrink-0" />
                  <p>Suas informações estão seguras. Nossos consultores entrarão em contato exclusivamente para apresentar a proposta comercial.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
