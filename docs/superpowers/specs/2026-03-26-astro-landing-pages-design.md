# Design: Site Target AI em Astro

## Contexto

Migração de landing pages React (Vite SPA) para Astro SSG, otimizando para performance e SEO. 4 landing pages independentes para captura de tráfego pago e orgânico.

## Decisões

| Decisão | Escolha |
|---------|---------|
| Cor primária | `#00a67e` |
| CTAs | Links diretos para `https://app.target-ia.com/login` |
| Formulários na LP | Nenhum — tracking via GTM |
| Passagem de tracking | Append UTM params na URL do login |
| Domínio | `https://target-ia.com` |

## Stack

- **Astro 5** (SSG, HTML puro)
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **lucide-astro** (ícones SVG inline no build)
- **@astrojs/sitemap** (SEO)
- **Vanilla JS** (interatividade: menu mobile, FAQ accordion)

## Estrutura

```
src/
├── layouts/
│   └── BaseLayout.astro
├── components/
│   ├── NavbarBase.astro
│   ├── NavbarGemini.astro
│   ├── FooterBase.astro
│   ├── FooterGemini.astro
│   ├── SecuritySection.astro
│   └── FAQ.astro
├── scripts/
│   └── tracking.ts
├── styles/
│   └── global.css
└── pages/
    ├── index.astro
    ├── eficiencia.astro
    ├── roi.astro
    └── exclusividade.astro
```

## Páginas

| Rota | Origem | Ângulo de copy |
|------|--------|----------------|
| `/` | `App.tsx` original | Monitoramento 24/7, automação WhatsApp |
| `/eficiencia` | VersionEficiencia (gemini) | Tempo, produtividade, automação |
| `/roi` | VersionROI (gemini) | Custo por lead, ROI, comparativo ads |
| `/exclusividade` | VersionExclusividade (gemini) | Velocidade de resposta, vantagem competitiva |

## Fluxo de Tracking

1. Visitante chega → tracking script captura UTMs, click IDs, cookies Meta, referrer, user agent, session ID
2. Dados persistem em `sessionStorage` (chave `__wl_tracking`)
3. Clique no CTA → script lê sessionStorage, monta URL com params, redireciona para login
4. GTM (`GTM-TKXT9V2H`) carrega em todas as páginas

### Parâmetros capturados (27 campos conforme PDF)

- UTMs: source, medium, campaign, content, term
- Google Ads: gclid, gbraid, wbraid, gad_campaignid, gad_source
- Meta: fbclid, fbc, fbp
- Outras plataformas: ttclid, msclkid, li_fat_id, twclid, sck
- Sessão: landing_page, referrer, user_agent, first_visit, session_id, session_attributes_encoded, originPage, ref

## Design System

- `--color-target-green: #00a67e`
- `--color-target-bg: #0f172a`
- `--color-target-card: #1e293b`
- Fontes: Inter (sans), Space Grotesk (display)
- Classes: `.glass`, `.btn-primary`, `.btn-ghost`

## SEO

- `<title>` e `<meta description>` únicos por página
- Canonical URLs (`https://target-ia.com/...`)
- Open Graph tags
- `lang="pt-BR"`
- Sitemap XML automático via `@astrojs/sitemap`

## GTM

Container `GTM-TKXT9V2H` em todas as páginas:
- Script no `<head>`
- Noscript iframe logo após `<body>`
