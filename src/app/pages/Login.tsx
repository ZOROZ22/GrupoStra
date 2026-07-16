import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router";
import { useStore } from "../store";
import { COMPANY } from "../data/catalog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function Login() {
  const { login } = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string })?.from;
  const [email, setEmail] = useState("");

  const submit = () => {
    login({ name: "Dra. Marina Alves", email: email || "marina@clinica.com", accountType: "Médica", crmStatus: "aprovado", council: "CRM-SC 12345", role: "cliente" });
    navigate(from || "/painel");
  };

  const submitAdmin = () => {
    login({ name: "Admin Grupo Stra", email: email || "admin@grupostra.com.br", accountType: "Administrador", crmStatus: "n/a", role: "admin" });
    navigate(from || "/admin");
  };

  return (
    <div className="max-w-[420px] mx-auto px-4 py-20">
      <div className="text-center mb-8">
        <img src={COMPANY.logo} alt="Grupo Stra" className="h-12 mx-auto object-contain" />
        <h1 className="text-stra-navy mt-4">Entrar na sua conta</h1>
        <p className="text-gray-500 text-sm mt-1">Acesse pedidos, cotações e favoritos.</p>
      </div>
      <div className="p-6 rounded-xl border border-gray-100 bg-white space-y-4">
        <div><Label>E-mail</Label><Input className="mt-1" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="voce@email.com" /></div>
        <div><Label>Senha</Label><Input type="password" className="mt-1" placeholder="••••••••" /></div>
        <Button className="w-full" onClick={submit}>Entrar</Button>
        <Button variant="outline" className="w-full" onClick={submitAdmin}>Entrar como Administrador</Button>
        <p className="text-center text-xs text-gray-400">Demonstração: qualquer credencial funciona.</p>
      </div>
      <p className="text-center text-sm text-gray-500 mt-6">Não tem conta? <Link to="/cadastro" className="text-stra-teal">Criar conta</Link></p>
    </div>
  );
}
