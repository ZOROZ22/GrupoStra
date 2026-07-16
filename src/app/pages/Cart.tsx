import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { Trash2, ShoppingCart, ArrowRight, ShieldCheck } from "lucide-react";
import { useStore } from "../store";
import { formatBRL, volumeDiscount } from "../data/catalog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { toast } from "sonner";
import { Badge } from "../components/ui/badge";

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useStore();
  const navigate = useNavigate();
  const [cep, setCep] = useState("");
  const [coupon, setCoupon] = useState("");
  const [freight, setFreight] = useState(0);
  const [discountPct, setDiscountPct] = useState(0);

  const subtotal = cart.reduce((s, i) => {
    const d = volumeDiscount(i.qty);
    return s + (i.product.price ?? 0) * i.qty * (1 - d);
  }, 0);
  const discount = subtotal * discountPct;
  const total = subtotal - discount + freight;

  if (cart.length === 0) {
    return (
      <div className="bg-gray-50 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center py-20 px-4">
        <div className="size-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
          <ShoppingCart className="size-10 text-gray-300" />
        </div>
        <h1 className="text-3xl font-bold text-stra-navy mb-4">Seu carrinho está vazio</h1>
        <p className="text-gray-500 mb-8 max-w-md text-center">Navegue pelo nosso catálogo e encontre os produtos ideais para sua instituição.</p>
        <Link to="/loja">
          <Button size="lg" className="bg-stra-teal hover:bg-stra-teal-dark px-8 h-14 rounded-xl text-lg font-bold shadow-md shadow-stra-teal/20 text-white gap-2">
            Explorar catálogo <ArrowRight className="size-5" />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-80px)]">
      <div className="max-w-[1280px] mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-stra-navy">Meu carrinho</h1>
          <span className="text-gray-500 font-medium">{cart.length} {cart.length === 1 ? 'item' : 'itens'}</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          <div className="space-y-4">
            {cart.map((item) => {
              const d = volumeDiscount(item.qty);
              const unitPrice = item.product.price ?? 0;
              const itemTotal = unitPrice * item.qty * (1 - d);
              
              return (
                <div key={item.product.id} className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <Link to={`/produto/${item.product.slug}`} className="shrink-0 bg-gray-50 rounded-xl p-2 w-full sm:w-32 h-32 flex items-center justify-center border border-gray-100">
                    <img src={item.product.images[0]} alt="" className="max-w-full max-h-full object-contain" />
                  </Link>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-stra-teal mb-1">{item.product.brand}</p>
                        <Link to={`/produto/${item.product.slug}`} className="text-lg font-bold text-stra-navy hover:text-stra-teal transition-colors line-clamp-2">
                          {item.product.name}
                        </Link>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.product.id)} 
                        className="text-gray-400 hover:text-stra-red p-2 bg-gray-50 hover:bg-red-50 rounded-lg transition-colors shrink-0"
                        title="Remover item"
                      >
                        <Trash2 className="size-5" />
                      </button>
                    </div>

                    <div className="mt-auto pt-4 flex flex-wrap items-end justify-between gap-4">
                      <div>
                        {d > 0 && <Badge className="bg-stra-green/10 text-stra-green border-transparent hover:bg-stra-green/20 mb-2 font-medium">-{d * 100}% volume</Badge>}
                        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl w-fit">
                          <button className="px-4 py-2 text-gray-500 hover:text-stra-navy transition-colors font-medium" onClick={() => updateQty(item.product.id, item.qty - 1)}>−</button>
                          <span className="w-12 text-center text-sm font-bold text-stra-navy">{item.qty}</span>
                          <button className="px-4 py-2 text-gray-500 hover:text-stra-navy transition-colors font-medium" onClick={() => updateQty(item.product.id, item.qty + 1)}>+</button>
                        </div>
                      </div>
                      <div className="text-right">
                        {d > 0 && <p className="text-sm text-gray-400 line-through mb-0.5">{formatBRL(unitPrice * item.qty)}</p>}
                        <p className="text-2xl font-bold text-stra-navy">{formatBRL(itemTotal)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <h3 className="text-xl font-bold text-stra-navy mb-6 pb-4 border-b border-gray-100">Resumo do Pedido</h3>
              
              <div className="space-y-4 text-sm mb-6">
                <div className="flex justify-between items-center"><span className="text-gray-500 font-medium">Subtotal dos produtos</span><span className="font-semibold text-stra-navy">{formatBRL(subtotal)}</span></div>
                <div className="flex justify-between items-center"><span className="text-gray-500 font-medium">Frete estimado</span><span className="font-semibold text-stra-navy">{freight ? formatBRL(freight) : "—"}</span></div>
                {discount > 0 && <div className="flex justify-between items-center text-stra-green font-medium"><span>Desconto (Cupom)</span><span>−{formatBRL(discount)}</span></div>}
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-100 mb-8">
                <span className="text-gray-600 font-medium">Total</span>
                <span className="text-3xl font-bold text-stra-navy">{formatBRL(total)}</span>
              </div>
              
              <Button size="lg" className="w-full bg-stra-teal hover:bg-stra-teal-dark h-14 rounded-xl text-lg font-bold shadow-md shadow-stra-teal/20 gap-2 text-white" onClick={() => navigate("/checkout")}>
                Finalizar compra <ArrowRight className="size-5" />
              </Button>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
                <ShieldCheck className="size-4 text-stra-teal" /> Compra 100% segura e criptografada
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm space-y-6">
              <div>
                <label className="text-sm font-bold text-stra-navy mb-2 block">Cálculo de Frete</label>
                <div className="flex gap-2">
                  <Input placeholder="00000-000" value={cep} onChange={(e) => setCep(e.target.value)} className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:bg-white" />
                  <Button variant="outline" className="h-12 px-6 rounded-xl border-gray-200 hover:bg-gray-50 font-medium" onClick={() => { setFreight(cep ? 39.9 : 0); toast.success("Frete calculado"); }}>Calcular</Button>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <label className="text-sm font-bold text-stra-navy mb-2 block">Cupom de Desconto</label>
                <div className="flex gap-2">
                  <Input placeholder="Código promocional" value={coupon} onChange={(e) => setCoupon(e.target.value)} className="h-12 bg-gray-50 border-gray-200 rounded-xl focus:bg-white uppercase" />
                  <Button variant="outline" className="h-12 px-6 rounded-xl border-gray-200 hover:bg-gray-50 font-medium text-stra-navy" onClick={() => { if (coupon.toUpperCase() === "STRA10") { setDiscountPct(0.1); toast.success("Cupom aplicado!"); } else toast.error("Cupom inválido"); }}>Aplicar</Button>
                </div>
                <p className="text-xs text-gray-400 mt-2 font-medium">Experimente usar: STRA10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
