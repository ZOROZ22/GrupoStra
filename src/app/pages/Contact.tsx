import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { COMPANY } from "../data/catalog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast } from "sonner";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Retornaremos em breve.");
    setName(""); setEmail(""); setPhone(""); setSubject(""); setMessage("");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-stra-navy mb-4">Fale Conosco</h1>
          <p className="text-lg text-gray-500">Estamos aqui para ajudar. Entre em contato por um dos nossos canais ou preencha o formulário abaixo.</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12">
          
          {/* Formulário */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-200/40 border border-gray-100">
            <h2 className="text-2xl font-bold text-stra-navy mb-8">Envie uma mensagem</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-2 block">Nome completo</Label>
                  <Input required value={name} onChange={e => setName(e.target.value)} className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white" placeholder="Seu nome" />
                </div>
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-2 block">E-mail corporativo</Label>
                  <Input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white" placeholder="voce@empresa.com" />
                </div>
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-2 block">Telefone/WhatsApp</Label>
                  <Input required value={phone} onChange={e => setPhone(e.target.value)} className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-2 block">Assunto</Label>
                  <select required value={subject} onChange={e => setSubject(e.target.value)} className="w-full h-12 border-2 border-gray-200 rounded-xl px-4 text-gray-700 focus:border-stra-teal bg-gray-50 focus:bg-white outline-none">
                    <option value="">Selecione um assunto...</option>
                    <option value="Dúvida Técnica">Dúvida Técnica</option>
                    <option value="Cotação/Comercial">Cotação Comercial</option>
                    <option value="Suporte Pós-Venda">Suporte Pós-Venda</option>
                    <option value="Parceria">Parceria</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>
              
              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-2 block">Mensagem</Label>
                <textarea 
                  required
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-stra-teal bg-gray-50 focus:bg-white outline-none min-h-[150px] resize-y" 
                  placeholder="Como podemos ajudar sua instituição?"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-stra-navy hover:bg-stra-navy/90 text-white h-14 rounded-xl font-bold text-lg gap-2 shadow-md">
                Enviar Mensagem <Send className="size-5" />
              </Button>
            </form>
          </div>

          {/* Infos */}
          <div className="space-y-6">
            <div className="bg-stra-navy rounded-3xl p-8 text-white shadow-xl shadow-stra-navy/20 relative overflow-hidden">
              <div className="absolute right-0 top-0 size-32 bg-stra-teal blur-3xl opacity-20 rounded-full" />
              <h3 className="text-xl font-bold mb-6 relative z-10">Informações de Contato</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex gap-4">
                  <div className="size-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="size-5 text-stra-teal-light" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Telefone Principal</p>
                    <p className="font-bold text-lg">{COMPANY.phone}</p>
                    <p className="text-sm text-white/80 mt-1">{COMPANY.hours}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="size-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="size-5 text-stra-teal-light" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">WhatsApp Comercial</p>
                    <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" className="font-bold text-lg hover:text-stra-teal-light transition-colors">
                      Falar com especialista
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="size-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="size-5 text-stra-teal-light" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">E-mail</p>
                    <a href={`mailto:${COMPANY.email}`} className="font-bold hover:text-stra-teal-light transition-colors">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <div className="size-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="size-5 text-stra-teal-light" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Matriz / Centro de Distribuição</p>
                    <p className="font-medium leading-relaxed">Rua Dom Sebastião 617<br/>Vila Real, Balneário Camboriú<br/>SC — CEP 88337-110</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-64 bg-gray-200">
              {/* Fake Map implementation for visual prototype */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.499066606015!2d-48.65063802354897!3d-27.014441597334707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b67b140bd9e9%3A0xc6c7b946898858a7!2sR.%20Dom%20Sebasti%C3%A3o%2C%20617%20-%20Vila%20Real%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC%2C%2088337-110!5e0!3m2!1sen!2sbr!4v1714000000000!5m2!1sen!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Grupo Stra"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
