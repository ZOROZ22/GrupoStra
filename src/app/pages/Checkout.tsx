import { useState } from "react";
import { useNavigate } from "react-router";
import { Check, CreditCard, QrCode, FileText, Building2, Truck, ShieldCheck, ChevronRight, Lock } from "lucide-react";
import { useStore } from "../store";
import { formatBRL, volumeDiscount } from "../data/catalog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const STEPS = ["Identificação", "Entrega", "Pagamento", "Revisão"];

export default function Checkout() {
  const { cart, clearCart, user } = useStore();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  
  const [freight, setFreight] = useState("PAC");
  const [payment, setPayment] = useState("PIX");

  // Form states
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [doc, setDoc] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const subtotal = cart.reduce((s, i) => s + (i.product.price ?? 0) * i.qty * (1 - volumeDiscount(i.qty)), 0);
  const freightCost = freight === "Retirada" ? 0 : freight === "SEDEX" ? 59.9 : 39.9;
  const total = subtotal + freightCost;

  if (cart.length === 0 && step < 4) {
    return (
      <div className="bg-gray-50 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center py-20 px-4">
        <div className="size-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
          <Truck className="size-10 text-gray-300" />
        </div>
        <h1 className="text-3xl font-bold text-stra-navy mb-4">Seu carrinho está vazio</h1>
        <Button size="lg" className="bg-stra-teal hover:bg-stra-teal-dark px-8 h-14 rounded-xl text-lg font-bold" onClick={() => navigate("/loja")}>Ir para a loja</Button>
      </div>
    );
  }

  if (step === 4) {
    return (
      <div className="bg-gray-50 min-h-[calc(100vh-80px)] py-20 px-4">
        <div className="max-w-[600px] mx-auto bg-white rounded-3xl p-10 border border-gray-100 shadow-xl shadow-gray-200/50 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-stra-teal" />
          
          <div className="size-24 mx-auto rounded-full bg-stra-green/10 flex items-center justify-center mb-6 border-8 border-white shadow-sm">
            <Check className="size-10 text-stra-green" />
          </div>
          
          <h1 className="text-3xl font-bold text-stra-navy mb-4">Pedido Confirmado!</h1>
          
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
            <p className="text-gray-600 mb-2">Número do pedido:</p>
            <p className="text-2xl font-bold text-stra-navy tracking-wider">#{Math.floor(100000 + Math.random() * 900000)}</p>
            
            <div className="mt-6 pt-6 border-t border-gray-200 flex items-center gap-4">
              <div className="size-12 rounded-xl bg-white flex items-center justify-center border border-gray-200 shrink-0">
                {payment === 'PIX' ? <QrCode className="size-6 text-gray-400" /> : 
                 payment === 'Cartão' ? <CreditCard className="size-6 text-gray-400" /> : 
                 <FileText className="size-6 text-gray-400" />}
              </div>
              <div>
                <p className="font-bold text-stra-navy">Status do pagamento: Aguardando</p>
                <p className="text-sm text-gray-500">As instruções foram enviadas para {email}</p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-500 mb-8 max-w-sm mx-auto">Você receberá o rastreio por e-mail assim que o pedido for despachado. Previsão: 3-7 dias úteis.</p>
          
          <Button size="lg" className="w-full bg-stra-navy hover:bg-stra-navy/90 h-14 rounded-xl text-lg font-bold text-white shadow-md" onClick={() => navigate("/painel")}>
            Acompanhar pedido no painel
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-80px)] py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Header seguro */}
        <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-stra-navy">Finalizar Compra</h1>
          <div className="flex items-center gap-2 text-stra-green font-medium bg-stra-green/10 px-4 py-2 rounded-lg">
            <Lock className="size-4" /> Ambiente Seguro
          </div>
        </div>

        {/* stepper */}
        <div className="flex items-center justify-between mb-12 max-w-3xl mx-auto">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-2 relative z-10">
                <div className={`size-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 shadow-sm ${
                  i < step ? "bg-stra-teal text-white" : 
                  i === step ? "bg-stra-navy text-white ring-4 ring-stra-navy/20" : 
                  "bg-white border-2 border-gray-200 text-gray-400"
                }`}>
                  {i < step ? <Check className="size-5" /> : i + 1}
                </div>
                <span className={`absolute top-12 whitespace-nowrap text-xs font-medium ${i <= step ? "text-stra-navy" : "text-gray-400"}`}>
                  {s}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`flex-1 h-1 mx-4 rounded-full transition-colors duration-300 ${i < step ? "bg-stra-teal" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-10">
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              {step === 0 && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <h3 className="text-2xl font-bold text-stra-navy pb-4 border-b border-gray-100">1. Dados de Contato</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-sm font-semibold text-gray-700 mb-2 block">Nome completo</Label>
                      <Input className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white transition-colors" placeholder="Seu nome" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                      <Label className="text-sm font-semibold text-gray-700 mb-2 block">E-mail</Label>
                      <Input className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white transition-colors" type="email" placeholder="voce@email.com" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                      <Label className="text-sm font-semibold text-gray-700 mb-2 block">CPF / CNPJ</Label>
                      <Input className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white transition-colors" placeholder="000.000.000-00" value={doc} onChange={e => setDoc(e.target.value)} />
                    </div>
                    <div>
                      <Label className="text-sm font-semibold text-gray-700 mb-2 block">Telefone/WhatsApp</Label>
                      <Input className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white transition-colors" placeholder="(00) 00000-0000" value={phone} onChange={e => setPhone(e.target.value)} />
                    </div>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <h3 className="text-2xl font-bold text-stra-navy pb-4 border-b border-gray-100">2. Entrega</h3>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="sm:col-span-1">
                      <Label className="text-sm font-semibold text-gray-700 mb-2 block">CEP</Label>
                      <Input className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white transition-colors" placeholder="00000-000" value={cep} onChange={e => setCep(e.target.value)} />
                    </div>
                    <div className="sm:col-span-2">
                      <Label className="text-sm font-semibold text-gray-700 mb-2 block">Endereço</Label>
                      <Input className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white transition-colors" placeholder="Rua, avenida..." value={address} onChange={e => setAddress(e.target.value)} />
                    </div>
                    <div className="sm:col-span-2">
                      <Label className="text-sm font-semibold text-gray-700 mb-2 block">Cidade</Label>
                      <Input className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white transition-colors" placeholder="Sua cidade" value={city} onChange={e => setCity(e.target.value)} />
                    </div>
                    <div className="sm:col-span-1">
                      <Label className="text-sm font-semibold text-gray-700 mb-2 block">Estado</Label>
                      <Input className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white transition-colors" placeholder="UF" value={state} onChange={e => setState(e.target.value)} />
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <Label className="text-sm font-semibold text-stra-navy mb-4 block text-lg">Modalidade de frete</Label>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {[
                        { id: "PAC", price: "R$ 39,90", time: "5-7 dias úteis" },
                        { id: "SEDEX", price: "R$ 59,90", time: "2-3 dias úteis" },
                        { id: "Retirada", price: "Grátis", time: "Em Balneário Camboriú" }
                      ].map((f) => (
                        <button 
                          key={f.id} 
                          onClick={() => setFreight(f.id)} 
                          className={`relative p-4 rounded-xl border-2 text-left transition-all ${
                            freight === f.id ? "border-stra-teal bg-stra-teal/5 ring-1 ring-stra-teal" : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          {freight === f.id && <div className="absolute top-4 right-4 size-5 rounded-full bg-stra-teal flex items-center justify-center"><Check className="size-3 text-white" /></div>}
                          <p className="font-bold text-stra-navy mb-1">{f.id}</p>
                          <p className="text-stra-green font-semibold text-sm mb-1">{f.price}</p>
                          <p className="text-xs text-gray-500 font-medium">{f.time}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <h3 className="text-2xl font-bold text-stra-navy pb-4 border-b border-gray-100">3. Forma de Pagamento</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { id: "PIX", icon: QrCode, desc: "Aprovação imediata" }, 
                      { id: "Cartão", icon: CreditCard, desc: "Em até 12x sem juros" }, 
                      { id: "Boleto", icon: FileText, desc: "Vence em 3 dias" }, 
                      { id: "Faturamento", icon: Building2, desc: "Sujeito à análise" }
                    ].map((p) => (
                      <button 
                        key={p.id} 
                        onClick={() => setPayment(p.id)} 
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                          payment === p.id ? "border-stra-teal bg-stra-teal/5 ring-1 ring-stra-teal" : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className={`size-10 rounded-full flex items-center justify-center shrink-0 ${payment === p.id ? 'bg-stra-teal text-white' : 'bg-gray-100 text-gray-500'}`}>
                          <p.icon className="size-5" />
                        </div>
                        <div className="text-left">
                          <span className="font-bold text-stra-navy block">{p.id}</span>
                          <span className="text-xs text-gray-500 font-medium">{p.desc}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {payment === "Cartão" && (
                    <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                      <div className="sm:col-span-2">
                        <Label className="text-sm font-semibold text-gray-700 mb-2 block">Número do cartão</Label>
                        <Input className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white transition-colors" placeholder="0000 0000 0000 0000" />
                      </div>
                      <div className="sm:col-span-2">
                        <Label className="text-sm font-semibold text-gray-700 mb-2 block">Nome no cartão</Label>
                        <Input className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white transition-colors" placeholder="Como está impresso" />
                      </div>
                      <div>
                        <Label className="text-sm font-semibold text-gray-700 mb-2 block">Validade</Label>
                        <Input className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white transition-colors" placeholder="MM/AA" />
                      </div>
                      <div>
                        <Label className="text-sm font-semibold text-gray-700 mb-2 block">CVV</Label>
                        <Input className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white transition-colors" placeholder="123" type="password" maxLength={4} />
                      </div>
                      <div className="sm:col-span-2">
                        <Label className="text-sm font-semibold text-gray-700 mb-2 block">Parcelamento</Label>
                        <select className="w-full h-12 border-2 border-gray-200 rounded-xl px-4 text-gray-700 focus:border-stra-teal bg-gray-50 focus:bg-white outline-none transition-colors">
                          <option>1x de {formatBRL(total)} sem juros</option>
                          <option>2x de {formatBRL(total / 2)} sem juros</option>
                          <option>3x de {formatBRL(total / 3)} sem juros</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {payment === "PIX" && (
                    <div className="pt-6 border-t border-gray-100 flex gap-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <QrCode className="size-8 text-stra-teal shrink-0" />
                      <div>
                        <p className="font-bold text-stra-navy mb-1">Pagamento via PIX</p>
                        <p className="text-sm text-gray-600 leading-relaxed">O QR Code e a chave copia e cola serão gerados na próxima tela, após a confirmação do pedido.</p>
                      </div>
                    </div>
                  )}
                  
                  {payment === "Faturamento" && (
                    <div className="pt-6 border-t border-gray-100 flex gap-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <Building2 className="size-8 text-stra-teal shrink-0" />
                      <div>
                        <p className="font-bold text-stra-navy mb-1">Faturamento via CNPJ</p>
                        <p className="text-sm text-gray-600 leading-relaxed">Seu pedido passará por uma rápida análise de crédito. O boleto faturado será enviado junto com a nota fiscal.</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <h3 className="text-2xl font-bold text-stra-navy pb-4 border-b border-gray-100">4. Revisão e Confirmação</h3>
                  
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-4">
                    <h4 className="font-bold text-stra-navy text-sm uppercase tracking-wider mb-2">Itens do Pedido</h4>
                    {cart.map((i) => (
                      <div key={i.product.id} className="flex items-center gap-4 text-sm pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                        <img src={i.product.images[0]} alt="" className="size-12 object-contain bg-white rounded-md border border-gray-200 mix-blend-multiply" />
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-stra-navy truncate">{i.product.name}</p>
                          <p className="text-gray-500">Qtd: {i.qty}</p>
                        </div>
                        <span className="font-bold text-stra-navy whitespace-nowrap">{formatBRL((i.product.price ?? 0) * i.qty * (1 - volumeDiscount(i.qty)))}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-xl p-4">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Endereço de Entrega</p>
                      <p className="text-sm text-stra-navy font-medium">{address || "Rua Exemplo, 123"}</p>
                      <p className="text-sm text-gray-500">{city || "Cidade"} - {state || "UF"}</p>
                      <p className="text-sm text-stra-teal font-bold mt-2">Frete: {freight}</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-4">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Forma de Pagamento</p>
                      <p className="text-sm text-stra-navy font-bold flex items-center gap-2">
                        {payment === 'PIX' ? <QrCode className="size-4" /> : payment === 'Cartão' ? <CreditCard className="size-4" /> : <FileText className="size-4" />}
                        {payment}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">Você poderá alterar na próxima etapa caso falhe.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center px-2">
              <Button 
                variant="ghost" 
                className="text-gray-500 hover:text-stra-navy hover:bg-gray-200 font-medium px-6 h-12"
                onClick={() => (step === 0 ? navigate("/carrinho") : setStep(step - 1))}
              >
                Voltar
              </Button>
              <Button 
                size="lg"
                className="bg-stra-teal hover:bg-stra-teal-dark text-white px-8 h-14 rounded-xl font-bold shadow-lg shadow-stra-teal/20 text-lg"
                onClick={() => { if (step === 3) { clearCart(); setStep(4); } else setStep(step + 1); }}
              >
                {step === 3 ? "Confirmar pedido" : "Continuar"} <ChevronRight className="size-5 ml-1" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm sticky top-28">
              <h3 className="text-xl font-bold text-stra-navy mb-6 pb-4 border-b border-gray-100">Resumo da Compra</h3>
              
              <div className="space-y-4 text-sm mb-6 text-gray-600">
                <div className="flex justify-between items-center"><span>Subtotal ({cart.length} itens)</span><span className="font-medium text-stra-navy">{formatBRL(subtotal)}</span></div>
                <div className="flex justify-between items-center"><span>Frete ({freight})</span><span className="font-medium text-stra-navy">{freightCost ? formatBRL(freightCost) : "Grátis"}</span></div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-100 mb-6">
                <span className="text-gray-600 font-bold">Total</span>
                <div className="text-right">
                  <span className="text-3xl font-bold text-stra-navy block">{formatBRL(total)}</span>
                  {payment === "Cartão" && <span className="text-xs font-medium text-stra-teal">em até 12x de {formatBRL(total/12)}</span>}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 text-xs text-gray-500 flex items-start gap-3 border border-gray-200">
                <ShieldCheck className="size-5 text-stra-teal shrink-0" />
                <p>Seus dados estão protegidos. O Grupo Stra utiliza tecnologia de criptografia avançada para garantir a segurança da sua compra.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
