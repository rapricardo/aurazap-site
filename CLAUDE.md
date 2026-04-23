# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Sobre o Projeto

Site estático do **Aurazap** — ferramenta de automação para captura de leads em grupos de WhatsApp via IA. 4 landing pages otimizadas para SEO e performance, voltadas a empresários que querem monitorar grupos e abordar leads automaticamente.

Conteúdo 100% em Português Brasileiro (pt-BR). Domínio: `https://aurazap.ia.br`.

## Comandos

```bash
npm run dev       # Dev server Astro (localhost:4321)
npm run build     # Build estático → dist/
npm run preview   # Preview do build
npm run lint      # astro check + tsc --noEmit
```

## Stack

- **Astro 5** (SSG — HTML puro, sem JS framework no client)
- **Tailwind CSS v4** (`@tailwindcss/vite`, configuração via `@theme` em `src/styles/global.css`)
- **@lucide/astro** para ícones (SVG inline no build)
- **@astrojs/sitemap** para SEO
- Interatividade (menu mobile, FAQ accordion) via vanilla JS em `<script>` tags

## Arquitetura

```
src/
├── layouts/BaseLayout.astro       # HTML shell, GTM, tracking, meta SEO
├── components/
│   ├── NavbarBase.astro           # Navbar da página principal (glassmorphism)
│   ├── NavbarGemini.astro         # Navbar das 3 variantes (escura, com nav links)
│   ├── FooterBase.astro           # Footer simples (página principal)
│   ├── FooterGemini.astro         # Footer completo com colunas (variantes)
│   ├── SecuritySection.astro      # Seção segurança (variantes gemini)
│   └── FAQ.astro                  # Accordion FAQ (página principal)
├── styles/global.css              # Tailwind @theme + utility classes
└── pages/
    ├── index.astro                # LP principal — monitoramento 24/7
    ├── eficiencia.astro           # Variante A — automação e tempo
    ├── roi.astro                  # Variante B — custo por lead e ROI
    └── exclusividade.astro        # Variante C — velocidade e exclusividade
```

## Landing Pages

| Rota | Ângulo de copy |
|------|----------------|
| `/` | Monitoramento 24/7, automação WhatsApp |
| `/eficiencia` | Tempo, produtividade, automação inteligente |
| `/roi` | Custo por lead zero, comparativo com ads |
| `/exclusividade` | Velocidade de resposta, vantagem competitiva |

Todos os CTAs direcionam para `https://app.aurazap.ia.br/login` com classe `cta-link` (o tracking script anexa UTM params automaticamente).

## Tracking e GTM

- **GTM Container:** `GTM-NR6SSW7L` (script + noscript em todas as páginas via BaseLayout)
- **Tracking script:** `public/scripts/tracking.js` — captura UTMs, click IDs (Google/Meta/TikTok/etc), cookies Meta, session ID, referrer, user agent
- Dados persistem em `sessionStorage` (chave `__wl_tracking`) e são expostos via `window.__wlTracking`
- Links com classe `cta-link` são enriquecidos automaticamente com params de tracking
- Padrão de campos ocultos documentado em `DOCUMENTACAO_Campos_Ocultos_GTM.pdf`

## Design System

Tokens em `src/styles/global.css` via `@theme`:
- `aurazap-green` (#00a67e) — cor primária
- `aurazap-green-hover` (#008f6d) — hover
- `aurazap-bg` (#0f172a) — fundo escuro
- `aurazap-card` (#1e293b) — fundo de cards

Classes utilitárias: `.glass`, `.btn-primary`, `.btn-ghost`, `.cta-link`

Fontes: **Inter** (body) e **Space Grotesk** (headings/display)

## Referência

`ref/` contém material de referência (não faz parte do build):
- `target-ai---captura-inteligente-de-leads/` — export original do Google AI Studio
- `gemini-versios.jsx` — versões alternativas geradas pelo Gemini
