# 🏥 GRUPO STRA — Plataforma de Saúde (Catálogo + Onboarding Médico + Dashboard E-commerce + StraAcademy + Admin)

## PROMPT PARA FIGMA MAKE — SUPER COMPLETO

---

## 🎯 CONCEITO (O QUE DIFFERE DO CONCORRENTE)

O concorrente (stage.grupostra.com) fez um **catálogo bonito mas morto** — sem preço, sem cadastro, sem compra, sem dashboard. Basicamente um panfleto digital.

**A nossa plataforma é VIVA:**

1. **Site público** = catálogo moderno e elegante (SEM preços visíveis) com slides, vídeos, produtos em destaque
2. **Interesse** = usuário clica "Tenho interesse" e cai no **onboarding qualificador**
3. **Onboarding médico** = cadastro multi-step que SONDA o cliente: profissão (autocomplete), CRM (busca automática), faturamento da clínica, média de pacientes, especialidade — tudo pra qualificar o lead
4. **Dashboard** = depois do cadastro, o usuário cai DENTRO do e-commerce. Agora vê preços, pode comprar, ver produtos, rastrear pedidos, pedir recorrente
5. **StraAcademy** = Netflix de treinamento dentro do dashboard — vídeos de como usar cada produto
6. **Admin** = tudo sincronizado — clientes, pedidos, qualificações, CRM, estoque, acadêmico

---

## 🎨 DESIGN SYSTEM

### Cores
```css
--stra-teal: #3EBDB1          /* CTA principal */
--stra-teal-dark: #2A9D8F
--stra-navy: #1D3557          /* texto dark, headings */
--stra-bg: #F8FAFC            /* background base */
--stra-white: #FFFFFF
--stra-gray-100: #F1F5F9
--stra-gray-300: #CBD5E1
--stra-gray-500: #64748B
--stra-gray-700: #334155
--stra-orange: #FF8C42        /* badges, alertas */
--stra-red: #EF4444           /* emergência */
--stra-gold: #D4A017           /* premium */
--stra-purple: #7C3AED        /* StraAcademy */
--stra-blue: #2563EB           /* links, info */
```

### Tipografia
- Headings: Inter Tight / Segoe UI (700/600)
- Body: Inter (400/500)
- Tamanhos: H1 48px | H2 32px | H3 24px | H4 18px | Body 16px | Small 14px

### Estilo
- Moderno, clean, médico, confiável
- Muito whitespace, cards com shadow suave
- Border-radius: 12px (cards), 8px (botões), 16px (containers)
- Animações suaves: fade-in nos slides, hover lift nos cards
- Inspiração: Apple Health, Linear.app, Vercel — moderno não corporativo velho

### Logo
```
https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Logo_GrupoStra_36a9bddc-fa61-46c6-bcab-d414f144d4a1.png?v=1783781064
```

---

## 🌐 PARTE 1 — SITE PÚBLICO (CATÁLOGO MODERNO)

> Igual ao stage.grupostra.com do concorrente, mas MELHOR. Mais moderno, mais interativo, com slides animados.

### Home Page

#### Seção 1 — Hero Slider (CARROSSEL animado, não banner estático)
Carrossel fullscreen com 3-4 slides rotativos (a cada 5s, com transição suave):

**Slide 1 — iPonatic III PCR Portátil**
```
Badge: "Resultado em até 45 minutos"
Título: "iPonatic III PCR Portátil"
Subtítulo: "no point-of-care"
Texto: "Diagnóstico molecular rápido e preciso. Simples, portátil e com amplo menu de testes."
CTAs: [Ver produto →] [Segmento Laboratorial]
Imagem: https://cdn.shopify.com/s/files/1/0534/2812/5857/files/grupostra_Sansure_iPonaticII_01.webp?v=1719583447
```

**Slide 2 — Ventilador T6 Amoul**
```
Badge: "UTI • Transporte • Emergência"
Título: "Ventilador Pulmonar T6"
Subtítulo: "Amoul® — Inovamos para salvar vidas"
CTAs: [Ver produto →] [Segmento Hospitalar]
Imagem: https://cdn.shopify.com/s/files/1/0534/2812/5857/files/AmoulT62.png?v=1702057067
```

**Slide 3 — GynoPrep GP-100**
```
Badge: "Automação em Citologia"
Título: "GP-100 Processador"
Subtítulo: "Precisão em meio líquido"
CTAs: [Ver produto →] [Conhecer GynoPrep]
Imagem: https://cdn.shopify.com/s/files/1/0534/2812/5857/products/conjunto_comRosa_01_1.png?v=1671721279
```

**Slide 4 — DEA i3 Amoul**
```
Badge: "Salvando vidas a cada parada"
Título: "Desfibrilador DEA i3"
Subtítulo: "Amoul® — Conformidade AHA e ERC"
CTAs: [Ver produto →] [Falar com especialista]
Imagem: https://cdn.shopify.com/s/files/1/0534/2812/5857/files/AmoulDEAi3-ajustado.jpg?v=1698266019
```

Elementos do slider:
- Setas laterais (esquerda/direita)
- Dots/bullets embaixo indicando slide atual
- Contador "01 / 04"
- autoplay 5s com barra de progresso
- Pausa no hover

#### Seção 2 — Segmentos (4 cards grandes)
```
🏥 HOSPITALAR
Equipamentos e dispositivos médicos para hospitais, clínicas e centros cirúrgicos.
[Explorar →]
IMG: https://grupostra.com.br/cdn/shop/files/bg_8dc3affa-4f95-4500-9e22-43994409c76d_2048x.jpg?v=1720712137

🔬 LABORATORIAL
Tecnologia de ponta para laboratórios, anatomia patológica e biologia molecular.
[Explorar →]
IMG: https://grupostra.com.br/cdn/shop/files/bg_9f973065-e567-4de8-bdf8-65e6802da7fd_2048x.jpg?v=1720717766

💊 FARMA
Produtos inovadores para o segmento farmacêutico e varejo, focados em bem-estar.
[Explorar →]
IMG: https://grupostra.com.br/cdn/shop/files/bg_ff4ae370-8393-4f5c-9caa-04d9cade713d_2048x.jpg?v=1720727471

🐾 VETERINÁRIO
Soluções de diagnóstico e monitoramento para clínicas veterinárias.
[Explorar →]
IMG: https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Banner_site_-_Segmento_Pluslife_Vet.png?v=1747250200
```

#### Seção 3 — Produtos em Destaque (carrossel horizontal)
Filtro por segmento (tabs): Destaques | Hospitalar | Laboratorial | Farma | Veterinário
Cards com imagem, marca, nome curto, UM badge de categoria. **SEM PREÇO** (preço só no dashboard).
Card clica → vai pra landing page do produto.

#### Seção 4 — Institucional (texto + imagem)
```
"Nascida em 2009, somos uma empresa de valores sólidos que cresce de forma
agressiva e sustentável. Desenvolvemos marcas de produtos inovadores e atuamos
nos segmentos hospitalar, laboratorial, veterinária e farma.
O único, este é o padrão Grupo Stra®."
```

#### Seção 5 — Notícias/Blog (3 cards recentes)
```
Card 1: "HistoPot®: Padronização na coleta de biópsias" — 30/04/2026
IMG: https://grupostra.com.br/cdn/shop/articles/BANNER_00b5ef7a-ccb0-4ffe-8e8b-d84120adeeee_615x420.png?v=1777560554

Card 2: "Grupo Stra na Animal Health 2026" — 16/03/2026
IMG: https://grupostra.com.br/cdn/shop/articles/BLOG_-_CAPA_-_ANIMAL_HEALTH_e4130e9f-a17b-4ef1-913d-e8faf83e823b_615x420.png?v=1773869579

Card 3: "Sansure® iPonatic II: Plataforma integrada" — 07/10/2025
IMG: https://grupostra.com.br/cdn/shop/articles/POST_BLOG_-_Sansure_02_-_V3_615x420.png?v=1759837950
```

#### Seção 6 — Newsletter + Contato
- Input e-mail + "Assinar"
- Telefone: +55 (47) 3183-8200
- WhatsApp flutuante (ícone: https://cdn.shopify.com/s/files/1/0534/2812/5857/files/whats.png?v=1707327654)

#### Footer
```
Grupo Stra® | Saúde e Bem-Estar
Rua Dom Sebastião 617, Vila Real — Balneário Camboriú, SC — CEP 88337-110
contato@grupostra.com.br | (47) 3183-8200
Seg-Sex: 8h-12h / 13:20h-18:08h
@grupo_stra | LinkedIn | YouTube
```

### Catálogo (/catalogo)
- Busca grande no topo: "Buscar por nome, marca ou descrição..."
- Filtros: Segmento (checkbox), Marca (checkbox), Ordenação
- "150 produtos encontrados"
- Grid de cards (imagem + marca + nome + badge segmento) **SEM PREÇO**
- Card clica → landing page

### Landing Page de Produto (/produto/[slug])
```
[Galeria de imagens] (8+ fotos, carrossel com ampliar)
[Especificações] SKU, marca, segmento
[Descrição completa] rich text
[Badges] categoria, segmento, marca
[CTA PRINCIPAL] = "TENHO INTERESSE" (não "comprar" — ancora pro onboarding)
[CTA secundário] = "Falar com especialista" (WhatsApp)
[Formulário de interesse inline]
  - Nome, Empresa, E-mail, Telefone, Mensagem
  - Botão "Enviar interesse"
[Produtos relacionados]
```

**DIFERENÇA CHAVE:** O visitante NÃO vê preço. Ele vê o produto, se interessa, e cai no funil de qualificação.

### Outras páginas públicas
- /sobre — história, equipe, valores
- /noticias — blog listagem + artigo
- /contato — formulário + mapa + dados
- /carreiras — vagas

---

## 🔐 PARTE 2 — ONBOARDING MÉDICO QUALIFICADOR (O CORAÇÃO DO NEGÓCIO)

> Quando o usuário clica "Tenho Interesse" num produto, ele entra nesse fluxo.
> O objetivo é CADASTRAR e QUALIFICAR o lead — saber o poder de compra.

### Step 1 — Identificação
```
📋 QUEM É VOCÊ?

Busque sua profissão:
[____________|autocomplete] ← digita e aparecem sugestões

Sugestões (autocomplete dinâmico):
- Médico(a)
- Médico(a) Anestesiologista
- Médico(a) Ginecologista
- Médico(a) Patologista
- Biomédico(a)
- Farmacêutico(a)
- Enfermeiro(a)
- Médico(a) Veterinário(a)
- Estudante de Medicina
- Estudante de Biomedicina
- Comprador(a) Hospitalar
- Gestor(a) de Clínica
- Dono(a) de Clínica
- Outro

Nome completo: [____________]
E-mail: [____________]
Telefone/WhatsApp: [____________]
```

### Step 2 — Validação CRM (BUSCA AUTOMÁTICA)
> Aparece SE a profissão selecionada for regulamentada (Médico, Biomédico, Farmacêutico, Enfermeiro, Vet)

```
🔎 VALIDAÇÃO PROFISSIONAL

Conselho: [CRM ▼] (dropdown: CRM, CRBM, CRF, COREN, CRMV)
Número: [____________]
UF: [SC ▼] (dropdown todos estados)

→ SISTEMA BUSCA AUTOMATICAMENTE O CRM NO BANCO DE DADOS DO CONSELHO
→ Mostra: ✅ "João Silva — CRMSP 112418 — Anestesiologia — Ativo"
→ Ou: ❌ "Não encontrado. Verifique os dados ou anexe seu documento."

Upload de documento (backup se CRM não encontrar): [PDF/JPG]
RQE (opcional): [____________]
Especialidade: [____________|autocomplete]
  → Anestesiologia, Ginecologia, Cardiologia, Pediatria, Cirurgia Geral,
     Clínica Médica, Dermatologia, Neurologia, Ortopedia, Patologia,
     Otorrinolaringologia, Medicina Veterinária, etc.
```

### Step 3 — Qualificação Comercial (SONDAGEM DE POTENCIAL)
> Esta é a sacada genial — qualificar o lead pra saber quanto ele pode comprar.

```
📊 INFORMAÇÕES COMERCIAIS

Tipo de instituição onde atua:
  ○ Hospital Privado
  ○ Hospital Público/SUS
  ○ Clínica Privada
  ○ Laboratório de Análises Clínicas
  ○ Laboratório de Anatomia Patológica
  ○ Clínica Veterinária
  ○ Distribuidora
  ○ Independente/Autônomo
  ○ Universidade/Ensino

Faturamento mensal estimado da sua instituição:
  ○ Até R$ 50 mil/mês
  ○ R$ 50 mil - R$ 200 mil/mês
  ○ R$ 200 mil - R$ 500 mil/mês
  ○ R$ 500 mil - R$ 1 milhão/mês
  ○ Acima de R$ 1 milhão/mês

Média de pacientes/exames por mês:
  ○ Até 100/mês
  ○ 100 - 500/mês
  ○ 500 - 1.000/mês
  ○ 1.000 - 5.000/mês
  ○ Acima de 5.000/mês

Quantos profissionais na equipe:
  ○ 1-5
  ○ 5-20
  ○ 20-50
  ○ 50-200
  ○ 200+

Cidade/Estado: [____________]
CEP: [____________]

Segmentos de interesse (multi-select):
  ☐ Hospitalar
  ☐ Laboratorial
  ☐ Veterinário
  ☐ Farma
```

### Step 4 — Senha e Confirmação
```
🔐 CRIAR CONTA

Senha: [____________] (medidor de força)
Confirmar senha: [____________]

☐ Aceito os Termos de Uso
☐ Aceito a Política de Privacidade
☐ Quero receber novidades e ofertas

[ CRIAR MINHA CONTA → ]

→ Mensagem: "✅ Conta criada! Bem-vindo(a) à plataforma Grupo Stra®.
    Você já pode navegar pelo catálogo, ver preços e fazer pedidos."
```

### Resultado do Onboarding → Score Automático
> O admin recebe o lead com um SCORE automático baseado no faturamento + volume:

```
🟢 LEAD QUENTE (score 80-100)
   Faturamento > R$ 500k/mês + 1000+ pacientes/mês
   
🟡 LEAD MÉDIO (score 40-79)
   Faturamento R$ 50k-500k + 100-1000 pacientes
   
🔴 LEAD FRIO (score 0-39)
   Faturamento < R$ 50k ou independente
```

---

## 🛒 PARTE 3 — DASHBOARD E-COMMERCE (PÓS-CADASTRO)

> Depois do cadastro, o usuário CAI no dashboard. Aqui ele vê preços, compra, rastreia, aprende.

### Layout do Dashboard
```
[SIDEBAR ESQUERDA — fixa, 260px]
- Logo Stra (pequeno)
- 👋 Olá, Dr. João
  Score: 🟢 Lead Quente
- ━━━━━━━━━
- 🏠 Início
- 🛒 Catálogo (com preços agora!)
- 📦 Meus Pedidos
- 🔄 Pedidos Recorrentes
- 💬 Cotações
- ❤️ Favoritos
- 📚 StraAcademy
- 👤 Meu Perfil
- 📍 Endereços
- ❓ Suporte
- ━━━━━━━━━
- Sair

[TOPBAR]
- Busca global
- 🛒 Carrinho (badge com qtd)
- 🔔 Notificações
- Avatar
```

### Dashboard Início
```
Bem-vindo, Dr. João! 👋

┌──────────┬──────────┬──────────┬──────────┐
│ 📦 Pedidos│ 💬 Cotações│ ❤️ Favoritos│ 📚 Treinos │
│    12     │   3 ativas│    8     │ 4 novos   │
└──────────┴──────────┴──────────┴──────────┘

[Últimos pedidos]
#1024 — R$ 3.940,00 — Em trânsito — 12/07
#1018 — R$ 1.215,00 — Entregue — 28/06

[Recomendados para você]
Baseado no seu perfil (Anestesiologia):
- Scope Medical VLSCOPE Lâmina MAC 3
- MedCaptain VS-10S Vídeo Laringoscópio
- Stra Medical Centrífuga PRP/PRF

[StraAcademy — Novos treinos]
▶ "Como usar o Vídeo Laringoscópio VLSCOPE" — 12 min
▶ "Manutenção de Lâminas de Inox" — 8 min
```

### Catálogo (com preços!)
```
Mesmo catálogo do site público, mas AGORA MOSTRA:
- Preço visível
- Botão "Adicionar ao carrinho" (não só "tenho interesse")
- Botão "Solicitar cotação" para B2B
- Desconto por volume (tiered pricing em insumos)
- "Comprar novamente" em produtos já comprados
```

### Página de Produto (dentro do dashboard)
```
- Galeria completa
- Descrição técnica
- Preço + parcelamento
- [ADICIONAR AO CARRINHO] (verde)
- [SOLICITAR COTAÇÃO] (outline)
- [ASSINAR] (recorrência — "Receber todo mês")
- Especificações técnicas (tabela)
- StraAcademy (vídeos relacionados a este produto)
- Produtos relacionados
```

### Meus Pedidos
```
Tabela: Nº | Data | Itens | Total | Status | Ações
Status badges: Pagamento | Processando | Enviado | Entregue | Cancelado

Click → Detalhe do pedido:
- Timeline visual de status (progress bar)
- Itens com imagem
- Endereço de entrega
- Código de rastreio (link direto p/ transportadora)
- Nota fiscal (download PDF)
- "Comprar novamente"
```

### Pedidos Recorrentes 🔄
```
Configure entregas automáticas:

[+ CRIAR RECORRÊNCIA]
- Produto: [dropdown]
- Quantidade: [____]
- Frequência:
  ○ Semanal
  ○ Quinzenal
  ○ Mensal ← mais comum
  ○ Bimestral
  ○ Trimestral
- Próxima entrega: [data]
- Endereço: [salvo]
- Pagamento: [cartão salvo]

Recorrências ativas:
🔄 Kit GynoPrep Coleta 20mL × 50un — Mensal — Próxima: 20/07 — R$ 325,00
🔄 Cânula Descartável JS 2.0 × 5un — Mensal — Próxima: 05/08 — R$ 349,50
```

### Cotações
```
- Lista de cotações solicitadas
- Status: Em análise, Respondida, Aprovada, Expirada
- Detalhe: itens + resposta do comercial com preço especial
- Aceitar cotação → converte em pedido
```

### Favoritos
Grid de produtos salvos com "Adicionar ao carrinho"

### Perfil
```
Dados pessoais (editáveis)
CRM: CRMSP 112418 ✅ Verificado
Especialidade: Anestesiologia
Instituição: Hospital Sírio-Libanês
Faturamento: R$ 500k-1M/mês (editável)
Score: 🟢 Lead Quente
Endereços de entrega (múltiplos)
Segmentos de interesse
```

---

## 📚 PARTE 4 — STRAACADEMY (NETFLIX DE TREINAMENTO)

> Plataforma de vídeos educativos dentro do dashboard. Ensina médicos a usar produtos.

### Layout
```
📚 STRAACADEMY

[Busca] [Filtros: Marca ▼] [Segmento ▼] [Duração ▼]

┌─────────────────────────────────────────────┐
│ ▶ EM DESTAQUE                                │
│ "Dominando o Vídeo Laringoscópio VLSCOPE"   │
│ Dr. Carlos Mendes — Anestesiologista         │
│ 24 min | Scope Medical                       │
│ [ASSISTIR AGORA]                             │
└─────────────────────────────────────────────┘

[Categorias]
🫁 Intubação e Vias Aéreas (Scope Medical, MedCaptain)
🔬 Citologia e Laboratório (GynoPrep, Sansure)
🏥 Emergência e UTI (Amoul)
🐾 Veterinário (PlusLife Vet)
💊 Bem-Estar (Flux Air, Bug Bite Thing)
🏦 Banco de Sangue (L&K)
👂 Otorrino (Stra Lavador)

[Cards de vídeo — grid 4 colunas]
Cada card:
- Thumbnail (com tempo de duração)
- Título
- Especialista nome
- Marca/produto relacionado
- [▶ Assistir]
- Barra de progresso (se já assistiu)

[Página do vídeo]
- Player de vídeo (YouTube embed ou hospedagem própria)
- Título + descrição
- Materiais de apoio (PDF download)
- Produto relacionado [Ver produto →]
- Próximo vídeo sugerido
- Certificado de conclusão (gera PDF quando assiste 100%)
```

### Vídeos sugeridos (baseado nas APIs disponíveis)
```
1. "iPonatic II — Diagnóstico Molecular PoCT" 
   YouTube: https://www.youtube.com/embed/m7r3FLgJsZ4
   
2. "Demonstração VLSCOPE"
   YouTube: https://www.youtube.com/embed/5Nyrp6Ms8ks
   
3. "Como realizar exame citológico com GynoPrep"
4. "DEA i3 — Protocolo de resgate"
5. "Centrífuga PRP/PRF — Passo a passo"
6. "Lavador de Ouvido JS 2.0 — Técnica correta"
7. "Biomixer 550 — Homogeneização de sangue"
8. "HistoPot — Boas práticas em biópsia"
```

---

## 📊 PARTE 5 — ADMIN (SINCRONIZADO COM TUDO)

### Dashboard Admin
```
KPIs:
- Novos cadastros hoje/mês
- Leads quentes 🟢 pendentes de contato
- Pedidos em aberto
- Faturamento do dia/mês/ano
- Conversão onboarding → primeira compra
- StraAcademy: vídeos mais assistidos

[Fila de Leads — Kanban]
🔴 Frio → 🟡 Médio → 🟢 Quente → 📞 Contatado → 💬 Cotação → ✅ Fechado

[Cadastros recentes]
Dr. João Silva | CRMSP 112418 | Anestes. | R$ 500k-1M/mês | 🟢 Quente | [Ver ficha]
Dra. Maria Santos | CRM-RJ 99887 | Ginecol. | R$ 200k-500k | 🟡 Médio | [Ver ficha]
```

### CRM Clientes
```
Ficha do cliente:
- Dados completos + CRM + especialidade
- Score de qualificação (faturamento + volume)
- Histórico de pedidos + valor total (LTV)
- Cotações enviadas
- Pedidos recorrentes ativos
- StraAcademy: vídeos assistidos + progresso
- Interações (notas, ligações, e-mails)
- Timeline completa
- Tags: [VIP] [Hospital Grande] [Recorrência Ativa]
- Ações: [Ligar] [WhatsApp] [Criar cotação] [Adicionar nota]
```

### Gestão de Produtos
```
CRUD completo:
- Nome, marca, SKU, descrição, imagens, especificações
- Preço público (mostrado no dashboard)
- "Sob consulta" toggle
- Estoque
- Segmento, tags, categoria
- Produtos relacionados
- Status: Ativo/Inativo
- Destaque: Sim/Não
- StraAcademy: vincular vídeos ao produto
```

### Gestão de Pedidos
```
- Lista com filtros (status, data, cliente, valor)
- Detalhe: cliente + itens + endereço + pagamento
- Mudar status (timeline)
- Rastreio
- Nota fiscal
- Pedidos recorrentes (gerenciar frequências)
```

### Gestão StraAcademy
```
- Upload de vídeos (ou URL YouTube/Vimeo)
- Título, descrição, categoria
- Vincular a produto/marca
- Materiais de apoio (PDF)
- Métricas: visualizações, conclusões, tempo médio
- Certificados emitidos
```

### Gestão de Cotações
```
- Receber cotações dos clientes
- Responder com preço especial + prazo
- Converter em pedido
```

### Relatórios
```
- Vendas por período, marca, segmento
- Funil de leads (onboarding → compra)
- Score médio dos clientes
- Produtos mais vendidos
- StraAcademy: engajamento
- Pedidos recorrentes: receita previsível
- Exportar CSV/PDF
```

### Configurações
```
- Dados da empresa
- Usuários admin (roles: Admin, Comercial, Conteúdo StraAcademy)
- E-mails transacionais
- Integrações (Shopify, WhatsApp, ERP)
- Regras de scoring (definir pesos)
```

---

## 📦 CATÁLOGO COMPLETO — TODOS OS PRODUTOS COM URL DE IMAGEM

> IMPORTANTE: Usar EXATAMENTE essas URLs de imagem. Não usar placeholders.

### GynoPrep (16 produtos) — Laboratorial
HERO: GP-100 — R$ 37.990,00 → https://cdn.shopify.com/s/files/1/0534/2812/5857/products/conjunto_comRosa_01_1.png?v=1671721279

| Produto | Preço | URL da Imagem |
|---------|-------|---------------|
| Kit Coleta Frasco 20mL + Escova Pincel | R$ 6,50 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/frasco-pincel-fundo-branco_e710b26d-22f6-4b9e-bdbd-30fd8d87ffda.png?v=1758030081 |
| Kit Coleta Frasco 20mL Completo | R$ 10,50 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/frasco-pinceis-fundo-branco_c65b720a-8cc4-4101-95d3-4cc4a26c93df.png?v=1758030703 |
| Kit Coleta Frasco 10mL | R$ 6,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/frasco-nitido-fundo-branco_c63b995e-a353-4be4-b5fc-edfdbefd0ad5.png?v=1757969729 |
| Kit Coleta + Espéculo M | R$ 7,50 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/image0.jpg?v=1758109575 |
| Kit Coleta + Escova Combi | R$ 6,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/frasco-nitido-fundo-branco_d04eab16-45af-4412-8d4c-19a577dc5362.png?v=1758029895 |
| Solução Conservação 10mL | R$ 5,50 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/frasco-fundo-branco_5f24135a-0863-4fd6-83d5-8c287076c29d.png?v=1757969312 |
| Solução Conservação 500mL | R$ 280,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/4682235C-3AB7-47E6-B9EE-7BA862832CE3_76d848f1-bf31-4162-895f-87a6adccf41f.jpg?v=1758034407 |
| Filtro Duplo de Membrana | R$ 7,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/cf10d572-8cfe-43a5-bfeb-2f5557d3083f.png?v=1757704864 |
| GynoPrep Vortex | R$ 1.780,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/produto-fundo-branco-melhorado.png?v=1758035089 |
| GP-100 Processador Citologia | R$ 37.990,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/conjunto_comRosa_01_1.png?v=1671721279 |

### Sansure (18 produtos) — Laboratorial
HERO: MA-6000 — R$ 198.000,00 → https://cdn.shopify.com/s/files/1/0534/2812/5857/files/4e3555db-b232-4962-90e6-eca1d56e60d2.png?v=1757096356
VÍDEO: https://www.youtube.com/embed/m7r3FLgJsZ4

| Produto | Preço | URL da Imagem |
|---------|-------|---------------|
| Suporte Reagentes iPonatic | R$ 39,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/77b38bb7-d83e-4f5b-b7a2-84722e567b28_aa17c732-6b71-4e80-8586-14410f5d44cb.png?v=1757345925 |
| Tira 8 Tubos PCR | R$ 9,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/unnamed_4db55ada-30b2-4e05-9310-5da768abedc2.png?v=1757358215 |
| Termociclador MA-6000 | R$ 198.000,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/4e3555db-b232-4962-90e6-eca1d56e60d2.png?v=1757096356 |
| Extrator Natch 48 | R$ 68.000,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/c6077e83-ffca-4e19-958a-799a486063b5_b1ace15c-e1b2-4043-ae83-201776413dd2.png?v=1757097224 |
| Kit qPCR Chlamydia | R$ 91,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB.webp?v=1757090903 |
| Kit qPCR Painel Resp 3 | R$ 121,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB.webp?v=1757090903 |
| Kit qPCR Herpes 2 | R$ 104,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB.webp?v=1757090903 |
| Kit qPCR Strepto B | R$ 98,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB.webp?v=1757090903 |
| Kit qPCR TB | R$ 86,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB.webp?v=1757090903 |
| Kit qPCR HCMV | R$ 95,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB.webp?v=1757090903 |
| Kit qPCR Painel Resp 6 | R$ 162,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB.webp?v=1757090903 |
| Kit qPCR SARS-CoV-2 | R$ 89,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB.webp?v=1757090903 |
| Kit qPCR IST MG/MH/TV | R$ 58,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB.webp?v=1757090903 |
| Kit qPCR IST CT/UU/NG | R$ 58,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB_96470e1e-5eaf-461f-bf33-00c274d4a109.webp?v=1757091710 |
| Kit qPCR HPV 15 Genót | R$ 98,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB_96470e1e-5eaf-461f-bf33-00c274d4a109.webp?v=1757091710 |
| Kit qPCR HPV 16+18 | R$ 50,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB_96470e1e-5eaf-461f-bf33-00c274d4a109.webp?v=1757091710 |
| iPonatic II PoCT | R$ 83.980,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/grupostra_Sansure_iPonaticII_01.webp?v=1719583447 |

### Scope Medical (55 produtos) — Hospitalar
HERO: Conjunto RM — R$ 8.190,00 → https://cdn.shopify.com/s/files/1/0534/2812/5857/products/scoope_medical_3.jpg?v=1671719116

| Produto | Preço | URL da Imagem |
|---------|-------|---------------|
| Bateria VLSCOPE 3400mAh | R$ 1.210,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/1_8fdef62a-c02b-43d9-b4d4-6959dbccce20.png?v=1674750880 |
| Cabo Fibra Óptica RM SM-325H9 | R$ 975,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/1_29185b35-f1dd-4526-bb12-0a65a5ce43a8.png?v=1674674937 |
| Lâmina VLSCOPE MAC 5 | R$ 3.940,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/video_laringosc_pio_07_1_1_1_1_1_1_05a4796a-c372-4508-9489-cd011db9f7ad.jpg?v=1674217386 |
| Lâmina VLSCOPE MAC 3 | R$ 3.940,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/video_laringosc_pio_07_1_1_1_1_1_1_597ffa55-1d31-43a5-9c3b-ce91b9862a07.jpg?v=1674217210 |
| Lâmina Fibra Óptica Curva MAC 3 | R$ 325,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/lamina_fibra_curva_1_1_1_1_1_c5582e2a-57ea-42d7-a5b5-58f859c488ba.jpg?v=1674186751 |
| Lâmina Convencional LED MAC 3 | R$ 122,14 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/lamina_convencional_curva_1_1_1_1_1_6cd0d8db-8c20-4b9a-ba34-7cf0e58c0a4a.jpg?v=1674161278 |
| Lâmina RM MILL 4 SM-3244 | R$ 890,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/4162-01_2d3f733f-2f75-435d-9513-11537993e0b6.jpg?v=1674157248 |
| Lâmpada LED 8/32 | R$ 19,98 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/lampada_1.jpg?v=1671730438 |
| Lâmpada Hyper LED | R$ 208,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/lampada.jpg?v=1671730362 |
| Estojo 1 Cabo + 4 Lâminas | R$ 62,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/mac4-06_41dfa154-6b9f-4c25-9a0a-c4f33abffd7b.png?v=1675370513 |
| Conjunto RM Completo | R$ 8.190,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/scoope_medical_3.jpg?v=1671719116 |

### Stra Medical (9 produtos)
| Produto | Preço | URL da Imagem |
|---------|-------|---------------|
| Microcentrífuga MC-15Pro | R$ 5.980,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC03732_1.png?v=1765197104 |
| Cabine Biossegurança PA-700 | R$ 19.990,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/WhatsAppImage2024-10-15at5.06.45PM.jpg?v=1729022881 |
| Reanimador Neonatal | R$ 215,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/reanimador_neonatal_02.png?v=1674219718 |
| Reanimador Adulto | R$ 215,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/reanimador_adulto_01_dd47f1cd-358d-46d5-9382-71db31bff829.png?v=1674218767 |
| Termômetro E125 | R$ 134,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/Termometro7.jpg?v=1690222262 |
| Oxímetro BM1000 | R$ 129,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/01.png?v=1637787023 |
| Centrífuga PRP/PRF SM4000-8 | R$ 2.162,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/product-gallery-01.jpg?v=1631706867 |
| Alicate Ordenha Manual HS-002 | R$ 1.215,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/2Alicate-ImagemSite1000x1000JPEG.png?v=1693410314 |

### Amoul (8 produtos)
| Produto | Preço | URL da Imagem |
|---------|-------|---------------|
| Ventilador T6 | R$ 84.990,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/AmoulT62.png?v=1702057067 |
| DEA i3 | R$ 8.828,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/AmoulDEAi3-ajustado.jpg?v=1698266019 |
| Ventilador T5 | R$ 47.100,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/6.png?v=1702146165 |
| Bateria DEA | R$ 1.790,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/0279_bateria-para-desfibrilador-externo-automatico-dea-i5-amoul-bateria-dea-i5_z1_638137160048636875.jpg?v=1698267445 |
| Bolsa Transporte DEA | R$ 829,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/07_1_1.png?v=1669811976 |
| Eletrodos Infantil | R$ 1.080,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/03_1__1_1.png?v=1669812285 |
| Eletrodos Adulto | R$ 611,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/01_1__1_1.png?v=1669812128 |
| Cabine Metálica DEA | R$ 2.580,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/amoul_aed_wallhangbox1.png?v=1669811507 |

### HistoPot (7 produtos)
| Biópsia 60mL | R$ 823,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/6128_06baf15e-48d5-4dc1-ae86-56853daf92b1.png?v=1759440735 |
| Galão 20L | Consulta | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/IMG_3222---Tratada_aa05015b-4d4e-4077-aa1e-db6147d3ed86.png?v=1742414648 |
| Nacional 40mL | R$ 600,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC07868_-_Tratada.webp?v=1741267574 |
| Biópsia 180mL | R$ 691,80 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC07860-Tratada.webp?v=1741267710 |
| Biópsia 1000mL | R$ 681,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/6127_c4845f8a-f68e-495a-b6bf-74f3fb6ee5f4.png?v=1759440712 |
| Nacional 1250mL | R$ 1.374,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/6130_0ed96faa-33f4-4fbd-ac46-dbfa39373d59.png?v=1759440789 |

### KASVI (8 produtos)
| Rack 100 Microtubos | R$ 89,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/8d47cabc-a8cb-45be-8b89-4b0bce8e44e7.png?v=1757357747 |
| Ponteira 1000uL Filtro | R$ 617,50 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/ecde3c38-062a-4110-b81a-6d399698a97e_6cb803dd-b676-48ff-bb47-e760524c3b66.png?v=1757357979 |
| Ponteira 10uL Filtro | R$ 460,80 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/unnamed_0d43bd1d-ad86-485e-85fb-32728a6afc7b.png?v=1757358591 |
| Microtubo 1,5mL | R$ 170,80 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/b7e5eb20-3a88-4f78-b832-0147d5a66646_42a28c9e-93bf-41bc-826e-300c5ad7e912.png?v=1757352180 |
| Micropipeta P200 | R$ 1.380,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/unnamed_9149742c-0812-48bd-b54f-3e765cf64f4a.png?v=1757337994 |
| Micropipeta P10 | R$ 1.380,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/unnamed_0f2d0eae-840d-4dc1-8be1-8304a4311731.png?v=1757337589 |
| Suporte Micropipetas | R$ 298,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/unnamed_243ed89b-3cba-4ec2-abac-06bcdf19efc3.png?v=1757336540 |

### L&K (5 produtos)
| Biomixer 550 | R$ 21.720,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/WhatsAppImage2024-04-09at16.24.48.jpg?v=1712690708 |
| Biosealer CR-6AA | R$ 27.336,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/033.jpg?v=1671731606 |
| Biosealer CR-4 AA | R$ 27.760,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/011_2.jpg?v=1671731221 |
| Alicate Selagem | R$ 11.250,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/1.png?v=1674666381 |
| Biomixer 330-1 | R$ 21.720,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/homogeneizador_de_coleta_biomixer_01.jpg?v=1671727859 |

### DDM Medical (4 produtos)
| Grey Fuse 1000mL | R$ 306,27 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/2_e00eaa91-f59c-48ac-acf9-ca310d2063dc.png?v=1685386559 |
| Clear Fuse 1000mL | R$ 730,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/bolsatransparente_1000ml_antihorario.png?v=1676320615 |
| Clear Fuse 500mL | R$ 500,32 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/bolsatransparente_500ml_antihorario.png?v=1676321084 |
| Grey Fuse 500mL | R$ 291,57 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/1_c48525f5-e848-401b-8558-aa7ebe652bc0.png?v=1685386635 |

### Outras Marcas
| PlusLife Vet PoCT | Consulta | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01146-Edit.webp?v=1747051259 |
| MedCaptain VS-10S | R$ 14.980,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/118704-15011591.webp?v=1706557003 |
| Myr Myreva SS-30 | R$ 202.796,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/Designsemnome_6_9773b538-c7e2-47a5-ae78-f80a949308b6.png?v=1675197421 |
| LMB TS08 | R$ 23.065,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/001_2.jpg?v=1672856643 |
| McFusion Conector | R$ 8,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC08220_copiar_a50d22d3-71f5-468b-8c43-cb8e9ca00d7a.png?v=1748617500 |
| Braçadeira PNI | R$ 36,78 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/WhatsAppImage2024-02-19at5.53.40PM.jpg?v=1708376067 |
| Stra Lavador JS 2.0 | R$ 3.656,77 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC00985_-_Edit.webp?v=1751035761 |
| Stra Cânula JS 2.0 | R$ 69,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/c_nula_pl_stica_descartavel_endo_tips.jpg?v=1671715775 |
| Flux Air | R$ 49,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/img_packs_site_GS__01.png?v=1681396910 |
| Bug Bite Thing | R$ 59,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/1_7.png?v=1669831253 |
| Nonin 7500FO | R$ 19.250,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Nonin_Oximetro_Tratada.webp?v=1729279623 |
| EasyClean Pistola | R$ 3.150,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/pistola_de_limpeza_copiar.webp?v=1729281027 |
| EasyClean Compressor | R$ 3.550,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/1_s.png?v=1674737126 |

### Assets do Site
```
Logo Stra: https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Logo_GrupoStra_36a9bddc-fa61-46c6-bcab-d414f144d4a1.png?v=1783781064
Logo vertical: https://cdn.shopify.com/s/files/1/0534/2812/5857/files/grupostra_vertical.png?v=1628798858
Ícone WhatsApp: https://cdn.shopify.com/s/files/1/0534/2812/5857/files/whats.png?v=1707327654
Ícone SAC: https://cdn.shopify.com/s/files/1/0534/2812/5857/files/icone_SAC_site__Prancheta_1.png?v=1671736330
Ícone Instagram: https://cdn.shopify.com/s/files/1/0534/2812/5857/files/icone_instagram.png?v=1783781064
Vídeo 1 (24MB): https://cdn.shopify.com/videos/c/o/v/1f379b64ee134cd491f3edffa074da74.mp4
Vídeo 2 (51MB): https://cdn.shopify.com/videos/c/o/v/978034f96aed4fdfa6357261e6550156.mp4
YouTube Sansure: https://www.youtube.com/embed/m7r3FLgJsZ4
YouTube 2: https://www.youtube.com/embed/5Nyrp6Ms8ks
YouTube 3: https://www.youtube.com/embed/WKdotkKJQYQ
Banner Desktop: https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Banner_Site_BG_-_ANIMAL_MEDVEP_-_Full_Screen_1920_X_700.png?v=1783781264
Banner PlusLife: https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Banner_site_-_Segmento_Pluslife_Vet.png?v=1747250200
Sansure iPonatic 01: https://grupostra.com.br/cdn/shop/files/grupostra_Sansure_iPonaticII_01_1024x.webp?v=1719583447
Sansure iPonatic 02: https://grupostra.com.br/cdn/shop/files/grupostra_Sansure_iPonaticII_02_1024x.webp?v=1720036353
Blog 1: https://grupostra.com.br/cdn/shop/articles/BANNER_00b5ef7a-ccb0-4ffe-8e8b-d84120adeeee_615x420.png?v=1777560554
Blog 2: https://grupostra.com.br/cdn/shop/articles/BLOG_-_CAPA_-_ANIMAL_HEALTH_e4130e9f-a17b-4ef1-913d-e8faf83e823b_615x420.png?v=1773869579
Blog 3: https://grupostra.com.br/cdn/shop/articles/POST_BLOG_-_Sansure_02_-_V3_615x420.png?v=1759837950
Blog 4: https://grupostra.com.br/cdn/shop/articles/POST_BLOG_-_GynoPrep_V3_615x420.png?v=1759837894
Blog 5: https://grupostra.com.br/cdn/shop/articles/BLOG_-_INICIO_DO_ANO_V2_9468dbfd-7eb8-4beb-8251-42663fc801a3_615x420.png?v=1769716430
Blog 6: https://grupostra.com.br/cdn/shop/articles/POST_BLOG_-_SBCC_3_615x420.png?v=1765991991
Blog 7: https://grupostra.com.br/cdn/shop/articles/Post_Blog_-_Pos_MEDVEP_1_615x420.png?v=1762279624
Blog 8: https://grupostra.com.br/cdn/shop/articles/POST_BLOG_-_SBCC_615x420.png?v=1760365434
```

---

## 🏢 DADOS DA EMPRESA
```
Grupo Stra® — Saúde e Bem-Estar
Fundação: 2009
CEO: Leonardo Straliotto (Comércio Exterior, UNIVALI)
Endereço: Rua Dom Sebastião 617, Vila Real — Balneário Camboriú, SC — CEP 88337-110
Telefone: +55 (47) 3183-8200
E-mail: contato@grupostra.com.br
Horário: Seg-Sex 8h-12h / 13:20h-18:08h
Instagram: @grupo_stra | LinkedIn | YouTube: @grupostra
Segmentos: Hospitalar, Laboratorial, Veterinário, Farma
11+ marcas próprias, 150+ produtos

Gestores:
- Leonardo Straliotto — CEO & Founder
- Everton Vicente — Gerente de Controladoria (MBA FGV)
- Andreza Magalhães — Supervisora Comercial Hospitais
- Renata Guollo — Gerente Comercial Laboratórios (Farmacêutica)
```

---

## 📝 INSTRUÇÕES PARA O FIGMA MAKE

1. Site público = catálogo moderno (SEM preços) estilo stage.grupostra.com mas MAIS moderno
2. Hero = carrossel animado com slides dos produtos em destaque
3. Clique "Tenho Interesse" → abre onboarding qualificador
4. Onboarding = autocomplete profissão + busca CRM automática + sondagem (faturamento, pacientes)
5. Score automático do lead (quente/médio/frio) baseado no cadastro
6. Dashboard pós-cadastro = e-commerce completo com preços
7. StraAcademy = plataforma de vídeos dentro do dashboard (estilo Netflix)
8. Pedidos recorrentes (assinatura mensal de produtos)
9. Rastreio de pedidos com timeline visual
10. Admin sincronizado com tudo (leads, pedidos, CRM, acadêmico, estoque)
11. Usar TODAS as URLs de imagem reais listadas acima
12. Usar vídeos YouTube embed nos produtos e StraAcademy
13. Mobile-first responsivo
14. Cor primária #3EBDB1 (teal)
15. Dados reais da empresa

> **DIFERENCIAL vs concorrente:** O concorrente fez só catálogo. A nossa plataforma é CATÁLOGO + ONBOARDING QUALIFICADOR + E-COMMERCE + ACADEMY + ADMIN — tudo integrado.