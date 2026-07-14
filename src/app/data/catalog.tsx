import React from "react";
import { 
  Building, Microscope, PawPrint, Pill, Settings, Target, Clock, 
  FlaskConical, ShieldCheck, Wrench, Zap, BarChart, Dna, Handshake, 
  Package, Hand, Activity, TrendingUp, Battery, Monitor, HeartPulse, 
  Volume2, Baby, Flashlight, Magnet, PenTool, Stethoscope, Wind, 
  Sparkles, Lightbulb, Ban, Moon, Recycle, MoveVertical, Lock, Tag 
} from "lucide-react";
// Grupo Stra — catálogo com assets reais (CDN Shopify)
export const COMPANY = {
  name: "Grupo Stra",
  tagline: "Saúde e Bem Estar",
  founded: 2009,
  address: "Rua Dom Sebastião 617, Bairro Vila Real — Balneário Camboriú, SC",
  cep: "88337-110",
  phone: "+55 (47) 3183-8200",
  whatsapp: "554731838200",
  email: "contato@grupostra.com.br",
  instagram: "@grupo_stra",
  hours: "Seg à Sex: 8h às 12h e 13:20h às 18:08h",
  logo: "https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Logo_GrupoStra_36a9bddc-fa61-46c6-bcab-d414f144d4a1.png?v=1783781064",
  logoVertical: "https://cdn.shopify.com/s/files/1/0534/2812/5857/files/grupostra_vertical.png?v=1628798858",
  whatsIcon: "https://cdn.shopify.com/s/files/1/0534/2812/5857/files/whats.png?v=1707327654",
  sacIcon: "https://cdn.shopify.com/s/files/1/0534/2812/5857/files/icone_SAC_site__Prancheta_1.png?v=1671736330",
  institutional:
    "Nascida em 2009, somos uma empresa de valores sólidos que cresce de forma agressiva e sustentável. Desafio é o que nos move, avançamos no tempo cumprindo nosso propósito de entregar saúde e bem estar em todo Brasil valorizando o capital humano. Desenvolvemos marcas de produtos inovadores e atuamos nos segmentos hospitalar, laboratorial, veterinária e farma. O único, este é o padrão Grupo Stra®.",
};

export const BANNERS = {
  heroDesktop:
    "https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Banner_Site_BG_-_ANIMAL_MEDVEP_-_Full_Screen_1920_X_700.png?v=1783781264",
  heroMobile:
    "https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Banner_Site_BG_-_MEDVEP_-_Celular_480_X_560_c28a25aa-3e9d-4dfd-b3d5-46b73acab3b1.png?v=1783782734",
  pluslifeVet:
    "https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Banner_site_-_Segmento_Pluslife_Vet.png?v=1747250200",
  histopot:
    "https://grupostra.com.br/cdn/shop/files/Banner_HistoPot_900x1142px_Azul_1024x.png?v=1693489395",
  bg1: "https://cdn.shopify.com/s/files/1/0534/2812/5857/files/bg1.jpg?v=1720721290",
  bg2: "https://cdn.shopify.com/s/files/1/0534/2812/5857/files/bg2.jpg?v=1720712138",
};

export const VIDEOS = {
  shopify1: "https://cdn.shopify.com/videos/c/o/v/1f379b64ee134cd491f3edffa074da74.mp4",
  shopify2: "https://cdn.shopify.com/videos/c/o/v/978034f96aed4fdfa6357261e6550156.mp4",
  youtubeSansure: "https://www.youtube.com/embed/m7r3FLgJsZ4",
};

export type Segment = "Hospitalar" | "Laboratorial" | "Veterinário" | "Farma";

export interface Segment_ {
  id: string;
  name: Segment;
  icon: React.ReactNode;
  image: string;
  description: string;
}

export const SEGMENTS: Segment_[] = [
  {
    id: "hospitalar",
    name: "Hospitalar",
    icon: <Building />,
    image: "https://cdn.shopify.com/s/files/1/0534/2812/5857/files/AmoulT62.png?v=1702057067",
    description: "Ventiladores, laringoscópios, DEA e equipamentos de emergência.",
  },
  {
    id: "laboratorial",
    name: "Laboratorial",
    icon: <Microscope />,
    image: "https://grupostra.com.br/cdn/shop/files/grupostra_Sansure_iPonaticII_01_1024x.webp?v=1719583447",
    description: "Biologia molecular, citologia em meio líquido e insumos.",
  },
  {
    id: "veterinario",
    name: "Veterinário",
    icon: <PawPrint />,
    image: "https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01146-Edit.webp?v=1747051259",
    description: "Diagnóstico molecular veterinário PlusLife Vet.",
  },
  {
    id: "farma",
    name: "Farma",
    icon: <Pill />,
    image: "https://grupostra.com.br/cdn/shop/products/img_packs_site_GS__01_1024x.png?v=1681396910",
    description: "Produtos de saúde e bem-estar para o consumidor final.",
  },
];

export const BRANDS = [
  "GynoPrep", "Sansure", "Scope Medical", "Stra Medical", "Amoul",
  "HistoPot", "KASVI", "PlusLife Vet", "Flux Air", "Bug Bite Thing",
];

export type LandingType = "A" | "B" | "C" | "D";

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  segment: Segment;
  price: number | null; // null = sob consulta
  badge?: "Mais Vendido" | "Novo" | "Sob Consulta";
  landingType: LandingType;
  images: string[];
  short: string;
  problem: string;
  solution: string;
  videoUrl?: string;
  benefits: { icon: React.ReactNode; title: string; text: string }[];
  specs: { label: string; value: string }[];
  steps: string[];
  audience: string[];
  faqs: { q: string; a: string }[];
  stock: number;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "gp100",
    slug: "gynoprep-gp-100",
    name: "GynoPrep® GP-100 — Processador de Citologia em Meio Líquido",
    brand: "GynoPrep",
    segment: "Laboratorial",
    price: 37990,
    badge: "Mais Vendido",
    landingType: "A",
    featured: true,
    images: [
      "https://grupostra.com.br/cdn/shop/products/conjunto_comRosa_01_1_1024x.png?v=1671721279",
      "https://grupostra.com.br/cdn/shop/products/gp100_01_1024x.png?v=1723655314",
    ],
    short: "Automação e precisão na preparação de lâminas de citologia em meio líquido.",
    problem:
      "A citologia convencional depende de etapas manuais que geram variabilidade, artefatos e amostras insatisfatórias, comprometendo o rastreamento do câncer de colo do útero.",
    solution:
      "O GP-100 padroniza todo o processo de preparo, oferecendo lâminas de alta qualidade com camada fina, reduzindo esfregaços insatisfatórios e aumentando a produtividade do laboratório.",
    videoUrl: VIDEOS.youtubeSansure,
    benefits: [
      { icon: <Settings />, title: "Totalmente automatizado", text: "Preparo padronizado de ponta a ponta." },
      { icon: <Target />, title: "Alta precisão", text: "Camada fina uniforme e reprodutível." },
      { icon: <Clock />, title: "Mais produtividade", text: "Alto throughput para laboratórios de rotina." },
      { icon: <FlaskConical />, title: "Menos insatisfatórios", text: "Redução expressiva de amostras rejeitadas." },
      { icon: <ShieldCheck />, title: "Registro ANVISA", text: "Conformidade regulatória garantida." },
      { icon: <Wrench />, title: "Suporte técnico", text: "Instalação, treinamento e assistência." },
    ],
    specs: [
      { label: "Capacidade", value: "Alto volume / rotina" },
      { label: "Método", value: "Citologia em meio líquido" },
      { label: "Alimentação", value: "110/220V bivolt" },
      { label: "Garantia", value: "12 meses" },
      { label: "Registro", value: "ANVISA" },
    ],
    steps: [
      "Coleta em meio líquido com kit GynoPrep",
      "Homogeneização automática da amostra",
      "Deposição em camada fina na lâmina",
      "Coloração e leitura padronizadas",
    ],
    audience: ["Laboratórios de análises clínicas", "Serviços de citopatologia", "Programas de rastreamento"],
    faqs: [
      { q: "O equipamento acompanha treinamento?", a: "Sim, oferecemos instalação e treinamento da equipe." },
      { q: "Possui registro ANVISA?", a: "Sim, o produto é regularizado junto à ANVISA." },
    ],
    stock: 4,
  },
  {
    id: "ma6000",
    slug: "sansure-ma-6000",
    name: "Sansure® MA-6000 — Sistema de PCR em Tempo Real",
    brand: "Sansure",
    segment: "Laboratorial",
    price: 198000,
    badge: "Sob Consulta",
    landingType: "A",
    featured: true,
    images: [
      "https://grupostra.com.br/cdn/shop/files/4e3555db-b232-4962-90e6-eca1d56e60d2_1024x.png?v=1757096356",
      "https://grupostra.com.br/cdn/shop/files/b7e5eb20-3a88-4f78-b832-0147d5a66646_42a28c9e-93bf-41bc-826e-300c5ad7e912_1024x.png?v=1757352180",
    ],
    short: "Termociclador de alta performance para diagnóstico molecular de alto volume.",
    problem: "Laboratórios de biologia molecular precisam de plataformas confiáveis e de alto rendimento para PCR em tempo real.",
    solution: "O MA-6000 oferece múltiplos canais de fluorescência, alta sensibilidade e integração completa ao fluxo Sansure.",
    videoUrl: VIDEOS.youtubeSansure,
    benefits: [
      { icon: <Microscope />, title: "Multiplex", text: "Vários canais de detecção simultânea." },
      { icon: <Zap />, title: "Alta velocidade", text: "Ciclagem rápida e precisa." },
      { icon: <BarChart />, title: "Software integrado", text: "Análise e laudos automatizados." },
      { icon: <Dna />, title: "Alta sensibilidade", text: "Detecção de baixas cargas." },
      { icon: <ShieldCheck />, title: "Registro ANVISA", text: "Uso diagnóstico regularizado." },
      { icon: <Handshake />, title: "Suporte Sansure", text: "Reagentes e assistência dedicados." },
    ],
    specs: [
      { label: "Canais", value: "Multicanal fluorescência" },
      { label: "Capacidade", value: "96 amostras" },
      { label: "Aplicação", value: "Diagnóstico molecular" },
      { label: "Garantia", value: "12 meses" },
    ],
    steps: ["Extração de ácido nucleico", "Preparo do mix qPCR", "Ciclagem no MA-6000", "Análise automática"],
    audience: ["Laboratórios de biologia molecular", "Hospitais de referência", "Vigilância epidemiológica"],
    faqs: [{ q: "Como solicito?", a: "Solicite uma cotação e nossa equipe entrará em contato." }],
    stock: 2,
  },
  {
    id: "iponatic",
    slug: "sansure-iponatic-ii",
    name: "Sansure® iPonatic II — Plataforma Molecular Portátil (PoCT)",
    brand: "Sansure",
    segment: "Laboratorial",
    price: 89900,
    badge: "Novo",
    landingType: "A",
    featured: true,
    images: [
      "https://grupostra.com.br/cdn/shop/files/grupostra_Sansure_iPonaticII_01_1024x.webp?v=1719583447",
      "https://grupostra.com.br/cdn/shop/files/grupostra_Sansure_iPonaticII_02_1024x.webp?v=1720036353",
    ],
    short: "Biologia molecular integrada e portátil — do swab ao resultado em um só equipamento.",
    problem: "Testes moleculares tradicionais exigem infraestrutura complexa e tempo elevado até o resultado.",
    solution: "O iPonatic II integra extração, amplificação e detecção em um sistema compacto, ideal para PoCT.",
    videoUrl: VIDEOS.youtubeSansure,
    benefits: [
      { icon: <Package />, title: "Portátil", text: "Compacto para uso descentralizado." },
      { icon: <Zap />, title: "Rápido", text: "Resultado em tempo reduzido." },
      { icon: <Dna />, title: "Integrado", text: "Extração + amplificação + detecção." },
      { icon: <Target />, title: "Preciso", text: "Alta sensibilidade e especificidade." },
      { icon: <Hand />, title: "Simples", text: "Fluxo operacional intuitivo." },
      { icon: <ShieldCheck />, title: "Confiável", text: "Tecnologia Sansure validada." },
    ],
    specs: [
      { label: "Tipo", value: "PoCT molecular" },
      { label: "Formato", value: "Portátil integrado" },
      { label: "Aplicação", value: "Point-of-care" },
      { label: "Garantia", value: "12 meses" },
    ],
    steps: ["Insira a amostra", "Carregue o cartucho", "Inicie o teste", "Leia o resultado"],
    audience: ["UPAs e prontos-socorros", "Laboratórios descentralizados", "Campanhas de testagem"],
    faqs: [{ q: "É portátil de verdade?", a: "Sim, projetado para uso em ponto de atendimento." }],
    stock: 6,
  },
  {
    id: "amoul-t6",
    slug: "amoul-t6-ventilador",
    name: "Amoul® T6 — Ventilador Pulmonar",
    brand: "Amoul",
    segment: "Hospitalar",
    price: 84990,
    badge: "Sob Consulta",
    landingType: "A",
    featured: true,
    images: ["https://cdn.shopify.com/s/files/1/0534/2812/5857/files/AmoulT62.png?v=1702057067"],
    short: "Ventilação pulmonar avançada para UTI e emergência.",
    problem: "Unidades críticas exigem ventiladores confiáveis, versáteis e seguros para pacientes graves.",
    solution: "O Amoul T6 oferece múltiplos modos ventilatórios, monitorização completa e interface intuitiva.",
    benefits: [
      { icon: <Activity />, title: "Múltiplos modos", text: "Ventilação invasiva e não invasiva." },
      { icon: <TrendingUp />, title: "Monitorização", text: "Curvas e loops em tempo real." },
      { icon: <Battery />, title: "Autonomia", text: "Bateria interna de segurança." },
      { icon: <Monitor />, title: "Interface", text: "Tela sensível ao toque." },
      { icon: <ShieldCheck />, title: "Alarmes", text: "Segurança avançada ao paciente." },
      { icon: <Handshake />, title: "Suporte", text: "Instalação e treinamento." },
    ],
    specs: [
      { label: "Uso", value: "UTI / Emergência" },
      { label: "Modos", value: "Invasivo e não invasivo" },
      { label: "Tela", value: "Touchscreen" },
      { label: "Garantia", value: "12 meses" },
    ],
    steps: ["Configure o paciente", "Selecione o modo", "Ajuste os parâmetros", "Monitore em tempo real"],
    audience: ["UTIs", "Prontos-socorros", "Centros cirúrgicos"],
    faqs: [{ q: "Atende transporte?", a: "Possui bateria interna para deslocamentos." }],
    stock: 3,
  },
  {
    id: "dea-i3",
    slug: "amoul-dea-i3",
    name: "Amoul® DEA i3 — Desfibrilador Externo Automático",
    brand: "Amoul",
    segment: "Hospitalar",
    price: 8828,
    badge: "Mais Vendido",
    landingType: "B",
    featured: true,
    images: ["https://grupostra.com.br/cdn/shop/files/AmoulDEAi3-ajustado_1024x.jpg?v=1698266019"],
    short: "DEA compacto para atendimento rápido de parada cardíaca.",
    problem: "A parada cardíaca súbita exige desfibrilação em minutos para salvar vidas.",
    solution: "O DEA i3 guia o socorrista por voz e imagem, com choque seguro e automático.",
    benefits: [
      { icon: <HeartPulse />, title: "Salva vidas", text: "Desfibrilação rápida e segura." },
      { icon: <Volume2 />, title: "Guia por voz", text: "Instruções passo a passo." },
      { icon: <Package />, title: "Portátil", text: "Leve e fácil de transportar." },
      { icon: <Battery />, title: "Pronto uso", text: "Autoteste automático." },
      { icon: <Baby />, title: "Adulto/Pediátrico", text: "Modo configurável." },
      { icon: <ShieldCheck />, title: "Confiável", text: "Registro ANVISA." },
    ],
    specs: [
      { label: "Tipo", value: "DEA automático" },
      { label: "Uso", value: "Adulto e pediátrico" },
      { label: "Bateria", value: "Longa duração" },
      { label: "Garantia", value: "12 meses" },
    ],
    steps: ["Ligue o aparelho", "Aplique os eletrodos", "Aguarde a análise", "Aplique o choque se indicado"],
    audience: ["Empresas", "Academias", "Escolas", "Ambulâncias"],
    faqs: [{ q: "Precisa de treinamento?", a: "O aparelho guia o usuário, mas recomenda-se capacitação." }],
    stock: 12,
  },
  {
    id: "scope-lar",
    slug: "scope-medical-laringoscopio-fo-rm",
    name: "Scope Medical® — Conjunto Laringoscópio FO para Ressonância Magnética",
    brand: "Scope Medical",
    segment: "Hospitalar",
    price: 8190,
    landingType: "B",
    images: ["https://grupostra.com.br/cdn/shop/products/scoope_medical_3_1024x.jpg?v=1671719116"],
    short: "Laringoscópio de fibra óptica compatível com ambiente de RM.",
    problem: "Intubações em ambiente de ressonância exigem instrumentos seguros e não ferromagnéticos.",
    solution: "Conjunto FO específico para RM, com iluminação de alta qualidade e segurança.",
    benefits: [
      { icon: <Flashlight />, title: "Fibra óptica", text: "Iluminação uniforme e nítida." },
      { icon: <Magnet />, title: "RM compatível", text: "Seguro em ambiente magnético." },
      { icon: <PenTool />, title: "Conjunto completo", text: "Cabo e lâminas inclusos." },
      { icon: <ShieldCheck />, title: "Durável", text: "Material resistente." },
      { icon: <Stethoscope />, title: "Precisão", text: "Visualização otimizada." },
      { icon: <Handshake />, title: "Suporte", text: "Assistência técnica." },
    ],
    specs: [
      { label: "Tecnologia", value: "Fibra óptica" },
      { label: "Compatibilidade", value: "Ressonância magnética" },
      { label: "Garantia", value: "12 meses" },
    ],
    steps: ["Monte o conjunto", "Verifique a iluminação", "Realize a laringoscopia", "Higienize"],
    audience: ["Anestesiologia", "Centros de imagem", "Emergência"],
    faqs: [{ q: "Serve para RM?", a: "Sim, é projetado para ambiente de ressonância." }],
    stock: 5,
  },
  {
    id: "pa700",
    slug: "stra-medical-pa-700",
    name: "Stra Medical® PA-700 — Cabine de Biossegurança",
    brand: "Stra Medical",
    segment: "Laboratorial",
    price: 19990,
    landingType: "B",
    images: ["https://grupostra.com.br/cdn/shop/files/WhatsAppImage2024-10-15at5.06.45PM_1024x.jpg?v=1729022881"],
    short: "Proteção do operador, do ambiente e da amostra.",
    problem: "Manipular amostras biológicas exige contenção adequada para segurança.",
    solution: "A cabine PA-700 oferece fluxo laminar e filtragem HEPA de alta eficiência.",
    benefits: [
      { icon: <ShieldCheck />, title: "Proteção tripla", text: "Operador, ambiente e amostra." },
      { icon: <Wind />, title: "Fluxo laminar", text: "Escoamento controlado." },
      { icon: <Sparkles />, title: "Filtro HEPA", text: "Alta eficiência de filtragem." },
      { icon: <Monitor />, title: "Controle", text: "Painel intuitivo." },
      { icon: <Lightbulb />, title: "Iluminação", text: "LED interno." },
      { icon: <Handshake />, title: "Suporte", text: "Instalação e validação." },
    ],
    specs: [
      { label: "Classe", value: "Biossegurança" },
      { label: "Filtro", value: "HEPA" },
      { label: "Garantia", value: "12 meses" },
    ],
    steps: ["Ligue e aguarde estabilização", "Higienize a superfície", "Trabalhe na área limpa", "Finalize e desligue"],
    audience: ["Laboratórios", "Farmácias de manipulação", "Pesquisa"],
    faqs: [{ q: "Inclui validação?", a: "Oferecemos instalação e validação." }],
    stock: 4,
  },
  {
    id: "e125",
    slug: "stra-medical-termometro-e125",
    name: "Stra Medical® E125 — Termômetro Infravermelho Sem Contato",
    brand: "Stra Medical",
    segment: "Farma",
    price: 89.9,
    badge: "Mais Vendido",
    landingType: "D",
    featured: true,
    images: [
      "https://grupostra.com.br/cdn/shop/products/Termometro7_1024x.jpg?v=1690222262",
      "https://grupostra.com.br/cdn/shop/products/termometro-infravermelho-digital-sem-contato-medicao-em-1-seg-e125-stra-medical-0001_1024x.png?v=1690222262",
    ],
    short: "Medição de temperatura em 1 segundo, sem contato.",
    problem: "Termômetros de contato são lentos e podem transmitir contaminação.",
    solution: "O E125 mede em 1 segundo por infravermelho, com precisão e higiene.",
    benefits: [
      { icon: <Zap />, title: "1 segundo", text: "Leitura instantânea." },
      { icon: <Ban />, title: "Sem contato", text: "Mais higiênico." },
      { icon: <Target />, title: "Preciso", text: "Sensor infravermelho." },
      { icon: <Battery />, title: "Econômico", text: "Longa duração de bateria." },
      { icon: <Baby />, title: "Toda a família", text: "Adultos e crianças." },
      { icon: <ShieldCheck />, title: "Confiável", text: "Registro ANVISA." },
    ],
    specs: [
      { label: "Tecnologia", value: "Infravermelho" },
      { label: "Tempo", value: "1 segundo" },
      { label: "Uso", value: "Testa / sem contato" },
      { label: "Garantia", value: "12 meses" },
    ],
    steps: ["Aponte para a testa", "Pressione o botão", "Leia o resultado", "Higienize"],
    audience: ["Famílias", "Clínicas", "Empresas", "Escolas"],
    faqs: [{ q: "Tem garantia?", a: "Sim, 12 meses de garantia." }],
    stock: 40,
  },
  {
    id: "flux-air",
    slug: "flux-air-dilatador-nasal",
    name: "Flux Air® — Dilatador Nasal Interno",
    brand: "Flux Air",
    segment: "Farma",
    price: 79.9,
    badge: "Novo",
    landingType: "D",
    featured: true,
    images: ["https://grupostra.com.br/cdn/shop/products/img_packs_site_GS__01_1024x.png?v=1681396910"],
    short: "Respire melhor durante o sono e as atividades físicas.",
    problem: "A obstrução nasal prejudica o sono, o desempenho e a qualidade de vida.",
    solution: "O Flux Air dilata as narinas internamente, melhorando o fluxo de ar de forma confortável.",
    benefits: [
      { icon: <Wind />, title: "Mais ar", text: "Melhora o fluxo respiratório." },
      { icon: <Moon />, title: "Melhor sono", text: "Reduz o ronco." },
      { icon: <Activity />, title: "Performance", text: "Ideal para esportes." },
      { icon: <Recycle />, title: "Reutilizável", text: "Fácil higienização." },
      { icon: <MoveVertical />, title: "Confortável", text: "Material macio." },
      { icon: <ShieldCheck />, title: "Seguro", text: "Uso interno discreto." },
    ],
    specs: [
      { label: "Tipo", value: "Dilatador interno" },
      { label: "Material", value: "Silicone médico" },
      { label: "Reutilizável", value: "Sim" },
    ],
    steps: ["Higienize", "Insira suavemente", "Ajuste o conforto", "Respire melhor"],
    audience: ["Atletas", "Pessoas com ronco", "Uso noturno"],
    faqs: [{ q: "É reutilizável?", a: "Sim, basta higienizar após o uso." }],
    stock: 120,
  },
  {
    id: "histopot",
    slug: "histopot-frascos-biopsia",
    name: "HistoPot® — Frascos para Biópsia",
    brand: "HistoPot",
    segment: "Laboratorial",
    price: 9.9,
    landingType: "C",
    featured: true,
    images: [
      "https://cdn.shopify.com/s/files/1/0534/2812/5857/files/6128_06baf15e-48d5-4dc1-ae86-56853daf92b1_1024x.png",
      "https://cdn.shopify.com/s/files/1/0534/2812/5857/files/6130_0ed96faa-33f4-4fbd-ac46-dbfa39373d59_1024x.png",
    ],
    short: "Padronização, segurança e precisão na coleta de biópsias.",
    problem: "O transporte inadequado de amostras compromete o diagnóstico anatomopatológico.",
    solution: "Os frascos HistoPot garantem vedação, identificação e segurança na coleta.",
    benefits: [
      { icon: <Lock />, title: "Vedação segura", text: "Evita vazamentos." },
      { icon: <Tag />, title: "Identificação", text: "Área para rotulagem." },
      { icon: <FlaskConical />, title: "Compatível", text: "Com formol e fixadores." },
      { icon: <Package />, title: "Volume", text: "Compra por volume." },
      { icon: <Recycle />, title: "Praticidade", text: "Pronto para uso." },
      { icon: <ShieldCheck />, title: "Qualidade", text: "Padrão Grupo Stra." },
    ],
    specs: [
      { label: "Uso", value: "Coleta de biópsia" },
      { label: "Compatibilidade", value: "Formol / fixadores" },
      { label: "Embalagem", value: "Múltiplas unidades" },
    ],
    steps: ["Colete a amostra", "Adicione o fixador", "Vede o frasco", "Identifique e transporte"],
    audience: ["Laboratórios de patologia", "Clínicas", "Hospitais"],
    faqs: [{ q: "Tem desconto por volume?", a: "Sim, consulte a tabela de preços por volume." }],
    stock: 5000,
  },
  {
    id: "pluslife-vet",
    slug: "pluslife-vet-diagnostico",
    name: "PlusLife Vet® — Diagnóstico Molecular Veterinário",
    brand: "PlusLife Vet",
    segment: "Veterinário",
    price: null,
    badge: "Sob Consulta",
    landingType: "A",
    featured: true,
    images: ["https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01146-Edit.webp?v=1747051259"],
    short: "Diagnóstico molecular rápido e preciso na clínica veterinária.",
    problem: "Diagnósticos veterinários precisos exigem tecnologia molecular acessível na rotina clínica.",
    solution: "PlusLife Vet leva biologia molecular ao ponto de atendimento veterinário com agilidade.",
    videoUrl: VIDEOS.youtubeSansure,
    benefits: [
      { icon: <PawPrint />, title: "Veterinário", text: "Desenvolvido para animais." },
      { icon: <Zap />, title: "Rápido", text: "Resultado ágil na clínica." },
      { icon: <Target />, title: "Preciso", text: "Alta sensibilidade." },
      { icon: <Package />, title: "Compacto", text: "Uso no ponto de atendimento." },
      { icon: <Hand />, title: "Simples", text: "Operação intuitiva." },
      { icon: <Handshake />, title: "Suporte", text: "Assistência dedicada." },
    ],
    specs: [
      { label: "Segmento", value: "Veterinário" },
      { label: "Tecnologia", value: "Molecular PoCT" },
      { label: "Garantia", value: "12 meses" },
    ],
    steps: ["Colete a amostra", "Prepare o cartucho", "Execute o teste", "Interprete o resultado"],
    audience: ["Clínicas veterinárias", "Hospitais veterinários", "Laboratórios vet"],
    faqs: [{ q: "Como adquirir?", a: "Solicite uma cotação com nossa equipe." }],
    stock: 8,
  },
  {
    id: "kit-gyno",
    slug: "gynoprep-kit-coleta-20ml",
    name: "GynoPrep® Kit Coleta Frasco 20mL + Espátula + Escova + Espéculo",
    brand: "GynoPrep",
    segment: "Laboratorial",
    price: 10.5,
    landingType: "C",
    images: [
      "https://cdn.shopify.com/s/files/1/0534/2812/5857/files/frasco-pinceis-fundo-branco_c65b720a-8cc4-4101-95d3-4cc4a26c93df.png?v=1758030703",
    ],
    short: "Kit completo para coleta de citologia em meio líquido.",
    problem: "A coleta padronizada é essencial para a qualidade da amostra citológica.",
    solution: "Kit completo com frasco, espátula, escova e espéculo, pronto para uso.",
    benefits: [
      { icon: <PenTool />, title: "Completo", text: "Todos os itens da coleta." },
      { icon: <Target />, title: "Padronizado", text: "Qualidade consistente." },
      { icon: <Package />, title: "Volume", text: "Preço escalonado." },
      { icon: <Recycle />, title: "Prático", text: "Pronto para uso." },
      { icon: <FlaskConical />, title: "Compatível", text: "Sistema GynoPrep." },
      { icon: <ShieldCheck />, title: "Qualidade", text: "Padrão Grupo Stra." },
    ],
    specs: [
      { label: "Frasco", value: "20 mL" },
      { label: "Inclui", value: "Espátula, escova, espéculo" },
      { label: "Uso", value: "Coleta citológica" },
    ],
    steps: ["Prepare o kit", "Realize a coleta", "Deposite no frasco", "Envie ao laboratório"],
    audience: ["Ginecologistas", "Laboratórios", "Clínicas"],
    faqs: [{ q: "Tem desconto por volume?", a: "Sim, consulte a tabela de preços por volume." }],
    stock: 3000,
  },
];

export const VOLUME_TIERS = [
  { min: 1, max: 9, discount: 0 },
  { min: 10, max: 49, discount: 0.05 },
  { min: 50, max: 99, discount: 0.1 },
  { min: 100, max: Infinity, discount: 0.15 },
];

export function volumeDiscount(qty: number): number {
  const tier = VOLUME_TIERS.find((t) => qty >= t.min && qty <= t.max);
  return tier ? tier.discount : 0;
}

export const BLOG_POSTS = [
  { id: 1, title: "HistoPot®: Padronização, segurança e precisão na coleta", date: "30/04/2026", image: "https://grupostra.com.br/cdn/shop/articles/BANNER_00b5ef7a-ccb0-4ffe-8e8b-d84120adeeee_615x420.png?v=1777560554" },
  { id: 2, title: "Grupo Stra na Animal Health 2026", date: "16/03/2026", image: "https://grupostra.com.br/cdn/shop/articles/BLOG_-_CAPA_-_ANIMAL_HEALTH_e4130e9f-a17b-4ef1-913d-e8faf83e823b_615x420.png?v=1773869579" },
  { id: 3, title: "Por que o início do ano é o melhor momento para atualizar estoques", date: "29/01/2026", image: "https://grupostra.com.br/cdn/shop/articles/BLOG_-_INICIO_DO_ANO_V2_9468dbfd-7eb8-4beb-8251-42663fc801a3_615x420.png?v=1769716430" },
  { id: 4, title: "Sansure® iPonatic II: Plataforma integrada de biologia molecular", date: "07/10/2025", image: "https://grupostra.com.br/cdn/shop/articles/POST_BLOG_-_Sansure_02_-_V3_615x420.png?v=1759837950" },
  { id: 5, title: "GynoPrep® GP-100: Automação e precisão na citologia", date: "06/10/2025", image: "https://grupostra.com.br/cdn/shop/articles/POST_BLOG_-_GynoPrep_V3_615x420.png?v=1759837894" },
  { id: 6, title: "Grupo Stra realiza palestra no 23º CBCC", date: "17/12/2025", image: "https://grupostra.com.br/cdn/shop/articles/POST_BLOG_-_SBCC_3_615x420.png?v=1765991991" },
];

export const MANAGERS = [
  { name: "Leonardo Straliotto", role: "CEO & Founder", bio: "Bacharel em Comércio Exterior (UNIVALI)." },
  { name: "Everton Vicente", role: "Gerente de Controladoria", bio: "15 anos na área contábil, MBA FGV / IPOG." },
  { name: "Andreza Magalhães", role: "Supervisora Comercial Hospitais & Distribuidores", bio: "Gestão Comercial (Estácio), 11+ anos." },
  { name: "Renata Guollo", role: "Gerente Comercial Laboratórios", bio: "Farmacêutica, Análises Clínicas (Unochapecó)." },
];

export function formatBRL(v: number | null): string {
  if (v === null) return "Sob consulta";
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
