# Portfólio · Arthur Albefaro

Portfólio pessoal bilíngue, construído como documento técnico: grelha rígida,
tipografia expressiva, paleta escura única.

**Produção:** [arthuralbefaro.com](https://arthuralbefaro.com)

## Stack

| Camada | O que é usado |
| --- | --- |
| Framework | Next.js 15, App Router |
| UI | React 19, TypeScript strict |
| Estilo | Tailwind CSS 4, configurado em CSS via `@theme inline` |
| Componentes | `class-variance-authority`, `@radix-ui/react-slot`, `tailwind-merge` |
| Ícones | `lucide-react` |
| Testes | Vitest |
| Deploy | Vercel |

Não há biblioteca de animação, não há gerenciador de tema e não há modo claro. A
paleta é uma só, escura, e o movimento se resume a um `IntersectionObserver` que
revela blocos ao entrar na viewport, desativado sob `prefers-reduced-motion`.

## Comandos

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint 9, flat config |
| `npm run format` | Prettier, escrita |
| `npm run format:check` | Prettier, verificação. É o que costuma quebrar o CI |
| `npm run check:design` | Guard das escalas de tipo e espaçamento |
| `npm test` | Vitest |
| `npm run build` | Build de produção |

O CI roda typecheck, lint, format:check, check:design, test e build a cada push.

## Rotas

```
/                       redireciona para /{locale} (middleware, 308)
/{locale}               home
/{locale}/cases/{slug}  página de um estudo de caso
```

`locale` é `pt` ou `en`. As duas são pré-renderizadas por `generateStaticParams`,
e as páginas de case são geradas para o produto de locales por slugs. O
`middleware.ts` escolhe o idioma pelo cookie `NEXT_LOCALE` e, na falta dele, pelo
`accept-language`.

## Conteúdo

Todo o texto do site é dado tipado. Componentes só renderizam.

| Idioma | Caminho |
| --- | --- |
| pt | `src/data/*.ts` |
| en | `src/content/en/*.ts` |

Os dois lados são unidos em `src/content/dictionary.ts` e tipados por
`src/types/index.ts`. As strings de interface ficam à parte, em
`src/content/ui/{pt,en}.ts`.

`src/content/parity.test.ts` falha quando os idiomas divergem. Ele pareia por
chave, não por posição: case studies por `slug`, certificações por `title`,
experiências por `company`, grupos de skill por `category`. Campos localizados
como `resumeUrl` e `availability` são verificados pela regra inversa, já que
devem mesmo diferir entre idiomas.

Editar um idioma sem o outro quebra o build. É de propósito.

## Sistema visual

Paleta escura única, definida como custom properties em `src/app/globals.css` e
exposta ao Tailwind via `@theme inline`. Sem cor de acento, sem gradiente, sem
sombra, sem glassmorphism. Hairlines no lugar de cards com borda completa, e
`--radius` de 2px.

### Escala de tipo

Seis passos, e nada fora deles:

| Token | Uso |
| --- | --- |
| `--text-display` | nome no hero |
| `--text-title` | título de seção |
| `--text-subtitle` | título de card, case, cargo |
| `--text-lead` | parágrafo de abertura |
| `--text-body` | corpo |
| `--text-meta` | rótulo mono, caixa alta, tracking de 0.08em |

### Escala de espaçamento

Dez passos, com os nomes padrão do Tailwind, então `mt-6` continua sendo 24px:

| Passo | px | Uso |
| --- | --- | --- |
| `1` `2` `4` | 4, 8, 16 | dentro de um componente |
| `6` `8` `12` | 24, 32, 48 | entre componentes de uma seção |
| `16` | 64 | respiro maior dentro de uma seção longa |
| `24` | 96 | entre seções |
| `32` `48` | 128, 192 | ritmo vertical de seção e de página |

`npm run check:design` reprova qualquer classe de tipo ou de ritmo fora das duas
escalas, e roda no CI. Dimensões de componente (`size-*`, `w-*`, `h-*`) ficam
livres, porque tamanho de ícone e de controle é decisão óptica, não de ritmo.

### Grelha

`src/components/section.tsx` estabelece 12 colunas com gutter fixo. As colunas 1
a 3 formam o rail de metadados; o conteúdo ocupa da 4 à 12. Prosa para na coluna
10 para manter medida de leitura, listas e grelhas vão até a 12, e blocos
consecutivos alternam o início entre a coluna 4 e a 5. Todo deslocamento cai numa
linha da grelha.

## Estrutura

```
src/
├── app/
│   ├── [locale]/
│   │   ├── cases/[slug]/page.tsx   página de estudo de caso
│   │   ├── layout.tsx              shell, fontes, JSON-LD, metadata
│   │   ├── opengraph-image.tsx     imagem social gerada
│   │   └── page.tsx                home
│   ├── globals.css                 tokens e escalas
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/                     header, footer, seletor de idioma
│   ├── sections/                   uma por seção da home
│   ├── ui/                         primitivos: badge, button, tag-list, ...
│   └── section.tsx                 grelha, rail e blocos
├── content/                        espelho en + dicionário + teste de paridade
├── data/                           conteúdo pt
├── hooks/
├── i18n/
├── lib/
└── types/
```

## Acessibilidade

Contraste AA em todo texto renderizado. O token `--dim` existe, mas é reservado a
hairline e marcador decorativo: ele dá 2,74:1 sobre o fundo e nunca é usado em
texto. O texto mais recessivo do site usa `--muted-foreground`, que dá 5,96:1
sobre o fundo e 5,66:1 sobre a superfície.

Navegação por teclado completa, foco visível em todo elemento interativo, e
`prefers-reduced-motion` desativa o reveal.

## Formulário de contato

`src/components/sections/contact-form.tsx` envia para
`NEXT_PUBLIC_CONTACT_API_URL`. Sem a variável, o formulário degrada para links de
WhatsApp e e-mail em vez de quebrar. A validação é pura e testada em
`src/lib/validate-contact.ts`.

## Licença

MIT.
