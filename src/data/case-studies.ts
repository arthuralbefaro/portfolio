import { GITHUB_USERNAME } from "@/data/socials";
import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "crm-notion",
    title: "Integração CRM → Notion",
    tagline:
      "Rotina de integração que sincroniza dados do GoHighLevel (CRM) com o Notion, normalizando informações não padronizadas e evitando duplicidade",
    status: "Projeto interno",
    period: "Overload · 2026",
    featured: true,
    context:
      "Na Overload, o GoHighLevel concentra leads e contatos, enquanto os times de operação trabalham no Notion. Os dados nasciam no CRM e eram levados ao Notion manualmente — processo lento, sujeito a erro e sempre defasado.",
    problem:
      "Não havia integração entre as duas plataformas e os dados do CRM chegam de forma não padronizada (campos customizados, formatos inconsistentes e ausentes), o que impede o consumo direto e exige uma etapa de normalização.",
    solution:
      "Desenvolvi uma rotina de integração que consome a API do GoHighLevel, normaliza os registros e os escreve no Notion via API — evitando duplicar dados já sincronizados e tratando falhas registro a registro para não interromper a integração.",
    architecture: [
      "Extração: leitura dos registros através da API do GoHighLevel.",
      "Normalização: padronização dos campos não estruturados do CRM (datas, telefones e campos customizados ausentes ou inconsistentes) para um formato consistente.",
      "Sincronização: escrita no Notion via API com controle de duplicidade — verifica se o registro já existe antes de criar ou atualizar.",
      "Resiliência: respeito aos limites de requisição das APIs, com retentativas, e isolamento de erros por registro.",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Notion API",
      "GoHighLevel API",
    ],
    challenges: [
      {
        title: "Controle de duplicidade",
        detail:
          "Como a rotina roda repetidamente, não podia recriar no Notion registros já sincronizados — a escrita verifica a existência antes de criar ou atualizar.",
      },
      {
        title: "Limites de requisição das APIs",
        detail:
          "GoHighLevel e Notion impõem limites de chamadas. A integração controla o ritmo das requisições e refaz tentativas quando necessário.",
      },
      {
        title: "Dados não padronizados",
        detail:
          "Campos customizados ausentes ou com formatos inconsistentes dificultavam o consumo. Adicionei uma etapa de normalização tolerante a esses casos.",
      },
      {
        title: "Falhas parciais",
        detail:
          "Um registro inválido não podia derrubar o lote inteiro. O processamento isola o erro por registro e segue com os demais.",
      },
    ],
    result: [
      "Eliminou a cópia manual de dados entre CRM e Notion.",
      "Base mais consistente no Notion para alimentar automações e dashboards internos.",
      "Lógica de normalização e sincronização reaproveitável para novas integrações.",
    ],
    demonstrates:
      "Integração entre sistemas externos via API, consistência de dados, lógica de backend e automação aplicada a uma operação real",
  },
  {
    slug: "banking-api",
    title: "Banking API",
    tagline:
      "API REST de contas bancárias em Node.js/TypeScript, com autenticação JWT, arquitetura em camadas e operações financeiras transacionais sobre PostgreSQL",
    status: "Projeto pessoal",
    featured: true,
    context:
      "Projeto público para praticar design de API, modelagem de domínio bancário e organização de um backend em camadas, com usuários, contas e transações.",
    problem:
      "Implementar operações financeiras corretas (depósito, saque, transferência e extrato) com autenticação e persistência, garantindo que operações que tocam mais de uma conta não fiquem pela metade.",
    solution:
      "API REST em Express + TypeScript organizada em camadas (controller → service → repository), com autenticação JWT, senhas com hash (bcrypt), validação de entrada com Zod e PostgreSQL via Prisma. Depósito, saque e transferência são executados dentro de transações de banco.",
    architecture: [
      "Camada HTTP: rotas e controllers (auth, user, account, transaction) com validação de entrada via Zod.",
      "Camada de serviço: regras de negócio (saldo, transferência entre contas, extrato).",
      "Camada de repositório: acesso ao PostgreSQL via Prisma, isolando o domínio da persistência.",
      "Autenticação JWT com middleware de proteção de rotas; senhas com hash bcrypt.",
      "Transferência/depósito/saque dentro de transações Prisma ($transaction) e valores monetários em Decimal.",
      "Tratamento de erros centralizado, headers de segurança (helmet) e CORS; Docker e coleção Postman para execução.",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Zod",
      "Docker",
    ],
    challenges: [
      {
        title: "Consistência em transferências",
        detail:
          "A transferência altera duas contas — débito e crédito não podem ficar pela metade. Resolvido com transações do Prisma (`$transaction`), tudo-ou-nada.",
      },
      {
        title: "Valores monetários",
        detail:
          "Para evitar erros de ponto flutuante com dinheiro, os saldos usam Decimal em vez de número de ponto flutuante.",
      },
      {
        title: "Validação e erros",
        detail:
          "Entradas são validadas com Zod e casos como saldo insuficiente ou conta inexistente retornam respostas previsíveis, tratadas de forma centralizada.",
      },
    ],
    result: [
      "API funcional com cadastro/login, contas, depósito, saque, transferência e extrato.",
      "Código público no GitHub, com Docker, variáveis de ambiente de exemplo e coleção Postman.",
    ],
    demonstrates:
      "Organização de uma API REST em camadas, autenticação JWT, integridade de dados com transações de banco e estruturação de um projeto backend executável",
    links: {
      github: `https://github.com/${GITHUB_USERNAME}/banking-api-ts`,
    },
  },
  {
    slug: "dashboard",
    title: "Dashboard",
    tagline:
      "Projeto full stack com interface em React e backend em C#, usado como exemplo secundário de integração entre frontend e backend",
    status: "Projeto acadêmico",
    context:
      "Projeto acadêmico/prático para exercitar a integração entre uma interface em React e um backend em C#, com autenticação.",
    problem:
      "Disponibilizar um painel com login e exibição de dados, separando frontend e backend e definindo a comunicação entre eles.",
    solution:
      "Interface em React (TypeScript) consumindo uma API em C#, com autenticação protegendo o acesso ao painel.",
    architecture: [
      "Frontend em React (TypeScript) para a interface e o consumo da API.",
      "Backend em C# expondo a API consumida pelo painel.",
      "Fluxo de login protegendo o acesso às telas.",
    ],
    technologies: ["React", "TypeScript", "C#", "REST APIs"],
    challenges: [
      {
        title: "Autenticação e acesso ao painel",
        detail:
          "Garantir que apenas usuários autenticados acessem o painel, no frontend e na API.",
      },
      {
        title: "Integração frontend ↔ backend",
        detail:
          "Definir os contratos de API e tratar estados de carregamento e erro no React.",
      },
    ],
    result: [
      "Painel funcional com login e visualização de dados.",
      "Projeto secundário que mostra a integração entre frontend e backend.",
    ],
    demonstrates:
      "Integração entre frontend (React) e backend (C#), consumo de APIs e organização do fluxo entre as camadas",
    links: {
      github: `https://github.com/${GITHUB_USERNAME}/dashboard-cs`,
    },
  },
];
