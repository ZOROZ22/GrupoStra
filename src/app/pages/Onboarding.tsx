import { useState } from "react";
import { useNavigate } from "react-router";
import { Check, Upload, Clock, Building2, UserCircle, Briefcase, Tag, AlertCircle } from "lucide-react";
import { useStore } from "../store";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";

const ACCOUNT_TYPES = [
  "Médico(a)", "Médico(a) Anestesiologista", "Médico(a) Ginecologista", "Médico(a) Patologista", 
  "Biomédico(a)", "Farmacêutico(a)", "Enfermeiro(a)", "Médico(a) Veterinário(a)", 
  "Estudante de Medicina", "Estudante de Biomedicina", "Comprador(a) Hospitalar", 
  "Gestor(a) de Clínica", "Dono(a) de Clínica", "Outro"
];

const HEALTH_PROS = ["Médico(a)", "Médico(a) Anestesiologista", "Médico(a) Ginecologista", "Médico(a) Patologista", "Biomédico(a)", "Farmacêutico(a)", "Enfermeiro(a)", "Médico(a) Veterinário(a)"];
const COUNCILS = ["CRM", "CRBM", "CRF", "COREN", "CRMV"];
const INSTITUTIONS = ["Hospital Privado", "Hospital Público/SUS", "Clínica Privada", "Laboratório de Análises Clínicas", "Laboratório de Anatomia Patológica", "Clínica Veterinária", "Distribuidora", "Independente/Autônomo", "Universidade/Ensino"];

export default function Onboarding() {
  const { login } = useStore();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  
  // Form State
  const [accountType, setAccountType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [council, setCouncil] = useState("CRM");
  const [councilNumber, setCouncilNumber] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const [institution, setInstitution] = useState("");
  const [revenue, setRevenue] = useState("");
  const [patients, setPatients] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [password, setPassword] = useState("");
  
  const [done, setDone] = useState(false);

  const isHealthPro = HEALTH_PROS.includes(accountType);
  const showCouncil = isHealthPro;

  const steps = ["Identificação", "Validação CRM", "Sondagem", "Confirmação"];

  const finish = () => {
    login({
      name: name || "Novo Usuário",
      email: email || "usuario@email.com",
      accountType,
      crmStatus: showCouncil ? "pendente" : "n/a",
      council: showCouncil ? `${council} ${councilNumber}` : undefined,
      role: "cliente",
    });
    setDone(true);
  };

  if (done) {
    return (
      <div className="max-w-[600px] mx-auto px-4 py-24 text-center">
        <div className="size-24 mx-auto rounded-full bg-stra-teal/10 flex items-center justify-center mb-8">
          <Check className="size-12 text-stra-teal" />
        </div>
        <h1 className="text-4xl font-bold text-stra-navy mb-4">Conta criada com sucesso!</h1>
        <p className="text-lg text-gray-600 mb-8">Bem-vindo(a) à plataforma Grupo Stra®.</p>
        
        {showCouncil ? (
          <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100 text-left flex gap-4 shadow-sm mb-8">
            <Clock className="size-6 text-stra-orange shrink-0 mt-1" />
            <div>
              <p className="text-gray-900 font-medium mb-1">Validação Profissional em Análise</p>
              <p className="text-sm text-gray-700">Você já pode navegar no catálogo e ver preços. A compra de produtos controlados será liberada após a aprovação do seu conselho (24-48h).</p>
            </div>
          </div>
        ) : null}
        
        <Button size="lg" className="bg-stra-teal hover:bg-stra-teal-dark px-10 h-14 rounded-xl text-lg font-bold" onClick={() => navigate("/painel")}>
          Acessar Meu Painel
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-80px)] py-12">
      <div className="max-w-[800px] mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-stra-navy mb-3">Cadastro Profissional</h1>
          <p className="text-gray-500 text-lg">Precisamos de algumas informações para liberar seu acesso.</p>
        </div>

        {/* Steps Progress */}
        <div className="flex items-center justify-between mb-10 px-4">
          {steps.map((s, i) => {
            if (i === 1 && !showCouncil && step !== 1) return null; // hide validation step if not health pro
            
            return (
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
                {i < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-2 rounded-full transition-colors duration-300 ${i < step ? "bg-stra-teal" : "bg-gray-200"}`} />
                )}
              </div>
            );
          })}
        </div>

        <div className="p-8 md:p-10 rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-200/40 mt-16">
          {step === 0 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <UserCircle className="size-6 text-stra-teal" />
                <h3 className="text-2xl font-bold text-stra-navy">Quem é você?</h3>
              </div>
              
              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-2 block">Busque sua profissão ou perfil</Label>
                <select 
                  className="w-full h-12 border-2 border-gray-200 rounded-xl px-4 text-gray-700 focus:border-stra-teal focus:ring-0 outline-none transition-colors"
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                >
                  <option value="">Selecione uma opção...</option>
                  {ACCOUNT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-2 block">Nome completo</Label>
                  <Input className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal" value={name} onChange={(e) => setName(e.target.value)} placeholder="Como gostaria de ser chamado(a)" />
                </div>
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-2 block">E-mail</Label>
                  <Input type="email" className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="voce@email.com" />
                </div>
                <div className="sm:col-span-2">
                  <Label className="text-sm font-semibold text-gray-700 mb-2 block">Telefone/WhatsApp</Label>
                  <Input className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(00) 00000-0000" />
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <Briefcase className="size-6 text-stra-teal" />
                <h3 className="text-2xl font-bold text-stra-navy">Validação Profissional</h3>
              </div>
              
              <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex gap-3 text-sm text-blue-800">
                <AlertCircle className="size-5 shrink-0 mt-0.5" />
                <p>Realizamos a busca automática do seu conselho para liberar o acesso a produtos restritos.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-2 block">Conselho</Label>
                  <select 
                    className="w-full h-12 border-2 border-gray-200 rounded-xl px-4 text-gray-700 focus:border-stra-teal outline-none"
                    value={council}
                    onChange={(e) => setCouncil(e.target.value)}
                  >
                    {COUNCILS.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-2 block">Número do Registro</Label>
                  <Input className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal" value={councilNumber} onChange={(e) => setCouncilNumber(e.target.value)} placeholder="Ex: 12345" />
                </div>
              </div>

              <div className="pt-4">
                <Label className="text-sm font-semibold text-gray-700 mb-2 block">Upload de Documento (Opcional)</Label>
                <p className="text-xs text-gray-500 mb-3">Caso o sistema não encontre seu registro automaticamente.</p>
                <button onClick={() => setUploaded(!uploaded)} className={`w-full border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center gap-3 transition-colors ${uploaded ? "border-stra-teal bg-stra-teal/5" : "border-gray-300 hover:border-stra-teal/50 hover:bg-gray-50"}`}>
                  <div className={`size-12 rounded-full flex items-center justify-center ${uploaded ? "bg-stra-teal text-white" : "bg-gray-100 text-gray-400"}`}>
                    {uploaded ? <Check className="size-6" /> : <Upload className="size-6" />}
                  </div>
                  <span className="text-sm font-medium text-gray-600">{uploaded ? "Documento anexado com sucesso" : "Clique para anexar PDF/JPG"}</span>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <Building2 className="size-6 text-stra-teal" />
                <h3 className="text-2xl font-bold text-stra-navy">Informações Comerciais</h3>
              </div>
              <p className="text-gray-600 mb-6">Queremos entender seu perfil para oferecer as melhores condições comerciais e tabelas de preços.</p>
              
              <div className="space-y-6">
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Tipo de instituição onde atua</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {INSTITUTIONS.map(i => (
                      <label key={i} className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer transition-colors ${institution === i ? "border-stra-teal bg-stra-teal/5" : "border-gray-100 hover:border-gray-200"}`}>
                        <div className={`mt-0.5 size-4 rounded-full border-2 flex items-center justify-center shrink-0 ${institution === i ? "border-stra-teal" : "border-gray-300"}`}>
                          {institution === i && <div className="size-2 rounded-full bg-stra-teal" />}
                        </div>
                        <span className={`text-sm ${institution === i ? "font-medium text-stra-navy" : "text-gray-600"}`}>{i}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-2 block">Média de pacientes/exames por mês</Label>
                    <select 
                      className="w-full h-12 border-2 border-gray-200 rounded-xl px-4 text-gray-700 focus:border-stra-teal outline-none"
                      value={patients}
                      onChange={(e) => setPatients(e.target.value)}
                    >
                      <option value="">Selecione...</option>
                      <option>Até 100/mês</option>
                      <option>100 - 500/mês</option>
                      <option>500 - 1.000/mês</option>
                      <option>1.000 - 5.000/mês</option>
                      <option>Acima de 5.000/mês</option>
                    </select>
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-2 block">Faturamento mensal estimado</Label>
                    <select 
                      className="w-full h-12 border-2 border-gray-200 rounded-xl px-4 text-gray-700 focus:border-stra-teal outline-none"
                      value={revenue}
                      onChange={(e) => setRevenue(e.target.value)}
                    >
                      <option value="">Selecione...</option>
                      <option>Até R$ 50 mil/mês</option>
                      <option>R$ 50 mil - R$ 200 mil/mês</option>
                      <option>R$ 200 mil - R$ 500 mil/mês</option>
                      <option>R$ 500 mil - R$ 1 milhão/mês</option>
                      <option>Acima de R$ 1 milhão/mês</option>
                    </select>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Segmentos de interesse</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["Hospitalar", "Laboratorial", "Veterinário", "Farma"].map((s) => (
                      <label key={s} className={`flex items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-colors ${interests.includes(s) ? "border-stra-teal bg-stra-teal/5" : "border-gray-100 hover:border-gray-200"}`}>
                        <Checkbox 
                          checked={interests.includes(s)} 
                          onCheckedChange={() => setInterests((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s])} 
                          className="data-[state=checked]:bg-stra-teal data-[state=checked]:border-stra-teal"
                        />
                        <span className="text-sm font-medium text-gray-700">{s}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <Tag className="size-6 text-stra-teal" />
                <h3 className="text-2xl font-bold text-stra-navy">Criar Conta e Senha</h3>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Resumo dos dados</h4>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
                  <p><span className="font-semibold block text-stra-navy">Perfil:</span> {accountType}</p>
                  <p><span className="font-semibold block text-stra-navy">Nome:</span> {name}</p>
                  <p><span className="font-semibold block text-stra-navy">E-mail:</span> {email}</p>
                  {showCouncil && <p><span className="font-semibold block text-stra-navy">Conselho:</span> {council} {councilNumber}</p>}
                </div>
              </div>

              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-2 block">Defina uma senha</Label>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="h-12 border-2 border-gray-200 rounded-xl focus:border-stra-teal" placeholder="••••••••" />
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <Checkbox className="mt-1 data-[state=checked]:bg-stra-teal data-[state=checked]:border-stra-teal" defaultChecked /> 
                  <span className="text-sm text-gray-600 leading-relaxed">Aceito os Termos de Uso e a Política de Privacidade do Grupo Stra.</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <Checkbox className="mt-1 data-[state=checked]:bg-stra-teal data-[state=checked]:border-stra-teal" defaultChecked /> 
                  <span className="text-sm text-gray-600 leading-relaxed">Aceito receber comunicações sobre ofertas e novidades por e-mail e WhatsApp.</span>
                </label>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-100">
            {step > 0 ? (
              <Button variant="ghost" onClick={() => {
                if (step === 2 && !showCouncil) setStep(0);
                else setStep(step - 1);
              }} className="text-gray-500 hover:text-stra-navy hover:bg-gray-100 px-6 h-12 rounded-xl font-medium">
                Voltar
              </Button>
            ) : <div />}
            
            <Button
              disabled={step === 0 && (!accountType || !name || !email)}
              size="lg"
              className="bg-stra-teal hover:bg-stra-teal-dark text-white px-8 h-12 rounded-xl font-bold ml-auto shadow-md shadow-stra-teal/20"
              onClick={() => {
                if (step === 3) finish();
                else if (step === 0 && !showCouncil) setStep(2);
                else setStep(step + 1);
              }}
            >
              {step === 3 ? "Concluir Cadastro" : "Avançar"}
            </Button>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-8 font-medium">
          Já possui conta? <a onClick={() => navigate("/entrar")} className="text-stra-teal hover:text-stra-teal-dark cursor-pointer ml-1 transition-colors">Entrar no painel</a>
        </p>
      </div>
    </div>
  );
}
