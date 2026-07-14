// Mock data para o CRM administrativo e dashboard do usuário
export type CrmStatus = "aprovado" | "pendente" | "rejeitado";

export interface Client {
  id: string;
  name: string;
  type: string;
  council?: string;
  specialty?: string;
  status: CrmStatus;
  ltv: number;
  tags: string[];
  stage: "Lead" | "Contatado" | "Cotação" | "Negociação" | "Fechado";
  email: string;
  document?: string;
}

export const CLIENTS: Client[] = [
  { id: "c1", name: "Dra. Marina Alves", type: "Médica", council: "CRM-SC 12345", specialty: "Ginecologia", status: "aprovado", ltv: 48200, tags: ["VIP", "Recorrente"], stage: "Fechado", email: "marina@clinica.com" },
  { id: "c2", name: "Lab. CitoDiagnóstico", type: "Laboratório", status: "aprovado", ltv: 215000, tags: ["B2B"], stage: "Negociação", email: "compras@citodiag.com" },
  { id: "c3", name: "Dr. Paulo Mendes", type: "Médico", council: "CRM-PR 55210", specialty: "Anestesiologia", status: "pendente", ltv: 0, tags: ["Novo"], stage: "Lead", email: "paulo@hosp.com", document: "documento_crm.pdf" },
  { id: "c4", name: "Hospital Santa Vida", type: "Hospital/Clínica", status: "aprovado", ltv: 389000, tags: ["B2B", "VIP"], stage: "Cotação", email: "suprimentos@santavida.com" },
  { id: "c5", name: "Vet. Bicho Feliz", type: "Veterinário", council: "CRMV-SP 9981", specialty: "Veterinária", status: "pendente", ltv: 12400, tags: ["Vet"], stage: "Contatado", email: "contato@bichofeliz.com", document: "crmv_documento.jpg" },
  { id: "c6", name: "Dra. Camila Souza", type: "Biomédica", council: "CRBM-RS 4432", specialty: "Patologia", status: "rejeitado", ltv: 0, tags: ["Revisar"], stage: "Lead", email: "camila@lab.com", document: "doc_ilegivel.pdf" },
  { id: "c7", name: "Farmácia BemViver", type: "Hospital/Clínica", status: "aprovado", ltv: 67300, tags: ["B2C"], stage: "Fechado", email: "gestao@bemviver.com" },
];

export type OrderStatus = "Aguardando pagamento" | "Em separação" | "Enviado" | "Entregue" | "Cancelado";

export interface Order {
  id: string;
  client: string;
  date: string;
  total: number;
  status: OrderStatus;
  items: { name: string; qty: number; price: number }[];
  tracking?: string;
}

export const ORDERS: Order[] = [
  { id: "#10432", client: "Dra. Marina Alves", date: "12/07/2026", total: 37990, status: "Enviado", tracking: "BR123456789SC", items: [{ name: "GynoPrep GP-100", qty: 1, price: 37990 }] },
  { id: "#10431", client: "Hospital Santa Vida", date: "11/07/2026", total: 84990, status: "Em separação", items: [{ name: "Amoul T6", qty: 1, price: 84990 }] },
  { id: "#10430", client: "Farmácia BemViver", date: "10/07/2026", total: 3596, status: "Entregue", tracking: "BR987654321SC", items: [{ name: "Termômetro E125", qty: 40, price: 89.9 }] },
  { id: "#10429", client: "Lab. CitoDiagnóstico", date: "09/07/2026", total: 31500, status: "Aguardando pagamento", items: [{ name: "Kit GynoPrep 20mL", qty: 3000, price: 10.5 }] },
  { id: "#10428", client: "Vet. Bicho Feliz", date: "08/07/2026", total: 8828, status: "Entregue", tracking: "BR456123789SC", items: [{ name: "DEA i3", qty: 1, price: 8828 }] },
];

export type QuoteStatus = "Aberta" | "Respondida" | "Aprovada" | "Recusada";

export interface Quote {
  id: string;
  client: string;
  date: string;
  product: string;
  qty: number;
  status: QuoteStatus;
}

export const QUOTES: Quote[] = [
  { id: "Q-2201", client: "Hospital Santa Vida", date: "12/07/2026", product: "Sansure MA-6000", qty: 1, status: "Aberta" },
  { id: "Q-2200", client: "Lab. CitoDiagnóstico", date: "11/07/2026", product: "Sansure iPonatic II", qty: 2, status: "Respondida" },
  { id: "Q-2199", client: "Vet. Bicho Feliz", date: "10/07/2026", product: "PlusLife Vet", qty: 1, status: "Aberta" },
  { id: "Q-2198", client: "Dra. Marina Alves", date: "08/07/2026", product: "GynoPrep GP-100", qty: 1, status: "Aprovada" },
];

export const SALES_BY_MONTH = [
  { mes: "Jan", vendas: 420000 }, { mes: "Fev", vendas: 385000 }, { mes: "Mar", vendas: 512000 },
  { mes: "Abr", vendas: 478000 }, { mes: "Mai", vendas: 601000 }, { mes: "Jun", vendas: 655000 },
  { mes: "Jul", vendas: 712000 },
];

export const SALES_BY_SEGMENT = [
  { name: "Laboratorial", value: 42 }, { name: "Hospitalar", value: 33 },
  { name: "Farma", value: 15 }, { name: "Veterinário", value: 10 },
];

export const TOP_BRANDS = [
  { name: "Sansure", vendas: 890000 }, { name: "GynoPrep", vendas: 640000 },
  { name: "Amoul", vendas: 520000 }, { name: "Stra Medical", vendas: 310000 },
  { name: "HistoPot", vendas: 180000 },
];
