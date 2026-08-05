# Arthur Albefaro — Portfólio

Construído com **Next.js 15 (App Router)**, **React 19**, **TypeScript estrito**,
**Tailwind CSS 4** e componentes no estilo **shadcn/ui**, com dark mode

---

## Visão geral

- **Conteúdo tipado**: todo o texto (perfil, casos técnicos, certificações,
  experiência, formação) vive em `src/data/`, separado dos componentes.
- **Dark mode** com suporte a light mode, alternância persistida em
  `localStorage` (via `next-themes`) e detecção de tema do sistema.
- **Responsivo e mobile-first**, com navegação por âncoras e **scroll spy**.
- **Animações discretas** com Framer Motion, respeitando `prefers-reduced-motion`.
- **Acessibilidade**: HTML semântico, skip link, foco visível, `aria-*`.
- **SEO**: metadata, Open Graph, Twitter Cards, `sitemap.xml`, `robots.txt`,
  **JSON-LD** (schema.org `Person`) e imagem OG gerada dinamicamente.
- **TypeScript estrito** (`noUncheckedIndexedAccess`), ESLint + Prettier.

---

## Stack

| Camada      | Tecnologias                                              |
| ----------- | --------------------------------------------------------- |
| Framework   | Next.js 15 (App Router) · React 19                       |
| Linguagem   | TypeScript (strict, `noUncheckedIndexedAccess`)          |
| Estilização | Tailwind CSS 4 · tokens em OKLCH · shadcn/ui (new-york)  |
| UI / Ícones | Lucide React · class-variance-authority · tailwind-merge |
| Animação    | Framer Motion                                            |
| Tema        | next-themes                                              |
| Qualidade   | ESLint 9 (flat config) · Prettier + plugin Tailwind      |
| Deploy      | Vercel                                                   |

---

## Arquitetura

- **Server Components por padrão.** Apenas componentes que precisam de estado,
  efeitos ou APIs do browser (tema, scroll spy, menu mobile, animações) são
  `"use client"`.
- **Conteúdo separado de apresentação**: arquivos em `src/data/` são a fonte
  única da verdade e tipados via `src/types/index.ts`. Os componentes em
  `src/components/sections/` apenas renderizam esses dados.
- **SEO centralizado** em `src/lib/site.ts` (`siteConfig`) e
  `src/lib/structured-data.ts` (JSON-LD), consumidos por `layout.tsx`,
  `sitemap.ts`, `robots.ts` e `opengraph-image.tsx`.

---

## Seções do portfólio

`Hero` → `Sobre` → `Stack` → `Casos técnicos` → `Certificações` →
`Experiência` → `Formação` → `Contato` → `Footer`.

---

## Como rodar localmente

### Pré-requisitos

- **Node.js 18.18+** (recomendado 20 LTS)
- **npm** (ou pnpm / yarn / bun)

### Instalação

```bash
git clone https://github.com/arthuralbefaro/portfolio.git
cd portfolio
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse **http://localhost:3000**.

### Build de produção

```bash
npm run build   # gera o build otimizado
npm run start   # serve o build localmente
```

---

## Scripts disponíveis

| Script                 | Descrição                           |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Servidor de desenvolvimento          |
| `npm run build`        | Build de produção                    |
| `npm run start`        | Serve o build de produção            |
| `npm run lint`         | Verifica problemas com ESLint        |
| `npm run typecheck`    | Checagem de tipos (`tsc --noEmit`)   |
| `npm run format`       | Formata o código com Prettier        |
| `npm run format:check` | Verifica a formatação                |

---

## Qualidade técnica

- `npm run lint` e `npm run typecheck` sem erros.
- `npm run build` gera build estático/otimizado sem warnings de tipo.
- Sem dependências, imports ou assets não utilizados.

---

## Estrutura de pastas

```
src/
├── app/                      # App Router: rotas, layout e SEO
│   ├── layout.tsx            # Shell, metadata, fontes, ThemeProvider, JSON-LD
│   ├── page.tsx              # Composição das seções da home
│   ├── globals.css           # Tailwind 4 + tokens de tema (dark/light)
│   ├── opengraph-image.tsx   # Imagem Open Graph gerada dinamicamente
│   ├── icon.tsx               # Favicon gerado dinamicamente
│   ├── sitemap.ts             # sitemap.xml
│   └── robots.ts              # robots.txt
├── components/
│   ├── layout/                # Header (scroll spy), Footer, tema, scroll progress
│   ├── sections/               # Hero, About, TechStack, CaseStudies, Experience...
│   ├── motion/                 # Wrappers de animação (Reveal)
│   ├── ui/                     # Primitivos shadcn/ui (button, card, badge)
│   └── section.tsx             # Section + SectionHeading reutilizáveis
├── data/                       # Conteúdo tipado (fonte única da verdade)
│   ├── profile.ts              # Perfil, headline, sobre, highlights
│   ├── navigation.ts           # Itens de navegação / âncoras
│   ├── skills.ts                # Stack por categoria
│   ├── case-studies.ts          # Casos técnicos (Contexto → Resultado)
│   ├── experience.ts            # Timeline profissional
│   ├── education.ts              # Formação + idiomas
│   ├── certifications.ts         # Certificações
│   ├── socials.ts                # Links sociais
│   └── technical-posts.ts        # Publicações técnicas (vazio até existirem)
├── hooks/                      # use-scroll-spy, use-mounted
├── lib/                         # utils (cn), site config, structured-data (JSON-LD)
├── types/                       # Tipagens compartilhadas
└── assets/                       # Imagens otimizadas (foto de perfil)
```

Todo o conteúdo (textos, links, certificações, casos técnicos) é editado em
`src/data/`, sem tocar nos componentes. Configurações globais de SEO/URL ficam
em `src/lib/site.ts` — atualize a propriedade `url` com o domínio final antes do
deploy (usada em metadata, sitemap, robots e JSON-LD).

O currículo em PDF é servido de `public/CV_Arthur_Albefaro_PT.pdf` e `public/CV_Arthur_Albefaro_EN.pdf`, um por idioma.

---

## Deploy na Vercel

1. Faça push do repositório para o GitHub.
2. Importe o projeto em [vercel.com/new](https://vercel.com/new).
3. A Vercel detecta o Next.js automaticamente — nenhuma configuração extra é
   necessária.
4. Após o deploy, atualize `url` em `src/lib/site.ts` com o domínio final e faça
   um novo deploy para que os metadados absolutos (OG, sitemap) fiquem corretos.

Ou via CLI:

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # produção
```

---

## Licença

[MIT](LICENSE) © Arthur Albefaro
