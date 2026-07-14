# 🏥 GRUPO STRA — Plataforma de Saúde Completa (E-commerce + Landing Pages + CRM)

## PROMPT PARA FIGMA MAKE — SUPER COMPLETO COM ASSETS REAIS

---

## 🎯 VISÃO GERAL

Plataforma web completa para o **Grupo Stra — Saúde e Bem Estar** (https://grupostra.com.br). Não é apenas e-commerce — é uma **plataforma de saúde** onde cada produto tem sua própria **landing page de vendas rica** com vídeos, galerias e conteúdo persuasivo. Inclui: loja virtual B2B/B2C, landing pages individuais por produto, onboarding com validação médica (CRM), CRM administrativo interno, gestão de produtos, blog/conteúdo educativo, e checkout.

**Site atual:** https://grupostra.com.br (Shopify)
**CDN de imagens:** https://cdn.shopify.com/s/files/1/0534/2812/5857/
**CDN de imagens (alt):** https://grupostra.com.br/cdn/shop/files/

---

## 🎨 DESIGN SYSTEM

### Paleta de Cores (extraída do site real)
```css
--stra-teal: #3EBDB1          /* cor de marca principal (usada nos botões do site real) */
--stra-teal-dark: #2A9D8F     /* hover */
--stra-teal-light: #E0F5F2    /* backgrounds suaves */
--stra-green: #0B8B6E         /* verde médico secundário */
--stra-green-dark: #066B52    
--stra-navy: #1D3557          /* texto escuro, usado nos banners do site */
--stra-white: #FFFFFF
--stra-gray-50: #F9FAFB
--stra-gray-100: #F3F4F6
--stra-gray-300: #D1D5DB
--stra-gray-500: #6B7280
--stra-gray-700: #374151
--stra-gray-900: #111827
--stra-orange: #FF8C42        /* alertas, badges */
--stra-red: #E63946           /* DEA, emergência */
--stra-gold: #D4A017           /* "mais vendido" */
```

### Tipografia
- **Headings:** Inter Tight / Segoe UI (700/600) — Segoe UI é a fonte usada no site atual
- **Body:** Inter / Segoe UI (400/500)
- **Sizes:** H1 48px | H2 36px | H3 28px | H4 22px | Body 16px | Small 14px

### Logo
```
Logo Grupo Stra:
https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Logo_GrupoStra_36a9bddc-fa61-46c6-bcab-d414f144d4a1.png?v=1783781064

Logo vertical (footer/institucional):
https://cdn.shopify.com/s/files/1/0534/2812/5857/files/grupostra_vertical.png?v=1628798858
```

### Estilo Visual
- Limpo, médico, confiável — alinhado com o site atual
- Teal (#3EBDB1) como cor primária de botões e CTAs (igual ao site real)
- Muito whitespace, respiração entre seções
- Cards: border-radius 12px, shadow suave (0 2px 12px rgba(0,0,0,0.05))

---

## 🏠 HOME PAGE — COM ASSETS REAIS DO SITE

### Seção 1 — Banner Principal (Hero)
Usar o banner real do evento/campanha atual do site:

```html
<!-- DESKTOP (1920x700) -->
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Banner_Site_BG_-_ANIMAL_MEDVEP_-_Full_Screen_1920_X_700.png?v=1783781264" />

<!-- LAPTOP (1360x480) -->
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Banner_Site_BG_-_ANIMAL_MEDVEP_-_Notebook_1360_X_480.png?v=1783781270" />

<!-- TABLET (1024x560) -->
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Banner_Site_BG_-_MEDVEP_-_Tablet_1024_X_560.png?v=1783781278" />

<!-- MOBILE (480x560) -->
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Banner_Site_BG_-_MEDVEP_-_Celular_480_X_560_c28a25aa-3e9d-4dfd-b3d5-46b73acab3b1.png?v=1783782734" />
```

Conteúdo do banner:
- "Esperamos por você no Estande 09 da Animal Health / MedVep"
- "23-25 de julho em Curitiba, PR das 10h-20h"
- Viasoft Experience — Rua Prof. Pedro Viriato Parigot de Souza, 5300

### Seção 2 — Texto Institucional (do site real)
> "Nascida em 2009, somos uma empresa de valores sólidos que cresce de forma agressiva e sustentável.
> Desafio é o que nos move, avançamos no tempo cumprindo nosso propósito de entregar saúde e bem estar em todo Brasil valorizando o capital humano.
> Desenvolvemos marcas de produtos inovadores e atuamos nos segmentos hospitalar, laboratorial, veterinária e farma.
> O único, este é o padrão Grupo Stra®."

### Seção 3 — Busca Inteligente
- Input grande: "O que você procura? ex: laringoscópio, HPV, centrífuga..."
- Auto-complete com produtos e marcas

### Seção 4 — Segmentos (cards grandes com imagens reais)
```
🏥 HOSPITALAR → /collections/scope-medical, /collections/stra-medical, /collections/amoul
🔬 LABORATORIAL → /collections/gynoprep, /collections/sansure, /collections/histopot
🐾 VETERINÁRIO → /collections/pluslife-vet
💊 FARMA → /collections/flux-air, /collections/bug-bite-thing
```

### Seção 5 — Carrossel de Marcas/Segmentos (usando imagens reais)
```html
<!-- Banner PlusLife Vet -->
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Banner_site_-_Segmento_Pluslife_Vet.png?v=1747250200" />

<!-- Banner HistoPot -->
<img src="https://grupostra.com.br/cdn/shop/files/Banner_HistoPot_900x1142px_Azul_1024x.png?v=1693489395" />

<!-- Sansure iPonatic II -->
<img src="https://grupostra.com.br/cdn/shop/files/grupostra_Sansure_iPonaticII_01_1024x.webp?v=1719583447" />
<img src="https://grupostra.com.br/cdn/shop/files/grupostra_Sansure_iPonaticII_02_1024x.webp?v=1720036353" />

<!-- GynoPrep GP-100 -->
<img src="https://grupostra.com.br/cdn/shop/products/conjunto_comRosa_01_1_1024x.png?v=1671721279" />
<img src="https://grupostra.com.br/cdn/shop/products/gp100_01_1024x.png?v=1723655314" />

<!-- Amoul DEA i3 -->
<img src="https://grupostra.com.br/cdn/shop/files/AmoulDEAi3-ajustado_1024x.jpg?v=1698266019" />

<!-- Produtos em destaque -->
<img src="https://grupostra.com.br/cdn/shop/files/DSC01562_-_tratada_1024x.webp?v=1729520958" />
<img src="https://grupostra.com.br/cdn/shop/products/img_packs_site_GS__01_1024x.png?v=1681396910" />
<img src="https://grupostra.com.br/cdn/shop/products/teste_02_2_17a2fb5b-b1e2-4143-985d-362537a6e20c_1024x.jpg?v=1704802255" />
<img src="https://grupostra.com.br/cdn/shop/products/Termometro7_1024x.jpg?v=1690222262" />
<img src="https://grupostra.com.br/cdn/shop/products/termometro-infravermelho-digital-sem-contato-medicao-em-1-seg-e125-stra-medical-0001_1024x.png?v=1690222262" />
```

### Seção 6 — Background Images (para banners e sections)
```html
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/bg1.jpg?v=1720721290" />
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/bg2.jpg?v=1720712138" />
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/bg2_089f55b2-7cbe-4cb6-a63b-7af2d3bba26a.jpg?v=1720721290" />
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/bg_8dc3affa-4f95-4500-9e22-43994409c76d.jpg?v=1720712137" />
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/bg_9f973065-e567-4de8-bdf8-65e6802da7fd.jpg?v=1720717766" />
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/bg_ff4ae370-8393-4f5c-9caa-04d9cade713d.jpg?v=1720727471" />
```

### Seção 7 — Produtos Destaque na Home (imagens reais)
```html
<!-- Produto 1 -->
<img src="https://grupostra.com.br/cdn/shop/files/produto_5b6fc05e-ed6e-43e6-80f4-2ff26bdc2b6f_1024x.png?v=1720721290" />
<!-- Produto 2 -->
<img src="https://grupostra.com.br/cdn/shop/files/produto_989bf6ac-1f70-47f9-a7e7-c51d74635c8a_1024x.jpg?v=1720712138" />
<!-- Produto 3 -->
<img src="https://grupostra.com.br/cdn/shop/files/produto_e045cc39-7691-463c-89fc-5ef3a88afd14_1024x.png?v=1720717763" />
<!-- Produto 4 -->
<img src="https://grupostra.com.br/cdn/shop/files/produto_69e4fd69-2102-4aed-95e2-701e0098c727_1024x.png?v=1720724501" />
<!-- Produto 5 -->
<img src="https://grupostra.com.br/cdn/shop/files/produto_1ad3c837-0dcc-4555-a6a8-6620b7371245_1024x.png?v=1720727472" />
```

### Seção 8 — Vídeos do Site (Shopify CDN + YouTube)
```html
<!-- Vídeo Shopify 1 (24MB) -->
<video autoplay muted loop>
  <source src="https://cdn.shopify.com/videos/c/o/v/1f379b64ee134cd491f3edffa074da74.mp4" type="video/mp4">
</video>

<!-- Vídeo Shopify 2 (51MB) -->
<video autoplay muted loop>
  <source src="https://cdn.shopify.com/videos/c/o/v/978034f96aed4fdfa6357261e6550156.mp4" type="video/mp4">
</video>

<!-- YouTube Embed 1: Sansure iPonatic II -->
<iframe src="https://www.youtube.com/embed/m7r3FLgJsZ4" frameborder="0" allowfullscreen></iframe>

<!-- YouTube Embed 2 -->
<iframe src="https://www.youtube.com/embed/5Nyrp6Ms8ks" frameborder="0" allowfullscreen></iframe>

<!-- YouTube Embed 3 -->
<iframe src="https://www.youtube.com/embed/WKdotkKJQYQ" frameborder="0" allowfullscreen></iframe>
```

Usar esses vídeos:
- No hero/background da home (vídeos Shopify mudos em loop)
- Na seção de demonstração de produtos
- Nas landing pages de produtos (YouTube embeds)
- Na página sobre/institucional

### Seção 9 — Blog/Novidades (imagens reais dos artigos)
```html
<!-- HistoPot - Padronização em Biópsias -->
<img src="https://grupostra.com.br/cdn/shop/articles/BANNER_00b5ef7a-ccb0-4ffe-8e8b-d84120adeeee_615x420.png?v=1777560554" />

<!-- Animal Health 2026 - PlusLife Vet -->
<img src="https://grupostra.com.br/cdn/shop/articles/BLOG_-_CAPA_-_ANIMAL_HEALTH_e4130e9f-a17b-4ef1-913d-e8faf83e823b_615x420.png?v=1773869579" />

<!-- Atualização de Estoques -->
<img src="https://grupostra.com.br/cdn/shop/articles/BLOG_-_INICIO_DO_ANO_V2_9468dbfd-7eb8-4beb-8251-42663fc801a3_615x420.png?v=1769716430" />

<!-- GynoPrep GP-100 Automação -->
<img src="https://grupostra.com.br/cdn/shop/articles/POST_BLOG_-_GynoPrep_V3_615x420.png?v=1759837894" />

<!-- Congresso CBCC - Citologia -->
<img src="https://grupostra.com.br/cdn/shop/articles/POST_BLOG_-_SBCC_3_615x420.png?v=1765991991" />
<img src="https://grupostra.com.br/cdn/shop/articles/POST_BLOG_-_SBCC_615x420.png?v=1760365434" />

<!-- Sansure iPonatic II -->
<img src="https://grupostra.com.br/cdn/shop/articles/POST_BLOG_-_Sansure_02_-_V3_615x420.png?v=1759837950" />

<!-- Pós MedVep -->
<img src="https://grupostra.com.br/cdn/shop/articles/Post_Blog_-_Pos_MEDVEP_1_615x420.png?v=1762279624" />
```

Artigos do blog (títulos e datas reais):
1. "HistoPot®: Padronização, segurança e precisão na coleta" — 30/04/2026
2. "Grupo Stra na Animal Health 2026" — 16/03/2026
3. "Por que o início do ano é o melhor momento para atualizar estoques" — 29/01/2026
4. "Grupo Stra realiza palestra no 23º CBCC" — 17/12/2025
5. "Grupo Stra no Congresso MedVep 2025" — 04/11/2025
6. "Congresso Brasileiro de Citologia Clínica 2025" — 13/10/2025
7. "Sansure® iPonatic II: Plataforma integrada de biologia molecular" — 07/10/2025
8. "GynoPrep® GP-100: Automação e precisão na citologia" — 06/10/2025

### Seção 10 — Ícones e Assets do Site Real
```html
<!-- Ícone SAC (atendimento) -->
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/icone_SAC_site__Prancheta_1.png?v=1671736330" />

<!-- Ícone Instagram -->
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/icone_instagram.png?v=1783781064" />

<!-- Ícone WhatsApp -->
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/whats.png?v=1707327654" />

<!-- Imagem celular (institucional) -->
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/celular.png?v=1721073255" />

<!-- Logos parceiros (banners bg) -->
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/logo1.png?v=1720727471" />
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/logo2.png?v=1720727471" />
```

### Seção 11 — Footer (dados reais)
```
GRUPO STRA — Saúde e Bem Estar
Rua Dom Sebastião 617, Bairro Vila Real
Balneário Camboriú - SC — CEP: 88337-110
📞 +55 (47) 3183-8200
✉️ contato@grupostra.com.br
Segunda à Sexta: 8h às 12h e 13:20h às 18:08h
📷 @grupo_stra
```

### Seção 12 — Logos de Marcas (do site real)
```html
<!-- Esses são os logos num formato 200x usados no carrossel de marcas -->
https://grupostra.com.br/cdn/shop/files/Logo_2_100x100@2x.png
https://grupostra.com.br/cdn/shop/files/Logo_5_100x100@2x.png
https://grupostra.com.br/cdn/shop/files/Logo_6_100x100@2x.png
https://grupostra.com.br/cdn/shop/files/Logo_10_100x100@2x.png
https://grupostra.com.br/cdn/shop/files/Logo_12_100x100@2x.png
https://grupostra.com.br/cdn/shop/files/Logo_13_100x100@2x.png
https://grupostra.com.br/cdn/shop/files/Logo_14_100x100@2x.png
<!-- Logo Stra antigo -->
https://grupostra.com.br/cdn/shop/files/Sem_titulo-1_Prancheta_1_200x.png?v=1670930743
<!-- Logo Stra com selo -->
https://grupostra.com.br/cdn/shop/files/Sem_titulo-1_Prancheta_1_1000x_51709ccb-34f5-4a8e-870e-feb448695966_200x.png?v=1675167404
```

---

## ⭐ LANDING PAGE DE PRODUTO — TEMPLATE RICO (16 SEÇÕES)

> CADA produto tem sua própria landing page de vendas completa — não é uma simples ficha.

### Seção 1 — Hero
```
[Lado esquerdo]
- Breadcrumb: Home > Marca > Produto
- Badges: "Mais Vendido" | "Novo" | segmento
- H1: Nome completo do produto
- Subtítulo: o que é + para quem
- Preço destaque ou "Sob consulta"
- Parcelamento
- 2 CTAs: [COMPRAR AGORA] [SOLICITAR COTAÇÃO]
- Selos: ANVISA, Garantia, Frete
- "Em estoque — envia em 24h"

[Lado direito]
- IMAGEM REAL do produto (URLs CDN listadas no catálogo abaixo)
- Zoom on hover
- Thumbnails embaixo
```

### Seção 2 — Galeria (múltiplas imagens reais)
### Seção 3 — O Problema / Necessidade clínica
### Seção 4 — A Solução (descrição + VÍDEO do produto)
```html
<!-- Para produtos Sansure, usar vídeo YouTube iPonatic II -->
<iframe src="https://www.youtube.com/embed/m7r3FLgJsZ4"></iframe>
```
### Seção 5 — Benefícios principais (grid 3x2 com ícones)
### Seção 6 — Especificações técnicas (tabela)
### Seção 7 — Como funciona (step-by-step com imagens)
### Seção 8 — Casos de uso / Aplicações clínicas
### Seção 9 — Para quem é (público-alvo por especialidade)
### Seção 10 — Diferenciais competitivos
### Seção 11 — Depoimentos
### Seção 12 — FAQ (accordion)
### Seção 13 — Downloads (ficha técnica PDF, manual, bula)
### Seção 14 — Produtos relacionados + Compre junto
### Seção 15 — CTA Final + WhatsApp
```html
<!-- Botão WhatsApp com ícone real do site -->
<a href="https://wa.me/554731838200">
  <img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/whats.png?v=1707327654" />
  Falar com especialista
</a>
```
### Seção 16 — Barra de compra sticky (mobile/desktop)

### 4 Variações de Landing Page
- **Tipo A — Alto Valor (R$10k+):** CTA "Cotação" + "Agendar demonstração". Sem preço público. Vídeo de demonstração obrigatório.
- **Tipo B — Hospitalar Médio:** CTA "Comprar" + "Cotação". Preço visível. Parcelamento.
- **Tipo C — Insumo/Consumível:** Tabela de desconto por volume. "Assinatura mensal".
- **Tipo D — B2C/Farma:** "Comprar agora" + frete destacado. Vídeo de unboxing.

---

## 📋 CATÁLOGO DE PRODUTOS — COM IMAGENS REAIS

### Scope Medical (55 produtos) — Hospitalar
```html
<!-- Conjunto Laringoscópio FO para RM (HERO R$ 8.190) -->
<img src="https://grupostra.com.br/cdn/shop/products/scoope_medical_3_1024x.jpg?v=1671719116" />

<!-- Lâmina VLSCOPE MAC 5 (R$ 3.940) -->
<img src="https://grupostra.com.br/cdn/shop/products/video_laringosc_pio_07_1_1_1_1_1_1_05a4796a-c372-4508-9489-cd011db9f7ad_1024x.jpg?v=1674217386" />

<!-- Bateria VLSCOPE -->
<img src="https://grupostra.com.br/cdn/shop/products/1_8fdef62a-c02b-43d9-b4d4-6959dbccce20_1024x.png?v=1674750880" />

<!-- Cabo Fibra Óptica RM -->
<img src="https://grupostra.com.br/cdn/shop/products/1_29185b35-f1dd-4526-bb12-0a65a5ce43a8_1024x.png?v=1674674937" />
```

### Sansure (18 produtos) — Laboratorial
```html
<!-- MA-6000 Termociclador (HERO R$ 198.000) -->
<img src="https://grupostra.com.br/cdn/shop/files/4e3555db-b232-4962-90e6-eca1d56e60d2_1024x.png?v=1757096356" />

<!-- iPonatic II (PoCT molecular) -->
<img src="https://grupostra.com.br/cdn/shop/files/grupostra_Sansure_iPonaticII_01_1024x.webp?v=1719583447" />
<img src="https://grupostra.com.br/cdn/shop/files/grupostra_Sansure_iPonaticII_02_1024x.webp?v=1720036353" />

<!-- Suporte de Reagentes -->
<img src="https://grupostra.com.br/cdn/shop/files/77b38bb7-d83e-4f5b-b7a2-84722e567b28_aa17c732-6b71-4e80-8586-14410f5d44cb_1024x.png?v=1757345925" />

<!-- Tira de 8 Tubos PCR -->
<img src="https://grupostra.com.br/cdn/shop/files/unnamed_4db55ada-30b2-4e05-9310-5da768abedc2_1024x.png?v=1757358215" />

<!-- Kit qPCR molecules -->
<img src="https://grupostra.com.br/cdn/shop/files/b7e5eb20-3a88-4f78-b832-0147d5a66646_42a28c9e-93bf-41bc-826e-300c5ad7e912_1024x.png?v=1757352180" />
<img src="https://grupostra.com.br/cdn/shop/files/c6077e83-ffca-4e19-958a-799a486063b5_b1ace15c-e1b2-4043-ae83-201776413dd2_1024x.png?v=1757097224" />

<!-- Vídeo do produto -->
<iframe src="https://www.youtube.com/embed/m7r3FLgJsZ4"></iframe>
```
Faixa: R$ 9,90 — R$ 198.000,00

### GynoPrep (16 produtos) — Laboratorial
```html
<!-- GP-100 Processador (HERO R$ 37.990) -->
<img src="https://grupostra.com.br/cdn/shop/products/conjunto_comRosa_01_1_1024x.png?v=1671721279" />
<img src="https://grupostra.com.br/cdn/shop/products/gp100_01_1024x.png?v=1723655314" />
```

### Stra Medical (9 produtos)
```html
<!-- Cabine Biossegurança PA-700 (HERO R$ 19.990) -->
<img src="https://grupostra.com.br/cdn/shop/files/WhatsAppImage2024-10-15at5.06.45PM_1024x.jpg?v=1729022881" />

<!-- Microcentrífuga MC-15Pro -->
<img src="https://grupostra.com.br/cdn/shop/files/DSC03732_1_1024x.png?v=1765197104" />
<img src="https://grupostra.com.br/cdn/shop/files/DSC03716_1_1024x.png?v=1765197104" />

<!-- Termômetro E125 -->
<img src="https://grupostra.com.br/cdn/shop/products/Termometro7_1024x.jpg?v=1690222262" />
<img src="https://grupostra.com.br/cdn/shop/products/termometro-infravermelho-digital-sem-contato-medicao-em-1-seg-e125-stra-medical-0001_1024x.png?v=1690222262" />
```

### KASVI (8 produtos)
```html
<!-- Micropipeta P200 -->
<img src="https://grupostra.com.br/cdn/shop/files/unnamed_9149742c-0812-48bd-b54f-3e765cf64f4a_1024x.png?v=1757337994" />
<!-- Rack Microtubos -->
<img src="https://grupostra.com.br/cdn/shop/files/8d47cabc-a8cb-45be-8b89-4b0bce8e44e7_1024x.png?v=1757357747" />
<!-- Ponteira 1000uL -->
<img src="https://grupostra.com.br/cdn/shop/files/unnamed_00ddb08d-0ef9-49c2-a9e7-bbc88e5a33d2_1024x.png?v=1757338119" />
<!-- Ponteira 10uL -->
<img src="https://grupostra.com.br/cdn/shop/files/unnamed_0d43bd1d-ad86-485e-85fb-32728a6afc7b_1024x.png?v=1757358591" />
<!-- Micropipeta P10 -->
<img src="https://grupostra.com.br/cdn/shop/files/unnamed_0f2d0eae-840d-4dc1-8be1-8304a4311731_1024x.png?v=1757337589" />
<img src="https://grupostra.com.br/cdn/shop/files/unnamed_37e5a3c9-f885-4ff7-a105-06fbe46f3f8e_1024x.png?v=1757337589" />
<img src="https://grupostra.com.br/cdn/shop/files/unnamed_243ed89b-3cba-4ec2-abac-06bcdf19efc3_1024x.png?v=1757336540" />
<!-- Suporte Micropipetas -->
<img src="https://grupostra.com.br/cdn/shop/files/unnamed_1e85c797-3678-4d5f-b5f0-68909e94bad1_1024x.png?v=1757339006" />
<img src="https://grupostra.com.br/cdn/shop/files/unnamed_e57e22e0-2550-4164-a14a-288a3beaeb44_1024x.png?v=1757336712" />
```

### Amoul (8 produtos) — Hospitalar
```html
<!-- Ventilador T6 (HERO R$ 84.990) -->
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/AmoulT62.png?v=1702057067" />
<!-- DEA i3 (R$ 8.828) -->
<img src="https://grupostra.com.br/cdn/shop/files/AmoulDEAi3-ajustado_1024x.jpg?v=1698266019" />
```

### HistoPot (7 produtos) — Laboratorial
```html
<!-- Frascos Biópsia -->
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/6128_06baf15e-48d5-4dc1-ae86-56853daf92b1_1024x.png" />
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/6130_0ed96faa-33f4-4fbd-ac46-dbfa39373d59_1024x.png" />
<!-- Banner HistoPot -->
<img src="https://grupostra.com.br/cdn/shop/files/Banner_HistoPot_900x1142px_Azul_1024x.png?v=1693489395" />
```

### L&K (5 produtos) — Banco de Sangue
```html
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/products/011_2.jpg?v=1671731221" />
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/products/033.jpg?v=1671731606" />
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/products/1.png?v=1674666381" />
```

### DDM Medical (4 produtos) — Hospitalar
```html
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/products/bolsatransparente_1000ml_antihorario.png?v=1676320615" />
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/products/bolsatransparente_500ml_antihorario.png?v=1676321084" />
```

### Outras Marcas — Ver catálogo completo no arquivo anterior

### PlusLife Vet (1 produto) — Veterinário
```html
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01146-Edit.webp?v=1747051259" />
<!-- Banner PlusLife Vet -->
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Banner_site_-_Segmento_Pluslife_Vet.png?v=1747250200" />
```

### Flux Air (1 produto) — Farma B2C
```html
<img src="https://grupostra.com.br/cdn/shop/products/img_packs_site_GS__01_1024x.png?v=1681396910" />
```

### Bug Bite Thing (1 produto) — Farma B2C
```html
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/products/1_7.png?v=1669831253" />
```

### Stra (2 produtos) — Hospitalar
```html
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC00985_-_Edit.webp?v=1751035761" />
<img src="https://cdn.shopify.com/s/files/1/0534/2812/5857/products/c_nula_pl_stica_descartavel_endo_tips.jpg?v=1671715775" />
```

### Myr, Nonin, Easy Clean, MedCaptain, OLEN, LMB, McFusion, Grupo Stra
(Ver catálogo de imagens em https://cdn.shopify.com/s/files/1/0534/2812/5857/products/ e /files/)

---

## 🔐 ONBOARDING — QUALIFICAÇÃO MÉDICA (CRM)

### Cadastro Multi-step

**Step 1 — Tipo de Conta:**
- Médico(a), Biomédico(a), Farmacêutico(a), Enfermeiro(a), Veterinário(a), Estudante, Hospital/Clínica, Pessoa Física

**Step 2 — Dados Pessoais:**
- Nome, E-mail, Telefone (máscara BR), Senha, CPF

**Step 3 — Validação Profissional (CONDICIONAL):**
> Se profissional de saúde:
- Tipo de conselho (CRM/CRBM/CRF/COREN/CRMV)
- Número + UF
- RQE (opcional)
- Especialidade (dropdown: Anestesiologia, Ginecologia, Patologia, Otorrino, Emergência, Veterinária, etc.)
- Upload de documento (PDF/JPG/PNG)
- Instituição (opcional)

> Se Hospital/Clínica: CNPJ, Razão Social, endereço
> Se B2C: Endereço de entrega
> Se Estudante: Instituição, curso, documento estudantil

**Step 4 — Interesses:**
- Segmentos: Hospitalar, Laboratorial, Veterinário, Farma
- Marcas preferidas

**Step 5 — Confirmação:**
- Termos + Política
- "Sua validação de CRM está em análise (24-48h)"

---

## 👤 DASHBOARD DO USUÁRIO
- Visão geral: pedidos recentes, cotações, status CRM
- Meus Pedidos: lista + detalhe (rastreio, NF, timeline)
- Minhas Cotações: status + resposta comercial
- Favoritos
- Perfil: dados + documentação CRM (status: ✅/⏳/❌)
- Endereços

---

## 📊 CRM ADMINISTRATIVO (`/admin`)

### Dashboard
- KPIs: faturamento dia/mês/ano, pedidos abertos, cotações pendentes, cadastros, validações CRM
- Gráficos: vendas/mês, top marcas, segmentos, conversão
- Tabela: últimos pedidos
- Fila: validações CRM pendentes (aprovar/rejeitar rápido)

### CRM Clientes
- Listagem completa (nome, tipo, CRM, status, LTV, tags)
- Busca avançada + filtros
- Ficha do cliente: perfil + pedidos + cotações + interações + timeline
- Funil Kanban: Lead → Contatado → Cotação → Negociação → Fechado

### Validações CRM
- Cards com: nome, CRM, especialidade, documento (preview)
- Aprovar / Rejeitar (com motivo)

### Gestão de Produtos (CRUD)
- Listagem com filtros
- **Formulário completo:**
  - Geral: nome, marca, SKU, preço, estoque, descrição, tags, status
  - Imagens: upload múltiplo drag & drop
  - Especificações: tabela chave-valor dinâmica
  - Documentos: PDFs (ficha técnica, manual, bula, ANVISA)
  - **Landing Page:** subtítulo, problema, solução, vídeo URL, benefícios (cards), como funciona (steps), casos de uso, diferenciais, FAQs, depoimentos, tipo (A/B/C/D)
  - SEO: slug, meta tags

### Gestão de Pedidos
- Lista + filtros
- Detalhe: cliente, itens, totais, status (timeline), NF, rastreio, ações

### Gestão de Cotações
- Responder com preço especial, prazo, condições
- Envia e-mail automático + notificação

### Relatórios
- Vendas por período, marca, segmento
- Top produtos, top clientes
- Conversão, performance comercial
- Exportar CSV/PDF

---

## 🛒 CARRINHO E CHECKOUT

### Carrinho
- Itens com imagem, nome, marca, preço, quantidade
- Frete (CEP), cupom
- Total: Subtotal + Frete - Desconto

### Checkout Multi-step
1. Identificação (login ou convidado)
2. Entrega (endereço + frete: PAC/SEDEX/Retirada)
3. Pagamento (Cartão, PIX, Boleto, Faturamento CNPJ)
4. Revisão + Confirmar
5. Sucesso (nº pedido, rastreio, previsão)

---

## 🏢 DADOS DA EMPRESA (REAIS)

- **Razão:** Grupo Stra — Saúde e Bem Estar
- **Fundação:** 2009
- **CEO:** Leonardo Straliotto (Bacharel Comércio Exterior, UNIVALI)
- **Endereço:** Rua Dom Sebastião 617, Bairro Vila Real — CEP 88337-110 — Balneário Camboriú, SC
- **Telefone:** +55 (47) 3183-8200
- **E-mail:** contato@grupostra.com.br
- **Site:** grupostra.com.br
- **Instagram:** @grupo_stra
- **Horário:** Seg-Sex 8h-12h e 13:20h-18:08h
- **Segmentos:** Hospitalar, Laboratorial, Veterinário, Farma
- **11+ marcas próprias**

### Gestores
- **Leonardo Straliotto** — CEO & Founder (Comércio Exterior UNIVALI)
- **Everton Vicente** — Gerente de Controladoria (15 anos contábil, MBA FGV, IPOG)
- **Andreza Magalhães** — Supervisora Comercial Hospitais & Distribuidores (Gestão Comercial Estácio, 11+ anos)
- **Renata Guollo** — Gerente Comercial Laboratórios (Farmacêutica, Análises Clínicas Unochapecó, Citologia Tuiuti)

### Texto institucional oficial
> "Nascida em 2009, somos uma empresa de valores sólidos que cresce de forma agressiva e sustentável. Desafio é o que nos move. Desenvolvemos marcas de produtos inovadores e atuamos nos segmentos hospitalar, laboratorial, veterinária e farma. O único, este é o padrão Grupo Stra®."

---

## ⚡ FUNCIONALIDADES ESPECIAIS

### WhatsApp Business
- Botão flutuante usando ícone real: `https://cdn.shopify.com/s/files/1/0534/2812/5857/files/whats.png`
- Link: `https://wa.me/554731838200`
- Mensagem contextual por página

### Busca Inteligente
- Auto-complete com thumbnails
- Busca por termo clínico

### Cotação B2B
- Carrinho de cotação (sem pagamento)
- Comercial responde com preço + prazo
- Converte em pedido

### Produtos Controlados
- Equipamentos R$10k+: preço só com CRM aprovado
- Visitante/B2C vê "Sob consulta"

### Pricing por Volume
- Insumos: 1-9 (cheio), 10-49 (5%), 50-99 (10%), 100+ (15%)

---

## 📐 LAYOUT E RESPONSIVIDADE

- **Mobile:** 375-767px (1-2 col), header compacto, filtros bottom-sheet
- **Tablet:** 768-1023px (2-3 col), filtros em modal
- **Desktop:** 1024-1279px (3-4 col), sidebar filtros 280px
- **Wide:** 1280px+ (4 col, max-width 1280px)
- **Admin:** sidebar fixa 240px esquerda (verde escuro)
- Landing page produto: barra de compra sticky no rodapé (mobile+desktop)

---

## 🎯 STACK TÉCNICA

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- PostgreSQL + Prisma ORM
- NextAuth.js (multi-role)
- Cloudinary/S3 para uploads
- Mercado Pago + Stripe
- Melhor Envio (frete)
- Resend (e-mail transacional)
- Deploy: Vercel
- Integração Shopify Admin API (sync produtos)

---

## 📝 INSTRUÇÕES FINAIS PARA O FIGMA MAKE

1. **Usar TODAS as imagens reais listadas** (URLs CDN Shopify) — não usar placeholders
2. **Usar os 2 vídeos Shopify** (loop mudos) como background no hero da home
3. **Usar os 3 vídeos YouTube** embedados nas landing pages de produtos e páginas institucionais
4. **Usar o logo real do Grupo Stra** no header e footer
5. **Usar o banner real do evento** (Animal Health/MedVep) no hero da home
6. **Usar as imagens reais dos artigos** do blog na seção de novidades
7. **Cor primária: #3EBDB1 (teal)** — mesma usada nos botões do site real
8. **Cada produto = landing page rica de 16 seções** (não apenas ficha)
9. **4 variações de landing page** por tipo de produto
10. **Onboarding multi-step com validação CRM condicional**
11. **CRM admin completo** com Kanban, validações, CRUD produtos, pedidos, cotações, relatórios
12. **Mobile-first** em tudo
13. **Dados reais** da empresa em todas as páginas institucionais
14. **WhatsApp flutuante** com o ícone real do site
15. **Ícone SAC** real nas páginas de suporte

## 📦 CATÁLOGO COMPLETO — TODOS OS PRODUTOS COM URL DE IMAGEM

> IMPORTANTE: Cada produto abaixo tem o nome, preço e URL DIRETA da imagem real no CDN Shopify. Use EXATAMENTE essas URLs — não use placeholders.

---

### GynoPrep (16 produtos) — Laboratorial — Citologia em Meio Líquido

HERO: GynoPrep® GP-100 — R$ 37.990,00
IMG: https://cdn.shopify.com/s/files/1/0534/2812/5857/products/conjunto_comRosa_01_1.png?v=1671721279

| Produto | Preço | URL da Imagem |
|---------|-------|---------------|
| GynoPrep Kit Coleta Frasco 20mL + Escova Pincel | R$ 6,50 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/frasco-pincel-fundo-branco_e710b26d-22f6-4b9e-bdbd-30fd8d87ffda.png?v=1758030081 |
| GynoPrep Kit Coleta Frasco 20mL + Espátula + Escova + Espéculo P + Swab | R$ 10,50 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/frasco-pinceis-fundo-branco_c65b720a-8cc4-4101-95d3-4cc4a26c93df.png?v=1758030703 |
| GynoPrep Kit Coleta Frasco 10mL + Espátula + Escova | R$ 6,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/frasco-nitido-fundo-branco_c63b995e-a353-4be4-b5fc-edfdbefd0ad5.png?v=1757969729 |
| GynoPrep Kit Coleta Frasco 20mL + Espátula + Escova + Espéculo M | R$ 7,50 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/image0.jpg?v=1758109575 |
| GynoPrep Kit Coleta Frasco 20mL + Escova Combi + Espéculo M | R$ 7,50 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/C77DEF51-E744-4AEA-A134-3D9FADF02C8B.jpg?v=1758027504 |
| GynoPrep Kit Coleta Frasco 20mL + Escova Combi | R$ 6,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/frasco-nitido-fundo-branco_d04eab16-45af-4412-8d4c-19a577dc5362.png?v=1758029895 |
| GynoPrep Solução Conservação Não Ginecológica 10mL | R$ 5,50 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/frasco-fundo-branco_5f24135a-0863-4fd6-83d5-8c287076c29d.png?v=1757969312 |
| GynoPrep Solução Conservação Celular 10mL | R$ 5,50 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/frasco-fundo-branco_bac41407-4e4e-4f57-ab15-472ac9671aa0.png?v=1757969729 |
| GynoPrep Solução Conservação Celular 20mL | R$ 6,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/frasco-fundo-branco_c1fc23c6-d504-4c45-b9da-4e53ca5b436a.png?v=1758029895 |
| GynoPrep Solução Conservação Celular 500mL | R$ 280,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/4682235C-3AB7-47E6-B9EE-7BA862832CE3_76d848f1-bf31-4162-895f-87a6adccf41f.jpg?v=1758034407 |
| Filtro Duplo de Membrana GynoPrep | R$ 7,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/cf10d572-8cfe-43a5-bfeb-2f5557d3083f.png?v=1757704864 |
| GynoPrep Vortex | R$ 1.780,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/produto-fundo-branco-melhorado.png?v=1758035089 |
| GynoPrep GP-100 Processador de Citologia | R$ 37.990,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/conjunto_comRosa_01_1.png?v=1671721279 |

---

### Sansure (18 produtos) — Laboratorial — Biologia Molecular PoCT

HERO: Termociclador MA-6000 — R$ 198.000,00
IMG: https://cdn.shopify.com/s/files/1/0534/2812/5857/files/4e3555db-b232-4962-90e6-eca1d56e60d2.png?v=1757096356
VÍDEO: https://www.youtube.com/embed/m7r3FLgJsZ4

| Produto | Preço | URL da Imagem |
|---------|-------|---------------|
| Suporte de Reagentes PCR iPonatic II | R$ 39,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/77b38bb7-d83e-4f5b-b7a2-84722e567b28_aa17c732-6b71-4e80-8586-14410f5d44cb.png?v=1757345925 |
| Tira 8 Tubos PCR 0,20mL | R$ 9,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/unnamed_4db55ada-30b2-4e05-9310-5da768abedc2.png?v=1757358215 |
| Termociclador MA-6000 qPCR Tempo Real | R$ 198.000,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/4e3555db-b232-4962-90e6-eca1d56e60d2.png?v=1757096356 |
| Extrator Natch 48 Semi-Automatizado | R$ 68.000,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/c6077e83-ffca-4e19-958a-799a486063b5_b1ace15c-e1b2-4043-ae83-201776413dd2.png?v=1757097224 |
| Kit qPCR Chlamydia trachomatis | R$ 91,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB.webp?v=1757090903 |
| Kit qPCR Painel Respiratório 3 Patógenos | R$ 121,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB.webp?v=1757090903 |
| Kit qPCR Herpes simplex Tipo 2 | R$ 104,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB.webp?v=1757090903 |
| Kit qPCR Streptococcus Grupo B | R$ 98,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB.webp?v=1757090903 |
| Kit qPCR Mycobacterium tuberculosis | R$ 86,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB.webp?v=1757090903 |
| Kit qPCR Citomegalovírus (HCMV) | R$ 95,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB.webp?v=1757090903 |
| Kit qPCR Painel Respiratório 6 Patógenos | R$ 162,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB.webp?v=1757090903 |
| Kit qPCR SARS-CoV-2 | R$ 89,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB.webp?v=1757090903 |
| Kit qPCR IST MG/MH/TV | R$ 58,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB.webp?v=1757090903 |
| Kit qPCR IST CT/UU/NG | R$ 58,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB_96470e1e-5eaf-461f-bf33-00c274d4a109.webp?v=1757091710 |
| Kit qPCR HPV 15 Genótipos Identificados | R$ 98,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB_96470e1e-5eaf-461f-bf33-00c274d4a109.webp?v=1757091710 |
| Kit qPCR HPV Genótipos 16 e 18 | R$ 50,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB_96470e1e-5eaf-461f-bf33-00c274d4a109.webp?v=1757091710 |
| Kit qPCR HPV 15 Genótipos (2+13) | R$ 98,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01514-tratadaWEB_7cb2d7e8-a26e-4acd-9f2e-32124f69ed3f.webp?v=1757091521 |
| iPonatic II PoCT Molecular | R$ 83.980,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/grupostra_Sansure_iPonaticII_01.webp?v=1719583447 |

---

### Scope Medical (55 produtos) — Hospitalar — Intubação

HERO: Conjunto Laringoscópio FO para RM — R$ 8.190,00
IMG: https://cdn.shopify.com/s/files/1/0534/2812/5857/products/scoope_medical_3.jpg?v=1671719116

| Produto | Preço | URL da Imagem |
|---------|-------|---------------|
| Bateria Li-ion VLSCOPE 3400mAh | R$ 1.210,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/1_8fdef62a-c02b-43d9-b4d4-6959dbccce20.png?v=1674750880 |
| Cabo Fibra Óptica RM Médio SM-325H9 | R$ 975,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/1_29185b35-f1dd-4526-bb12-0a65a5ce43a8.png?v=1674674937 |
| Lâmina VLSCOPE MAC 5 | R$ 3.940,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/video_laringosc_pio_07_1_1_1_1_1_1_05a4796a-c372-4508-9489-cd011db9f7ad.jpg?v=1674217386 |
| Lâmina VLSCOPE MAC 4 | R$ 3.940,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/video_laringosc_pio_07_1_1_1_1_1_1_042726e4-35b8-45d7-b574-258ff5a41293.jpg?v=1674217281 |
| Lâmina VLSCOPE MAC 3 | R$ 3.940,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/video_laringosc_pio_07_1_1_1_1_1_1_597ffa55-1d31-43a5-9c3b-ce91b9862a07.jpg?v=1674217210 |
| Cabo Fibra Óptica SM-322L6 Médio | R$ 325,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/sm-321l7_c597287c-7600-4339-9efa-f959f80f023d.jpg?v=1674189022 |
| Lâmina Fibra Óptica Reta SM-3234 | R$ 325,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/lamina_fibra_reta_1_1_1_1_1_3bfe6c18-79ec-445b-9aa2-44aeaed1d2b4.jpg?v=1674187572 |
| Lâmina Fibra Óptica Curva MAC 3 SM-3213 | R$ 325,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/lamina_fibra_curva_1_1_1_1_1_c5582e2a-57ea-42d7-a5b5-58f859c488ba.jpg?v=1674186751 |
| Lâmina Fibra Óptica Curva MAC 5 SM-3215 | R$ 325,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/lamina_fibra_curva_1_1_1_1_1_9f31182b-1be2-48b0-8d78-0d1aaedfbfa3.jpg?v=1674186708 |
| Lâmina Flexion Tip MAC 4 SM-32L4 | R$ 1.414,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/mac4-02.png?v=1674185157 |
| Lâmina Flexion Tip MAC 3 SM-32L3 | R$ 1.414,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/mac3-01.png?v=1674184982 |
| Lâmina Convencional LED MILL 4 SM-1234 | R$ 122,14 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/lamina_convencional_reta_1_db1344b8-f0ce-469c-9ebf-9d8a38386616.jpg?v=1674181950 |
| Lâmina Convencional LED MILL 3 SM-1233 | R$ 122,14 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/lamina_convencional_reta_1_972c67da-b75c-41f2-b4e3-d3ba9dde5595.jpg?v=1674181719 |
| Lâmina Convencional LED MILL 2 SM-1232 | R$ 122,14 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/lamina_convencional_reta_1_045dee2e-8e74-4963-9eff-1927ce008aa9.jpg?v=1674181588 |
| Lâmina Convencional LED MILL 1 SM-1231 | R$ 122,14 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/lamina_convencional_reta_1_74ec7d98-96fd-4b54-8642-aedea81401ca.jpg?v=1674181355 |
| Lâmina Convencional LED MILL 0 SM-1230 | R$ 122,14 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/lamina_convencional_reta_1_3f7c5a20-6df7-424f-ba25-721c54708b47.jpg?v=1674181094 |
| Lâmina Convencional LED MAC 5 SM-1215 | R$ 122,14 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/lamina_convencional_curva_1_1_1_1_1_6c4a164e-31b7-4d72-b049-f43ccf365dc7.jpg?v=1674161466 |
| Lâmina Convencional LED MAC 3 SM-1213 | R$ 122,14 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/lamina_convencional_curva_1_1_1_1_1_6cd0d8db-8c20-4b9a-ba34-7cf0e58c0a4a.jpg?v=1674161278 |
| Lâmina Convencional LED MAC 1 SM-1211 | R$ 122,14 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/lamina_convencional_curva_1_1_1_1_1_430e4dce-aeb3-4e49-b53b-524dd9cf161e.jpg?v=1674159715 |
| Lâmina RM MILL 4 SM-3244 | R$ 890,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/4162-01_2d3f733f-2f75-435d-9513-11537993e0b6.jpg?v=1674157248 |
| Lâmina RM MILL 3 SM-3243 | R$ 890,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/4161-01.jpg?v=1674156954 |
| Lâmina RM MAC 3 SM-3223 | R$ 890,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/4001-01_1.jpg?v=1674154106 |
| Lâmpada LED 8/32 SM-3XD10 | R$ 19,98 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/lampada_1.jpg?v=1671730438 |
| Lâmpada Hyper LED Fibra Óptica SM-3LM8 | R$ 208,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/lampada.jpg?v=1671730362 |
| Estojo Zíper 1 Cabo + 4 Lâminas SM-ZP30 | R$ 62,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/mac4-06_41dfa154-6b9f-4c25-9a0a-c4f33abffd7b.png?v=1675370513 |
| Cabo Convencional LED SM-191C6 Pequeno | R$ 187,14 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/sm-121c7_e94df417-3a7c-426b-a27f-b115d032692f.jpg?v=1674187909 |
| Cabo Convencional LED SM-192C6 Médio | R$ 187,14 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/cabo-de-laringoscopio-convencional-medio-scope-medical-sm-192c6.jpg?v=1671716783 |
| Bateria Zinco Carbono 3V RM SM-3588-7 | R$ 996,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/3506-01.jpg?v=1671716186 |
| Conjunto Laringoscópio FO RM Completo F-3237-8 | R$ 8.190,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/scoope_medical_3.jpg?v=1671719116 |

---

### Stra Medical (9 produtos)

HERO: Cabine Biossegurança PA-700 — R$ 19.990,00
IMG: https://cdn.shopify.com/s/files/1/0534/2812/5857/files/WhatsAppImage2024-10-15at5.06.45PM.jpg?v=1729022881

| Produto | Preço | URL da Imagem |
|---------|-------|---------------|
| Microcentrífuga MC-15Pro | R$ 5.980,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC03732_1.png?v=1765197104 |
| Alicate Ordenha Manual HS-002 | R$ 1.215,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/2Alicate-ImagemSite1000x1000JPEG.png?v=1693410314 |
| Cabine Biossegurança PA-700 | R$ 19.990,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/WhatsAppImage2024-10-15at5.06.45PM.jpg?v=1729022881 |
| Reanimador Neonatal AR0301-03 | R$ 215,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/reanimador_neonatal_02.png?v=1674219718 |
| Reanimador Infantil AR0301-02 | R$ 215,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/reanimador_pediatrico_02_0d435a58-0405-4c63-bce2-796e3aededd2.png?v=1674219021 |
| Reanimador Adulto AR0301-01 | R$ 215,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/reanimador_adulto_01_dd47f1cd-358d-46d5-9382-71db31bff829.png?v=1674218767 |
| Termômetro Sem Contato E125 | R$ 134,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/Termometro7.jpg?v=1690222262 |
| Oxímetro Pulso BM1000 | R$ 129,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/01.png?v=1637787023 |
| Centrífuga PRP/PRF/BMAC SM4000-8 | R$ 2.162,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/product-gallery-01.jpg?v=1631706867 |

---

### KASVI (8 produtos)

| Produto | Preço | URL da Imagem |
|---------|-------|---------------|
| Rack 100 Microtubos | R$ 89,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/8d47cabc-a8cb-45be-8b89-4b0bce8e44e7.png?v=1757357747 |
| Ponteira 1000uL c/ Filtro (1000un) | R$ 617,50 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/ecde3c38-062a-4110-b81a-6d399698a97e_6cb803dd-b676-48ff-bb47-e760524c3b66.png?v=1757357979 |
| Ponteira 10uL c/ Filtro (1000un) | R$ 460,80 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/unnamed_0d43bd1d-ad86-485e-85fb-32728a6afc7b.png?v=1757358591 |
| Microtubo 1,5mL Transparente | R$ 170,80 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/b7e5eb20-3a88-4f78-b832-0147d5a66646_42a28c9e-93bf-41bc-826e-300c5ad7e912.png?v=1757352180 |
| Micropipeta P1000 | R$ 1.198,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/unnamed_b83a61e3-0909-44dc-887b-8e6146fd6afe.png?v=1757338847 |
| Micropipeta P200 | R$ 1.380,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/unnamed_9149742c-0812-48bd-b54f-3e765cf64f4a.png?v=1757337994 |
| Micropipeta P10 | R$ 1.380,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/unnamed_0f2d0eae-840d-4dc1-8be1-8304a4311731.png?v=1757337589 |
| Suporte Micropipetas 5 Lugares | R$ 298,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/unnamed_243ed89b-3cba-4ec2-abac-06bcdf19efc3.png?v=1757336540 |

---

### Amoul (8 produtos)

| Produto | Preço | URL da Imagem |
|---------|-------|---------------|
| Ventilador T6 Pulmonar Eletrônico | R$ 84.990,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/AmoulT62.png?v=1702057067 |
| Bateria Descartável DEA i5/i3 | R$ 1.790,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/0279_bateria-para-desfibrilador-externo-automatico-dea-i5-amoul-bateria-dea-i5_z1_638137160048636875.jpg?v=1698267445 |
| Desfibrilador DEA i3 c/ Bateria | R$ 8.828,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/AmoulDEAi3-ajustado.jpg?v=1698266019 |
| Bolsa Transporte DEA i5/i3 | R$ 829,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/07_1_1.png?v=1669811976 |
| Ventilador T5 Pulmonar | R$ 47.100,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/6.png?v=1702146165 |
| Eletrodos DEA Infantil | R$ 1.080,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/03_1__1_1.png?v=1669812285 |
| Eletrodos DEA Adulto | R$ 611,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/01_1__1_1.png?v=1669812128 |
| Cabine Metálica DEA i5/i3 | R$ 2.580,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/amoul_aed_wallhangbox1.png?v=1669811507 |

---

### HistoPot (7 produtos)

| Produto | Preço | URL da Imagem |
|---------|-------|---------------|
| Biópsia 60mL | R$ 823,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/6128_06baf15e-48d5-4dc1-ae86-56853daf92b1.png?v=1759440735 |
| Galão Formol 20L | Sob consulta | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/IMG_3222---Tratada_aa05015b-4d4e-4077-aa1e-db6147d3ed86.png?v=1742414648 |
| Galão Formol 5L | Sob consulta | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Rotulo-Histopot10_-5LWEB.webp?v=1749644847 |
| Nacional Biópsia 40mL | R$ 600,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC07868_-_Tratada.webp?v=1741267574 |
| Biópsia 180mL | R$ 691,80 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC07860-Tratada.webp?v=1741267710 |
| Biópsia 1000mL | R$ 681,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/6127_c4845f8a-f68e-495a-b6bf-74f3fb6ee5f4.png?v=1759440712 |
| Nacional Biópsia 1250mL | R$ 1.374,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/6130_0ed96faa-33f4-4fbd-ac46-dbfa39373d59.png?v=1759440789 |

---

### L&K (5 produtos) — Banco de Sangue

| Produto | Preço | URL da Imagem |
|---------|-------|---------------|
| Biomixer 550 Homogeneizador | R$ 21.720,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/WhatsAppImage2024-04-09at16.24.48.jpg?v=1712690708 |
| Alicate Selagem Ergonômico | R$ 11.250,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/1.png?v=1674666381 |
| Biosealer CR-6AA Portátil | R$ 27.336,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/033.jpg?v=1671731606 |
| Biosealer CR-4 AA Bancada | R$ 27.760,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/011_2.jpg?v=1671731221 |
| Biomixer 330-1 c/ Bateria | R$ 21.720,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/homogeneizador_de_coleta_biomixer_01.jpg?v=1671727859 |

---

### DDM Medical (4 produtos)

| Produto | Preço | URL da Imagem |
|---------|-------|---------------|
| Bolsa Opaca Grey Fuse 1000mL | R$ 306,27 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/2_e00eaa91-f59c-48ac-acf9-ca310d2063dc.png?v=1685386559 |
| Bolsa Transparente Clear Fuse 1000mL | R$ 730,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/bolsatransparente_1000ml_antihorario.png?v=1676320615 |
| Bolsa Transparente Clear Fuse 500mL | R$ 500,32 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/bolsatransparente_500ml_antihorario.png?v=1676321084 |
| Bolsa Opaca Grey Fuse 500mL | R$ 291,57 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/1_c48525f5-e848-401b-8558-aa7ebe652bc0.png?v=1685386635 |

---

### Nonin (3 produtos)

| Produto | Preço | URL da Imagem |
|---------|-------|---------------|
| Oxímetro 7500FO para RM | R$ 19.250,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/Nonin_Oximetro_Tratada.webp?v=1729279623 |
| Sensor Pediátrico/Neonatal Fibra Óptica 9m | R$ 17.850,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/pediatrico.jpg?v=1705670658 |
| Sensor Adulto/Pediátrico Fibra Óptica 9m | R$ 17.850,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/adulto.jpg?v=1705670662 |

---

### Easy Clean (3 produtos)

| Produto | Preço | URL da Imagem |
|---------|-------|---------------|
| Pistola Limpeza/Secagem CME | R$ 3.150,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/pistola_de_limpeza_copiar.webp?v=1729281027 |
| Conector Tomada Ar ABNT | R$ 154,50 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/005_1.jpg?v=1671718942 |
| Compressor Ar EasyClean | R$ 3.550,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/1_s.png?v=1674737126 |

---

### OLEN (3 produtos)

| Produto | Preço | URL da Imagem |
|---------|-------|---------------|
| Rack 1000uL | R$ 58,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/unnamed_76c28181-05cf-470f-8b9e-ebda97e3d780.png?v=1757359006 |
| Rack 10/200uL | R$ 58,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/unnamed_ea13dae9-4147-4343-8f34-e892c03c6c34.png?v=1757358785 |
| Ponteira 200uL c/ Filtro (1000un) | R$ 307,50 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/ecde3c38-062a-4110-b81a-6d399698a97e_6cb803dd-b676-48ff-bb47-e760524c3b66.png?v=1757357979 |

---

### Outras Marcas

| Marca | Produto | Preço | URL da Imagem |
|-------|---------|-------|---------------|
| PlusLife Vet | Diagnóstico Molecular Vet PoCT | Sob consulta | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01146-Edit.webp?v=1747051259 |
| MedCaptain | Vídeo Laringoscópio VS-10S | R$ 14.980,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/118704-15011591.webp?v=1706557003 |
| Myr | Corador Automático Myreva SS-30 | R$ 202.796,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/Designsemnome_6_9773b538-c7e2-47a5-ae78-f80a949308b6.png?v=1675197421 |
| LMB | Alicate Ordenha Automático TS08 | R$ 23.065,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/001_2.jpg?v=1672856643 |
| McFusion | Conector Valvulado | R$ 8,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC08220_copiar_a50d22d3-71f5-468b-8c43-cb8e9ca00d7a.png?v=1748617500 |
| Grupo Stra | McFusion Extensor Valvulado | R$ 18,00 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC01536_-_tratada_1_2f9b765e-105b-48e8-a366-3d37fc8c01cb.webp?v=1748617978 |
| Grupo Stra | Braçadeira PNI 2 Vias Silicone | R$ 36,78 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/WhatsAppImage2024-02-19at5.53.40PM.jpg?v=1708376067 |
| Stra | Lavador de Ouvido JS 2.0 | R$ 3.656,77 | https://cdn.shopify.com/s/files/1/0534/2812/5857/files/DSC00985_-_Edit.webp?v=1751035761 |
| Stra | Cânula Descartável JS 2.0 (20un) | R$ 69,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/c_nula_pl_stica_descartavel_endo_tips.jpg?v=1671715775 |
| Flux Air | Dilatador Nasal Interno | R$ 49,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/img_packs_site_GS__01.png?v=1681396910 |
| Bug Bite Thing | Dispositivo Picada Inseto | R$ 59,90 | https://cdn.shopify.com/s/files/1/0534/2812/5857/products/1_7.png?v=1669831253 |

---

> **Total:** ~150 produtos em 21 marcas — TODOS com URL de imagem real
> **Assets:** Todos extraídos do site real grupostra.com.br
> **Foco:** Plataforma de saúde completa com landing pages de conversão + CRM interno poderoso
> **IMPORTANTE:** Usar EXATAMENTE as URLs acima. O Figma Make deve fazer download e embutir cada imagem. Não usar placeholders.